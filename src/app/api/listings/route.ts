import { NextRequest, NextResponse } from "next/server";
import { fetchListings, fetchOfficeNames } from "@/lib/ddf";

export const revalidate = 300; // ISR: revalidate every 5 minutes

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const top = Math.min(Number(searchParams.get("top") || "24"), 100);
  const skip = Number(searchParams.get("skip") || "0");
  const sort = searchParams.get("sort") || "newest";
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");
  const propertyType = searchParams.get("propertyType");
  const city = searchParams.get("city");
  const rm = searchParams.get("rm");
  const minAcres = searchParams.get("minAcres");
  const agentKey = searchParams.get("agentKey");
  const search = searchParams.get("search");
  const neighbourhood = searchParams.get("neighbourhood");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const radius = searchParams.get("radius"); // in km

  // Build orderby from sort param
  let orderby = "OriginalEntryTimestamp desc";
  switch (sort) {
    case "price_asc":
      orderby = "ListPrice asc";
      break;
    case "price_desc":
      orderby = "ListPrice desc";
      break;
    case "newest":
    default:
      orderby = "OriginalEntryTimestamp desc";
  }

  // Build additional filters
  const filters: string[] = [];
  if (priceMin) filters.push(`ListPrice ge ${priceMin}`);
  if (priceMax) filters.push(`ListPrice le ${priceMax}`);
  if (propertyType) {
    // Support comma-separated types for multi-type filtering
    const types = propertyType.split(",").map((t) => t.trim());
    if (types.length === 1) {
      filters.push(`PropertySubType eq '${types[0]}'`);
    } else {
      const typeFilters = types.map((t) => `PropertySubType eq '${t}'`).join(" or ");
      filters.push(`(${typeFilters})`);
    }
  }
  if (city) filters.push(`contains(City,'${city}')`);
  if (rm) {
    // Match the RM name in the City field using the DDF format "Name Rm No. ###"
    // This avoids matching street names or towns with the same name
    filters.push(`contains(City,'${rm} Rm No')`);
    // Only show agriculture/farm listings for RM pages
    if (!propertyType) {
      filters.push(`PropertySubType eq 'Agriculture'`);
    }
  }
  if (minAcres) {
    // DDF has mixed units — filter for listings where LotSizeUnits is 'acres'
    filters.push(`LotSizeUnits eq 'acres' and LotSizeArea ge ${minAcres}`);
  }
  if (agentKey) filters.push(`ListAgentKey eq '${agentKey}'`);
  if (search) {
    filters.push(`(contains(UnparsedAddress,'${search}') or contains(City,'${search}'))`);
  }
  if (neighbourhood) {
    filters.push(`CityRegion eq '${neighbourhood}'`);
  }
  if (lat && lng && radius) {
    // Bounding box approximation: 1 degree lat ≈ 111km, 1 degree lng ≈ 111km * cos(lat)
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);
    const radiusKm = parseFloat(radius);
    const latDelta = radiusKm / 111;
    const lngDelta = radiusKm / (111 * Math.cos((latNum * Math.PI) / 180));
    filters.push(`Latitude ge ${(latNum - latDelta).toFixed(4)} and Latitude le ${(latNum + latDelta).toFixed(4)}`);
    filters.push(`Longitude ge ${(lngNum - lngDelta).toFixed(4)} and Longitude le ${(lngNum + lngDelta).toFixed(4)}`);
  }

  try {
    const data = await fetchListings({
      top,
      skip,
      orderby,
      filter: filters.length > 0 ? filters.join(" and ") : undefined,
    });

    // Resolve office names for the courtesy line
    const officeKeys = [
      ...new Set(
        data.value
          .map((l) => l.ListOfficeKey)
          .filter((k): k is string => !!k)
      ),
    ];
    if (officeKeys.length > 0) {
      const officeNames = await fetchOfficeNames(officeKeys);
      for (const listing of data.value) {
        if (listing.ListOfficeKey && officeNames.has(listing.ListOfficeKey)) {
          listing.ListOfficeName = officeNames.get(listing.ListOfficeKey);
        }
      }
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("DDF API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch listings. Please try again later." },
      { status: 502 }
    );
  }
}

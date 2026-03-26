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

  // Build orderby from sort param
  let orderby = "ModificationTimestamp desc";
  switch (sort) {
    case "price_asc":
      orderby = "ListPrice asc";
      break;
    case "price_desc":
      orderby = "ListPrice desc";
      break;
    case "newest":
    default:
      orderby = "ModificationTimestamp desc";
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
  if (rm) filters.push(`contains(UnparsedAddress,'${rm}')`);
  if (minAcres) filters.push(`LotSizeArea ge ${minAcres}`);
  if (agentKey) filters.push(`ListAgentKey eq '${agentKey}'`);
  if (search) {
    filters.push(`(contains(UnparsedAddress,'${search}') or contains(City,'${search}'))`);
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

import { NextRequest, NextResponse } from "next/server";
import { fetchListings } from "@/lib/ddf";

export const revalidate = 300;

/**
 * Lightweight endpoint that returns ALL acreage listings with only the
 * fields needed for map pins (lat, lng, price, address, photo, lot size).
 * Paginates through DDF's 100-per-page limit automatically.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const propertyType = searchParams.get("propertyType") || "Single Family";
  const minAcres = searchParams.get("minAcres") || "2";

  const filters: string[] = [];
  filters.push(`PropertySubType eq '${propertyType}'`);
  filters.push(`LotSizeUnits eq 'acres' and LotSizeArea ge ${minAcres}`);
  // Only fetch listings that have coordinates
  filters.push("Latitude ne null and Longitude ne null");

  try {
    const allPins: Array<{
      id: string;
      lat: number;
      lng: number;
      price: number;
      address: string;
      acres: number;
      photo: string | null;
    }> = [];

    let skip = 0;
    const batchSize = 100;
    let totalCount = 0;

    // Paginate through all results
    do {
      const data = await fetchListings({
        top: batchSize,
        skip,
        orderby: "ModificationTimestamp desc",
        filter: filters.join(" and "),
      });

      totalCount = data["@odata.count"] || 0;

      for (const l of data.value) {
        if (!l.Latitude || !l.Longitude) continue;
        // Get first photo thumbnail
        const photo =
          l.Media && l.Media.length > 0
            ? l.Media.sort((a, b) => a.Order - b.Order)[0].MediaURL
            : null;

        allPins.push({
          id: l.ListingId || l.ListingKey,
          lat: l.Latitude,
          lng: l.Longitude,
          price: l.ListPrice,
          address:
            l.UnparsedAddress ||
            [l.City, l.StateOrProvince].filter(Boolean).join(", ") ||
            "Acreage",
          acres: l.LotSizeArea || 0,
          photo,
        });
      }

      skip += batchSize;
    } while (skip < totalCount);

    return NextResponse.json(
      { pins: allPins, total: totalCount },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    console.error("Map API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch map data" },
      { status: 502 }
    );
  }
}

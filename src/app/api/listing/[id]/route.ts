import { NextRequest, NextResponse } from "next/server";
import { fetchListingById, fetchOfficeNames } from "@/lib/ddf";

export const revalidate = 300;

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Missing listing ID" }, { status: 400 });
  }

  try {
    const listing = await fetchListingById(id);

    if (!listing) {
      return NextResponse.json(
        { error: "Listing not found" },
        { status: 404 }
      );
    }

    // Resolve office name
    if (listing.ListOfficeKey) {
      const officeNames = await fetchOfficeNames([listing.ListOfficeKey]);
      if (officeNames.has(listing.ListOfficeKey)) {
        listing.ListOfficeName = officeNames.get(listing.ListOfficeKey);
      }
    }

    return NextResponse.json(listing, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("DDF API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch listing" },
      { status: 502 }
    );
  }
}

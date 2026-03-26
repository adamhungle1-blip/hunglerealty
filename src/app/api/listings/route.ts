import { NextRequest, NextResponse } from "next/server";
import { fetchListings } from "@/lib/ddf";

export const revalidate = 300; // ISR: revalidate every 5 minutes

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const top = Math.min(Number(searchParams.get("top") || "24"), 100);
  const skip = Number(searchParams.get("skip") || "0");
  const sort = searchParams.get("sort") || "newest";
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");
  const propertyType = searchParams.get("propertyType");

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
  if (propertyType) filters.push(`PropertyType eq '${propertyType}'`);

  try {
    const data = await fetchListings({
      top,
      skip,
      orderby,
      filter: filters.length > 0 ? filters.join(" and ") : undefined,
    });

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

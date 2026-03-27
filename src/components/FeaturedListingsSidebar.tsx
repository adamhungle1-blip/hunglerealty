"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { DdfListing } from "@/lib/ddf";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

function getMainPhoto(listing: DdfListing): string | null {
  if (!listing.Media || listing.Media.length === 0) return null;
  const preferred = listing.Media.find((m) => m.PreferredPhotoYN);
  if (preferred) return preferred.MediaURL;
  const first = listing.Media.sort((a, b) => a.Order - b.Order)[0];
  return first?.MediaURL || null;
}

function formatLotSize(listing: DdfListing): string {
  if (!listing.LotSizeArea) return "";
  const acres =
    listing.LotSizeUnits === "acres"
      ? listing.LotSizeArea
      : listing.LotSizeUnits === "sqft"
        ? listing.LotSizeArea / 43560
        : listing.LotSizeArea;
  return `${Math.round(acres).toLocaleString()} Acres`;
}

export default function FeaturedListingsSidebar() {
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "/api/listings?top=4&sort=price_desc&propertyType=Agriculture"
        );
        if (!res.ok) return;
        const data = await res.json();
        setListings(data.value || []);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-green-800">Featured Listings</h3>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-[4/3] bg-gray-200" />
            <div className="space-y-2 p-4">
              <div className="h-4 w-24 rounded bg-gray-200" />
              <div className="h-3 w-full rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (listings.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-green-800">Featured Listings</h3>
      {listings.map((listing) => {
        const photo = getMainPhoto(listing);
        const acres = formatLotSize(listing);
        const city = listing.City || "";
        const address = listing.UnparsedAddress || "";
        const titleParts: string[] = [];
        if (acres) titleParts.push(acres);
        if (address) titleParts.push(address);
        else if (city) titleParts.push(city);
        const title = titleParts.join(" - ") || "Saskatchewan Farmland";

        return (
          <div
            key={listing.ListingKey}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Title + Price header */}
            <div className="bg-green-800 px-4 py-3 text-center">
              <h4 className="text-sm font-bold leading-snug text-white">
                {title}
              </h4>
              <p className="mt-1 text-lg font-bold text-amber-400">
                {formatPrice(listing.ListPrice)}
              </p>
            </div>

            {/* Photo */}
            {photo && (
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={photo}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="320px"
                  unoptimized
                />
              </div>
            )}

            {/* Description snippet + CTA */}
            <div className="p-4">
              {listing.PublicRemarks && (
                <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-gray-600">
                  {listing.PublicRemarks}
                </p>
              )}
              <div className="text-center">
                <Link
                  href={`/listing/${listing.ListingKey}`}
                  className="inline-block rounded bg-green-700 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-green-800"
                >
                  Listing Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <Link
        href="/search?propertyType=Agriculture"
        className="block text-center text-sm font-medium text-green-700 hover:text-green-900 hover:underline"
      >
        View All Farm Listings &rarr;
      </Link>
    </div>
  );
}

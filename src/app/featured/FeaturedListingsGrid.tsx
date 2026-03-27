"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { DdfListing } from "@/lib/ddf";

/** Adam Hungle's DDF agent key */
const AGENT_KEY = "1659834";

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

function getDaysAgo(timestamp?: string): number | null {
  if (!timestamp) return null;
  const diff = Date.now() - new Date(timestamp).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getAddress(listing: DdfListing): string {
  if (listing.UnparsedAddress) return listing.UnparsedAddress;
  const parts = [listing.StreetNumber, listing.StreetName, listing.StreetSuffix]
    .filter(Boolean)
    .join(" ");
  return parts || "Address unavailable";
}

function formatLotSize(listing: DdfListing): string | null {
  if (!listing.LotSizeArea) return null;
  const units = listing.LotSizeUnits?.toLowerCase() || "";
  if (units.includes("acre")) {
    return `${listing.LotSizeArea.toLocaleString()} acres`;
  }
  if (
    units.includes("square") ||
    units.includes("sqft") ||
    units.includes("sq ft") ||
    !units
  ) {
    if (listing.LotSizeArea >= 43560) {
      const acres = (listing.LotSizeArea / 43560).toFixed(1);
      return `${acres} acres`;
    }
    return `${listing.LotSizeArea.toLocaleString()} sqft`;
  }
  return `${listing.LotSizeArea.toLocaleString()} ${listing.LotSizeUnits}`;
}

function getListingUrl(listing: DdfListing): string {
  const id = listing.ListingId || listing.ListingKey;
  return `/listing/${id}`;
}

export default function FeaturedListingsGrid() {
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `/api/listings?top=20&agentKey=${AGENT_KEY}&sort=price_desc`
        );
        if (!res.ok) throw new Error("Failed to load listings");
        const data = await res.json();
        setListings(data.value || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="space-y-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="aspect-[16/7] bg-gray-200" />
              <div className="space-y-3 p-6">
                <div className="h-6 w-32 rounded bg-gray-200" />
                <div className="h-4 w-64 rounded bg-gray-200" />
                <div className="h-3 w-48 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-10 text-center">
        <p className="text-red-700">{error}</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <p className="mb-8 text-center text-sm text-gray-500">
        {listings.length} active listing{listings.length !== 1 ? "s" : ""} by
        Adam Hungle, REALTOR®
      </p>

      <div className="space-y-8">
        {listings.map((listing) => {
          const photo = getMainPhoto(listing);
          const daysAgo = getDaysAgo(listing.OriginalEntryTimestamp);
          const address = getAddress(listing);
          const lotSize = formatLotSize(listing);
          const listingUrl = getListingUrl(listing);

          return (
            <a
              key={listing.ListingKey}
              href={listingUrl}
              className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Large photo */}
              <div className="relative aspect-[16/7] bg-gray-100">
                {photo ? (
                  <Image
                    src={photo}
                    alt={address}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 960px"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 opacity-40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}

                {/* Price overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-4 pt-12">
                  <p className="text-3xl font-bold text-white drop-shadow-lg">
                    {formatPrice(listing.ListPrice)}
                  </p>
                </div>

                {/* NEW badge */}
                {daysAgo !== null && daysAgo <= 7 && (
                  <span className="absolute left-4 top-4 rounded-lg bg-green-600 px-3 py-1.5 text-sm font-bold text-white shadow">
                    NEW
                  </span>
                )}

                {/* Property type badge */}
                {listing.PropertySubType && (
                  <span className="absolute right-4 top-4 rounded-lg bg-black/60 px-3 py-1.5 text-sm text-white">
                    {listing.PropertySubType}
                  </span>
                )}

                {/* Photo count */}
                {listing.Media && listing.Media.length > 1 && (
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg bg-black/60 px-3 py-1.5 text-sm text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                      />
                    </svg>
                    {listing.Media.length} photos
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700">
                  {address}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {[listing.City, listing.StateOrProvince]
                    .filter(Boolean)
                    .join(", ")}
                </p>

                {/* Meta row */}
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                  {lotSize && (
                    <span className="flex items-center gap-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      {lotSize}
                    </span>
                  )}
                  {listing.BedroomsTotal && listing.BedroomsTotal > 0 && (
                    <span>{listing.BedroomsTotal} bed</span>
                  )}
                  {listing.BathroomsTotalInteger &&
                    listing.BathroomsTotalInteger > 0 && (
                      <span>{listing.BathroomsTotalInteger} bath</span>
                    )}
                  {listing.LivingArea && listing.LivingArea > 0 && (
                    <span>
                      {listing.LivingArea.toLocaleString()} sqft
                    </span>
                  )}
                  {daysAgo !== null && (
                    <span className="text-gray-400">
                      {daysAgo}d on market
                    </span>
                  )}
                </div>

                {/* Description preview */}
                {listing.PublicRemarks && (
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 line-clamp-2">
                    {listing.PublicRemarks}
                  </p>
                )}

                {/* MLS & Brokerage attribution */}
                <div className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-400">
                  <p>MLS® #{listing.ListingId || listing.ListingKey}</p>
                  {listing.ListOfficeName && (
                    <p className="mt-0.5 italic">
                      Courtesy of {listing.ListOfficeName}
                    </p>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
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
  if (units.includes("acre") || listing.LotSizeArea > 10) {
    return `${listing.LotSizeArea.toLocaleString()} acres`;
  }
  return `${listing.LotSizeArea.toLocaleString()} ${listing.LotSizeUnits || "sqft"}`;
}

function getListingUrl(listing: DdfListing): string {
  if (listing.ListingURL) {
    // Ensure it starts with https://
    const url = listing.ListingURL.startsWith("http")
      ? listing.ListingURL
      : `https://${listing.ListingURL}`;
    return url;
  }
  // Fallback: search on realtor.ca
  return `https://www.realtor.ca/map#view=list&Sort=6-D&GeoIds=g30_f241e8fe&GeoName=Saskatchewan&PropertyTypeGroupID=1&PropertySearchTypeId=0&TransactionTypeId=2&PriceMin=0&PriceMax=0&BedRange=0-0&BathRange=0-0&keyword=${listing.ListingId || listing.ListingKey}`;
}

export default function DdfListingCard({ listing }: { listing: DdfListing }) {
  const photo = getMainPhoto(listing);
  const daysAgo = getDaysAgo(listing.OriginalEntryTimestamp);
  const address = getAddress(listing);
  const lotSize = formatLotSize(listing);
  const listingUrl = getListingUrl(listing);

  return (
    <a
      href={listingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Photo */}
      <div className="relative aspect-[4/3] bg-gray-100">
        {photo ? (
          <Image
            src={photo}
            alt={address}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 opacity-40"
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

        {/* NEW badge if < 7 days */}
        {daysAgo !== null && daysAgo <= 7 && (
          <span className="absolute left-3 top-3 rounded-md bg-green-600 px-2 py-1 text-xs font-bold text-white">
            NEW
          </span>
        )}

        {/* Property type badge */}
        {listing.PropertySubType && (
          <span className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
            {listing.PropertySubType}
          </span>
        )}

        {/* Days on market */}
        {daysAgo !== null && (
          <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
            {daysAgo}d on market
          </span>
        )}

        {/* Photo count */}
        {listing.Media && listing.Media.length > 1 && (
          <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
            </svg>
            {listing.Media.length}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-4">
        <p className="text-lg font-bold text-green-900">
          {formatPrice(listing.ListPrice)}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-green-700">
          {address}
        </h3>
        <p className="mt-0.5 text-xs text-gray-500">
          {[listing.City, listing.StateOrProvince].filter(Boolean).join(", ")}
        </p>

        {/* Meta row */}
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-600">
          {lotSize && (
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              {lotSize}
            </span>
          )}
          {listing.BedroomsTotal && listing.BedroomsTotal > 0 && (
            <span>{listing.BedroomsTotal} bed</span>
          )}
          {listing.BathroomsTotalInteger && listing.BathroomsTotalInteger > 0 && (
            <span>{listing.BathroomsTotalInteger} bath</span>
          )}
          {listing.LivingArea && listing.LivingArea > 0 && (
            <span>{listing.LivingArea.toLocaleString()} sqft</span>
          )}
        </div>

        {/* Brokerage attribution */}
        <p className="mt-3 border-t border-gray-100 pt-2 text-[10px] text-gray-400">
          MLS® #{listing.ListingId || listing.ListingKey}
        </p>
      </div>
    </a>
  );
}

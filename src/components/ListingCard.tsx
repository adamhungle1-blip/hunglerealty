import Link from "next/link";
import { Listing, formatPrice } from "@/data/mock-listings";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/listing/${listing.id}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Photo placeholder */}
      <div className="relative aspect-[4/3] bg-green-100">
        <div className="flex h-full items-center justify-center text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Tag badge */}
        {listing.tag && (
          <span className={`absolute left-3 top-3 rounded-md px-2 py-1 text-xs font-bold text-white ${
            listing.tag === "NEW" ? "bg-green-600" :
            listing.tag === "FEATURED" ? "bg-gold" :
            "bg-red-500"
          }`}>
            {listing.tag}
          </span>
        )}

        {/* Days on market */}
        <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
          {listing.daysOnMarket}d on market
        </span>
      </div>

      {/* Card body */}
      <div className="p-4">
        <p className="text-lg font-bold text-green-900">
          {formatPrice(listing.price)}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-green-700">
          {listing.title}
        </h3>
        <p className="mt-0.5 text-xs text-gray-500">{listing.location}</p>

        {/* Meta row */}
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-600">
          {listing.acreage && (
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              {listing.acreage} acres
            </span>
          )}
          {listing.beds && (
            <span>{listing.beds} bed</span>
          )}
          {listing.baths && (
            <span>{listing.baths} bath</span>
          )}
        </div>

        {/* Brokerage attribution */}
        <p className="mt-3 border-t border-gray-100 pt-2 text-[10px] text-gray-400">
          MLS® #{listing.mls} · {listing.brokerage}
        </p>
      </div>
    </Link>
  );
}

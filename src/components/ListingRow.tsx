import Image from "next/image";
import Link from "next/link";
import { Listing, formatPrice } from "@/data/mock-listings";

export default function ListingRow({ listing }: { listing: Listing }) {
  return (
    <article className="border-b border-gray-200 py-5">
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="relative h-[140px] w-[200px] shrink-0 overflow-hidden rounded bg-gray-100 sm:h-[160px] sm:w-[220px]">
          {listing.photos && listing.photos.length > 0 ? (
            <Image
              src={listing.photos[0]}
              alt={listing.title}
              fill
              className="object-cover"
              sizes="220px"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/listing/${listing.id}`} className="text-base font-semibold text-green-800 hover:underline sm:text-lg">
              {listing.title}
            </Link>
            <span className="shrink-0 text-lg font-bold text-gray-900 sm:text-xl">
              {formatPrice(listing.price)}
            </span>
          </div>

          <p className="mt-1 line-clamp-3 text-sm text-gray-600">
            {listing.description}
          </p>

          {/* Meta row with MLS# badge */}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            {(listing.beds || listing.baths) && (
              <div className="flex items-center gap-3 border border-gray-300 px-3 py-1 text-sm">
                {listing.beds && (
                  <div className="text-center">
                    <span className="font-bold">{listing.beds}</span>
                    <span className="ml-1 text-xs uppercase text-gray-500">Beds</span>
                  </div>
                )}
                {listing.baths && (
                  <div className="text-center">
                    <span className="font-bold">{listing.baths}</span>
                    <span className="ml-1 text-xs uppercase text-gray-500">Baths</span>
                  </div>
                )}
                {listing.mls && (
                  <div className="text-center">
                    <span className="font-bold">{listing.mls}</span>
                    <span className="ml-1 text-xs uppercase text-gray-500">MLS® #</span>
                  </div>
                )}
              </div>
            )}
            {!listing.beds && !listing.baths && listing.mls && (
              <div className="border border-gray-300 px-3 py-1 text-center text-sm">
                <span className="font-bold">{listing.mls}</span>
                <div className="text-xs uppercase text-gray-500">MLS® #</div>
              </div>
            )}
          </div>

          {/* Brokerage attribution */}
          {listing.brokerage && (
            <p className="mt-2 text-right text-xs text-gray-400">
              Listing courtesy of {listing.brokerage}.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

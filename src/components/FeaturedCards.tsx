import Image from "next/image";
import Link from "next/link";
import { mockListings, formatPrice } from "@/data/mock-listings";

// Featured listings: filter for farm-only, prefer FEATURED/NEW tags, take first 4
const featuredListings = mockListings
  .filter((l) => l.propertyType === "farm")
  .sort((a, b) => {
    const tagOrder = { FEATURED: 0, NEW: 1, "PRICE REDUCED": 2 };
    const aOrder = a.tag ? (tagOrder[a.tag] ?? 3) : 3;
    const bOrder = b.tag ? (tagOrder[b.tag] ?? 3) : 3;
    return aOrder - bOrder;
  })
  .slice(0, 4);

export default function FeaturedCards() {
  return (
    <section className="bg-white px-4 py-12">
      <h2 className="text-center text-2xl font-bold text-green-800 md:text-3xl">
        Featured Saskatchewan Farms &amp; Ranches
      </h2>
      <div className="mx-auto mt-1 h-0.5 w-14 rounded bg-green-700" />

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredListings.map((listing) => (
          <Link
            key={listing.id}
            href={`/listing/${listing.mls}`}
            className="group overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg"
          >
            {/* Green accent bar */}
            <div className="h-1 bg-green-700" />

            {/* Image area */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
              {listing.photos.length > 0 ? (
                <Image
                  src={listing.photos[0]}
                  alt={listing.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-300">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}

              {/* Tag badge */}
              {listing.tag && (
                <span
                  className={`absolute left-0 top-0 rounded-br px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white ${
                    listing.tag === "NEW"
                      ? "bg-red-600"
                      : listing.tag === "FEATURED"
                        ? "bg-green-700"
                        : "bg-amber-600"
                  }`}
                >
                  {listing.tag}
                </span>
              )}

              {/* Price overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
                <p className="text-xl font-bold text-white">{formatPrice(listing.price)}</p>
              </div>
            </div>

            {/* Card body */}
            <div className="bg-white px-4 pb-5 pt-3">
              <h3 className="text-sm font-semibold leading-snug text-gray-900 line-clamp-2">
                {listing.title}
              </h3>
              <div className="mt-1.5 flex items-center justify-between">
                <p className="text-xs text-gray-500">RM of {listing.rm}</p>
                {listing.acreage && (
                  <span className="text-xs font-semibold text-green-700">{listing.acreage} ac</span>
                )}
              </div>

              <span className="mt-3 block rounded-md border-2 border-green-700 py-2 text-center text-xs font-bold text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/search"
          className="inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-green-800"
        >
          View All Listings →
        </Link>
      </div>
    </section>
  );
}

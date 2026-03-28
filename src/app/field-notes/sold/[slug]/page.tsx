import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { soldListings } from "@/data/sold-listings";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return soldListings.map((listing) => ({
    slug: listing.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = soldListings.find((l) => l.slug === slug);

  if (!listing) {
    return {
      title: "Listing Not Found | Hungle Realty",
    };
  }

  return {
    title: `${listing.title} | Hungle Realty - Adam Hungle`,
    description: listing.blurb,
    openGraph: {
      title: listing.title,
      description: listing.blurb,
      images: [
        {
          url: listing.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function SoldListingPage({ params }: Props) {
  const { slug } = await params;
  const listing = soldListings.find((l) => l.slug === slug);

  if (!listing) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white">Listing Not Found</h1>
        <p className="mt-4 text-gray-400">
          This listing is no longer available.
        </p>
        <Link
          href="/field-notes"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#c49a2a] px-4 py-2 font-semibold text-[#0f1a0f] transition-colors hover:bg-[#d4a520]"
        >
          View All Sold Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0f1a0f]">
      {/* Hero with SOLD Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden lg:aspect-[2/1]">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0f] via-transparent to-transparent" />

        {/* Back to field notes link - top left */}
        <div className="absolute left-4 top-4 z-20">
          <Link
            href="/field-notes"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Field Notes
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Title & MLS */}
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c49a2a]">
            {listing.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white">{listing.title}</h1>
          <p className="mt-2 text-lg text-gray-400">MLS #{listing.mls}</p>
        </div>

        {/* Property Details Grid */}
        <div className="mb-8 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 md:grid-cols-4">
          {/* Location */}
          <div>
            <p className="text-xs font-semibold uppercase text-[#c49a2a]">
              Location
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              {listing.location}
            </p>
          </div>

          {/* Property Type */}
          <div>
            <p className="text-xs font-semibold uppercase text-[#c49a2a]">
              Property Type
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              {listing.propertyType}
            </p>
          </div>

          {/* Bedrooms - if available */}
          {listing.details?.beds !== undefined && (
            <div>
              <p className="text-xs font-semibold uppercase text-[#c49a2a]">
                Bedrooms
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {listing.details.beds}
              </p>
            </div>
          )}

          {/* Bathrooms - if available */}
          {listing.details?.baths !== undefined && (
            <div>
              <p className="text-xs font-semibold uppercase text-[#c49a2a]">
                Bathrooms
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {listing.details.baths}
              </p>
            </div>
          )}

          {/* Square Footage - if available */}
          {listing.details?.sqft !== undefined && (
            <div>
              <p className="text-xs font-semibold uppercase text-[#c49a2a]">
                Square Feet
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {listing.details.sqft.toLocaleString()}
              </p>
            </div>
          )}

          {/* Acres - if available */}
          {listing.details?.acres !== undefined && (
            <div>
              <p className="text-xs font-semibold uppercase text-[#c49a2a]">
                Acres
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {listing.details.acres}
              </p>
            </div>
          )}
        </div>

        {/* Blurb */}
        <div className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-lg leading-relaxed text-gray-300">
            {listing.blurb}
          </p>
        </div>

        {/* Thank You Message */}
        <div className="mb-10 rounded-xl border-l-4 border-[#c49a2a] bg-gradient-to-r from-[#c49a2a]/10 to-transparent p-6">
          <p className="text-lg leading-relaxed italic text-gray-200">
            "{listing.thankYou}"
          </p>
          <p className="mt-4 text-right text-base font-semibold text-[#c49a2a]">
            — Adam Hungle<br />
            <span className="text-sm font-normal text-gray-400">
              Sutton Group Results Realty
            </span>
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/field-notes"
            className="inline-flex items-center gap-2 text-[#c49a2a] transition-colors hover:text-[#d4a520]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

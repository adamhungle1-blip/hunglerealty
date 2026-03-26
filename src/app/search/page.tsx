import type { Metadata } from "next";
import { Suspense } from "react";
import SearchListings from "./SearchListings";

export const metadata: Metadata = {
  title: "Search Saskatchewan Listings | Hungle Realty",
  description:
    "Search all MLS® listings across Saskatchewan. Filter by price, property type, location, and more. Powered by CREA DDF® data.",
};

export default function SearchPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-green-800 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Search All Saskatchewan Listings
          </h1>
          <p className="mt-2 text-green-100">
            Browse live MLS® listings powered by CREA DDF® data
          </p>
        </div>
      </section>

      {/* Listings - Suspense needed for useSearchParams */}
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <div className="aspect-[4/3] bg-gray-200" />
                  <div className="space-y-3 p-4">
                    <div className="h-5 w-24 rounded bg-gray-200" />
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-3 w-32 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      >
        <SearchListings />
      </Suspense>

      {/* Disclaimer */}
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="border-t border-gray-200 pt-4 text-xs leading-relaxed text-gray-500">
          The listing data is provided under copyright by the Canadian Real
          Estate Association (CREA). The information is deemed reliable but is
          not guaranteed and should be independently verified. The trademarks
          REALTOR®, REALTORS®, and the REALTOR® logo are controlled by CREA and
          identify real estate professionals who are members of CREA. The
          trademarks MLS®, Multiple Listing Service® and the associated logos
          are owned by CREA and identify the quality of services provided by
          real estate professionals who are members of CREA.
        </div>
      </section>
    </div>
  );
}

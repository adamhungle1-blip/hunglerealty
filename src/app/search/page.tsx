import type { Metadata } from "next";
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

      {/* Listings */}
      <SearchListings />

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

import { mockListings } from "@/data/mock-listings";
import ListingRow from "./ListingRow";
import Sidebar from "./Sidebar";

export default function FeaturedListings() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main content - Listings */}
        <div className="flex-1">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">New Listings</h2>
          <div>
            {mockListings.map((listing) => (
              <ListingRow key={listing.id} listing={listing} />
            ))}
          </div>

          {/* MLS® Disclaimer */}
          <div className="mt-6 border-t border-gray-200 pt-4 text-xs leading-relaxed text-gray-500">
            The above information is from sources deemed reliable but should not be relied upon without
            independent verification. The information presented here is for general interest only, no
            guarantees apply. The Saskatoon Region Association of REALTORS® (SRAR) IDX Reciprocity
            listings are displayed in accordance with SRAR&apos;s MLS® Data Access Agreement and are
            copyright of the Saskatoon Region Association of REALTORS®. MLS® System data of the
            Saskatoon Region Association of REALTORS® displayed on this site is refreshed every 5 minutes.
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-full shrink-0 lg:w-[320px]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

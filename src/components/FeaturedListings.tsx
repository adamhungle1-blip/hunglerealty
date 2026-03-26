"use client";

import { useState } from "react";
import { mockListings, type Listing } from "@/data/mock-listings";
import ListingRow from "./ListingRow";
import Sidebar from "./Sidebar";
import Link from "next/link";

type SortOption = "newest" | "price-high" | "price-low";

function sortListings(listings: Listing[], sort: SortOption): Listing[] {
  const sorted = [...listings];
  switch (sort) {
    case "newest":
      return sorted.sort((a, b) => a.daysOnMarket - b.daysOnMarket);
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);
    default:
      return sorted;
  }
}

export default function FeaturedListings() {
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const sorted = sortListings(mockListings, sortBy);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main content - Listings */}
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">New Listings</h2>
            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-sm text-gray-500">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="newest">Newest</option>
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
              </select>
            </div>
          </div>

          <div>
            {sorted.map((listing) => (
              <ListingRow key={listing.id} listing={listing} />
            ))}
          </div>

          {/* View All Listings Button */}
          <div className="mt-8 text-center">
            <Link
              href="/search"
              className="inline-block rounded bg-green-700 px-8 py-3 font-bold text-white transition-colors hover:bg-green-800"
            >
              View All Listings &rarr;
            </Link>
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

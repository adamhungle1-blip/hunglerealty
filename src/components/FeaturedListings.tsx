"use client";

import { useEffect, useState, useCallback } from "react";
import DdfListingCard from "./DdfListingCard";
import SraDisclaimer from "./SraDisclaimer";
import Sidebar from "./Sidebar";
import type { DdfListing } from "@/lib/ddf";
import Link from "next/link";

type SortOption = "newest" | "price_desc" | "price_asc";

export default function FeaturedListings() {
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");

  const fetchData = useCallback(async (sortBy: SortOption) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/listings?top=12&sort=${sortBy}&propertyType=Agriculture`);
      if (!res.ok) throw new Error("Failed to load listings");
      const data = await res.json();
      setListings(data.value || []);
      setTotalCount(data["@odata.count"] || 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(sort);
  }, [sort, fetchData]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main content */}
        <div className="flex-1">
          {/* Header with sort */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                View Saskatchewan New Farm Land Listings
              </h2>
              {totalCount > 0 && (
                <p className="mt-1 text-sm text-gray-500">
                  {totalCount.toLocaleString()} active farm listings
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-gray-600">
                Sort by:
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="newest">Newest</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="price_asc">Price: Low to High</option>
              </select>
            </div>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <div className="aspect-[4/3] bg-gray-200" />
                  <div className="p-4 space-y-3">
                    <div className="h-5 w-24 rounded bg-gray-200" />
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-3 w-32 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
              <p className="text-red-800">{error}</p>
              <button
                onClick={() => fetchData(sort)}
                className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Listing grid */}
          {!loading && !error && (
            <>
              {listings.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {listings.map((listing) => (
                    <DdfListingCard key={listing.ListingKey} listing={listing} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-10 text-center">
                  <p className="text-gray-600">No listings found.</p>
                </div>
              )}

              {/* View All Listings button */}
              {totalCount > 12 && (
                <div className="mt-8 text-center">
                  <Link
                    href="/search?propertyType=Agriculture"
                    className="inline-block rounded-lg bg-green-800 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                  >
                    View All {totalCount.toLocaleString()} Farm Listings
                  </Link>
                </div>
              )}
            </>
          )}

          <SraDisclaimer />
        </div>

        {/* Right sidebar */}
        <div className="w-full shrink-0 lg:w-[320px]">
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

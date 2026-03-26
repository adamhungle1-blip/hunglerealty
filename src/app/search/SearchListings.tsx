"use client";

import { useEffect, useState, useCallback } from "react";
import DdfListingCard from "@/components/DdfListingCard";
import type { DdfListing } from "@/lib/ddf";

type SortOption = "newest" | "price_desc" | "price_asc";

export default function SearchListings() {
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");
  const [page, setPage] = useState(0);
  const pageSize = 24;

  const fetchData = useCallback(
    async (sortBy: SortOption, pageNum: number, append = false) => {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);
      try {
        const res = await fetch(
          `/api/listings?top=${pageSize}&skip=${pageNum * pageSize}&sort=${sortBy}`
        );
        if (!res.ok) throw new Error("Failed to load listings");
        const data = await res.json();
        if (append) {
          setListings((prev) => [...prev, ...(data.value || [])]);
        } else {
          setListings(data.value || []);
        }
        setTotalCount(data["@odata.count"] || 0);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    []
  );

  useEffect(() => {
    setPage(0);
    fetchData(sort, 0);
  }, [sort, fetchData]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(sort, nextPage, true);
  };

  const hasMore = listings.length < totalCount;

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      {/* Sort + count bar */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {totalCount > 0
            ? `Showing ${listings.length.toLocaleString()} of ${totalCount.toLocaleString()} listings`
            : loading
              ? "Loading..."
              : "No listings found"}
        </p>
        <div className="flex items-center gap-2">
          <label htmlFor="search-sort" className="text-sm text-gray-600">
            Sort by:
          </label>
          <select
            id="search-sort"
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 24 }).map((_, i) => (
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
      )}

      {/* Error */}
      {error && !loading && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-red-800">{error}</p>
          <button
            onClick={() => fetchData(sort, 0)}
            className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Listing grid */}
      {!loading && !error && listings.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listings.map((listing) => (
              <DdfListingCard key={listing.ListingKey} listing={listing} />
            ))}
          </div>

          {/* Load more */}
          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className="inline-block rounded-lg bg-green-800 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-50"
              >
                {loadingMore ? "Loading..." : "Load More Listings"}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

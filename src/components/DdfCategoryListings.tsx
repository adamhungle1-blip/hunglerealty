"use client";

import { useEffect, useState, useCallback } from "react";
import DdfListingCard from "./DdfListingCard";
import SraDisclaimer from "./SraDisclaimer";
import type { DdfListing } from "@/lib/ddf";

type SortOption = "newest" | "price_desc" | "price_asc";

interface DdfCategoryListingsProps {
  /** Property types to filter by (comma-separated for API) */
  propertyType?: string;
  /** RM name to filter by (used in contains() on address) */
  rm?: string;
  /** City to filter by */
  city?: string;
  /** Heading text */
  heading: string;
  /** Number of listings per page */
  pageSize?: number;
}

export default function DdfCategoryListings({
  propertyType,
  rm,
  city,
  heading,
  pageSize = 24,
}: DdfCategoryListingsProps) {
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");
  const [page, setPage] = useState(0);

  const fetchData = useCallback(
    async (sortBy: SortOption, pageNum: number, append = false) => {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);
      try {
        const params = new URLSearchParams({
          top: String(pageSize),
          skip: String(pageNum * pageSize),
          sort: sortBy,
        });
        if (propertyType) params.set("propertyType", propertyType);
        if (rm) params.set("rm", rm);
        if (city) params.set("city", city);

        const res = await fetch(`/api/listings?${params.toString()}`);
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
    [propertyType, rm, city, pageSize]
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
    <section className="mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
          {totalCount > 0 && (
            <p className="mt-1 text-sm text-gray-500">
              {totalCount.toLocaleString()} listing{totalCount !== 1 ? "s" : ""} found
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="cat-sort" className="text-sm text-gray-600">
            Sort:
          </label>
          <select
            id="cat-sort"
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

      {/* Loading */}
      {loading && (
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

      {/* No results */}
      {!loading && !error && listings.length === 0 && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-10 text-center">
          <p className="text-gray-600">No listings found in this category right now.</p>
          <a
            href="/search"
            className="mt-4 inline-block rounded-lg bg-green-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            View All Listings
          </a>
        </div>
      )}

      <SraDisclaimer />
    </section>
  );
}

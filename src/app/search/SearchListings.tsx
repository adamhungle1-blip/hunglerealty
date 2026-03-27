"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import DdfListingCard from "@/components/DdfListingCard";
import type { DdfListing } from "@/lib/ddf";

type SortOption = "newest" | "price_desc" | "price_asc";

export default function SearchListings() {
  const searchParams = useSearchParams();
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");
  const [page, setPage] = useState(0);
  const pageSize = 24;

  // Read filters from URL params
  const propertyType = searchParams.get("propertyType") || "";
  const rm = searchParams.get("rm") || "";
  const priceMin = searchParams.get("priceMin") || "";
  const priceMax = searchParams.get("priceMax") || "";
  const minAcres = searchParams.get("minAcres") || "";
  const search = searchParams.get("search") || "";

  const buildUrl = useCallback(
    (sortBy: SortOption, pageNum: number) => {
      const params = new URLSearchParams();
      params.set("top", String(pageSize));
      params.set("skip", String(pageNum * pageSize));
      params.set("sort", sortBy);
      if (propertyType) params.set("propertyType", propertyType);
      if (rm) params.set("rm", rm);
      if (priceMin) params.set("priceMin", priceMin);
      if (priceMax) params.set("priceMax", priceMax);
      if (minAcres) params.set("minAcres", minAcres);
      if (search) params.set("search", search);
      return `/api/listings?${params.toString()}`;
    },
    [propertyType, rm, priceMin, priceMax, minAcres, search]
  );

  const fetchData = useCallback(
    async (sortBy: SortOption, pageNum: number, append = false) => {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);
      try {
        const res = await fetch(buildUrl(sortBy, pageNum));
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
    [buildUrl]
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

  // Build a description of active filters
  const filterParts: string[] = [];
  if (propertyType) filterParts.push(propertyType);
  if (rm) filterParts.push(`RM of ${rm}`);
  if (priceMin) filterParts.push(`Min $${Number(priceMin).toLocaleString()}`);
  if (priceMax) filterParts.push(`Max $${Number(priceMax).toLocaleString()}`);
  if (minAcres) filterParts.push(`${minAcres}+ acres`);
  if (search) filterParts.push(`"${search}"`);

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      {/* Active filters */}
      {filterParts.length > 0 && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-gray-500">Filters:</span>
          {filterParts.map((f) => (
            <span
              key={f}
              className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
            >
              {f}
            </span>
          ))}
          <a
            href="/search"
            className="ml-2 text-xs text-red-600 hover:text-red-800 hover:underline"
          >
            Clear all
          </a>
        </div>
      )}

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

      {/* No results */}
      {!loading && !error && listings.length === 0 && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-10 text-center">
          <p className="text-gray-600">No listings found matching your criteria.</p>
          <a
            href="/search?propertyType=Agriculture"
            className="mt-4 inline-block rounded-lg bg-green-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            View All Farm Listings
          </a>
        </div>
      )}
    </section>
  );
}

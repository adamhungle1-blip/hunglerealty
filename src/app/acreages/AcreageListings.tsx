"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import DdfListingCard from "@/components/DdfListingCard";
import type { DdfListing } from "@/lib/ddf";
import type { MapPin } from "@/components/AcreageMap";

// Leaflet needs `window` — dynamically import to avoid SSR crash
const AcreageMap = dynamic(() => import("@/components/AcreageMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
      Loading map…
    </div>
  ),
});

type SortOption = "newest" | "price_desc" | "price_asc";

const priceRanges = [
  { label: "Any Price", min: "", max: "" },
  { label: "Under $500K", min: "", max: "500000" },
  { label: "$500K–$1M", min: "500000", max: "1000000" },
  { label: "$1M–$2M", min: "1000000", max: "2000000" },
  { label: "$2M+", min: "2000000", max: "" },
];

export default function AcreageListings() {
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [mapPins, setMapPins] = useState<MapPin[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");
  const [priceIdx, setPriceIdx] = useState(0);
  const [page, setPage] = useState(0);
  const pageSize = 24;

  // Fetch ALL pins for the map (runs once on mount)
  useEffect(() => {
    async function loadMapPins() {
      try {
        const res = await fetch(
          "/api/listings/map?propertyType=Single%20Family&minAcres=2"
        );
        if (!res.ok) return;
        const data = await res.json();
        setMapPins(data.pins || []);
      } catch {
        // Map pins are non-critical — fail silently
      }
    }
    loadMapPins();
  }, []);

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
          propertyType: "Single Family",
          minAcres: "2",
        });
        const range = priceRanges[priceIdx];
        if (range.min) params.set("priceMin", range.min);
        if (range.max) params.set("priceMax", range.max);

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
        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [priceIdx]
  );

  useEffect(() => {
    setPage(0);
    fetchData(sort, 0);
  }, [sort, priceIdx, fetchData]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(sort, nextPage, true);
  };

  const hasMore = listings.length < totalCount;

  return (
    <div>
      {/* ─── Map Section ─── */}
      <section className="relative">
        <div className="h-[400px] w-full lg:h-[500px]">
          <AcreageMap pins={mapPins} />
        </div>
        {mapPins.length > 0 && (
          <div className="absolute bottom-3 left-3 z-[1000] rounded-lg bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 shadow backdrop-blur">
            {mapPins.length.toLocaleString()} listings on map
          </div>
        )}
      </section>

      {/* ─── Listings Grid ─── */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        {/* Filters bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Acreage Listings
            </h2>
            {!loading && totalCount > 0 && (
              <p className="mt-1 text-sm text-gray-500">
                {totalCount.toLocaleString()} acreage
                {totalCount !== 1 ? "s" : ""} found (2+ acres)
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-gray-600">
                Price:
              </label>
              <select
                value={priceIdx}
                onChange={(e) => setPriceIdx(Number(e.target.value))}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                {priceRanges.map((p, i) => (
                  <option key={p.label} value={i}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-gray-600">
                Sort:
              </label>
              <select
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
        </div>

        {/* Loading skeleton */}
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

        {/* Grid */}
        {!loading && !error && listings.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {listings.map((listing) => (
                <DdfListingCard
                  key={listing.ListingKey}
                  listing={listing}
                />
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="inline-block rounded-lg bg-green-800 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-50"
                >
                  {loadingMore ? "Loading..." : "Load More Acreages"}
                </button>
              </div>
            )}
          </>
        )}

        {/* No results */}
        {!loading && !error && listings.length === 0 && (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-10 text-center">
            <p className="text-gray-600">
              No acreage listings found right now.
            </p>
            <a
              href="/search"
              className="mt-4 inline-block rounded-lg bg-green-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
            >
              View All Listings
            </a>
          </div>
        )}

        {/* CREA Disclaimer */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-xs leading-relaxed text-gray-500">
          The listing data is provided under copyright by the Canadian
          Real Estate Association (CREA). The information is deemed
          reliable but is not guaranteed and should be independently
          verified.
        </div>
      </section>
    </div>
  );
}

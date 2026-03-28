"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import DdfListingCard from "@/components/DdfListingCard";
import type { DdfListing } from "@/lib/ddf";
import type { MapPin } from "@/components/AcreageMap";
import SraDisclaimer from "@/components/SraDisclaimer";
import { RESIDENTIAL_COMMUNITIES } from "@/data/residential-communities";
import { REGINA_NEIGHBOURHOODS } from "@/data/regina-neighbourhoods";
import { RESIDENTIAL_SEO } from "@/data/residential-seo";

const ResidentialMap = dynamic(() => import("@/components/AcreageMap"), {
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
  { label: "Under $250K", min: "", max: "250000" },
  { label: "$250K–$400K", min: "250000", max: "400000" },
  { label: "$400K–$600K", min: "400000", max: "600000" },
  { label: "$600K–$1M", min: "600000", max: "1000000" },
  { label: "$1M+", min: "1000000", max: "" },
];

interface ResidentialListingsProps {
  /** Active community slug (e.g. "regina", "white-city") */
  activeCommunity?: string;
  /** Active neighbourhood slug (e.g. "harbour-landing") — only for Regina sub-pages */
  activeNeighbourhood?: string;
  /** City name for DDF City filter */
  cityFilter?: string;
  /** MLS CityRegion (Neighbourhood/Sublocation) for neighbourhood filtering */
  neighbourhoodFilter?: string;
  /** Geo-filter center latitude */
  lat?: number;
  /** Geo-filter center longitude */
  lng?: number;
  /** Geo-filter radius in km */
  radius?: number;
  /** Show neighbourhood quick links (only on Regina pages) */
  showNeighbourhoods?: boolean;
}

export default function ResidentialListings({
  activeCommunity,
  activeNeighbourhood,
  cityFilter,
  neighbourhoodFilter,
  lat,
  lng,
  radius,
  showNeighbourhoods = false,
}: ResidentialListingsProps) {
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

  /** Build shared query params for both listings and map endpoints */
  const buildParams = useCallback(
    (extra?: Record<string, string>) => {
      const params = new URLSearchParams({
        propertyType: "Single Family,Multi-family",
        ...extra,
      });
      if (cityFilter) params.set("city", cityFilter);
      if (neighbourhoodFilter) params.set("neighbourhood", neighbourhoodFilter);
      if (lat && lng && radius) {
        params.set("lat", String(lat));
        params.set("lng", String(lng));
        params.set("radius", String(radius));
      }
      // Default: all homes within 100km of Regina when no other filter
      if (!cityFilter && !neighbourhoodFilter && !lat) {
        params.set("lat", "50.4452");
        params.set("lng", "-104.6189");
        params.set("radius", "100");
      }
      return params;
    },
    [cityFilter, neighbourhoodFilter, lat, lng, radius]
  );

  // Fetch map pins
  useEffect(() => {
    async function loadMapPins() {
      try {
        const params = buildParams();
        const res = await fetch(`/api/listings/map?${params.toString()}`);
        if (!res.ok) return;
        const data = await res.json();
        setMapPins(data.pins || []);
      } catch {
        // fail silently
      }
    }
    loadMapPins();
  }, [buildParams]);

  const fetchData = useCallback(
    async (sortBy: SortOption, pageNum: number, append = false) => {
      if (append) setLoadingMore(true);
      else setLoading(true);
      setError(null);
      try {
        const params = buildParams({
          top: String(pageSize),
          skip: String(pageNum * pageSize),
          sort: sortBy,
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
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [priceIdx, buildParams]
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
      {/* ─── Community Quick Links ─── */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3">
          <span className="mr-1 text-xs font-bold uppercase tracking-wide text-gray-500">
            Communities:
          </span>
          <Link
            href="/residential"
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              !activeCommunity
                ? "bg-green-800 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-green-50 hover:border-green-600 hover:text-green-800"
            }`}
          >
            All Regina Area
          </Link>
          {RESIDENTIAL_COMMUNITIES.map((c) => (
            <Link
              key={c.slug}
              href={c.slug === "regina" ? "/residential/regina" : `/residential/${c.slug}`}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCommunity === c.slug
                  ? "bg-green-800 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-green-50 hover:border-green-600 hover:text-green-800"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Neighbourhood Quick Links (Regina pages only) ─── */}
      {showNeighbourhoods && (
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 text-xs font-bold uppercase tracking-wide text-gray-500">
                Neighbourhoods:
              </span>
              <Link
                href="/residential/regina"
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  !activeNeighbourhood
                    ? "bg-green-800 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-800"
                }`}
              >
                All Regina
              </Link>
              {REGINA_NEIGHBOURHOODS.map((n) => (
                <Link
                  key={n.slug}
                  href={`/residential/regina/${n.slug}`}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeNeighbourhood === n.slug
                      ? "bg-green-800 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-800"
                  }`}
                >
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Listings Grid ─── */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        {/* Filters bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {activeNeighbourhood
                ? `${REGINA_NEIGHBOURHOODS.find((n) => n.slug === activeNeighbourhood)?.name || ""} Homes`
                : activeCommunity
                ? `${RESIDENTIAL_COMMUNITIES.find((c) => c.slug === activeCommunity)?.name || ""} Homes`
                : "Regina Area Homes"}
            </h2>
            {!loading && totalCount > 0 && (
              <p className="mt-1 text-sm text-gray-500">
                {totalCount.toLocaleString()} home{totalCount !== 1 ? "s" : ""} found
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-gray-600">Price:</label>
              <select
                value={priceIdx}
                onChange={(e) => setPriceIdx(Number(e.target.value))}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                {priceRanges.map((p, i) => (
                  <option key={p.label} value={i}>{p.label}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-gray-600">Sort:</label>
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
              <div key={i} className="animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white">
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
                  {loadingMore ? "Loading..." : "Load More Homes"}
                </button>
              </div>
            )}
          </>
        )}

        {/* No results */}
        {!loading && !error && listings.length === 0 && (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-10 text-center">
            <p className="text-gray-600">No residential listings found in this area right now.</p>
            <Link
              href="/residential/regina"
              className="mt-4 inline-block rounded-lg bg-green-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
            >
              View All Regina Homes
            </Link>
          </div>
        )}

        <SraDisclaimer />

        {/* ─── SEO Content ─── */}
        {(() => {
          const seoKey = activeNeighbourhood || activeCommunity || "all";
          const seo = RESIDENTIAL_SEO[seoKey];
          if (!seo) return null;
          return (
            <div className="mt-12 border-t border-gray-200 pt-10">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">{seo.heading}</h2>
              {seo.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 leading-relaxed text-gray-700">{p}</p>
              ))}
            </div>
          );
        })()}
        {/* ─── Home Valuation CTA ─── */}
        <div className="mt-12 rounded-xl bg-green-800 p-6 text-center md:p-8">
          <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
            Thinking About Selling Your Home?
          </h3>
          <p className="mx-auto mb-5 max-w-lg text-sm text-green-100">
            Get a free, no-obligation home valuation from Adam Hungle. Honest advice, proven marketing, and a get-it-done approach.
          </p>
          <Link
            href="/residential/sell"
            className="inline-block rounded-lg bg-yellow-500 px-10 py-4 text-base font-bold text-green-900 shadow-lg transition-colors hover:bg-yellow-400"
          >
            Get a Free Home Valuation
          </Link>
        </div>
      </section>

      {/* ─── Map ─── */}
      <section className="relative">
        <div className="h-[400px] w-full lg:h-[500px]">
          <ResidentialMap pins={mapPins} />
        </div>
        {mapPins.length > 0 && (
          <div className="absolute bottom-3 left-3 z-[1000] rounded-lg bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 shadow backdrop-blur">
            {mapPins.length.toLocaleString()} homes on map
          </div>
        )}
      </section>
    </div>
  );
}

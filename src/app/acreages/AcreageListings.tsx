"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import DdfListingCard from "@/components/DdfListingCard";
import type { DdfListing } from "@/lib/ddf";

type SortOption = "newest" | "price_desc" | "price_asc";

const priceRanges = [
  { label: "Any Price", min: "", max: "" },
  { label: "Under $500K", min: "", max: "500000" },
  { label: "$500K–$1M", min: "500000", max: "1000000" },
  { label: "$1M–$2M", min: "1000000", max: "2000000" },
  { label: "$2M+", min: "2000000", max: "" },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

function getMainPhoto(listing: DdfListing): string | null {
  if (!listing.Media || listing.Media.length === 0) return null;
  const preferred = listing.Media.find((m) => m.PreferredPhotoYN);
  if (preferred) return preferred.MediaURL;
  const first = listing.Media.sort((a, b) => a.Order - b.Order)[0];
  return first?.MediaURL || null;
}

export default function AcreageListings() {
  /* ─── Map refs ─── */
  const mapContainer = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedListing, setSelectedListing] = useState<DdfListing | null>(
    null
  );

  /* ─── Listing state ─── */
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("newest");
  const [priceIdx, setPriceIdx] = useState(0);
  const [page, setPage] = useState(0);
  const pageSize = 24;

  /* ─── Fetch listings ─── */
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
          top: String(append ? pageSize : 100), // Fetch more for map on first load
          skip: String(append ? pageNum * pageSize : 0),
          sort: sortBy,
          propertyType: "Single Family,Multi-family",
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

  /* ─── Load Mapbox ─── */
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window as unknown as Record<string, unknown>).mapboxgl
    ) {
      initMap();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src =
      "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js";
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initMap = useCallback(() => {
    if (!mapContainer.current) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapboxgl = (window as any).mapboxgl;
    if (!mapboxgl) return;

    const token =
      process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.placeholder";
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-104.6189, 50.4452], // Regina, SK
      zoom: 8,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    mapRef.current = map;
    map.on("load", () => setMapLoaded(true));
  }, []);

  /* ─── Update markers ─── */
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapboxgl = (window as any).mapboxgl;
    if (!mapboxgl) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    listings.forEach((listing) => {
      if (!listing.Latitude || !listing.Longitude) return;

      const el = document.createElement("div");
      el.style.cssText =
        "width:30px;height:30px;background:#15803d;border:2px solid #fff;border-radius:50%;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;";
      el.innerHTML =
        '<svg width="14" height="14" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>';

      el.addEventListener("click", () => setSelectedListing(listing));

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([listing.Longitude, listing.Latitude])
        .addTo(mapRef.current);

      markersRef.current.push(marker);
    });
  }, [listings, mapLoaded]);

  const listingsWithCoords = listings.filter(
    (l) => l.Latitude && l.Longitude
  );

  return (
    <div>
      {/* ─── Map Section ─── */}
      <section className="relative">
        <div className="relative h-[500px] lg:h-[600px]">
          <div ref={mapContainer} className="h-full w-full" />

          {/* Map loading placeholder */}
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mb-4 h-12 w-12 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Interactive Map
                </h3>
                <p className="text-sm text-gray-500">Loading map...</p>
              </div>
            </div>
          )}

          {/* Floating filter bar on map */}
          <div className="absolute left-4 right-4 top-4 flex flex-wrap items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm lg:left-6 lg:right-6">
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-gray-600">
                Price:
              </label>
              <select
                value={priceIdx}
                onChange={(e) => setPriceIdx(Number(e.target.value))}
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-green-600 focus:outline-none"
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
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-green-600 focus:outline-none"
              >
                <option value="newest">Newest</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="price_asc">Price: Low to High</option>
              </select>
            </div>
            <div className="ml-auto text-sm text-gray-600">
              {loading ? (
                "Loading..."
              ) : (
                <>
                  <span className="font-bold text-green-700">
                    {listingsWithCoords.length}
                  </span>{" "}
                  pins on map
                  {totalCount > 0 && (
                    <span className="text-xs text-gray-400">
                      {" "}
                      ({totalCount.toLocaleString()} total)
                    </span>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Selected listing popup */}
          {selectedListing && (
            <div className="absolute bottom-4 left-4 z-10 w-80 rounded-xl border border-gray-200 bg-white p-4 shadow-xl lg:left-6">
              {getMainPhoto(selectedListing) && (
                <div className="relative mb-3 h-36 w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={getMainPhoto(selectedListing)!}
                    alt={
                      selectedListing.UnparsedAddress || "Listing"
                    }
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <h3 className="text-sm font-bold text-gray-900">
                {selectedListing.UnparsedAddress ||
                  "Address unavailable"}
              </h3>
              <p className="mt-1 text-lg font-bold text-green-700">
                {formatPrice(selectedListing.ListPrice)}
              </p>
              <p className="text-xs text-gray-500">
                {selectedListing.City} · MLS®{" "}
                {selectedListing.ListingId ||
                  selectedListing.ListingKey}
              </p>
              {selectedListing.LotSizeArea && (
                <span className="mt-1 inline-block rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                  {selectedListing.LotSizeArea.toLocaleString()} acres
                </span>
              )}
              <div className="mt-3 flex gap-2">
                <a
                  href={`/listing/${selectedListing.ListingId || selectedListing.ListingKey}`}
                  className="rounded bg-green-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-green-800"
                >
                  View Details
                </a>
                <button
                  onClick={() => setSelectedListing(null)}
                  className="rounded border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── Listings Grid ─── */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Acreage Listings
            </h2>
            {totalCount > 0 && (
              <p className="mt-1 text-sm text-gray-500">
                {totalCount.toLocaleString()} listing
                {totalCount !== 1 ? "s" : ""} found
              </p>
            )}
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
                  {loadingMore
                    ? "Loading..."
                    : "Load More Acreages"}
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

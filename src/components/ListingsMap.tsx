"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { Listing } from "@/data/sample-residential";

/* ------------------------------------------------------------------ */
/*  Mapbox GL is imported dynamically to avoid SSR issues in Next.js   */
/* ------------------------------------------------------------------ */

interface ListingsMapProps {
  listings: Listing[];
  mapCenter?: [number, number]; // [lng, lat]
  mapZoom?: number;
  pageTitle: string;
  pageSubtitle: string;
  heroImage: string;
}

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
}

function statusColor(s: string) {
  if (s === "Active") return "bg-green-700";
  if (s === "Conditional Sale") return "bg-yellow-600";
  return "bg-gray-500";
}

export default function ListingsMap({
  listings,
  mapCenter = [-104.6189, 50.4452], // Regina default
  mapZoom = 10,
  pageTitle,
  pageSubtitle,
}: ListingsMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "newest">(
    "price-desc"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  // Sort listings
  const sorted = [...listings].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  // Filter by search
  const filtered = searchQuery
    ? sorted.filter(
        (l) =>
          l.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.mls.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sorted;

  // Fly to listing when clicked
  const flyTo = useCallback(
    (lat: number, lng: number) => {
      if (mapRef.current) {
        mapRef.current.flyTo({ center: [lng, lat], zoom: 14, duration: 1200 });
      }
    },
    []
  );

  useEffect(() => {
    if (!mapContainer.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.warn("NEXT_PUBLIC_MAPBOX_TOKEN not set — map disabled");
      return;
    }

    let map: mapboxgl.Map;

    import("mapbox-gl").then((mapboxgl) => {
      mapboxgl.default.accessToken = token;

      map = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: "mapbox://styles/mapbox/streets-v12",
        center: mapCenter,
        zoom: mapZoom,
      });

      map.addControl(new mapboxgl.default.NavigationControl(), "top-left");

      map.on("load", () => {
        mapRef.current = map;
        setMapLoaded(true);

        // Add markers for each listing
        listings.forEach((listing, idx) => {
          const el = document.createElement("div");
          el.className = "listing-marker";
          el.style.cssText = `
            width: 30px; height: 30px; border-radius: 50%;
            background: #15803d; color: white; display: flex;
            align-items: center; justify-content: center;
            font-size: 12px; font-weight: bold; cursor: pointer;
            border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          `;
          el.textContent = String(idx + 1);

          const popup = new mapboxgl.default.Popup({ offset: 25 }).setHTML(`
            <div style="min-width:200px;">
              <strong style="color:#15803d;">${formatPrice(listing.price)}</strong>
              <br/><span style="font-size:13px;">${listing.address}</span>
              <br/><span style="font-size:12px;color:#666;">${listing.city}, ${listing.province}</span>
              <br/><span style="font-size:12px;">${listing.beds} bed · ${listing.baths} bath · ${listing.sqft.toLocaleString()} sqft</span>
            </div>
          `);

          const marker = new mapboxgl.default.Marker(el)
            .setLngLat([listing.lng, listing.lat])
            .setPopup(popup)
            .addTo(map);

          markersRef.current.push(marker);
        });
      });
    });

    return () => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      if (map) map.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Search / Sort bar */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-700">
              {filtered.length} {filtered.length === 1 ? "Result" : "Results"}
            </span>
            <input
              type="text"
              placeholder="Search by address, city, or MLS#..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-gray-500">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
            >
              <option value="price-desc">Price: High → Low</option>
              <option value="price-asc">Price: Low → High</option>
            </select>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative">
        <div
          ref={mapContainer}
          className="h-[350px] w-full bg-gray-100 md:h-[420px]"
        />
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <p className="text-sm text-gray-400">Loading map...</p>
          </div>
        )}
      </section>

      {/* Listing cards */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-gray-500">
            No listings match your search. Try broadening your criteria.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((listing, idx) => (
              <div
                key={listing.id}
                className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                onClick={() => flyTo(listing.lat, listing.lng)}
              >
                {/* Price header */}
                <div
                  className={`${statusColor(listing.status)} px-4 py-2.5 text-center`}
                >
                  <span className="text-lg font-bold text-white">
                    {formatPrice(listing.price)}
                  </span>
                  {listing.status !== "Active" && (
                    <span className="ml-2 text-sm text-white/90">
                      ({listing.status})
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className="flex items-start justify-between px-4 py-2">
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      {listing.address}
                    </p>
                    <p className="text-xs text-gray-500">
                      {listing.city}, {listing.province} {listing.postal}
                    </p>
                  </div>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                </div>

                {/* Image placeholder */}
                <div className="relative mx-4 mb-3 h-48 overflow-hidden rounded-md bg-gray-200">
                  <div className="flex h-full items-center justify-center text-sm text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                    Photo
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>
                      <strong>{listing.beds}</strong> Beds
                    </span>
                    <span>
                      <strong>{listing.baths}</strong> Baths
                    </span>
                    <span>
                      <strong>{listing.sqft.toLocaleString()}</strong> SqFt
                    </span>
                  </div>
                </div>

                {/* MLS & Type */}
                <div className="border-t border-gray-100 px-4 py-2">
                  <p className="text-xs text-gray-400">
                    #{listing.mls} | {listing.propertyType}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sample data notice */}
        <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-center text-sm text-yellow-800">
          <strong>Note:</strong> These are sample listings for demonstration
          purposes. Real MLS® listings coming soon once our IDX feed is
          connected.
        </div>
      </section>
    </div>
  );
}

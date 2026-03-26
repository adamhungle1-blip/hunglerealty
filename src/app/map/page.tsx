"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { DdfListing } from "@/lib/ddf";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Types & Constants                                                  */
/* ------------------------------------------------------------------ */

const propertyTypes = ["All Types", "Agriculture", "Single Family", "Multi-family", "Vacant Land", "Business"];
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

function getListingUrl(listing: DdfListing): string {
  if (listing.ListingURL) {
    return listing.ListingURL.startsWith("http")
      ? listing.ListingURL
      : `https://${listing.ListingURL}`;
  }
  return `https://www.realtor.ca/map#keyword=${listing.ListingId || listing.ListingKey}`;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MapSearchPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedListing, setSelectedListing] = useState<DdfListing | null>(null);
  const [propertyType, setPropertyType] = useState("All Types");
  const [priceIdx, setPriceIdx] = useState(0);
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  /* Fetch listings from the API */
  const fetchListings = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ top: "100", sort: "newest" });
      if (propertyType !== "All Types") params.set("propertyType", propertyType);
      const range = priceRanges[priceIdx];
      if (range.min) params.set("priceMin", range.min);
      if (range.max) params.set("priceMax", range.max);

      const res = await fetch(`/api/listings?${params.toString()}`);
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setListings(data.value || []);
      setTotalCount(data["@odata.count"] || 0);
    } catch {
      console.error("Failed to load map listings");
    } finally {
      setLoading(false);
    }
  }, [propertyType, priceIdx]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  /* Load Mapbox GL JS from CDN */
  useEffect(() => {
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).mapboxgl) {
      initMap();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js";
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

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.placeholder";
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-105.5, 51.0], // Saskatchewan center
      zoom: 5.5,
    });

    mapRef.current = map;
    map.on("load", () => setMapLoaded(true));
  }, []);

  /* Update markers whenever listings change */
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapboxgl = (window as any).mapboxgl;
    if (!mapboxgl) return;

    // Clear existing markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    // Add new markers for listings with coordinates
    listings.forEach((listing) => {
      if (!listing.Latitude || !listing.Longitude) return;

      const el = document.createElement("div");
      el.style.cssText =
        "width:28px;height:28px;background:#15803d;border:2px solid #fff;border-radius:50%;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;";
      el.innerHTML =
        '<svg width="14" height="14" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>';

      el.addEventListener("click", () => setSelectedListing(listing));

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([listing.Longitude, listing.Latitude])
        .addTo(mapRef.current);

      markersRef.current.push(marker);
    });
  }, [listings, mapLoaded]);

  const listingsWithCoords = listings.filter((l) => l.Latitude && l.Longitude);

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col lg:flex-row">
      {/* Sidebar filters */}
      <div className="w-full shrink-0 overflow-y-auto border-b border-gray-200 bg-white p-4 lg:w-80 lg:border-b-0 lg:border-r">
        <h1 className="mb-4 text-xl font-bold text-green-800">Map Search</h1>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-bold text-gray-600">Property Type</label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-green-600 focus:outline-none"
            >
              {propertyTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-gray-600">Price Range</label>
            <select
              value={priceIdx}
              onChange={(e) => setPriceIdx(Number(e.target.value))}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-green-600 focus:outline-none"
            >
              {priceRanges.map((p, i) => (
                <option key={p.label} value={i}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick city links */}
        <div className="mt-6">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">Quick Search</h3>
          <div className="flex flex-wrap gap-1.5">
            {["Regina", "Saskatoon", "Moose Jaw", "Prince Albert", "Swift Current", "Yorkton"].map((city) => (
              <a
                key={city}
                href={`/search?search=${encodeURIComponent(city)}`}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-green-100 hover:text-green-700"
              >
                {city}
              </a>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-6 rounded bg-gray-50 p-3 text-center">
          <p className="text-sm text-gray-600">
            {loading ? (
              "Loading..."
            ) : (
              <>
                <span className="font-bold text-green-700">{listingsWithCoords.length}</span> pins on map
                {totalCount > 0 && (
                  <span className="text-xs text-gray-400"> ({totalCount.toLocaleString()} total)</span>
                )}
              </>
            )}
          </p>
        </div>

        {/* Selected listing card */}
        {selectedListing && (
          <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
            {getMainPhoto(selectedListing) && (
              <div className="relative mb-3 h-32 w-full overflow-hidden rounded-md bg-gray-200">
                <Image
                  src={getMainPhoto(selectedListing)!}
                  alt={selectedListing.UnparsedAddress || "Listing"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <h3 className="text-sm font-bold text-gray-900">
              {selectedListing.UnparsedAddress || "Address unavailable"}
            </h3>
            <p className="mt-1 text-lg font-bold text-green-700">
              {formatPrice(selectedListing.ListPrice)}
            </p>
            <p className="text-xs text-gray-500">
              {selectedListing.City} · MLS® {selectedListing.ListingId || selectedListing.ListingKey}
            </p>
            {selectedListing.PropertySubType && (
              <span className="mt-1 inline-block rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-600">
                {selectedListing.PropertySubType}
              </span>
            )}
            <div className="mt-3 flex gap-2">
              <a
                href={getListingUrl(selectedListing)}
                target="_blank"
                rel="noopener noreferrer"
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

      {/* Map */}
      <div className="relative flex-1">
        <div ref={mapContainer} className="h-full w-full" />

        {/* Mapbox token notice overlay */}
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="rounded-lg bg-white p-8 text-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <h3 className="mb-2 text-lg font-bold text-gray-900">Interactive Map</h3>
              <p className="text-sm text-gray-500">
                Map will load once Mapbox token is configured.
              </p>
              <p className="mt-2 text-xs text-gray-400">
                Set NEXT_PUBLIC_MAPBOX_TOKEN in your environment variables.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

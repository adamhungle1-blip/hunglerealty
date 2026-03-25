"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface MapPin {
  id: string;
  lat: number;
  lng: number;
  title: string;
  price: string;
  acres: string;
  rm: string;
  mls: string;
}

/* Mock pins spread across Saskatchewan */
const mockPins: MapPin[] = [
  { id: "1", lat: 50.45, lng: -104.62, title: "Grain Farm — RM of Sherwood", price: "$1,200,000", acres: "640", rm: "Sherwood", mls: "SK031234" },
  { id: "2", lat: 50.93, lng: -104.85, title: "Mixed Farm — RM of Lumsden", price: "$850,000", acres: "480", rm: "Lumsden", mls: "SK031067" },
  { id: "3", lat: 51.12, lng: -105.53, title: "Hay Land — RM of Craik", price: "$400,000", acres: "320", rm: "Craik", mls: "SK030899" },
  { id: "4", lat: 50.28, lng: -103.85, title: "Pasture Land — RM of Indian Head", price: "$625,000", acres: "480", rm: "Indian Head", mls: "SK030567" },
  { id: "5", lat: 52.13, lng: -106.67, title: "Grain Farm — RM of Corman Park", price: "$2,100,000", acres: "960", rm: "Corman Park", mls: "SK031456" },
  { id: "6", lat: 50.62, lng: -105.95, title: "Ranch — RM of Arm River", price: "$1,800,000", acres: "1280", rm: "Arm River", mls: "SK031789" },
  { id: "7", lat: 51.75, lng: -104.25, title: "Grain Farm — RM of Elfros", price: "$550,000", acres: "320", rm: "Elfros", mls: "SK031890" },
  { id: "8", lat: 49.85, lng: -104.15, title: "Mixed Farm — RM of Brock", price: "$975,000", acres: "640", rm: "Brock", mls: "SK031901" },
  { id: "9", lat: 50.75, lng: -106.45, title: "Hay Land — RM of Dundurn", price: "$320,000", acres: "160", rm: "Dundurn", mls: "SK032012" },
  { id: "10", lat: 51.45, lng: -103.55, title: "Grain Farm — RM of Saltcoats", price: "$780,000", acres: "480", rm: "Saltcoats", mls: "SK032123" },
];

const landTypes = ["All Types", "Grain", "Hay", "Mixed", "Pasture", "Ranch"];
const priceRanges = ["Any Price", "Under $500K", "$500K–$1M", "$1M–$2M", "$2M+"];
const acreRanges = ["Any Acreage", "Under 320 ac", "320–640 ac", "640–1280 ac", "1280+ ac"];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MapSearchPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(null);
  const [landType, setLandType] = useState("All Types");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [acreRange, setAcreRange] = useState("Any Acreage");
  const [isDrawing, setIsDrawing] = useState(false);

  /* Load Mapbox GL JS from CDN */
  useEffect(() => {
    // Check if already loaded
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).mapboxgl) {
      initMap();
      return;
    }

    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css";
    document.head.appendChild(link);

    // Load JS
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

    // Use env var or placeholder
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.placeholder";
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-105.5, 51.0], // Saskatchewan center
      zoom: 5.5,
    });

    mapRef.current = map;

    map.on("load", () => {
      setMapLoaded(true);

      // Add pins
      mockPins.forEach((pin: MapPin) => {
        const el = document.createElement("div");
        el.className = "map-marker";
        el.style.cssText =
          "width:28px;height:28px;background:#15803d;border:2px solid #fff;border-radius:50%;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;";
        el.innerHTML =
          '<svg width="14" height="14" viewBox="0 0 20 20" fill="white"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>';

        el.addEventListener("click", () => setSelectedPin(pin));

        new mapboxgl.Marker({ element: el })
          .setLngLat([pin.lng, pin.lat])
          .addTo(map);
      });
    });
  }, []);

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col lg:flex-row">
      {/* Sidebar filters */}
      <div className="w-full shrink-0 overflow-y-auto border-b border-gray-200 bg-white p-4 lg:w-80 lg:border-b-0 lg:border-r">
        <h1 className="mb-4 text-xl font-bold text-green-800">Map Search</h1>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-bold text-gray-600">Land Type</label>
            <select
              value={landType}
              onChange={(e) => setLandType(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-green-600 focus:outline-none"
            >
              {landTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-gray-600">Price Range</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-green-600 focus:outline-none"
            >
              {priceRanges.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-gray-600">Acreage</label>
            <select
              value={acreRange}
              onChange={(e) => setAcreRange(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-green-600 focus:outline-none"
            >
              {acreRanges.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>

          <button className="w-full rounded bg-green-700 py-2 text-sm font-bold text-white hover:bg-green-800">
            Update Results
          </button>

          {/* Draw tool */}
          <button
            onClick={() => setIsDrawing(!isDrawing)}
            className={`flex w-full items-center justify-center gap-2 rounded border py-2 text-sm font-medium transition-colors ${
              isDrawing
                ? "border-green-600 bg-green-50 text-green-700"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            {isDrawing ? "Cancel Drawing" : "Draw Search Area"}
          </button>
        </div>

        {/* Quick city links */}
        <div className="mt-6">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">Quick Search</h3>
          <div className="flex flex-wrap gap-1.5">
            {["Regina", "Saskatoon", "Moose Jaw", "Prince Albert", "Swift Current", "Yorkton"].map((city) => (
              <button
                key={city}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-green-100 hover:text-green-700"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-6 rounded bg-gray-50 p-3 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-bold text-green-700">{mockPins.length}</span> listings found
          </p>
        </div>

        {/* Selected pin card */}
        {selectedPin && (
          <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
            <h3 className="text-sm font-bold text-gray-900">{selectedPin.title}</h3>
            <p className="mt-1 text-lg font-bold text-green-700">{selectedPin.price}</p>
            <p className="text-xs text-gray-500">
              {selectedPin.acres} acres · MLS® {selectedPin.mls}
            </p>
            <div className="mt-3 flex gap-2">
              <Link
                href="/contact"
                className="rounded bg-green-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-green-800"
              >
                Request Info
              </Link>
              <button
                onClick={() => setSelectedPin(null)}
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

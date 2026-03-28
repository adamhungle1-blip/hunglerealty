"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import type { MapPin } from "@/components/AcreageMap";
import SraDisclaimer from "@/components/SraDisclaimer";

const AcreageMap = dynamic(() => import("@/components/AcreageMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
      Loading map…
    </div>
  ),
});

const propertyTypes = [
  "All Types",
  "Agriculture",
  "Single Family",
  "Multi-family",
  "Vacant Land",
  "Business",
];
const priceRanges = [
  { label: "Any Price", min: "", max: "" },
  { label: "Under $500K", min: "", max: "500000" },
  { label: "$500K–$1M", min: "500000", max: "1000000" },
  { label: "$1M–$2M", min: "1000000", max: "2000000" },
  { label: "$2M+", min: "2000000", max: "" },
];

interface MapApiPin {
  id: string;
  lat: number;
  lng: number;
  price: number;
  address: string;
  acres: number;
  photo: string | null;
}

export default function MapSearchContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("propertyType") || "All Types";
  const [propertyType, setPropertyType] = useState(initialType);
  const [priceIdx, setPriceIdx] = useState(0);
  const [pins, setPins] = useState<MapPin[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPins = useCallback(async () => {
    setLoading(true);
    try {
      // Build filters for the standard listings API
      const params = new URLSearchParams({ top: "100", sort: "newest" });
      if (propertyType !== "All Types") params.set("propertyType", propertyType);
      const range = priceRanges[priceIdx];
      if (range.min) params.set("priceMin", range.min);
      if (range.max) params.set("priceMax", range.max);

      // Paginate through all results to get every pin
      const allPins: MapPin[] = [];
      let skip = 0;
      let total = 0;

      while (true) {
        params.set("skip", String(skip));
        const res = await fetch(`/api/listings?${params.toString()}`);
        if (!res.ok) break;
        const data = await res.json();
        total = data["@odata.count"] || 0;
        const listings = data.value || [];
        if (listings.length === 0) break;

        for (const l of listings) {
          if (!l.Latitude || !l.Longitude) continue;
          const photo =
            l.Media && l.Media.length > 0
              ? (l.Media.find((m: { PreferredPhotoYN?: boolean }) => m.PreferredPhotoYN)?.MediaURL ||
                l.Media.sort((a: { Order: number }, b: { Order: number }) => a.Order - b.Order)[0]?.MediaURL ||
                null)
              : null;
          const acres =
            l.LotSizeUnits === "acres" && l.LotSizeArea ? l.LotSizeArea : 0;
          allPins.push({
            id: l.ListingKey,
            lat: l.Latitude,
            lng: l.Longitude,
            price: l.ListPrice || 0,
            address: l.UnparsedAddress || l.City || "Saskatchewan",
            acres,
            photo,
          });
        }

        skip += 100;
        if (skip >= total) break;
      }

      setPins(allPins);
      setTotalCount(total);
    } catch {
      console.error("Failed to load map pins");
    } finally {
      setLoading(false);
    }
  }, [propertyType, priceIdx]);

  useEffect(() => {
    fetchPins();
  }, [fetchPins]);

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full shrink-0 overflow-y-auto border-b border-gray-200 bg-white p-4 lg:w-80 lg:border-b-0 lg:border-r">
        <h1 className="mb-4 text-xl font-bold text-green-800">Map Search</h1>

        <div className="space-y-3">
          <div>
            <label htmlFor="map-property-type" className="mb-1 block text-xs font-bold text-gray-600">
              Property Type
            </label>
            <select
              id="map-property-type"
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
            <label htmlFor="map-price-range" className="mb-1 block text-xs font-bold text-gray-600">
              Price Range
            </label>
            <select
              id="map-price-range"
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
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
            Quick Search
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Regina",
              "Saskatoon",
              "Moose Jaw",
              "Prince Albert",
              "Swift Current",
              "Yorkton",
            ].map((city) => (
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
              "Loading listings…"
            ) : (
              <>
                <span className="font-bold text-green-700">{pins.length}</span>{" "}
                pins on map
                {totalCount > 0 && (
                  <span className="text-xs text-gray-400">
                    {" "}
                    ({totalCount.toLocaleString()} total)
                  </span>
                )}
              </>
            )}
          </p>
        </div>

        <div className="mt-4">
          <SraDisclaimer />
        </div>
      </div>

      {/* Map */}
      <div className="relative flex-1" style={{ minHeight: "400px" }}>
        <AcreageMap pins={pins} />
      </div>
    </div>
  );
}

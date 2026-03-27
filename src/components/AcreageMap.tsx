"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { DdfListing } from "@/lib/ddf";

// Fix Leaflet default marker icons (they break in bundlers)
const markerIcon = L.divIcon({
  className: "",
  html: `<svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.268 21.732 0 14 0z" fill="#166534"/>
    <circle cx="14" cy="14" r="6" fill="white"/>
  </svg>`,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -36],
});

function formatPrice(price: number): string {
  if (price >= 1_000_000) return `$${(price / 1_000_000).toFixed(1)}M`;
  if (price >= 1_000) return `$${(price / 1_000).toFixed(0)}K`;
  return `$${price.toLocaleString()}`;
}

interface AcreageMapProps {
  listings: DdfListing[];
}

export default function AcreageMap({ listings }: AcreageMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  // Initialize map once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [50.45, -104.62], // Regina, SK
      zoom: 7,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    markersRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update markers when listings change
  useEffect(() => {
    if (!mapRef.current || !markersRef.current) return;

    markersRef.current.clearLayers();

    const validListings = listings.filter(
      (l) => l.Latitude && l.Longitude && l.Latitude !== 0 && l.Longitude !== 0
    );

    if (validListings.length === 0) return;

    for (const listing of validListings) {
      const address =
        listing.UnparsedAddress ||
        [listing.City, listing.StateOrProvince].filter(Boolean).join(", ") ||
        "Acreage";

      const acres = listing.LotSizeArea
        ? listing.LotSizeUnits?.toLowerCase().includes("acre")
          ? `${listing.LotSizeArea.toLocaleString()} acres`
          : listing.LotSizeArea >= 43560
            ? `${(listing.LotSizeArea / 43560).toFixed(1)} acres`
            : `${listing.LotSizeArea.toLocaleString()} sqft`
        : "";

      const popupHtml = `
        <div style="min-width:180px;font-family:system-ui,sans-serif;">
          <div style="font-weight:700;font-size:15px;color:#166534;">${formatPrice(listing.ListPrice)}</div>
          <div style="font-size:13px;margin:4px 0;color:#333;">${address}</div>
          ${acres ? `<div style="font-size:12px;color:#666;">${acres}</div>` : ""}
          <a href="/listing/${listing.ListingId}"
             style="display:inline-block;margin-top:6px;font-size:12px;color:#166534;font-weight:600;text-decoration:none;">
            View Details →
          </a>
        </div>
      `;

      L.marker([listing.Latitude!, listing.Longitude!], { icon: markerIcon })
        .bindPopup(popupHtml)
        .addTo(markersRef.current!);
    }

    // Fit bounds to show all markers
    if (validListings.length > 1) {
      const bounds = L.latLngBounds(
        validListings.map((l) => [l.Latitude!, l.Longitude!] as L.LatLngTuple)
      );
      mapRef.current.fitBounds(bounds, { padding: [40, 40], maxZoom: 10 });
    } else if (validListings.length === 1) {
      mapRef.current.setView(
        [validListings[0].Latitude!, validListings[0].Longitude!],
        10
      );
    }
  }, [listings]);

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
      style={{ minHeight: "400px" }}
    />
  );
}

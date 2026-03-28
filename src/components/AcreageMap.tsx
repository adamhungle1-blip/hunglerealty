"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface MapPin {
  id: string;
  lat: number;
  lng: number;
  price: number;
  address: string;
  acres: number;
  photo: string | null;
}

// Green drop-pin SVG icon
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
  pins: MapPin[];
}

export default function AcreageMap({ pins }: AcreageMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  // Initialize map once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [52.0, -106.0], // Center of Saskatchewan
      zoom: 6,
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

  // Update markers when pins change
  useEffect(() => {
    if (!mapRef.current || !markersRef.current) return;

    markersRef.current.clearLayers();

    if (pins.length === 0) return;

    for (const pin of pins) {
      const acresStr =
        pin.acres > 0 ? `${pin.acres.toLocaleString()} acres` : "";

      const listingUrl = `/listing/${pin.id}`;

      const photoHtml = pin.photo
        ? `<a href="${listingUrl}" style="display:block;"><img src="${pin.photo}" alt="" style="width:100%;height:90px;object-fit:cover;border-radius:6px 6px 0 0;display:block;cursor:pointer;" /></a>`
        : "";

      const popupHtml = `
        <div style="width:220px;font-family:system-ui,sans-serif;overflow:hidden;margin:-13px -20px -13px -20px;">
          ${photoHtml}
          <div style="padding:8px 12px 10px;">
            <a href="${listingUrl}" style="font-weight:700;font-size:15px;color:#166534;text-decoration:none;display:block;cursor:pointer;">${formatPrice(pin.price)}</a>
            <div style="font-size:13px;margin:3px 0;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${pin.address}</div>
            ${acresStr ? `<div style="font-size:12px;color:#666;">${acresStr}</div>` : ""}
            <a href="${listingUrl}"
               style="display:inline-block;margin-top:5px;font-size:12px;color:#166534;font-weight:600;text-decoration:none;">
              View Details &rarr;
            </a>
          </div>
        </div>
      `;

      L.marker([pin.lat, pin.lng], { icon: markerIcon })
        .bindPopup(popupHtml, { maxWidth: 220, minWidth: 220, className: "acreage-popup" })
        .addTo(markersRef.current!);
    }

    // Fit bounds to show all markers
    if (pins.length > 1) {
      const bounds = L.latLngBounds(
        pins.map((p) => [p.lat, p.lng] as L.LatLngTuple)
      );
      mapRef.current.fitBounds(bounds, { padding: [40, 40], maxZoom: 10 });
    } else if (pins.length === 1) {
      mapRef.current.setView([pins[0].lat, pins[0].lng], 10);
    }
  }, [pins]);

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
      style={{ minHeight: "400px" }}
    />
  );
}

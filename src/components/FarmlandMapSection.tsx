"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { MapPin } from "@/components/AcreageMap";

const AcreageMap = dynamic(() => import("@/components/AcreageMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
      Loading map…
    </div>
  ),
});

export default function FarmlandMapSection() {
  const [pins, setPins] = useState<MapPin[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/listings/map?propertyType=Agriculture");
        if (!res.ok) return;
        const data = await res.json();
        setPins(data.pins || []);
      } catch {
        // fail silently
      }
    }
    load();
  }, []);

  return (
    <section className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
          Saskatchewan Farmland Map
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-sm text-gray-600">
          Explore every farmland listing across Saskatchewan. Click any pin to
          view details.
        </p>
      </div>
      <div className="relative h-[450px] w-full lg:h-[550px]">
        <AcreageMap pins={pins} />
        {pins.length > 0 && (
          <div className="absolute bottom-3 left-3 z-[1000] rounded-lg bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 shadow backdrop-blur">
            {pins.length.toLocaleString()} farm listings on map
          </div>
        )}
        <div className="absolute bottom-3 right-3 z-[1000]">
          <Link
            href="/search?propertyType=Agriculture"
            className="rounded-lg bg-green-800 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-green-700"
          >
            View All Farm Listings
          </Link>
        </div>
      </div>
    </section>
  );
}

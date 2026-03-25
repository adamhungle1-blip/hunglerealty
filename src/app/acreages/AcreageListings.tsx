"use client";

import dynamic from "next/dynamic";
import { sampleAcreages } from "@/data/sample-acreages";

const ListingsMap = dynamic(() => import("@/components/ListingsMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 items-center justify-center bg-gray-100">
      <p className="text-sm text-gray-400">Loading map...</p>
    </div>
  ),
});

export default function AcreageListings() {
  return (
    <ListingsMap
      listings={sampleAcreages}
      mapCenter={[-104.6189, 50.4800]}
      mapZoom={9}
      pageTitle="Acreage Listings"
      pageSubtitle="Regina & surrounding area"
      heroImage="/hero/slide4.jpg"
    />
  );
}

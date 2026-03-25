"use client";

import dynamic from "next/dynamic";
import { sampleResidential } from "@/data/sample-residential";

const ListingsMap = dynamic(() => import("@/components/ListingsMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 items-center justify-center bg-gray-100">
      <p className="text-sm text-gray-400">Loading map...</p>
    </div>
  ),
});

export default function ResidentialListings() {
  return (
    <ListingsMap
      listings={sampleResidential}
      mapCenter={[-104.6189, 50.4452]}
      mapZoom={10}
      pageTitle="Residential Listings"
      pageSubtitle="Regina & surrounding area"
      heroImage="/hero/residential.jpg"
    />
  );
}

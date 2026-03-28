import type { Metadata } from "next";
import { Suspense } from "react";
import MapSearchContent from "./MapSearchContent";

export const metadata: Metadata = {
  title: "Map Search — Saskatchewan Farmland & Acreages",
  description:
    "Search Saskatchewan farmland, acreages, and rural properties on an interactive map. Filter by RM, price, acreage, and property type. Adam Hungle, REALTOR® — 306.531.8854.",
  openGraph: {
    title: "Map Search — Saskatchewan Farmland & Acreages | Hungle Realty",
    description:
      "Interactive map search for farmland and acreages across Saskatchewan. Filter by RM, price, acreage, and property type.",
    images: [{ url: "/hero/slide2.jpg", width: 1200, height: 630 }],
  },
};

export default function MapPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[calc(100vh-64px)] items-center justify-center">
          <p className="text-sm text-gray-500">Loading map…</p>
        </div>
      }
    >
      <MapSearchContent />
    </Suspense>
  );
}

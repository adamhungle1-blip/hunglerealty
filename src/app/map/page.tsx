import { Suspense } from "react";
import MapSearchContent from "./MapSearchContent";

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

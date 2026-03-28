import type { Metadata } from "next";
import FeaturedListingsGrid from "./FeaturedListingsGrid";
import SraDisclaimer from "@/components/SraDisclaimer";

export const metadata: Metadata = {
  title: "Featured Listings | Adam Hungle",
  description:
    "View Adam Hungle's featured Saskatchewan farmland listings. Grain land, pasture, mixed-use & development land across Saskatchewan.",
};

export default function FeaturedPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#1a3a1a] py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold italic text-[#d4a520] md:text-4xl">
            Featured Listings
          </h1>
          <p className="mt-2 text-gray-300">
            Adam Hungle&apos;s active farmland listings across Saskatchewan
          </p>
        </div>
      </section>

      {/* Listings */}
      <FeaturedListingsGrid />

      {/* Disclaimer */}
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <SraDisclaimer />
      </section>
    </div>
  );
}

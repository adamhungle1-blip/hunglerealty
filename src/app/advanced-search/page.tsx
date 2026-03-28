import type { Metadata } from "next";
import SraDisclaimer from "@/components/SraDisclaimer";

export const metadata: Metadata = {
  title: "Advanced Property Search",
  description:
    "Search every MLS® listing in Saskatchewan — farmland, acreages, residential, commercial, and more. Powered by the Saskatchewan REALTORS® Association IDX.",
};

export default function AdvancedSearchPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-green-800 py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Advanced Property Search
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-green-100 md:text-lg">
            Search every active MLS® listing across Saskatchewan — farmland,
            acreages, residential, commercial, vacant land, and more. Use the
            filters below to narrow down by location, price, property type, and
            other criteria to find exactly what you&apos;re looking for.
          </p>
        </div>
      </section>

      {/* Matrix IDX Search Embed */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          style={{ minHeight: "800px" }}
        >
          <iframe
            src="https://matrix.skmls.ca/Matrix/public/IDX.aspx?idx=6470477"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "800px" }}
            loading="lazy"
            title="Saskatchewan MLS® Property Search"
          />
        </div>

        <SraDisclaimer />
      </section>
    </div>
  );
}

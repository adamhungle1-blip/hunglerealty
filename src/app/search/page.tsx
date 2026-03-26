import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Saskatchewan Farm Listings | Hungle Realty",
  description:
    "Search all MLS® farm, ranch, and acreage listings across Saskatchewan. Filter by price, location, acreage, and more. Updated every 5 minutes from SRAR IDX.",
};

export default function SearchPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-green-800 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Search All Saskatchewan Farm Listings
          </h1>
          <p className="mt-2 text-green-100">
            Browse live MLS® listings updated every 5 minutes from the
            Saskatoon Region Association of REALTORS®
          </p>
        </div>
      </section>

      {/* IDX Iframe */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <iframe
            src="https://matrix.skmls.ca/Matrix/public/IDX.aspx?idx=6470477"
            width="100%"
            height="900"
            frameBorder="0"
            style={{ minHeight: "900px", border: "none" }}
            title="Saskatchewan MLS® Farm Listings Search"
            allowFullScreen
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="text-xs leading-relaxed text-gray-500">
          The above information is from sources deemed reliable but should not
          be relied upon without independent verification. The information
          presented here is for general interest only, no guarantees apply. The
          Saskatoon Region Association of REALTORS® (SRAR) IDX Reciprocity
          listings are displayed in accordance with SRAR&apos;s MLS® Data
          Access Agreement and are copyright of the Saskatoon Region Association
          of REALTORS®. MLS® System data of the Saskatoon Region Association of
          REALTORS® displayed on this site is refreshed every 5 minutes.
        </div>
      </section>
    </div>
  );
}

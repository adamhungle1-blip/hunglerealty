import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ResidentialListings from "./ResidentialListings";

export const metadata: Metadata = {
  title: "Residential Real Estate in Regina | Homes for Sale | Hungle Realty",
  description:
    "Browse homes for sale in Regina and surrounding communities. Interactive map search, neighbourhood guides, and expert advice from Adam Hungle, REALTOR®.",
};

export default function ResidentialPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[280px] overflow-hidden md:h-[340px]">
        <Image
          src="/hero/residential.jpg"
          alt="Residential real estate in Regina, Saskatchewan"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-5xl">
            Residential Real Estate in Regina
          </h1>
          <p className="mt-3 max-w-2xl text-base text-green-200 md:text-lg">
            Helping buyers and sellers navigate Regina homes, acreages, and family
            moves with honest advice and proven marketing.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#listings"
              className="rounded bg-green-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-800"
            >
              Search Regina Homes
            </Link>
            <Link
              href="/sell"
              className="rounded border-2 border-white px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-green-900"
            >
              Get a Home Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-10 text-center">
        <p className="text-lg leading-relaxed text-gray-700">
          Hungle Realty is known across Saskatchewan for land and farm real estate,
          but we also help clients buy and sell residential property in Regina and
          surrounding communities. Whether you&apos;re upsizing, downsizing,
          relocating, or selling a family home, we bring the same straight advice,
          strong marketing, and get-it-done approach.
        </p>
      </section>

      {/* Listings */}
      <div id="listings">
        <ResidentialListings />
      </div>
    </div>
  );
}

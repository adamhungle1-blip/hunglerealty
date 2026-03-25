import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saskatchewan Acreages for Sale | Hungle Realty",
  description:
    "Browse acreages for sale across Saskatchewan. Find your perfect rural property with Adam Hungle, REALTOR® — Sutton Group Results Realty.",
};

export default function AcreagesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[260px] overflow-hidden md:h-[320px]">
        <Image
          src="/hero/slide4.jpg"
          alt="Saskatchewan acreage property"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            Saskatchewan Acreages
          </h1>
          <p className="mt-2 text-lg text-green-200">
            Find your perfect rural property
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="rounded-lg bg-green-50 p-10">
          <h2 className="mb-4 text-2xl font-bold text-green-800">Coming Soon</h2>
          <p className="mb-6 text-gray-600">
            We're building a dedicated acreage search for Saskatchewan. In the meantime, contact Adam
            directly to discuss available acreage properties.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded bg-green-700 px-8 py-3 font-bold text-white transition-colors hover:bg-green-800"
            >
              Contact Adam
            </Link>
            <a href="tel:3065318854" className="text-sm font-medium text-gray-500 hover:text-green-700">
              Or call 306.531.8854
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

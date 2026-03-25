import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saskatchewan Residential Real Estate | Hungle Realty",
  description:
    "Browse residential properties for sale across Saskatchewan. Homes in Regina, Saskatoon, Moose Jaw, and more with Adam Hungle, REALTOR®.",
};

export default function ResidentialPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[260px] overflow-hidden md:h-[320px]">
        <Image
          src="/hero/residential.jpg"
          alt="Saskatchewan residential property"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            Residential Real Estate
          </h1>
          <p className="mt-2 text-lg text-green-200">
            Homes across Saskatchewan
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="rounded-lg bg-green-50 p-10">
          <h2 className="mb-4 text-2xl font-bold text-green-800">Coming Soon</h2>
          <p className="mb-6 text-gray-600">
            We're building a dedicated residential search covering Regina, Saskatoon, Moose Jaw, and
            communities across Saskatchewan. Contact Adam for current residential listings.
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

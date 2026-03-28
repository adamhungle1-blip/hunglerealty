import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse Saskatchewan farmland, homes, and acreages for sale with Adam Hungle, REALTOR®.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#0f1a0f] px-4 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c49a2a]">
        404
      </p>
      <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
        Page Not Found
      </h1>
      <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#c49a2a] to-transparent" />
      <p className="mt-6 max-w-md text-lg text-gray-400">
        The page you&apos;re looking for may have been moved or no longer exists.
        Let&apos;s get you back on track.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-[#c49a2a] px-6 py-3 font-bold text-[#0f1a0f] transition-all hover:bg-[#d4a520] hover:shadow-lg"
        >
          Back to Home
        </Link>
        <Link
          href="/search"
          className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-all hover:border-[#c49a2a]/40 hover:bg-white/5"
        >
          Search Listings
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-all hover:border-[#c49a2a]/40 hover:bg-white/5"
        >
          Contact Adam
        </Link>
      </div>

      <div className="mt-12 grid gap-4 text-sm text-gray-500 sm:grid-cols-3">
        <Link href="/buying" className="hover:text-[#c49a2a]">
          Buying Guide
        </Link>
        <Link href="/selling" className="hover:text-[#c49a2a]">
          Selling Guide
        </Link>
        <Link href="/field-notes" className="hover:text-[#c49a2a]">
          Field Notes
        </Link>
      </div>
    </div>
  );
}

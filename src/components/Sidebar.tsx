import Link from "next/link";
import { rmList } from "@/data/rm-list";
import { toSlug } from "@/data/rm-data";

// Pick ~40 popular RMs alphabetically for the quick search
const quickSearchRMs = rmList.slice(0, 40);

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Like or Share */}
      <div className="rounded border border-gray-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Like or Share</span>
          <div className="flex gap-2">
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877f2] text-white" aria-label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white" aria-label="X">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* What Is Your Farmland Worth? */}
      <div className="rounded-lg bg-green-800 p-6 text-center text-white">
        <h3 className="text-xl font-bold">What Is Your Farmland Worth?</h3>
        <p className="mt-3 text-sm leading-relaxed text-green-100">
          Get a free, confidential valuation from Saskatchewan&apos;s dedicated farm real estate specialist.
        </p>
        <a
          href="/sell"
          className="mt-4 inline-block rounded-full border-2 border-white bg-transparent px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-green-800"
        >
          Request Free Valuation
        </a>
        <p className="mt-3 text-sm text-green-200">
          Or call <a href="tel:3065318854" className="font-bold underline">306.531.8854</a>
        </p>
      </div>

      {/* Over $24M in Active Listings */}
      <div className="rounded border border-gray-200 bg-white p-6 text-center">
        <h3 className="text-lg font-bold text-gray-900">Over $24M in Active Listings</h3>
        <p className="mt-2 text-sm text-gray-600">
          Adam Hungle works exclusively in Saskatchewan farmland — grain, pasture, mixed-use &amp; development land.
        </p>
        <a
          href="/search"
          className="mt-4 inline-block w-full rounded bg-green-700 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-800"
        >
          View Featured Listings
        </a>
        <a href="#" className="mt-2 inline-block text-sm text-gray-600 hover:text-green-800">
          Register as a Buyer →
        </a>
      </div>

      {/* RM Quick Search */}
      <div className="rounded border border-gray-200 bg-white p-6">
        <h3 className="mb-3 border-b border-gray-200 pb-2 text-lg font-bold text-gray-900">
          RM Quick Search
        </h3>
        <ul className="space-y-1.5">
          {quickSearchRMs.map((rm) => (
            <li key={rm}>
              <Link
                href={`/rm/${toSlug(rm)}`}
                className="text-sm text-green-700 hover:text-green-900 hover:underline"
              >
                Rm of {rm}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

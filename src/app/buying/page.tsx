import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Buying Farmland in Saskatchewan | Hungle Realty",
  description:
    "Expert guidance for buying Saskatchewan farmland. Access off-market listings, comparable sales data, and 20+ years of local knowledge with Adam Hungle, REALTOR®.",
};

const investmentReasons = [
  {
    title: "Consistent Value Growth",
    text: "Saskatchewan farmland values have increased every year for more than a decade. FCC reported a 13.1% increase in 2024 (highest in Canada), and mid-2025 data shows values up another 12% year-over-year. Unlike stocks or crypto, farmland doesn't crash overnight.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Limited Supply",
    text: "They're not making more land. Saskatchewan has a finite amount of productive farmland, and as operations expand and consolidate, the supply of available acres gets tighter every year. That scarcity supports long-term value.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Tangible, Productive Asset",
    text: "Unlike paper investments, farmland produces income. Whether you're farming it yourself or renting it out, the land works for you. Cash rents in Saskatchewan are running $68\u2013$124 per acre depending on the region and soil quality.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Inflation Hedge",
    text: "When input costs and food prices rise, so does the value of the land that produces the food. Farmland has historically outpaced inflation, making it one of the best hedges available to Canadian investors.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Strong Demand from Multiple Buyer Types",
    text: "Local farmers expanding operations, young farmers getting started, out-of-province investors, and even institutional buyers are all competing for Saskatchewan dirt. That broad demand base supports prices even in tighter economic cycles.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const realtorReasons = [
  {
    title: "You Won't Overpay",
    text: "Adam will provide a detailed analysis of comparable sales in the area so you know exactly what the land is worth before you make an offer. Farmland pricing is hyper-local \u2014 two quarters in the same RM can be worth very different amounts depending on soil class, drainage, access, and improvements.",
  },
  {
    title: "Access to Off-Market Listings",
    text: "Not every farm for sale ends up on MLS\u00ae. After 20 years in the business, we have a network of landowners, retiring farmers, and estate contacts that give our buyers first crack at properties before they hit the public market.",
  },
  {
    title: "Due Diligence Protection",
    text: "There's more to buying farmland than agreeing on a price. Mineral rights, surface leases, oil and gas activity, drainage issues, easements, environmental liabilities, and zoning \u2014 these are all things that can cost you dearly if missed. We know what to look for.",
  },
  {
    title: "Negotiation Expertise",
    text: "We've closed over $100 million in transactions. We know how to structure offers, negotiate terms, and protect your interests. The cost of a Realtor is almost always recovered through better pricing and avoided pitfalls.",
  },
  {
    title: "Financing Connections",
    text: "Obtaining a loan for farmland requires a lender who specializes in agricultural properties. We'll connect you with the right people \u2014 FCC, credit unions, and ag lenders who understand the unique nature of farm financing.",
  },
];

const howWeHelp = [
  {
    title: "We Know the Area",
    text: "We're experts in Saskatchewan farmland and will make sure you're up to date on current market conditions, soil quality, popular crops, rental potential, and everything else that affects your purchase.",
  },
  {
    title: "The Best Farm Search in Saskatchewan",
    text: "Our detailed search tool gives you access to every farm listed on MLS\u00ae, searchable by RM, acreage, price, property type, and more. It's updated regularly so you're always looking at the most current inventory.",
  },
  {
    title: "We Act Fast So You Can Too",
    text: "When you register on our site, we build a customized search based on what you're looking for. From that moment on, you'll get automatic email alerts for new listings, price changes, and status updates. In a competitive market, being first matters.",
  },
  {
    title: "In-Depth Land Analysis",
    text: "Before you make an offer, Adam will provide a thorough analysis of the land including soil classification, assessment values, crop history, and comparable sales for the area. No guesswork.",
  },
];

export default function BuyingPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[260px] overflow-hidden md:h-[320px]">
        <Image
          src="/hero/slide3.jpg"
          alt="Saskatchewan farmland aerial view"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            Buying Farmland in Saskatchewan
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-lg leading-relaxed text-gray-700">
          Deciding to buy farmland is one of the biggest investments you'll ever make &mdash; and
          finding the right property at the right price takes more than just browsing listings. You
          need someone who knows the land, knows the market, and will make sure you don't leave money
          on the table. That's where we come in. With 20 years of experience, expert local knowledge,
          and a network of professional contacts, Adam and Kristy Hungle will help you find and
          purchase farmland in Saskatchewan with confidence. Many farms and parcels of land are for
          sale but never make it to the open market &mdash; contact us to find out about these
          back-pocket listings.
        </p>
      </section>

      {/* Why Saskatchewan Farmland */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-green-800">
            Why Saskatchewan Farmland Is a Smart Investment
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">
            Farmland has been one of the strongest-performing assets in Canada over the past decade,
            and Saskatchewan has led the charge. Here's why buyers continue to see farmland as a
            safe, long-term investment:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {investmentReasons.map((r) => (
              <div key={r.title} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 text-green-700">{r.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{r.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why You Need a Realtor */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-green-800">
            Why You Need a Realtor When Buying Farmland
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">
            Some buyers think they can save money by going directly to a seller or handling the deal
            themselves. In our experience, that's where the most expensive mistakes happen.
          </p>
          <div className="space-y-6">
            {realtorReasons.map((r, i) => (
              <div key={r.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-green-800 py-14 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            How We Help You Find the Right Farm
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {howWeHelp.map((h) => (
              <div key={h.title} className="rounded-lg bg-white/10 p-6">
                <h3 className="mb-2 text-lg font-bold">{h.title}</h3>
                <p className="text-sm leading-relaxed text-green-100">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="mb-4 text-center text-2xl font-bold text-green-800">
          Whether You're a Seasoned Farmer or a First-Time Buyer
        </h2>
        <p className="mb-8 text-center text-gray-600 leading-relaxed">
          If you're looking in a specific RM or you're not sure which areas are best suited to your
          operation, Adam can help. With 20 years of local knowledge &mdash; especially around Regina and
          southern Saskatchewan &mdash; he'll help you evaluate your options based on soil quality,
          proximity, price, and growth potential. Whether you're a seasoned investor adding to your
          portfolio, a young farmer looking to expand, or someone relocating to Saskatchewan, let us
          help you cover all your blind spots and make the smartest investment possible.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/buy"
            className="rounded bg-green-700 px-8 py-3 text-center font-bold text-white transition-colors hover:bg-green-800"
          >
            Start Your Farm Search
          </Link>
          <Link
            href="/"
            className="rounded border-2 border-green-700 px-8 py-3 text-center font-bold text-green-700 transition-colors hover:bg-green-50"
          >
            View Listings
          </Link>
          <a
            href="tel:3065318854"
            className="text-sm font-medium text-gray-500 hover:text-green-700"
          >
            Or call 306.531.8854
          </a>
        </div>
      </section>
    </div>
  );
}

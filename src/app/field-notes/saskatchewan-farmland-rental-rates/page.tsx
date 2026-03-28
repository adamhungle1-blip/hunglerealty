import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saskatchewan Farmland Rental Rates (2026)",
  description:
    "Current Saskatchewan farmland rental rates by region — $68 to $124/acre. Cash rent data, crop share arrangements, rent-to-price ratios, and factors that affect lease rates across SK.",
  openGraph: {
    title: "Saskatchewan Farmland Rental Rates (2026) | Hungle Realty",
    description:
      "Current Saskatchewan farmland rental rates by region — $68 to $124/acre. Cash rent data, crop share arrangements, and factors that affect lease rates.",
  },
};

/* ── Rental rate data by region ─────────────────────────── */
const rentalRates = [
  {
    region: "Northeast",
    avgRent: "$124",
    landValue: "$4,450+",
    ratio: "2.8%",
    soil: "Black",
    notes: "Highest rents in the province — premium soil, premium yields",
    rmLink: { name: "Tisdale", slug: "tisdale" },
  },
  {
    region: "Northwest",
    avgRent: "$105",
    landValue: "$3,700+",
    ratio: "2.8%",
    soil: "Dark Brown / Black",
    notes: "Fast-rising rents tracking 20% land value gains",
    rmLink: { name: "North Battleford", slug: "north-battleford" },
  },
  {
    region: "West Central",
    avgRent: "$87",
    landValue: "$3,700+",
    ratio: "2.4%",
    soil: "Dark Brown",
    notes: "Solid rents, steady demand from expanding operations",
    rmLink: { name: "Dundurn", slug: "dundurn" },
  },
  {
    region: "East Central",
    avgRent: "$68",
    landValue: "$3,600+",
    ratio: "1.9%",
    soil: "Dark Brown / Black",
    notes: "Lower ratio — land values have outpaced rent increases",
    rmLink: { name: "Humboldt", slug: "humboldt" },
  },
  {
    region: "Southeast",
    avgRent: "$93",
    landValue: "$3,400+",
    ratio: "2.7%",
    soil: "Black / Dark Brown",
    notes: "Strong grain belt with consistent rental demand",
    rmLink: { name: "Indian Head", slug: "indian-head" },
  },
  {
    region: "Southwest",
    avgRent: "$72",
    landValue: "$2,750+",
    ratio: "2.6%",
    soil: "Brown",
    notes: "Lower rents reflect drier conditions and yield risk",
    rmLink: { name: "Swift Current", slug: "swift-current" },
  },
];

export default function SaskatchewanFarmlandRentalRates() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a2230]">
        <div className="absolute inset-0">
          <Image
            src="/hero/slide2.jpg"
            alt="Saskatchewan farmland at sunrise"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c49a2a]">
            Field Notes &middot; Rental Rates
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Saskatchewan Farmland<br />Rental Rates
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            2026 Cash Rent Data by Region
          </p>

          {/* Key stats */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-[#c49a2a]">$68–$124</p>
              <p className="mt-1 text-xs font-semibold text-white">Cash Rent Range</p>
              <p className="text-[11px] text-gray-500">Per acre, 2025/26</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-[#c49a2a]">3.1%</p>
              <p className="mt-1 text-xs font-semibold text-white">Rent-to-Price Ratio</p>
              <p className="text-[11px] text-gray-500">Provincial avg</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-[#c49a2a]">$93</p>
              <p className="mt-1 text-xs font-semibold text-white">Provincial Avg Rent</p>
              <p className="text-[11px] text-gray-500">Cultivated land</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-[#c49a2a]">1.8–4.6%</p>
              <p className="mt-1 text-xs font-semibold text-white">Actual Ratio Range</p>
              <p className="text-[11px] text-gray-500">Deal-by-deal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span>/</span>
            <Link href="/field-notes" className="hover:text-green-700">Field Notes</Link>
            <span>/</span>
            <span className="font-medium text-gray-900">Rental Rates 2026</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-5xl px-4 py-12">
        {/* Overview */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            What Does Farmland Rent for in Saskatchewan?
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Saskatchewan farmland cash rental rates range from approximately $68 per acre in
              east-central regions to $124 or more per acre in the premium northeast black soil zone.
              The provincial rent-to-price ratio has held remarkably steady at 3.1%, even as land
              values rose 9.4% in 2025 (FCC full-year data).
            </p>
            <p>
              Whether you&apos;re a landlord setting rates for the first time, a tenant negotiating a
              renewal, or an investor evaluating returns, understanding what land actually rents for
              in your area is critical. The table below breaks it down by region.
            </p>
          </div>
        </section>

        {/* Regional Rental Rate Table */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Rental Rates by Region
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Region</th>
                  <th className="px-4 py-3 text-left font-semibold">Avg Cash Rent</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Land Value</th>
                  <th className="px-4 py-3 text-left font-semibold">Rent/Price Ratio</th>
                  <th className="px-4 py-3 text-left font-semibold">Soil Zone</th>
                  <th className="hidden px-4 py-3 text-left font-semibold md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {rentalRates.map((row, i) => (
                  <tr key={row.region} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold">
                      <Link
                        href={`/rm/${row.rmLink.slug}`}
                        className="text-green-700 hover:underline"
                      >
                        {row.region}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-bold text-green-700">{row.avgRent}/acre</td>
                    <td className="px-4 py-3">{row.landValue}/acre</td>
                    <td className="px-4 py-3">{row.ratio}</td>
                    <td className="px-4 py-3">{row.soil}</td>
                    <td className="hidden px-4 py-3 text-gray-500 md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm italic text-gray-500">
            Data based on FCC 2024/2025 reports and market transactions. Actual rents vary by
            specific quarter section, soil class, improvements, and negotiation.
          </p>
        </section>

        {/* How Rental Rates Are Determined */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            How Rental Rates Are Determined
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Saskatchewan farmland rental rates aren&apos;t set by a formula — they&apos;re
              negotiated between landlord and tenant based on a combination of factors. Here&apos;s
              what drives the number on any given quarter:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-green-800">Soil Class &amp; Productivity</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                This is the biggest single factor. Class 1&ndash;2 black soil with proven high yields
                commands significantly higher rent than Class 4&ndash;5 brown or gray soil. Landlords
                with soil test data and yield history can justify premium rates.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-green-800">Drainage &amp; Water</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Well-drained land is worth more to rent. Quarters with sloughs, poor drainage, or
                flood risk get discounted. Conversely, irrigated land commands a significant premium
                — often 2&ndash;3x dryland rates.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-green-800">Improvements &amp; Infrastructure</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Fencing, bins, shelterbelts, dugouts, and yard sites all affect rental value. A
                quarter with good infrastructure lets the tenant operate more efficiently, which
                translates into willingness to pay more.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-green-800">Access &amp; Location</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Proximity to grain elevators, major highways, and the tenant&apos;s home base all
                matter. Remote quarters with poor road access or long hauling distances get
                discounted. Land adjacent to the tenant&apos;s existing operation often fetches a premium.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-green-800">Local Competition</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                In areas where multiple operators are competing for rental acres, rates get bid up.
                This is particularly true in the northeast and around urban centres like{" "}
                <Link href="/rm/sherwood" className="text-green-700 hover:underline">Sherwood</Link>
                {" "}and{" "}
                <Link href="/rm/corman-park" className="text-green-700 hover:underline">Corman Park</Link>
                , where expanding farms compete aggressively for every available quarter.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-green-800">Commodity Prices &amp; Input Costs</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                When canola and wheat prices are strong, tenants can afford higher rents. When input
                costs spike or commodity prices drop, there&apos;s downward pressure. Smart landlords
                and tenants both watch the margin picture, not just the gross revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Cash Rent vs Crop Share */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Cash Rent vs. Crop Share Arrangements
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Saskatchewan farmland leases generally fall into two categories: straight cash rent
              and crop share. Each has trade-offs, and the right choice depends on your risk
              tolerance and involvement level.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Cash Rent */}
            <div className="rounded-xl border-2 border-green-700 bg-green-50 p-6">
              <h3 className="text-xl font-bold text-green-800">Cash Rent</h3>
              <p className="mt-1 text-sm font-medium text-green-600">
                Fixed $/acre paid annually
              </p>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold text-gray-900">How it works:</p>
                  <p>The tenant pays a fixed dollar amount per acre, typically once a year (often at seeding or after harvest). The landlord receives the same payment regardless of crop conditions.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Landlord pros:</p>
                  <p>Predictable income, zero production risk, simple accounting, no involvement in farming decisions.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Landlord cons:</p>
                  <p>No upside in bumper crop years, rent may lag behind land value increases if locked into a multi-year agreement.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Typical range:</p>
                  <p className="font-bold text-green-700">$68&ndash;$124/acre in Saskatchewan</p>
                </div>
              </div>
            </div>

            {/* Crop Share */}
            <div className="rounded-xl border-2 border-[#c49a2a] bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-[#8a6d1b]">Crop Share</h3>
              <p className="mt-1 text-sm font-medium text-[#a07d1e]">
                Landlord receives a % of the crop
              </p>
              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold text-gray-900">How it works:</p>
                  <p>The landlord receives a percentage of the crop (typically 25&ndash;33% of gross production). The tenant does all the work; the landlord may or may not contribute to input costs depending on the agreement.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Landlord pros:</p>
                  <p>Upside in good years, rent naturally adjusts with commodity prices, maintains connection to the land&apos;s production.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Landlord cons:</p>
                  <p>Income varies year to year, requires more involvement (tracking production, marketing grain), shared risk in poor crop years.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Typical split:</p>
                  <p className="font-bold text-[#8a6d1b]">25&ndash;33% to landlord (no input contribution)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-green-700 bg-green-50 p-6">
            <h3 className="text-lg font-bold text-green-800">Which Is More Common?</h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Cash rent has become the dominant arrangement in Saskatchewan, particularly for
              absentee landlords and investors. It&apos;s simpler, more predictable, and doesn&apos;t
              require the landlord to be involved in grain marketing. Crop share is still used,
              especially in family situations or where the landlord wants exposure to commodity
              upside. Some landlords use a hybrid: a base cash rent plus a bonus tied to crop
              performance or commodity prices.
            </p>
          </div>
        </section>

        {/* Rent-to-Price Ratio */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Understanding the Rent-to-Price Ratio
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              The rent-to-price ratio tells you what percentage of the land&apos;s value you&apos;re
              earning back in annual rent. Saskatchewan&apos;s provincial average sits at 3.1%, which
              has held remarkably steady even as land values have surged. The actual range across
              individual deals runs from 1.8% to 4.6%.
            </p>
            <p>
              For context, that&apos;s comparable to or better than many urban rental property
              returns, with the added benefit of long-term land value appreciation. Over the past
              five years, Saskatchewan farmland investors have seen a combined return (rent + appreciation)
              averaging 15%+ annually.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Land Value</th>
                  <th className="px-4 py-3 text-left font-semibold">Est. Cash Rent</th>
                  <th className="px-4 py-3 text-left font-semibold">Rent/Price Ratio</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Region</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">$2,200/acre</td>
                  <td className="px-4 py-3">~$68/acre</td>
                  <td className="px-4 py-3">3.1%</td>
                  <td className="px-4 py-3">East Central</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">$2,800/acre</td>
                  <td className="px-4 py-3">~$87/acre</td>
                  <td className="px-4 py-3">3.1%</td>
                  <td className="px-4 py-3">West Central</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">$3,000/acre</td>
                  <td className="px-4 py-3">~$93/acre</td>
                  <td className="px-4 py-3">3.1%</td>
                  <td className="px-4 py-3">Southeast</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">$4,000/acre</td>
                  <td className="px-4 py-3">~$124/acre</td>
                  <td className="px-4 py-3">3.1%</td>
                  <td className="px-4 py-3">Northeast (premium)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm italic text-gray-500">
            The actual range is 1.8% to 4.6% depending on the specific deal. Margins are tight —
            run the math at average yields, not your best-case scenario.
          </p>
        </section>

        {/* Related Resources */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Related Resources
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href="/field-notes/farmland-market-report-2025"
              className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-[#c49a2a]">Market Report</p>
              <h3 className="mt-1 font-bold text-gray-900 group-hover:text-green-700">
                Saskatchewan Farmland Market Report &mdash; 2025 Update
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Full regional breakdown of land values, growth trends, and 2026 outlook.
              </p>
            </Link>
            <Link
              href="/buying"
              className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-[#c49a2a]">Buying Guide</p>
              <h3 className="mt-1 font-bold text-gray-900 group-hover:text-green-700">
                Buying Saskatchewan Farmland
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Everything you need to know about purchasing agricultural land in Saskatchewan.
              </p>
            </Link>
            <Link
              href="/selling"
              className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-[#c49a2a]">Selling Guide</p>
              <h3 className="mt-1 font-bold text-gray-900 group-hover:text-green-700">
                Selling Your Farmland
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get a confidential valuation and learn how to maximize your sale price.
              </p>
            </Link>
            <Link
              href="/blog/best-rural-municipalities-farmland-investment-saskatchewan"
              className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-[#c49a2a]">Investment Guide</p>
              <h3 className="mt-1 font-bold text-gray-900 group-hover:text-green-700">
                Best RMs for Farmland Investment (2026)
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Top-performing rural municipalities by soil quality, rental yields, and price trends.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border-2 border-green-700 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-green-800">
            Want to Know What Your Land Should Rent For?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-gray-600">
            Adam Hungle can provide a rental rate analysis based on your specific quarter section,
            soil class, and local market conditions. Whether you&apos;re a landlord or tenant,
            having accurate data makes for a better deal.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-green-700 px-8 py-3 font-bold text-white transition-colors hover:bg-green-800"
            >
              Contact Adam for an Analysis
            </Link>
            <a
              href="tel:3065318854"
              className="rounded-lg border-2 border-green-700 px-8 py-3 font-bold text-green-700 transition-colors hover:bg-green-700 hover:text-white"
            >
              Call 306.531.8854
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Sources: FCC 2025 Mid-Year Report, FCC 2024 Annual Report, Saskatchewan Crop Insurance Data
          </p>
        </section>
      </article>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saskatchewan Farmland Market Report 2025 | Hungle Realty",
  description:
    "2025 year-end data and 2026 outlook for Saskatchewan farmland values. Regional breakdowns, rental rates, irrigated land prices, and market trends from Adam Hungle.",
};

/* ── Stat cards shown at top ────────────────────────────── */
const heroStats = [
  { value: "+12%", label: "Year-over-Year Growth", sub: "Mid-2025" },
  { value: "$3,210", label: "Avg. Sale Price/Acre", sub: "Jan 2026" },
  { value: "13.1%", label: "SK Growth 2024", sub: "#1 in Canada" },
  { value: "$8,200", label: "Irrigated Land Avg", sub: "Premium segment" },
];

/* ── Regional cultivated data ───────────────────────────── */
const cultivatedData = [
  { region: "Northeast", avg: "$4,450+", low: "$2,100", high: "$6,600+", change: "+17.9%", direction: "Strong" },
  { region: "Northwest", avg: "$3,700+", low: "$1,800", high: "$5,300+", change: "+19.9%", direction: "Hot" },
  { region: "West Central", avg: "$3,700+", low: "$2,000", high: "$5,600+", change: "+17.8%", direction: "Strong" },
  { region: "East Central", avg: "$3,600+", low: "$1,900", high: "$5,700+", change: "~17%", direction: "Strong" },
  { region: "Southeast", avg: "$3,400+", low: "$2,000", high: "$6,100+", change: "+11.1%", direction: "Steady" },
  { region: "Southwest", avg: "$2,750+", low: "$1,500", high: "$4,300+", change: "+4.1%", direction: "Slower" },
];

/* ── Pastureland data ───────────────────────────────────── */
const pastureData = [
  { region: "Southwest", avg: "$1,933", change: "+15.9%", notes: "Strongest gains" },
  { region: "Northeast", avg: "$992", change: "+11.7%", notes: "Solid growth" },
  { region: "Southeast", avg: "$1,108", change: "+3.9%", notes: "Modest" },
  { region: "West Central", avg: "$1,002", change: "+2.9%", notes: "Flat" },
  { region: "Northwest", avg: "$1,000", change: "+5.7%", notes: "Moderate" },
  { region: "East Central", avg: "$993", change: "+1.9%", notes: "Flat" },
];

/* ── Rental data ────────────────────────────────────────── */
const rentalData = [
  { value: "$2,200/acre", rent: "~$68/acre", region: "East Central" },
  { value: "$2,800/acre", rent: "~$87/acre", region: "West Central" },
  { value: "$3,000/acre", rent: "~$93/acre", region: "Southeast" },
  { value: "$4,000/acre", rent: "~$124/acre", region: "Northeast (premium)" },
];

export default function FarmlandMarketReport() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a2230]">
        <div className="absolute inset-0">
          <Image
            src="/hero/slide1.jpg"
            alt="Saskatchewan farmland aerial"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c49a2a]">
            Field Notes · Market Update
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Saskatchewan Farmland<br />Market Report
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            2025 Year-End Data &amp; 2026 Outlook
          </p>
          <p className="mt-1 text-sm text-gray-500">Prepared March 2026</p>

          {/* Stat cards */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-[#c49a2a]">{s.value}</p>
                <p className="mt-1 text-xs font-semibold text-white">{s.label}</p>
                <p className="text-[11px] text-gray-500">{s.sub}</p>
              </div>
            ))}
          </div>

          <a
            href="/farmland-market-report-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#c49a2a] bg-gradient-to-b from-[#c49a2a] to-[#a07d1e] px-6 py-3 text-sm font-bold text-[#1a2230] shadow transition-all hover:from-[#d4a520] hover:to-[#c49a2a]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Full PDF Report
          </a>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Farmland Market Report 2025</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-5xl px-4 py-12">
        {/* Provincial Overview */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Where Things Stand in 2025
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Saskatchewan farmland continues its run as one of the hottest agricultural land markets in
              Canada. The province led the country in farmland value growth for the second straight year in
              2024 at 13.1%, and the first half of 2025 showed no signs of that reversing — FCC reported
              cultivated dryland values up 6.0% in the first six months of 2025 and 12.0% year-over-year.
            </p>
            <p>
              The pace has moderated from the 15%+ gains of 2023, but make no mistake: land values are
              still climbing. The market is settling into a steadier groove after several years of breakneck appreciation.
            </p>
          </div>

          {/* Numbers at a Glance */}
          <div className="mt-8 rounded-lg border-l-4 border-green-700 bg-green-50 p-6">
            <h3 className="text-lg font-bold text-green-800">2025 Numbers at a Glance</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />H1 2025 growth: +6.0% (6-month), +12.0% year-over-year</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />Provincial avg cultivated price: ~$3,200–$3,500/acre (est. mid-2025)</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />Jan 2026 avg sale price: ~$3,210/acre across all classes</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />Irrigated land: $8,200/acre avg ($6,800–$9,900 range)</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />Rent-to-price ratio: 3.1% (steady)</li>
            </ul>
          </div>
        </section>

        {/* Growth Trend */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            How We Got Here — Growth Trend
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Period</th>
                  <th className="px-4 py-3 text-left font-semibold">SK Growth</th>
                  <th className="px-4 py-3 text-left font-semibold">National Avg</th>
                  <th className="px-4 py-3 text-left font-semibold">SK Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">2022</td><td className="px-4 py-3">14.2%</td><td className="px-4 py-3">12.8%</td><td className="px-4 py-3">Top 3</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">2023</td><td className="px-4 py-3">15.7%</td><td className="px-4 py-3">11.5%</td><td className="px-4 py-3 font-bold">#1</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">2024</td><td className="px-4 py-3">13.1%</td><td className="px-4 py-3">9.3%</td><td className="px-4 py-3 font-bold">#1</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">H1 2025</td><td className="px-4 py-3">+6.0% (6 mo.)</td><td className="px-4 py-3">+6.0% (6 mo.)</td><td className="px-4 py-3">On pace</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm italic text-gray-500">
            Still positive, but levelling out. Full-year 2025 results from FCC are expected shortly. Based on mid-year data and late-2025 auction results, expect something in the 8–12% range for the full year.
          </p>
        </section>

        {/* Regional Breakdown */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Regional Breakdown — Cultivated Land
          </h2>
          <p className="mt-4 text-gray-700">
            Not all Saskatchewan farmland is created equal. Prices shown are based on the most recent FCC data (2024 annual figures adjusted for mid-2025 growth).
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Region</th>
                  <th className="px-4 py-3 text-left font-semibold">Est. 2025 Avg</th>
                  <th className="px-4 py-3 text-left font-semibold">Low</th>
                  <th className="px-4 py-3 text-left font-semibold">High</th>
                  <th className="px-4 py-3 text-left font-semibold">2024 Change</th>
                  <th className="px-4 py-3 text-left font-semibold">Direction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cultivatedData.map((row, i) => (
                  <tr key={row.region} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold">{row.region}</td>
                    <td className="px-4 py-3">{row.avg}</td>
                    <td className="px-4 py-3">{row.low}</td>
                    <td className="px-4 py-3">{row.high}</td>
                    <td className="px-4 py-3 font-medium text-green-700">{row.change}</td>
                    <td className="px-4 py-3">{row.direction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">Northeast</strong> is still the most expensive dirt in Saskatchewan. The black soil zone around Melfort, Tisdale, and Nipawin delivers strong, reliable yields and prices push well past $4,000/acre. Demand from both existing operators and outside investors is keeping this zone competitive.
            </p>
            <p>
              <strong className="text-gray-900">Northwest</strong> was the biggest mover in 2024 at nearly 20% growth. Improved moisture, expanding operations near Lloydminster, North Battleford, and Meadow Lake, and landlords selling to existing tenants are all driving prices higher.
            </p>
            <p>
              <strong className="text-gray-900">Southwest</strong> remains the laggard for cultivated land, held back by persistent drought in the brown soil zone. However, operators with irrigation or who can handle the risk profile may find relative value here.
            </p>
          </div>
        </section>

        {/* Pastureland */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Pastureland Values (2024–2025)
          </h2>
          <p className="mt-4 text-gray-700">
            Pastureland across Saskatchewan rose 8.9% province-wide in 2024. Here&apos;s how the regions compare:
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Region</th>
                  <th className="px-4 py-3 text-left font-semibold">Avg $/Acre</th>
                  <th className="px-4 py-3 text-left font-semibold">2024 Change</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pastureData.map((row, i) => (
                  <tr key={row.region} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold">{row.region}</td>
                    <td className="px-4 py-3">{row.avg}</td>
                    <td className="px-4 py-3 font-medium text-green-700">{row.change}</td>
                    <td className="px-4 py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The southwest stands out — while cultivated land there barely moved, pasture surged nearly 16%. Ranchers competing for grazing acres in tighter supply are the main driver. For mixed operations, the pasture-to-cultivated gap is narrowing in some areas.
          </p>
        </section>

        {/* Irrigated Land */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Irrigated Land
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Irrigated farmland remains the premium segment. As of the latest data, irrigated acres are
              averaging $8,200/acre, with a range from $6,800 to $9,900. That represents substantial
              appreciation from the $6,200 average reported in the 2024 annual numbers (which saw a 25.9% jump that year alone).
            </p>
            <p>
              With water access becoming an ever-more-valuable asset on the Prairies, irrigated land is being
              snapped up by specialty crop growers and potato operations.
            </p>
          </div>
        </section>

        {/* Rental Rates */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Rental Rates &amp; Economics
          </h2>
          <p className="mt-4 text-gray-700">
            Saskatchewan&apos;s rent-to-price ratio sits at 3.1%, which has held remarkably steady even as land values climb.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Land Value</th>
                  <th className="px-4 py-3 text-left font-semibold">Est. Cash Rent</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Region</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {rentalData.map((row, i) => (
                  <tr key={row.value} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{row.value}</td>
                    <td className="px-4 py-3">{row.rent}</td>
                    <td className="px-4 py-3">{row.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm italic text-gray-500">
            The actual range is 1.8% to 4.6% depending on the deal. Margins are tight — run the math at average yields, not your best-case scenario.
          </p>
        </section>

        {/* Early 2026 Activity */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Early 2026 Market Activity
          </h2>
          <div className="mt-6 rounded-lg border-l-4 border-[#c49a2a] bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-[#8a6d1b]">January 2026 Snapshot</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c49a2a]" />25 total farmland sales recorded province-wide</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c49a2a]" />17 of 25 sales (68%) were grain land — still the dominant category</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c49a2a]" />Average sale price: ~$3,210/acre across all land types</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c49a2a]" />Top-performing RM: Rosthern No. 403 (north-central SK)</li>
            </ul>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Demand hasn&apos;t dropped off. Buyers are still active, particularly for productive quarters close to existing operations. The trend of landlords selling directly to their tenants continues into 2026.
          </p>
        </section>

        {/* 2026 Outlook */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            2026 Outlook — What to Expect
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#c49a2a]">Values Keep Climbing, Just Slower</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                The era of 15%+ annual jumps is behind us. Mid-to-high single-digit growth (6–10%) is the new baseline. That&apos;s still meaningful — at 8% growth, a $3,500/acre quarter gains $280/acre in a year. But it&apos;s a more measured pace, and that&apos;s probably healthy for the market.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#c49a2a]">Margins Are the Wildcard</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Land prices don&apos;t exist in a vacuum. Input costs, interest rates, and commodity prices all feed into how aggressively buyers will bid. Late 2025 saw some auctions come in flat or slightly below expectations — a sign that buyers are sharpening their pencils.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#c49a2a]">North and East Still Lead</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                The premium on northeast and northwest Saskatchewan land isn&apos;t going away. These zones offer the most consistent yields, the best soil, and the strongest buyer demand. If you&apos;re looking for relative value, the southeast and southwest offer lower entry points — but with the corresponding risk profile.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#c49a2a]">Watch the Rental Market</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                With the rent-to-price ratio holding at 3.1%, cash rents have tracked land values upward. But if crop margins compress, renters will push back. Negotiating 2026 rental agreements carefully — with realistic yield assumptions — is critical for both tenants and landlords.
              </p>
            </div>
          </div>
        </section>

        {/* The Bottom Line */}
        <section className="mb-14">
          <div className="rounded-xl bg-[#1a2230] p-8 text-white">
            <h2 className="text-2xl font-bold">The Bottom Line</h2>
            <div className="mt-4 rounded-lg border border-[#c49a2a]/30 bg-[#c49a2a]/10 p-5">
              <p className="font-bold text-[#c49a2a]">
                Saskatchewan farmland is still a strong asset — the market has shifted from red-hot to steady-strong.
              </p>
              <div className="mt-3 space-y-2 text-sm text-gray-300 leading-relaxed">
                <p>Values climbed another 12% year-over-year through mid-2025, and early 2026 activity confirms continued demand. But the growth rate is moderating, margins are tightening, and the smart money is running more conservative numbers.</p>
                <p>If you&apos;re buying, don&apos;t count on last year&apos;s best yields to justify today&apos;s prices. If you&apos;re renting, negotiate with average yields in mind. If you&apos;re selling, you&apos;re still in a strong position — particularly in the northeast and northwest.</p>
                <p className="italic text-[#c49a2a]">Know your numbers, know your land, and make the decision that fits your operation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border-2 border-green-700 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-green-800">
            Curious What Your Land Is Worth?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-gray-600">
            Get a free, no-obligation valuation from Adam Hungle — 19 years of Saskatchewan farm sales experience.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/selling"
              className="rounded-lg bg-green-700 px-8 py-3 font-bold text-white transition-colors hover:bg-green-800"
            >
              Request a Valuation
            </Link>
            <a
              href="tel:3065318854"
              className="rounded-lg border-2 border-green-700 px-8 py-3 font-bold text-green-700 transition-colors hover:bg-green-700 hover:text-white"
            >
              Call 306.531.8854
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Sources: FCC 2025 Mid-Year Report, FCC 2024 Annual Report, Industry Market Data &amp; MLS® Farmland Sales
          </p>
        </section>
      </article>
    </div>
  );
}

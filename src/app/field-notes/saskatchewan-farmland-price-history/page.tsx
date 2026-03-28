import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saskatchewan Farmland Prices: 40 Years of Value Growth (1986–2025)",
  description:
    "Trace 40 years of Saskatchewan farmland price history using FCC data. From $200/acre in the late 1980s to $3,200+ today — key inflection points, era-by-era analysis, SK vs national comparison, and what it means for buyers and sellers.",
  keywords: [
    "Saskatchewan farmland prices history",
    "farmland values over time",
    "FCC farmland report Saskatchewan",
    "farmland price trends Canada",
    "Saskatchewan farmland investment",
    "farmland value growth",
  ],
  openGraph: {
    title: "Saskatchewan Farmland Prices: 40 Years of Value Growth (1986–2025)",
    description:
      "From $200/acre in the late 1980s to $3,200+ today — trace four decades of Saskatchewan farmland value growth using FCC data.",
  },
};

/* ── Historical FCC farmland value data (per acre, cultivated) ── */
const historicalData = [
  { year: 1986, sk: 200, national: 850, era: "Bust" },
  { year: 1987, sk: 190, national: 830, era: "Bust" },
  { year: 1988, sk: 185, national: 810, era: "Bust" },
  { year: 1989, sk: 195, national: 840, era: "Bust" },
  { year: 1990, sk: 210, national: 870, era: "Recovery" },
  { year: 1991, sk: 215, national: 880, era: "Recovery" },
  { year: 1992, sk: 225, national: 890, era: "Recovery" },
  { year: 1993, sk: 235, national: 900, era: "Recovery" },
  { year: 1994, sk: 250, national: 930, era: "Recovery" },
  { year: 1995, sk: 265, national: 960, era: "Recovery" },
  { year: 1996, sk: 280, national: 990, era: "Recovery" },
  { year: 1997, sk: 290, national: 1010, era: "Recovery" },
  { year: 1998, sk: 285, national: 1000, era: "Stagnation" },
  { year: 1999, sk: 280, national: 990, era: "Stagnation" },
  { year: 2000, sk: 290, national: 1010, era: "Stagnation" },
  { year: 2001, sk: 295, national: 1020, era: "Stagnation" },
  { year: 2002, sk: 300, national: 1040, era: "Stagnation" },
  { year: 2003, sk: 310, national: 1060, era: "Stagnation" },
  { year: 2004, sk: 330, national: 1100, era: "Stagnation" },
  { year: 2005, sk: 350, national: 1140, era: "Stagnation" },
  { year: 2006, sk: 370, national: 1190, era: "Awakening" },
  { year: 2007, sk: 420, national: 1290, era: "Awakening" },
  { year: 2008, sk: 520, national: 1450, era: "Boom" },
  { year: 2009, sk: 560, national: 1490, era: "Boom" },
  { year: 2010, sk: 610, national: 1570, era: "Boom" },
  { year: 2011, sk: 700, national: 1710, era: "Boom" },
  { year: 2012, sk: 830, national: 1910, era: "Boom" },
  { year: 2013, sk: 1020, national: 2200, era: "Boom" },
  { year: 2014, sk: 1210, national: 2480, era: "Boom" },
  { year: 2015, sk: 1350, national: 2600, era: "Correction" },
  { year: 2016, sk: 1400, national: 2650, era: "Correction" },
  { year: 2017, sk: 1460, national: 2720, era: "Correction" },
  { year: 2018, sk: 1530, national: 2800, era: "Steady" },
  { year: 2019, sk: 1600, national: 2870, era: "Steady" },
  { year: 2020, sk: 1700, national: 2950, era: "Acceleration" },
  { year: 2021, sk: 1900, national: 3150, era: "Acceleration" },
  { year: 2022, sk: 2170, national: 3550, era: "Acceleration" },
  { year: 2023, sk: 2510, national: 3960, era: "Acceleration" },
  { year: 2024, sk: 2840, national: 4350, era: "Current" },
  { year: 2025, sk: 3107, national: 4755, era: "Current" },
];

/* ── Key inflection points ── */
const inflectionPoints = [
  {
    year: "1986–1989",
    title: "The Farm Crisis Bottom",
    description:
      "Saskatchewan farmland hit its modern low around $185–$200/acre. The global grain glut, high interest rates, and farm debt crisis crushed land values across the Prairies. Many operations went bankrupt or were absorbed.",
  },
  {
    year: "2007–2008",
    title: "The Commodity Supercycle",
    description:
      "Canola, wheat, and potash prices surged. Saskatchewan land values jumped 24% in a single year (2008). Global food demand, ethanol mandates, and tight grain supplies drove the first major price breakout in decades.",
  },
  {
    year: "2012–2014",
    title: "The Acceleration Phase",
    description:
      "Three consecutive years of 15–25% growth. Low interest rates, strong commodity prices, and farm consolidation created a perfect storm for land appreciation. Saskatchewan went from undervalued to fairly valued in just 36 months.",
  },
  {
    year: "2015–2017",
    title: "The Breather",
    description:
      "Growth slowed to 3–5% annually. Grain prices corrected, margins tightened, and some buyers stepped to the sidelines. Values didn't fall — they just stopped climbing as fast. The market digested three years of rapid gains.",
  },
  {
    year: "2020–2024",
    title: "Post-Pandemic Surge",
    description:
      "COVID-era low interest rates, inflation hedging, and strong commodity prices reignited the market. Saskatchewan led Canada in growth at 15.7% (2023) and 13.1% (2024). Out-of-province and institutional capital entered the market at scale.",
  },
  {
    year: "2025",
    title: "Normalization",
    description:
      "FCC confirmed 9.4% growth for full-year 2025 — strong but moderating. Saskatchewan slipped to #3 nationally behind Manitoba (12.2%) and Alberta (11.4%). Trade/tariff uncertainty and compressed margins tempered the pace.",
  },
];

/* ── Era analysis ── */
const eras = [
  {
    name: "The Lost Decade (1986–1997)",
    color: "bg-red-100 text-red-800 border-red-300",
    growth: "$200 → $290",
    cagr: "~3.4%",
    drivers: "Farm debt crisis, grain glut, high interest rates, depopulation. Saskatchewan was the cheapest farmland in Canada. Many family farms sold or were absorbed by larger operations.",
  },
  {
    name: "The Stagnation (1998–2005)",
    color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    growth: "$285 → $350",
    cagr: "~2.6%",
    drivers: "Low commodity prices, BSE crisis (2003), drought years. Land traded hands but values barely moved. Saskatchewan was still perceived as a low-growth backwater for farmland investment.",
  },
  {
    name: "The Breakout (2006–2014)",
    color: "bg-green-100 text-green-800 border-green-300",
    growth: "$370 → $1,210",
    cagr: "~15.9%",
    drivers: "Commodity supercycle, ethanol mandates, global food demand, low interest rates, farm consolidation. Saskatchewan went from the most undervalued to the fastest-growing farmland market in Canada.",
  },
  {
    name: "The Correction (2015–2019)",
    color: "bg-blue-100 text-blue-800 border-blue-300",
    growth: "$1,350 → $1,600",
    cagr: "~4.3%",
    drivers: "Grain price correction, tighter margins, some buyer fatigue. Values held but growth moderated significantly. Smart buyers accumulated land during this window.",
  },
  {
    name: "The Second Wave (2020–2025)",
    color: "bg-purple-100 text-purple-800 border-purple-300",
    growth: "$1,700 → $3,107",
    cagr: "~12.8%",
    drivers: "COVID-era monetary policy, inflation hedging, strong grains and oilseeds, institutional capital entering Saskatchewan. Province led Canada in 2023 and 2024 before settling to #3 in 2025 at 9.4%.",
  },
];

function formatDollar(value: number): string {
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
  return `$${value}`;
}

export default function FarmlandPriceHistoryPage() {
  // Calculate bar widths for visual chart
  const maxValue = Math.max(...historicalData.map((d) => d.sk));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a2230]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2230] via-[#1a2e1a] to-[#1a2230]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c49a2a]">
            Field Notes &middot; Market Analysis
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Saskatchewan Farmland Prices
            <br />
            <span className="text-[#c49a2a]">40 Years of Value Growth</span>
          </h1>
          <p className="mt-3 text-lg text-gray-300">1986–2025 | FCC Historical Data</p>
          <p className="mt-1 text-sm text-gray-500">Updated March 2026 with FCC 2025 Full-Year Report</p>

          {/* Stat cards */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "~$200", label: "1986 Avg/Acre", sub: "Farm crisis low" },
              { value: "$3,107", label: "2025 Avg/Acre", sub: "FCC full-year" },
              { value: "1,450%+", label: "Total Growth", sub: "40 years" },
              { value: "9.4%", label: "2025 Growth", sub: "#3 in Canada" },
            ].map((s) => (
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
            <span className="font-medium text-gray-900">Price History</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-5xl px-4 py-12">

        {/* Introduction */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            The Long View: 1986 to 2025
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              In the late 1980s, you could buy an acre of Saskatchewan cultivated farmland for around $200.
              Today, the provincial average sits above $3,100. That&apos;s roughly 1,450% total appreciation
              over four decades — an average compound annual growth rate of about 7.2%.
            </p>
            <p>
              But the growth hasn&apos;t been linear. Saskatchewan farmland has moved through distinct eras —
              from the farm crisis bottom of the late 1980s, through a long stagnation, into the commodity
              supercycle breakout, and most recently into a post-pandemic surge that has reshaped the market.
              Understanding these cycles is essential for anyone buying, selling, or holding farmland today.
            </p>
            <p>
              The data below draws primarily from FCC&apos;s annual Farmland Values Report, the most widely
              cited benchmark for Canadian agricultural land prices. The 2025 full-year data (released
              March 24, 2026) confirmed a 9.4% increase for Saskatchewan — the 13th consecutive year of
              positive growth.
            </p>
          </div>
        </section>

        {/* Visual Chart - Horizontal Bar */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Saskatchewan Farmland Values — Year by Year
          </h2>
          <p className="mt-4 text-sm text-gray-500">
            Average cultivated farmland value per acre (FCC data). Hover/tap for details.
          </p>
          <div className="mt-6 space-y-1">
            {historicalData.filter((_, i) => i % 2 === 0 || historicalData[i].year >= 2006).map((d) => {
              const pct = (d.sk / maxValue) * 100;
              const eraColors: Record<string, string> = {
                Bust: "bg-red-500",
                Recovery: "bg-orange-400",
                Stagnation: "bg-yellow-500",
                Awakening: "bg-lime-500",
                Boom: "bg-green-600",
                Correction: "bg-blue-400",
                Steady: "bg-blue-500",
                Acceleration: "bg-emerald-500",
                Current: "bg-[#c49a2a]",
              };
              return (
                <div key={d.year} className="group flex items-center gap-2">
                  <span className="w-10 text-right text-xs font-medium text-gray-500">
                    {d.year}
                  </span>
                  <div className="relative flex-1">
                    <div
                      className={`h-5 rounded-r ${eraColors[d.era] || "bg-green-600"} transition-all group-hover:opacity-90`}
                      style={{ width: `${pct}%`, minWidth: "2px" }}
                    />
                    <span className="absolute left-2 top-0.5 text-[10px] font-bold text-white drop-shadow-sm">
                      {pct > 15 ? formatDollar(d.sk) : ""}
                    </span>
                  </div>
                  <span className="w-14 text-right text-xs text-gray-400">
                    {formatDollar(d.sk)}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-[10px]">
            {[
              { label: "Bust", color: "bg-red-500" },
              { label: "Recovery", color: "bg-orange-400" },
              { label: "Stagnation", color: "bg-yellow-500" },
              { label: "Boom", color: "bg-green-600" },
              { label: "Correction", color: "bg-blue-400" },
              { label: "Acceleration", color: "bg-emerald-500" },
              { label: "2025", color: "bg-[#c49a2a]" },
            ].map((l) => (
              <span key={l.label} className="flex items-center gap-1">
                <span className={`inline-block h-2.5 w-2.5 rounded-sm ${l.color}`} />
                {l.label}
              </span>
            ))}
          </div>
        </section>

        {/* Full Data Table */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Complete Data Table (1986–2025)
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-3 py-3 text-left font-semibold">Year</th>
                  <th className="px-3 py-3 text-right font-semibold">SK $/Acre</th>
                  <th className="px-3 py-3 text-right font-semibold">National $/Acre</th>
                  <th className="px-3 py-3 text-right font-semibold">SK YoY Change</th>
                  <th className="px-3 py-3 text-left font-semibold">Era</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {historicalData.map((d, i) => {
                  const prev = i > 0 ? historicalData[i - 1].sk : d.sk;
                  const change = ((d.sk - prev) / prev) * 100;
                  return (
                    <tr
                      key={d.year}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${d.year === 2025 ? "font-semibold bg-green-50" : ""}`}
                    >
                      <td className="px-3 py-2 font-medium">{d.year}</td>
                      <td className="px-3 py-2 text-right">${d.sk.toLocaleString()}</td>
                      <td className="px-3 py-2 text-right">${d.national.toLocaleString()}</td>
                      <td className={`px-3 py-2 text-right ${change >= 0 ? "text-green-700" : "text-red-600"}`}>
                        {i === 0 ? "—" : `${change >= 0 ? "+" : ""}${change.toFixed(1)}%`}
                      </td>
                      <td className="px-3 py-2 text-gray-500">{d.era}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs italic text-gray-500">
            Sources: FCC Annual Farmland Values Reports (1986–2025). National figures are weighted averages across all provinces. Saskatchewan values represent cultivated dryland averages. The 2025 data is from the FCC 2025 Annual Report released March 24, 2026.
          </p>
        </section>

        {/* Key Inflection Points */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Key Inflection Points
          </h2>
          <p className="mt-4 text-gray-700">
            Saskatchewan farmland didn&apos;t appreciate in a straight line. These are the moments that bent the curve.
          </p>
          <div className="mt-6 space-y-6">
            {inflectionPoints.map((point) => (
              <div key={point.year} className="rounded-lg border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 rounded bg-green-700 px-2.5 py-1 text-xs font-bold text-white">
                    {point.year}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SK vs National Comparison */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Saskatchewan vs. National Average
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              For most of the past 40 years, Saskatchewan farmland has traded at a steep discount to the
              national average. In 1986, SK land was roughly $200/acre while the national figure was closer
              to $850 — a 76% discount. That gap has narrowed considerably but hasn&apos;t closed.
            </p>
            <p>
              As of 2025, Saskatchewan sits at roughly $3,107/acre against a national average near $4,755.
              The discount has shrunk to about 35%. This convergence has been one of the key investment
              theses for Saskatchewan farmland: the province offers some of the most productive agricultural
              land in Canada at a fraction of the price in Ontario or British Columbia.
            </p>
            <p>
              In 2023 and 2024, Saskatchewan led the country in year-over-year growth (15.7% and 13.1%
              respectively). In 2025, growth moderated to 9.4% and the province slipped to #3 behind
              Manitoba (12.2%) and Alberta (11.4%). The national average came in at 9.3%.
            </p>
          </div>

          {/* Discount gap table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                  <th className="px-4 py-3 text-right font-semibold">SK $/Acre</th>
                  <th className="px-4 py-3 text-right font-semibold">National $/Acre</th>
                  <th className="px-4 py-3 text-right font-semibold">SK Discount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { year: 1986, sk: 200, nat: 850 },
                  { year: 1996, sk: 280, nat: 990 },
                  { year: 2006, sk: 370, nat: 1190 },
                  { year: 2014, sk: 1210, nat: 2480 },
                  { year: 2020, sk: 1700, nat: 2950 },
                  { year: 2025, sk: 3107, nat: 4755 },
                ].map((d, i) => (
                  <tr key={d.year} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{d.year}</td>
                    <td className="px-4 py-3 text-right">${d.sk.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">${d.nat.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right font-medium text-[#c49a2a]">
                      {Math.round(((d.nat - d.sk) / d.nat) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Era-by-Era Analysis */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Era-by-Era Analysis
          </h2>
          <div className="mt-6 space-y-5">
            {eras.map((era) => (
              <div key={era.name} className={`rounded-lg border p-5 ${era.color}`}>
                <h3 className="text-lg font-bold">{era.name}</h3>
                <div className="mt-2 flex gap-4 text-sm font-medium">
                  <span>Growth: {era.growth}/acre</span>
                  <span>CAGR: {era.cagr}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed opacity-90">{era.drivers}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What This Means for Buyers and Sellers */}
        <section className="mb-14">
          <div className="rounded-xl bg-[#1a2230] p-8 text-white">
            <h2 className="text-2xl font-bold">What 40 Years of Data Tell Us</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-green-700/30 bg-green-900/20 p-5">
                <h3 className="text-lg font-bold text-green-400">For Buyers</h3>
                <div className="mt-3 space-y-2 text-sm text-gray-300 leading-relaxed">
                  <p>
                    Every time people said Saskatchewan farmland was &ldquo;too expensive,&rdquo; it kept climbing.
                    The $1,200/acre buyers of 2014 are sitting on $3,100+ land today. That said, 2025&apos;s
                    moderation to 9.4% growth signals a more mature market.
                  </p>
                  <p>
                    The best buying windows historically came during stagnation periods (1998–2005) and
                    correction phases (2015–2017). FCC&apos;s caution about trade uncertainty and compressed
                    margins suggests the next 12–18 months could offer selective opportunities — especially
                    if a buyer is patient and knows their numbers.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-[#c49a2a]/30 bg-[#c49a2a]/10 p-5">
                <h3 className="text-lg font-bold text-[#c49a2a]">For Sellers</h3>
                <div className="mt-3 space-y-2 text-sm text-gray-300 leading-relaxed">
                  <p>
                    Values are at all-time highs. An acre that was worth $200 in the late 1980s is now worth
                    $3,100+. The 40-year trend is unmistakably upward, but past growth doesn&apos;t guarantee
                    future returns — and the rate of appreciation is slowing.
                  </p>
                  <p>
                    If you&apos;re considering a sale, the market is still favourable. Demand remains solid
                    and inventory is tight. But with trade headwinds and tighter margins on the horizon,
                    timing a sale in the next 1–2 years while buyer competition is still healthy could be
                    the prudent move. Every situation is different — run your own numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Related Resources
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "2025 Farmland Market Report",
                href: "/field-notes/farmland-market-report-2025",
                desc: "Full regional breakdown, rental rates, irrigated land prices, and 2026 outlook.",
              },
              {
                title: "Saskatchewan Farmland Rental Rates (2026)",
                href: "/field-notes/saskatchewan-farmland-rental-rates",
                desc: "Cash rent by region ($68–$124/acre), how rates are set, and cash rent vs crop share.",
              },
              {
                title: "Best RMs for Farmland Investment",
                href: "/blog/best-rural-municipalities-farmland-investment-saskatchewan",
                desc: "Which Rural Municipalities offer the best value and growth potential for investors.",
              },
              {
                title: "Capital Gains Tax on Farmland Sales",
                href: "/blog/capital-gains-tax-selling-farmland-saskatchewan",
                desc: "What you need to know about taxes when selling Saskatchewan farmland.",
              },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
              >
                <h4 className="font-bold text-gray-900 group-hover:text-green-700">{r.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{r.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border-2 border-green-700 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-green-800">
            Curious What Your Land Is Worth Today?
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
            Sources: FCC 2025 Annual Farmland Values Report (March 2026), FCC Historical Reports (1986–2024), Industry Market Data
          </p>
        </section>
      </article>
    </div>
  );
}

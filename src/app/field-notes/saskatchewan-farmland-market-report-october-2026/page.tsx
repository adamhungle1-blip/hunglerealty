import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saskatchewan Farmland Market Report — October 2026",
  description:
    "October 2026 Saskatchewan farmland market update: land values, interest rates, farm income, the late 2026 harvest, and what it all means for buyers and sellers.",
};

const heroStats = [
  { value: "+9.4%", label: "2025 Farmland Growth", sub: "FCC confirmed" },
  { value: "2.25%", label: "BoC Overnight Rate", sub: "Sept 2026" },
  { value: "+$744.5M", label: "SK Farm Cash Receipts", sub: "H1 2026 vs H1 2025" },
  { value: "41%", label: "Crop Harvested", sub: "vs. 82% five-year avg" },
];

const growthTrend = [
  { period: "2023", growth: "+15.7%" },
  { period: "2024", growth: "+13.1%" },
  { period: "2025", growth: "+9.4%" },
  { period: "2026", growth: "TBD — FCC data pending" },
];

const cropData = [
  { crop: "Wheat", production: "16.9 million tonnes", change: "down 9.7% from 2025" },
  { crop: "Canola", production: "12.7 million tonnes", change: "up 1.8% from 2025" },
];

export default function FarmlandMarketReportOctober2026() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a2230]">
        <div className="absolute inset-0">
          <Image
            src="/hero/slide2.jpg"
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
            Saskatchewan Farmland
            <br />
            Market Report
          </h1>
          <p className="mt-3 text-lg text-gray-300">October 2026 Market Update</p>
          <p className="mt-1 text-sm text-gray-500">Prepared October 1, 2026</p>

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
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-700">
              Home
            </Link>
            <span>/</span>
            <Link href="/field-notes" className="hover:text-green-700">
              Field Notes
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">October 2026 Market Update</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-5xl px-4 py-12">
        {/* Overview */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Saskatchewan Farmland Remains in Demand
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Saskatchewan farmland is still showing real strength heading into the last quarter
              of 2026. After a few years of rapid appreciation, the market has become more
              selective, but good land is still pulling strong offers — especially when it&apos;s
              well located, has solid soil, and fits naturally into an existing operation.
            </p>
            <p>
              FCC reported that Saskatchewan cultivated farmland values rose 9.4% in 2025, on the
              heels of 13.1% in 2024 and 15.7% in 2023. We don&apos;t have FCC&apos;s final 2026
              numbers yet, but from what I&apos;m seeing across the province, there&apos;s been no
              broad correction. What&apos;s changed is that the market is separating more clearly
              between premium land and average land — good ground is still finding buyers, they&apos;re
              just a lot more disciplined about what they&apos;ll pay for it.
            </p>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-green-700 bg-green-50 p-6">
            <h3 className="text-lg font-bold text-green-800">The Numbers at a Glance</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                2025 Saskatchewan farmland growth: +9.4% (2024: +13.1%, 2023: +15.7%)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                Bank of Canada overnight rate: 2.25%
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                SK farm cash receipts: up strongly through the first half of 2026
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                2026 harvest: significantly later than normal
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                Best demand: productive cultivated land near established operations
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                Market direction: firm, but increasingly selective
              </li>
            </ul>
          </div>
        </section>

        {/* Growth trend table */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Three Years of Slowing — But Still Positive — Growth
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                  <th className="px-4 py-3 text-left font-semibold">SK Farmland Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {growthTrend.map((row, i) => (
                  <tr key={row.period} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium">{row.period}</td>
                    <td className="px-4 py-3">{row.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm italic text-gray-500">
            Each of the last three years has grown more slowly than the one before it. That&apos;s
            a cooling trend, not a correction — land values are still climbing, just not at the
            breakneck pace of 2022–2023.
          </p>
        </section>

        {/* Interest rates */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Interest Rates Are Helping
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              One real difference between today&apos;s market and a few years ago is the cost of
              borrowing. The Bank of Canada&apos;s overnight rate currently sits at 2.25% — well
              below where it was during the 2023–2024 tightening cycle. That doesn&apos;t suddenly
              make farmland cheap, but it does improve the math for well-capitalized operators
              looking to expand.
            </p>
            <p>
              That matters because Saskatchewan farmland is still expensive relative to the income
              it generates on its own. For a lot of buyers, the question isn&apos;t really
              whether a quarter cash-flows by itself — it&apos;s what that quarter adds to the
              operation over the next ten, twenty, or thirty years. That longer view is a big part
              of what&apos;s kept land prices supported.
            </p>
          </div>
        </section>

        {/* Farm income */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            2026 Farm Income Has Been Stronger
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              There are some encouraging numbers underneath the land market too. Statistics Canada
              reported that Saskatchewan posted the largest increase in farm cash receipts of any
              province through the first half of 2026 — up roughly $744.5 million compared to the
              same period in 2025. Canola did a lot of the heavy lifting here, with higher
              marketings and stronger prices boosting receipts substantially.
            </p>
            <p>
              That doesn&apos;t mean every farm had a great year. Input costs are still high,
              yields vary a lot by area, and grain quality has become a concern in parts of the
              province. But overall, stronger revenue and existing land equity are keeping
              established operators in a position to keep buying.
            </p>
          </div>
        </section>

        {/* Harvest */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            The Big Story Right Now: Harvest
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              The 2026 harvest has been far from normal. As of September 21, only 41% of
              Saskatchewan&apos;s crop had come off, compared to a five-year average of 82%. The
              southwest was furthest along at 67%, while parts of the north and east were well
              behind that. Rain, wet fields, and unusually high humidity slowed combines across
              the province all through September, and in some areas cereals and pulses still
              standing have started sprouting and losing quality.
            </p>
            <p>
              Land values aren&apos;t set by a single harvest, but farm profitability still
              affects how aggressively buyers bid. If crop quality keeps slipping in a given area,
              I&apos;d expect buyers to get more cautious on marginal land. Premium ground tends to
              be a different story — it holds up regardless.
            </p>
          </div>
        </section>

        {/* Good land separating */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Good Land Is Separating From Average Land
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              This is probably the biggest trend I&apos;m seeing in the Saskatchewan market right
              now. There&apos;s less and less value in talking about a single &ldquo;dollar per
              acre&rdquo; number for farmland in general. Two quarters a few miles apart can sell
              for very different prices depending on soil class, cultivated acres, drainage,
              stones, topography, access, field shape, historical productivity, location, existing
              rental arrangements, and who the nearby buyers happen to be.
            </p>
            <p>
              The strongest land still attracts multiple serious buyers. Lower-quality or awkward
              parcels can sit a lot longer, especially when a seller&apos;s expectations are based
              on the best sale in the RM rather than truly comparable land.
            </p>
          </div>
        </section>

        {/* Location matters */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Location Still Matters — A Lot
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Neighbouring farmers remain some of the strongest buyers out there. A quarter next
              to an operator&apos;s existing land can genuinely be worth more to that farmer than
              the exact same quarter would be to someone thirty miles away. It can cut down
              equipment movement, improve field efficiency, round out a contiguous block, and open
              up options for drainage, grain storage, or future expansion.
            </p>
            <p>
              That strategic value is a big reason premium land can sell at numbers that are hard
              to justify by rent alone.
            </p>
          </div>
        </section>

        {/* Regional */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Northern &amp; Eastern Saskatchewan Remain Strong
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Northern and eastern Saskatchewan continue to draw strong demand for productive
              cultivated land. Areas with dependable rainfall, good black soils, and a heavy
              concentration of established grain farms remain highly competitive.
            </p>
            <p>
              Southern Saskatchewan still offers lower entry prices in many areas, but how much
              lower depends heavily on soil quality and production history — the southeast in
              particular is tough to generalize. Good land around Weyburn, Regina, Estevan, and
              the surrounding farming areas can draw plenty of interest when a quality package
              comes up. The southwest remains more sensitive to moisture history and production
              risk, though strong operators are still chasing land that fits their existing
              operation.
            </p>
          </div>
        </section>

        {/* Crop outlook */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Crop Outlook Is Mixed — But Not Weak
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2d6a4f] text-white">
                  <th className="px-4 py-3 text-left font-semibold">Crop</th>
                  <th className="px-4 py-3 text-left font-semibold">2026 Production</th>
                  <th className="px-4 py-3 text-left font-semibold">vs. 2025</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cropData.map((row, i) => (
                  <tr key={row.crop} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold">{row.crop}</td>
                    <td className="px-4 py-3">{row.production}</td>
                    <td className="px-4 py-3">{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Statistics Canada&apos;s September crop estimates show just how variable 2026 has
              been. Despite lower projected yields than last year&apos;s record crop, Saskatchewan
              seeded substantially more canola this year, and harvested acreage is projected at a
              record level. The crop is out there — the bigger concern heading into October is
              getting it off safely and keeping quality intact.
            </p>
          </div>
        </section>

        {/* Rent vs price */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Farmland Rent Isn&apos;t Keeping Up With Land Prices
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Another trend worth watching is the gap between farmland prices and cash rent. FCC
              reports that rent-to-price ratios across Canada have been declining as land values
              climb faster than rental rates, and that holds true in Saskatchewan too.
            </p>
            <p>
              From an investor&apos;s perspective, farmland bought purely for cash yield is harder
              to justify at today&apos;s prices. Producers see it differently, though — ownership
              gives them something rent never will: control of the land and the long-term
              appreciation that comes with it. That difference is a big part of what separates
              what an investor is willing to pay from what an expanding farmer is willing to pay.
            </p>
          </div>
        </section>

        {/* Fair rent */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            What Is Fair Rent?
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              There&apos;s no single Saskatchewan rental rate. I&apos;ve seen productive cultivated
              land support rents around $100 per cultivated acre and up, while lower-quality
              ground rents for a lot less — and in some cases, premium land can command
              considerably more than that.
            </p>
            <p>
              The number that actually matters isn&apos;t rent per titled acre, it&apos;s what the
              rent works out to on the acres that actually grow a crop. A quarter with 145
              cultivated acres is a different economic proposition than one with 110. Always run
              the numbers on what&apos;s actually producing.
            </p>
          </div>
        </section>

        {/* Investors */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Are Investors Still Buying Saskatchewan Farmland?
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Yes, but the economics have shifted. Investors are still drawn to Saskatchewan
              farmland for a lot of the same reasons they always have — limited supply, long-term
              appreciation, productive agricultural use, rental income, a hedge against inflation,
              and land values that remain relatively inexpensive compared with some other major
              Canadian agricultural regions.
            </p>
            <p>
              That said, today&apos;s buyers need to go in understanding that Saskatchewan
              farmland isn&apos;t a high-yielding passive investment at a lot of current purchase
              prices anymore. The appeal is increasingly a combination of modest rental yield plus
              long-term land appreciation, rather than strong cash flow on its own.
            </p>
          </div>
        </section>

        {/* What I'm seeing */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            What I&apos;m Seeing in the Market
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Working directly with farmland buyers and sellers across Saskatchewan, here&apos;s
              how I&apos;d describe the October 2026 market: strong, but no longer indiscriminate.
              The best properties still create real competition. Average land needs to be priced
              properly to move. Land with issues needs to reflect those issues in the price. And
              location can completely change the outcome on two otherwise similar quarters.
            </p>
            <p>
              I&apos;m also seeing buyers dig a lot deeper into the details behind a listing —
              cultivated acres, assessment, soil class, rental history, comparable sales — instead
              of just leaning on an average price per acre. That&apos;s a good sign. It means the
              market is maturing.
            </p>
          </div>
        </section>

        {/* Should you sell */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Should You Sell Farmland in 2026?
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              For landowners thinking about selling, this is still a historically strong market.
              Values have appreciated significantly over the past several years, and there are
              still well-capitalized farmers out there looking to expand. But every parcel is
              different, and &ldquo;what is Saskatchewan farmland worth&rdquo; isn&apos;t really
              the right question. The better one is: what is my farmland worth in today&apos;s
              market?
            </p>
            <p>
              Answering that properly means looking at actual comparable sales in your area and
              adjusting for soil quality, cultivated acres, location, and the property&apos;s own
              characteristics. One sale three municipalities over doesn&apos;t tell you what your
              farm is worth.
            </p>
          </div>
        </section>

        {/* Buyers */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            What About Buyers?
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Buyers need to stay disciplined. Good farmland rarely looks cheap when you&apos;re
              the one writing the cheque, but paying a premium for excellent land can still make
              more sense than getting a &ldquo;deal&rdquo; on poor land. Look closely at price per
              cultivated acre, soil class, assessment, historical yields, drainage, rental
              potential, financing cost, nearby land values, and how well the parcel actually fits
              your operation.
            </p>
            <p>
              Most importantly, don&apos;t justify a purchase using your best crop ever. Run the
              numbers on realistic long-term yields and expenses, not a lucky year.
            </p>
          </div>
        </section>

        {/* 2027 outlook */}
        <section className="mb-14">
          <h2 className="border-b-2 border-green-700 pb-2 text-2xl font-bold text-green-800 md:text-3xl">
            Looking Toward 2027
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#c49a2a]">1. How the 2026 harvest finishes</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                A late harvest and quality downgrades could weigh on farm income in certain areas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#c49a2a]">2. Interest rates</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Lower borrowing costs have helped offset rising land prices so far — any further
                moves from the Bank of Canada will matter.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#c49a2a]">3. Grain prices</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Strong commodity prices can quickly increase competition for land. Weak prices do
                the opposite.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#c49a2a]">4. Cash rents</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Rent hasn&apos;t kept pace with land appreciation. Something eventually has to
                give — either rents rise, land appreciation slows, or investor yields stay
                compressed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#c49a2a]">5. Supply</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                This might be the biggest factor of all. There&apos;s still only so much good
                Saskatchewan farmland for sale. When an excellent parcel comes up beside a strong
                operator, provincial averages stop mattering much — two motivated neighbours can
                set the market on their own.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom line */}
        <section className="mb-14">
          <div className="rounded-xl bg-[#1a2230] p-8 text-white">
            <h2 className="text-2xl font-bold">The Bottom Line</h2>
            <div className="mt-4 rounded-lg border border-[#c49a2a]/30 bg-[#c49a2a]/10 p-5">
              <p className="font-bold text-[#c49a2a]">
                Saskatchewan farmland remains one of the strongest long-term agricultural assets
                in Canada.
              </p>
              <div className="mt-3 space-y-2 text-sm text-gray-300 leading-relaxed">
                <p>
                  The market isn&apos;t moving at the frantic pace we saw during the biggest
                  appreciation years, but there&apos;s been no broad collapse in demand. Instead,
                  quality matters more than ever — strong soil, high cultivated acres, good
                  drainage, a good location, and good neighbouring farms. Those properties remain
                  extremely desirable.
                </p>
                <p>
                  The market is shifting from a stretch where almost everything appreciated
                  rapidly into one where the best land increasingly separates itself from the
                  rest. For buyers, that means knowing your numbers. For sellers, it means knowing
                  exactly what you own, and using the right comparable sales before deciding what
                  it&apos;s worth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border-2 border-green-700 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-green-800">Curious What Your Farmland Is Worth?</h2>
          <p className="mx-auto mt-2 max-w-lg text-gray-600">
            I provide no-obligation farmland valuations throughout Saskatchewan using recent
            comparable sales, soil class, assessment, cultivated acres, and local market activity.
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
            Sources: Farm Credit Canada — 2025 Farmland Values Report &amp; 2025 Farmland Rental
            Rate Analysis; Statistics Canada — Farm Cash Receipts, January–June 2026 &amp;
            Principal Field Crop Estimates, September 2026; Government of Saskatchewan — 2026 Crop
            Reports; Bank of Canada — September 2026 Interest Rate Decision
          </p>
        </section>
      </article>
    </div>
  );
}

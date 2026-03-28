import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { rmData, getRMBySlug, getAllRMSlugs } from "@/data/rm-data";
import { getRMContent } from "@/data/rm-content";
import { rmNumbers } from "@/data/rm-numbers";
import RmListings from "@/components/RmListings";

/* ---------- static generation ---------- */

export function generateStaticParams() {
  return getAllRMSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rm = getRMBySlug(slug);
  if (!rm) return {};
  const content = getRMContent(slug);
  const desc = content
    ? `${content.soilType}. Farmland for sale in RM of ${rm.name}, Saskatchewan. Nearby towns: ${content.towns.slice(0, 3).join(", ")}. Contact Adam Hungle, REALTOR® — 306.531.8854.`
    : `Browse farmland, acreages, and rural properties for sale in the Rural Municipality of ${rm.name}, Saskatchewan. Contact Adam Hungle, REALTOR® for expert local guidance.`;
  return {
    title: `Farmland for Sale in RM of ${rm.name} | Hungle Realty`,
    description: desc,
    openGraph: {
      title: `RM of ${rm.name} — Saskatchewan Farmland for Sale`,
      description: `Search farm listings in RM of ${rm.name}. ${content?.soilType || "Saskatchewan agricultural land"}. Expert guidance from Adam Hungle, top 5% Saskatchewan REALTOR®.`,
      images: [{ url: "/hero/slide1.jpg", width: 1200, height: 630 }],
    },
    keywords: content?.keywords,
  };
}

/* ---------- nearby RMs helper (geographic proximity via RM grid numbers) ---------- */

function getNearbyRMs(currentSlug: string, count = 6) {
  const currentNum = rmNumbers[currentSlug];

  // If we don't have an RM number, fall back to alphabetical neighbours
  if (!currentNum) {
    const idx = rmData.findIndex((rm) => rm.slug === currentSlug);
    if (idx === -1) return rmData.slice(0, count);
    const nearby: typeof rmData = [];
    for (let i = Math.max(0, idx - 3); nearby.length < count && i < rmData.length; i++) {
      if (i !== idx) nearby.push(rmData[i]);
    }
    return nearby.slice(0, count);
  }

  // Saskatchewan RMs sit on a ~30-column grid (rows go south→north, columns east→west).
  // Verified: Sherwood(159)↔Lumsden(189) and Edenwold(158)↔Lajord(128) differ by 30 (N-S).
  const col = currentNum % 30;
  const row = Math.floor(currentNum / 30);

  const scored = rmData
    .filter((rm) => rm.slug !== currentSlug && rmNumbers[rm.slug] !== undefined)
    .map((rm) => {
      const n = rmNumbers[rm.slug]!;
      const nc = n % 30;
      const nr = Math.floor(n / 30);
      const dist = Math.abs(nc - col) + Math.abs(nr - row); // Manhattan distance on the grid
      return { rm, dist };
    })
    .sort((a, b) => a.dist - b.dist);

  return scored.slice(0, count).map((s) => s.rm);
}

/* ---------- page ---------- */

export default async function RMPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rm = getRMBySlug(slug);
  if (!rm) notFound();

  const content = getRMContent(slug);
  const nearby = getNearbyRMs(slug);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[220px] overflow-hidden md:h-[280px]">
        <Image
          src="/hero/slide6.jpg"
          alt={`Farmland for sale in RM of ${rm.name}, Saskatchewan — aerial view of agricultural land`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            RM of {rm.name}
          </h1>
          <p className="mt-2 text-base text-green-200 md:text-lg">
            Farmland for Sale in Saskatchewan
          </p>
          {content && (
            <p className="mt-1 text-sm text-green-300/80">
              {content.soilType} &bull; {content.nearestCity}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-green-800">
              Farmland for Sale in RM of {rm.name}
            </h2>

            {/* Rich unique content if available */}
            {content ? (
              <>
                {content.description.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-6 leading-relaxed text-gray-700">
                    {para}
                  </p>
                ))}

                {/* Area Details Cards */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {/* Nearby Towns */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-green-800">
                      Nearby Towns
                    </h4>
                    <p className="text-sm text-gray-700">
                      {content.towns.join(", ")}
                    </p>
                  </div>

                  {/* Highway Access */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-green-800">
                      Highway Access
                    </h4>
                    <p className="text-sm text-gray-700">
                      {content.highways.join(", ")}
                    </p>
                  </div>

                  {/* Soil & Agriculture */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-green-800">
                      Soil & Agriculture
                    </h4>
                    <p className="text-sm text-gray-700">{content.soilType}</p>
                  </div>

                  {/* Nearest City */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-green-800">
                      Nearest Major City
                    </h4>
                    <p className="text-sm text-gray-700">{content.nearestCity}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Looking for farmland in the Rural Municipality of {rm.name}? Whether you&apos;re expanding
                  an existing operation, starting a new one, or investing in Saskatchewan agricultural
                  land, this area offers opportunity. Adam Hungle specializes in buying and selling
                  farmland across Saskatchewan and can help you find the right property at the right
                  price.
                </p>
                <p className="mb-6 leading-relaxed text-gray-700">
                  The RM of {rm.name} is one of {rmData.length} rural municipalities in Saskatchewan.
                  Farmland values in Saskatchewan have seen consistent year-over-year growth, making it
                  one of the strongest agricultural land markets in Canada. Whether you&apos;re looking for
                  grain land, hay land, mixed farming, or pasture, Adam can provide comparable sales data,
                  soil analysis, and market insight specific to this RM.
                </p>
              </>
            )}

            {/* DDF Listings for this RM */}
            <RmListings rmName={rm.name} />

            {/* What to know */}
            <h3 className="mb-3 mt-8 text-xl font-bold text-gray-900">
              What to Know About Buying in RM of {rm.name}
            </h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              Farmland pricing in Saskatchewan is hyper-local. Two quarters in the same RM can vary
              significantly based on soil class, drainage, access, and improvements. Before making an
              offer, Adam will provide a detailed comparable sales analysis for the RM of {rm.name}{" "}
              so you know exactly what the land is worth. He&apos;ll also check for mineral rights, surface
              leases, environmental considerations, and other factors that could affect your purchase.
            </p>
            <p className="mb-6 leading-relaxed text-gray-700">
              Sellers in RM of {rm.name}{" "}benefit from Saskatchewan&apos;s all-time-high farmland values and
              Adam&apos;s extensive buyer database. If you&apos;re thinking about selling, request a
              no-obligation valuation.
            </p>

            {/* FAQ Section for SEO */}
            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Frequently Asked Questions — RM of {rm.name}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    How much does farmland cost in RM of {rm.name}?
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Farmland prices vary based on soil class, improvements, and location within the RM.
                    Contact Adam Hungle at 306.531.8854 for a free comparable sales analysis specific to
                    RM of {rm.name}.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Is farmland in RM of {rm.name} a good investment?
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Saskatchewan farmland has delivered consistent year-over-year value increases, with
                    provincial averages up 12% in 2025. {content?.soilType ? `The RM of ${rm.name} features ${content.soilType.toLowerCase()}, ` : ""}making
                    it attractive for both active farming operations and long-term investment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Do I need a REALTOR® to buy farmland in Saskatchewan?
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    While not legally required, working with a farmland specialist like Adam Hungle gives
                    you access to comparable sales data, mineral rights verification, soil analysis, and
                    expert negotiation — all at no cost to the buyer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA */}
            <div className="rounded-lg bg-green-800 p-5 text-white">
              <h3 className="mb-2 text-lg font-bold">Request Valuation</h3>
              <p className="mb-4 text-sm text-green-100">
                Find out what your land in RM of {rm.name} is worth. No obligation.
              </p>
              <Link
                href="/contact"
                className="block rounded bg-white px-4 py-2.5 text-center text-sm font-bold text-green-800 hover:bg-green-50"
              >
                Request Valuation
              </Link>
              <p className="mt-3 text-center text-xs text-green-200">
                Or call <a href="tel:3065318854" className="underline">306.531.8854</a>
              </p>
            </div>

            {/* Nearby RMs */}
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="mb-3 text-base font-bold text-gray-900">Nearby RMs</h3>
              <ul className="space-y-1.5">
                {nearby.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/rm/${n.slug}`}
                      className="text-sm text-green-700 hover:text-green-900 hover:underline"
                    >
                      RM of {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="mb-3 text-base font-bold text-gray-900">Quick Links</h3>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link href="/buying" className="text-green-700 hover:underline">
                    Buying Guide
                  </Link>
                </li>
                <li>
                  <Link href="/selling" className="text-green-700 hover:underline">
                    Selling Guide
                  </Link>
                </li>
                <li>
                  <Link href="/field-notes/farmland-market-report-2025" className="text-green-700 hover:underline">
                    2025 Market Report
                  </Link>
                </li>
                <li>
                  <Link href="/search?propertyType=Agriculture" className="text-green-700 hover:underline">
                    All Farm Listings
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-green-700 hover:underline">
                    About Adam
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* JSON-LD for this RM page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `How much does farmland cost in RM of ${rm.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Farmland prices in RM of ${rm.name} vary based on soil class, improvements, and location. Contact Adam Hungle at 306.531.8854 for a free comparable sales analysis.`,
                },
              },
              {
                "@type": "Question",
                name: `Is farmland in RM of ${rm.name} a good investment?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Saskatchewan farmland has delivered consistent year-over-year value increases, with provincial averages up 12% in 2025.${content?.soilType ? ` The RM of ${rm.name} features ${content.soilType.toLowerCase()}.` : ""}`,
                },
              },
              {
                "@type": "Question",
                name: "Do I need a REALTOR® to buy farmland in Saskatchewan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While not legally required, working with a farmland specialist gives you access to comparable sales data, mineral rights verification, soil analysis, and expert negotiation — all at no cost to the buyer.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}

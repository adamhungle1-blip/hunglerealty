import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTownBySlug, getAllTownSlugs } from "@/data/towns-data";
import { getRMBySlug } from "@/data/rm-data";
import { getRMContent } from "@/data/rm-content";
import RmListings from "@/components/RmListings";

/* ---------- static generation ---------- */

export function generateStaticParams() {
  return getAllTownSlugs().map((slug) => ({ "town-slug": slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ "town-slug": string }>;
}): Promise<Metadata> {
  const { "town-slug": slug } = await params;
  const town = getTownBySlug(slug);
  if (!town) return {};

  const rmNames = town.rmSlugs
    .map((s) => getRMBySlug(s))
    .filter(Boolean)
    .map((rm) => rm!.name);

  const desc = `Farmland for sale near ${town.name}, Saskatchewan. Located in RM of ${rmNames.join(" & ")}. ${town.soilType ? town.soilType + ". " : ""}Contact Adam Hungle, REALTOR® — 306.531.8854.`;

  return {
    title: `Farmland for Sale Near ${town.name}, Saskatchewan`,
    description: desc,
    alternates: {
      canonical: `/town/${slug}`,
    },
    openGraph: {
      title: `Farmland for Sale Near ${town.name}, SK`,
      description: `Search farmland and agricultural land for sale near ${town.name}, Saskatchewan. ${town.soilType || "Quality agricultural land"} — expert guidance from Adam Hungle.`,
      images: [{ url: "/hero/slide1.jpg", width: 1200, height: 630 }],
    },
    keywords: [
      `farmland for sale near ${town.name}`,
      `land for sale ${town.name} Saskatchewan`,
      `farm land ${town.name} SK`,
      `agricultural land near ${town.name}`,
      `${town.name} Saskatchewan farmland`,
      ...rmNames.map((n) => `RM of ${n} farmland`),
    ],
  };
}

/* ---------- description generator ---------- */

function generateDescription(
  townName: string,
  rmNames: string[],
  soilType: string,
  nearestCity: string,
  highways: string[]
): string[] {
  const rmText =
    rmNames.length === 1
      ? `the Rural Municipality of ${rmNames[0]}`
      : `the Rural Municipalities of ${rmNames.slice(0, -1).join(", ")} and ${rmNames[rmNames.length - 1]}`;

  const paras: string[] = [];

  // Paragraph 1 — location & agricultural character
  let p1 = `${townName} is a community in ${rmText}, Saskatchewan`;
  if (nearestCity) {
    p1 += `, situated ${nearestCity.includes("~") ? "" : "approximately "}${nearestCity.replace(/^.*?,\s*/, "").replace("~", "")} from ${nearestCity.replace(/,.*$/, "")}`;
  }
  p1 += ".";
  if (soilType) {
    p1 += ` The surrounding area features ${soilType.toLowerCase()}, making it well suited to grain, oilseed, and pulse crop production.`;
  } else {
    p1 += " The surrounding area supports a mix of grain farming, livestock operations, and mixed agricultural use.";
  }
  if (highways.length > 0) {
    p1 += ` Access is provided by ${highways.slice(0, 3).join(", ")}${highways.length > 3 ? " and other regional routes" : ""}, connecting the area to major centres and grain handling facilities.`;
  }
  paras.push(p1);

  // Paragraph 2 — market & investment context
  paras.push(
    `Saskatchewan farmland values have risen steadily, with FCC reporting a 9.4% provincial average increase in 2025. Land near ${townName} benefits from strong agricultural fundamentals and growing investor interest. Whether you're expanding an existing operation, starting a new one, or looking for a long-term land investment, the ${townName} area offers opportunity.`
  );

  return paras;
}

/* ---------- page ---------- */

export default async function TownPage({
  params,
}: {
  params: Promise<{ "town-slug": string }>;
}) {
  const { "town-slug": slug } = await params;
  const town = getTownBySlug(slug);
  if (!town) notFound();

  // Resolve RM data
  const rms = town.rmSlugs
    .map((s) => {
      const rm = getRMBySlug(s);
      const content = getRMContent(s);
      return rm ? { ...rm, content } : null;
    })
    .filter(Boolean) as Array<{
    name: string;
    slug: string;
    content?: ReturnType<typeof getRMContent>;
  }>;

  const rmNames = rms.map((r) => r.name);
  const description = generateDescription(
    town.name,
    rmNames,
    town.soilType,
    town.nearestCity,
    town.highways
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[220px] overflow-hidden md:h-[280px]">
        <Image
          src="/hero/slide6.jpg"
          alt={`Farmland for sale near ${town.name}, Saskatchewan — aerial view of agricultural land`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-4xl lg:text-5xl">
            Farmland Near {town.name}
          </h1>
          <p className="mt-2 text-base text-green-200 md:text-lg">
            Saskatchewan Agricultural Land for Sale
          </p>
          {town.soilType && (
            <p className="mt-1 text-sm text-green-300/80">
              {town.soilType} &bull; {town.nearestCity}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-green-800">
              Farmland for Sale Near {town.name}, Saskatchewan
            </h2>

            {/* Description */}
            {description.map((para, i) => (
              <p key={i} className="mb-6 leading-relaxed text-gray-700">
                {para}
              </p>
            ))}

            {/* Area Details Cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {/* Rural Municipality */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-green-800">
                  Rural Municipality
                </h4>
                <div className="space-y-1">
                  {rms.map((rm) => (
                    <Link
                      key={rm.slug}
                      href={`/rm/${rm.slug}`}
                      className="block text-sm text-green-700 hover:text-green-900 hover:underline"
                    >
                      RM of {rm.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Highway Access */}
              {town.highways.length > 0 && (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-green-800">
                    Highway Access
                  </h4>
                  <p className="text-sm text-gray-700">
                    {town.highways.join(", ")}
                  </p>
                </div>
              )}

              {/* Soil & Agriculture */}
              {town.soilType && (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-green-800">
                    Soil & Agriculture
                  </h4>
                  <p className="text-sm text-gray-700">{town.soilType}</p>
                </div>
              )}

              {/* Nearest City */}
              {town.nearestCity && (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-green-800">
                    Nearest Major City
                  </h4>
                  <p className="text-sm text-gray-700">{town.nearestCity}</p>
                </div>
              )}
            </div>

            {/* Internal Links */}
            <div className="mb-8 rounded-lg border border-green-200 bg-green-50/50 p-5">
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-green-800">
                Explore More
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
                <Link
                  href="/field-notes/farmland-market-report-2025"
                  className="text-sm text-green-700 hover:text-green-900 hover:underline"
                >
                  2025 Farmland Market Report
                </Link>
                <Link
                  href="/buying"
                  className="text-sm text-green-700 hover:text-green-900 hover:underline"
                >
                  Saskatchewan Buying Guide
                </Link>
                <Link
                  href="/selling"
                  className="text-sm text-green-700 hover:text-green-900 hover:underline"
                >
                  Saskatchewan Selling Guide
                </Link>
                <Link
                  href="/field-notes/saskatchewan-farmland-rental-rates"
                  className="text-sm text-green-700 hover:text-green-900 hover:underline"
                >
                  Farmland Rental Rates
                </Link>
                {rms.map((rm) => (
                  <Link
                    key={rm.slug}
                    href={`/rm/${rm.slug}`}
                    className="text-sm text-green-700 hover:text-green-900 hover:underline"
                  >
                    RM of {rm.name} — All Listings
                  </Link>
                ))}
              </div>
            </div>

            {/* Listings from the primary RM */}
            <RmListings rmName={rms[0]?.name ?? town.name} />

            {/* CTA Banner */}
            <div className="mt-8 rounded-lg bg-green-800 p-6 text-white">
              <h3 className="mb-2 text-lg font-bold">
                Looking for farmland near {town.name}?
              </h3>
              <p className="mb-4 text-sm text-green-100">
                Adam Hungle specializes in buying and selling Saskatchewan
                farmland. Get a free, no-obligation land valuation or browse
                current listings in the {town.name} area.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded bg-white px-4 py-2.5 text-sm font-bold text-green-800 hover:bg-green-50"
                >
                  Request Valuation
                </Link>
                <a
                  href="tel:3065318854"
                  className="rounded border border-white px-4 py-2.5 text-sm font-bold text-white hover:bg-white/10"
                >
                  Call 306.531.8854
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Frequently Asked Questions — {town.name} Area
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    How much does farmland cost near {town.name}?
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Farmland prices vary based on soil class, improvements,
                    drainage, and access. Contact Adam Hungle at 306.531.8854 for
                    a free comparable sales analysis specific to the {town.name}{" "}
                    area.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    What RM is {town.name} in?
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {town.name} is located in{" "}
                    {rmNames.length === 1
                      ? `the RM of ${rmNames[0]}`
                      : `the RMs of ${rmNames.join(" and ")}`}
                    , Saskatchewan.{" "}
                    {town.soilType &&
                      `The area features ${town.soilType.toLowerCase()}.`}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Is farmland near {town.name} a good investment?
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Saskatchewan farmland has delivered consistent year-over-year
                    value increases, with provincial averages up 9.4% in 2025.
                    The {town.name} area offers strong agricultural fundamentals
                    for both active farming and long-term investment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA */}
            <div className="rounded-lg bg-green-800 p-5 text-white">
              <h3 className="mb-2 text-lg font-bold">Contact Adam Hungle</h3>
              <p className="mb-4 text-sm text-green-100">
                Looking for farmland near {town.name}? I can help you find the
                right property at the right price.
              </p>
              <Link
                href="/contact"
                className="block rounded bg-white px-4 py-2.5 text-center text-sm font-bold text-green-800 hover:bg-green-50"
              >
                Request Valuation
              </Link>
              <p className="mt-3 text-center text-xs text-green-200">
                Or call{" "}
                <a href="tel:3065318854" className="underline">
                  306.531.8854
                </a>
              </p>
            </div>

            {/* RM Links */}
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="mb-3 text-base font-bold text-gray-900">
                Rural {rmNames.length === 1 ? "Municipality" : "Municipalities"}
              </h3>
              <ul className="space-y-1.5">
                {rms.map((rm) => (
                  <li key={rm.slug}>
                    <Link
                      href={`/rm/${rm.slug}`}
                      className="text-sm text-green-700 hover:text-green-900 hover:underline"
                    >
                      RM of {rm.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="mb-3 text-base font-bold text-gray-900">
                Quick Links
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link
                    href="/buying"
                    className="text-green-700 hover:underline"
                  >
                    Buying Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/selling"
                    className="text-green-700 hover:underline"
                  >
                    Selling Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/field-notes/farmland-market-report-2025"
                    className="text-green-700 hover:underline"
                  >
                    2025 Market Report
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search?propertyType=Agriculture"
                    className="text-green-700 hover:underline"
                  >
                    All Farm Listings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-green-700 hover:underline"
                  >
                    About Adam
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `How much does farmland cost near ${town.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Farmland prices near ${town.name} vary based on soil class, improvements, and location. Contact Adam Hungle at 306.531.8854 for a free comparable sales analysis.`,
                },
              },
              {
                "@type": "Question",
                name: `What RM is ${town.name} in?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${town.name} is located in ${rmNames.length === 1 ? `the RM of ${rmNames[0]}` : `the RMs of ${rmNames.join(" and ")}`}, Saskatchewan.`,
                },
              },
              {
                "@type": "Question",
                name: `Is farmland near ${town.name} a good investment?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Saskatchewan farmland has delivered consistent year-over-year value increases, with provincial averages up 9.4% in 2025. The ${town.name} area offers strong agricultural fundamentals.`,
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}

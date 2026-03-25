import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { rmData, getRMBySlug, getAllRMSlugs } from "@/data/rm-data";

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
  return {
    title: `Farmland for Sale in RM of ${rm.name} | Hungle Realty`,
    description: `Browse farmland, acreages, and rural properties for sale in the Rural Municipality of ${rm.name}, Saskatchewan. Contact Adam Hungle, REALTOR® for expert local guidance.`,
    openGraph: {
      title: `RM of ${rm.name} — Saskatchewan Farmland for Sale`,
      description: `Search farm listings in RM of ${rm.name}. Expert guidance from Adam Hungle, top 5% Saskatchewan REALTOR®.`,
    },
  };
}

/* ---------- nearby RMs helper ---------- */

function getNearbyRMs(currentSlug: string, count = 6) {
  const idx = rmData.findIndex((rm) => rm.slug === currentSlug);
  if (idx === -1) return rmData.slice(0, count);
  const nearby: typeof rmData = [];
  // grab RMs around the alphabetical position
  for (let i = Math.max(0, idx - 3); nearby.length < count && i < rmData.length; i++) {
    if (i !== idx) nearby.push(rmData[i]);
  }
  return nearby.slice(0, count);
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

  const nearby = getNearbyRMs(slug);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[220px] overflow-hidden md:h-[280px]">
        <Image
          src="/hero/slide6.jpg"
          alt={`Farmland in RM of ${rm.name}, Saskatchewan`}
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
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-green-800">
              Farmland for Sale in RM of {rm.name}
            </h2>

            <p className="mb-6 leading-relaxed text-gray-700">
              Looking for farmland in the Rural Municipality of {rm.name}? Whether you're expanding
              an existing operation, starting a new one, or investing in Saskatchewan agricultural
              land, this area offers opportunity. Adam Hungle specializes in buying and selling
              farmland across Saskatchewan and can help you find the right property at the right
              price.
            </p>

            <p className="mb-6 leading-relaxed text-gray-700">
              The RM of {rm.name} is one of {rmData.length} rural municipalities in Saskatchewan.
              Farmland values in Saskatchewan have seen consistent year-over-year growth, making it
              one of the strongest agricultural land markets in Canada. Whether you're looking for
              grain land, hay land, mixed farming, or pasture, Adam can provide comparable sales data,
              soil analysis, and market insight specific to this RM.
            </p>

            {/* Listings placeholder */}
            <div className="mb-8 rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
              <p className="text-gray-500">
                MLS® listings for RM of {rm.name} will appear here once the IDX feed is connected.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded bg-green-700 px-6 py-2.5 text-sm font-bold text-white hover:bg-green-800"
              >
                Ask About Available Listings
              </Link>
            </div>

            {/* What to know */}
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              What to Know About Buying in RM of {rm.name}
            </h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              Farmland pricing in Saskatchewan is hyper-local. Two quarters in the same RM can vary
              significantly based on soil class, drainage, access, and improvements. Before making an
              offer, Adam will provide a detailed comparable sales analysis for the RM of {rm.name} so
              you know exactly what the land is worth. He'll also check for mineral rights, surface
              leases, environmental considerations, and other factors that could affect your purchase.
            </p>
            <p className="leading-relaxed text-gray-700">
              Sellers in RM of {rm.name} benefit from Saskatchewan's all-time-high farmland values and
              Adam's extensive buyer database. If you're thinking about selling, request a free,
              no-obligation valuation.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA */}
            <div className="rounded-lg bg-green-800 p-5 text-white">
              <h3 className="mb-2 text-lg font-bold">Free Valuation</h3>
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
                  <Link href="/" className="text-green-700 hover:underline">
                    Search All Listings
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
    </div>
  );
}

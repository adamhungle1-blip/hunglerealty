import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  REGINA_NEIGHBOURHOODS,
  getNeighbourhoodBySlug,
} from "@/data/regina-neighbourhoods";
import ResidentialListings from "../../ResidentialListings";

export function generateStaticParams() {
  return REGINA_NEIGHBOURHOODS.map((n) => ({ neighbourhood: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ neighbourhood: string }>;
}): Promise<Metadata> {
  const { neighbourhood: slug } = await params;
  const hood = getNeighbourhoodBySlug(slug);
  if (!hood) return { title: "Residential" };
  return {
    title: `${hood.name} Homes for Sale — Regina`,
    description: `Browse homes for sale in ${hood.name}, Regina, Saskatchewan. MLS® listings with map search. Adam Hungle, REALTOR®.`,
    openGraph: {
      title: `${hood.name} Homes for Sale — Regina, SK`,
      description: `Find homes for sale in ${hood.name}, Regina. Interactive map search powered by MLS® data. Adam Hungle, REALTOR®.`,
      images: [{ url: "/hero/residential.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function NeighbourhoodPage({
  params,
}: {
  params: Promise<{ neighbourhood: string }>;
}) {
  const { neighbourhood: slug } = await params;
  const hood = getNeighbourhoodBySlug(slug);
  if (!hood) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[200px] overflow-hidden md:h-[240px]">
        <Image
          src="/hero/residential.jpg"
          alt={`${hood.name} homes for sale in Regina, Saskatchewan`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
            {hood.name} Homes for Sale
          </h1>
          <p className="mt-2 text-base text-green-200">
            Regina, Saskatchewan
          </p>
          <Link
            href="/residential/sell"
            className="mt-4 inline-block rounded-lg bg-yellow-500 px-8 py-3 text-sm font-bold text-green-900 shadow-lg transition-colors hover:bg-yellow-400"
          >
            Get a Free Home Valuation
          </Link>
        </div>
      </section>

      <ResidentialListings
        activeCommunity="regina"
        activeNeighbourhood={hood.slug}
        cityFilter="Regina"
        neighbourhoodFilter={hood.mlsName}
        showNeighbourhoods
      />
    </div>
  );
}

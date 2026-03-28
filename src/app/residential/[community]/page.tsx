import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  RESIDENTIAL_COMMUNITIES,
  getCommunityBySlug,
} from "@/data/residential-communities";
import ResidentialListings from "../ResidentialListings";

export function generateStaticParams() {
  return RESIDENTIAL_COMMUNITIES.filter((c) => c.slug !== "regina").map((c) => ({ community: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ community: string }>;
}): Promise<Metadata> {
  const { community: slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community)
    return { title: "Residential | Hungle Realty" };
  return {
    title: `Homes for Sale in ${community.name} | Hungle Realty`,
    description: `Browse homes for sale in ${community.name}, Saskatchewan. Interactive map search with Adam Hungle, REALTOR®.`,
  };
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ community: string }>;
}) {
  const { community: slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) notFound();

  const isRegina = community.slug === "regina";

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[200px] overflow-hidden md:h-[260px]">
        <Image
          src="/hero/residential.jpg"
          alt={`Homes for sale in ${community.name}, Saskatchewan`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
            Homes for Sale in {community.name}
          </h1>
          <p className="mt-2 text-base text-green-200">
            {isRegina
              ? "Browse every neighbourhood in Saskatchewan's capital"
              : `Residential properties in ${community.name}, Saskatchewan`}
          </p>
        </div>
      </section>

      <ResidentialListings
        activeCommunity={community.slug}
        cityFilter={community.useCity ? community.name : undefined}
        lat={!community.useCity ? community.lat : undefined}
        lng={!community.useCity ? community.lng : undefined}
        radius={!community.useCity ? community.radius : undefined}
        showNeighbourhoods={isRegina}
      />
    </div>
  );
}

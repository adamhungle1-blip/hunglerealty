import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
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
  if (!hood) return { title: "Residential | Hungle Realty" };
  return {
    title: `${hood.name} Homes for Sale — Regina | Hungle Realty`,
    description: `Browse homes for sale in ${hood.name}, Regina, Saskatchewan. MLS® listings with map search. Adam Hungle, REALTOR®.`,
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
        </div>
      </section>

      <ResidentialListings
        activeCommunity="regina"
        activeNeighbourhood={hood.slug}
        lat={hood.lat}
        lng={hood.lng}
        radius={hood.radius}
        showNeighbourhoods
      />
    </div>
  );
}

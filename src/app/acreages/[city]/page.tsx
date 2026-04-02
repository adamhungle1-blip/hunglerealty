import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ACREAGE_CITIES, getCityBySlug } from "@/data/acreage-cities";
import AcreageListings from "../AcreageListings";

export function generateStaticParams() {
  return ACREAGE_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return { title: "Acreages" };
  return {
    title: `Acreages for Sale near ${city.name}`,
    description: `Browse acreages for sale within 50 km of ${city.name}, Saskatchewan. Interactive map search with Adam Hungle, REALTOR®.`,
    alternates: { canonical: `/acreages/${slug}` },
    openGraph: {
      title: `Acreages for Sale near ${city.name}, Saskatchewan`,
      description: `Find acreages and rural properties near ${city.name}, SK. Map search powered by MLS® data. Adam Hungle, REALTOR®.`,
      images: [{ url: "/hero/slide4.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function CityAcreagePage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[200px] overflow-hidden md:h-[240px]">
        <Image
          src="/hero/slide4.jpg"
          alt={`Acreages near ${city.name}, Saskatchewan`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
            Acreages for Sale near {city.name}
          </h1>
          <p className="mt-2 text-base text-green-200">
            Rural properties with 2+ acres within 50 km of {city.name}
          </p>
        </div>
      </section>

      <AcreageListings
        activeCity={city.slug}
        lat={city.lat}
        lng={city.lng}
        radius={city.radius}
      />
    </div>
  );
}

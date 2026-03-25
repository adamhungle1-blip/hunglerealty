import type { Metadata } from "next";
import Image from "next/image";
import ResidentialListings from "./ResidentialListings";

export const metadata: Metadata = {
  title: "Houses for Sale in Regina & Area | Hungle Realty",
  description:
    "Browse residential properties for sale in Regina, Saskatchewan and surrounding communities. Interactive map search with Adam Hungle, REALTOR®.",
};

export default function ResidentialPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[200px] overflow-hidden md:h-[240px]">
        <Image
          src="/hero/residential.jpg"
          alt="Saskatchewan residential property"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
            Houses for Sale in Regina &amp; Area
          </h1>
          <p className="mt-2 text-base text-green-200">
            Browse homes within 50 km of Regina — or search the map for any area
          </p>
        </div>
      </section>

      <ResidentialListings />
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import ResidentialListings from "../ResidentialListings";

export const metadata: Metadata = {
  title: "Homes for Sale in Regina, SK | Hungle Realty",
  description:
    "Browse homes for sale in every Regina neighbourhood. Interactive map, MLS® listings, and expert advice from Adam Hungle, REALTOR®.",
};

export default function ReginaResidentialPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[200px] overflow-hidden md:h-[260px]">
        <Image
          src="/hero/residential.jpg"
          alt="Homes for sale in Regina, Saskatchewan"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
            Homes for Sale in Regina
          </h1>
          <p className="mt-2 text-base text-green-200">
            Browse every neighbourhood in Saskatchewan&apos;s capital
          </p>
        </div>
      </section>

      <ResidentialListings
        activeCommunity="regina"
        cityFilter="Regina"
        showNeighbourhoods
      />
    </div>
  );
}

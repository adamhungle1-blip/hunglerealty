import type { Metadata } from "next";
import Image from "next/image";
import AcreageListings from "./AcreageListings";

export const metadata: Metadata = {
  title: "Acreages for Sale near Regina | Hungle Realty",
  description:
    "Browse acreages for sale near Regina, Saskatchewan and surrounding communities. Interactive map search with Adam Hungle, REALTOR®.",
};

export default function AcreagesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[200px] overflow-hidden md:h-[240px]">
        <Image
          src="/hero/slide4.jpg"
          alt="Saskatchewan acreage property"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-4xl">
            Acreages for Sale near Regina
          </h1>
          <p className="mt-2 text-base text-green-200">
            Rural properties with 2+ acres near Regina and across Saskatchewan
          </p>
        </div>
      </section>

      <AcreageListings />
    </div>
  );
}

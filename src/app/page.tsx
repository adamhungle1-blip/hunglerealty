import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturedCards from "@/components/FeaturedCards";
import FeaturedListings from "@/components/FeaturedListings";
import FarmlandMapSection from "@/components/FarmlandMapSection";
import FieldNotes from "@/components/FieldNotes";
import HomeSEOContent from "@/components/HomeSEOContent";

export const metadata: Metadata = {
  title: "Saskatchewan Farmland & Real Estate | Adam Hungle, REALTOR®",
  description:
    "Search Saskatchewan farmland, acreages, and homes for sale. Adam Hungle is a top 5% REALTOR® specializing in farm sales, grain land, and rural property across SK. Call 306.531.8854.",
  openGraph: {
    title: "Saskatchewan Farmland & Real Estate | Hungle Realty",
    description:
      "Find farmland, acreages, and homes for sale across Saskatchewan. Expert guidance from Adam Hungle, top 5% REALTOR® with $100M+ in transactions.",
    images: [{ url: "/hero/slide1.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://hunglerealty.ca",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCards />
      <FeaturedListings />
      <FarmlandMapSection />
      <FieldNotes />
      <HomeSEOContent />
    </>
  );
}

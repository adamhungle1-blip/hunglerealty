import Hero from "@/components/Hero";
import FeaturedCards from "@/components/FeaturedCards";
import FeaturedListings from "@/components/FeaturedListings";
import FarmlandMapSection from "@/components/FarmlandMapSection";
import FieldNotes from "@/components/FieldNotes";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCards />
      <FeaturedListings />
      <FarmlandMapSection />
      <FieldNotes />
    </>
  );
}

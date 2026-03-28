import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saskatchewan Property Map Search",
  description: "Search Saskatchewan farmland, acreages, and homes for sale on an interactive map. Find properties by location across all rural municipalities.",
  openGraph: {
    title: "Saskatchewan Property Map Search | Hungle Realty",
    description: "Search Saskatchewan farmland, acreages, and homes for sale on an interactive map. Find properties by location across all rural municipalities.",
    url: "https://hunglerealty.ca/map",
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

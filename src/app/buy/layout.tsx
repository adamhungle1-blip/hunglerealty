import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register as a Buyer",
  description: "Looking to buy farmland, an acreage, or a home in Saskatchewan? Register with Adam Hungle to get priority access to new listings and expert buyer representation.",
  openGraph: {
    title: "Register as a Buyer | Hungle Realty Saskatchewan",
    description: "Looking to buy farmland, an acreage, or a home in Saskatchewan? Register with Adam Hungle to get priority access to new listings and expert buyer representation.",
    url: "https://hunglerealty.ca/buy",
  },
};

export default function BuyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

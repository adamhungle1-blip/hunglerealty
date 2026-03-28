import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Regina Home",
  description: "Selling your home in Regina or surrounding area? Adam Hungle provides market expertise, strategic pricing, and proven results to get you top dollar.",
  openGraph: {
    title: "Sell Your Regina Home | Hungle Realty Saskatchewan",
    description: "Selling your home in Regina or surrounding area? Adam Hungle provides market expertise, strategic pricing, and proven results to get you top dollar.",
    url: "https://hunglerealty.ca/residential/sell",
  },
};

export default function ResidentialSellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Saskatchewan Property | Hungle Realty",
  description: "Selling farmland, an acreage, or a home in Saskatchewan? Adam Hungle provides expert market analysis, strategic pricing, and proven results. Get your free property valuation.",
  openGraph: {
    title: "Sell Your Saskatchewan Property | Hungle Realty",
    description: "Selling farmland, an acreage, or a home in Saskatchewan? Adam Hungle provides expert market analysis, strategic pricing, and proven results. Get your free property valuation.",
    url: "https://hunglerealty.ca/sell",
  },
};

export default function SellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

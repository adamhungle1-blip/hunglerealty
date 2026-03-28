import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Adam Hungle | Saskatchewan Farm & Real Estate Specialist",
  description: "Reach Adam Hungle at 306.531.8854 for expert Saskatchewan farmland, acreage, and Regina real estate services. Sutton Group Results Realty, Regina SK.",
  openGraph: {
    title: "Contact Adam Hungle | Saskatchewan Farm & Real Estate Specialist",
    description: "Reach Adam Hungle at 306.531.8854 for expert Saskatchewan farmland, acreage, and Regina real estate services. Sutton Group Results Realty, Regina SK.",
    url: "https://hunglerealty.ca/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

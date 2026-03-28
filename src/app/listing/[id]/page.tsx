import type { Metadata } from "next";
import ListingDetail from "./ListingDetail";

export const metadata: Metadata = {
  title: "Property Details",
  description:
    "View full property details, photos, and location for this Saskatchewan listing.",
};

export default async function ListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ListingDetail listingId={id} />;
}

"use client";

import DdfCategoryListings from "@/components/DdfCategoryListings";

export default function ResidentialListings() {
  return (
    <DdfCategoryListings
      propertyType="Single Family,Multi-family"
      heading="Residential Listings"
    />
  );
}

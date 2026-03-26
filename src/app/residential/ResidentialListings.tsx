"use client";

import DdfCategoryListings from "@/components/DdfCategoryListings";

export default function ResidentialListings() {
  return (
    <DdfCategoryListings
      propertyType="Single Family,Townhouse,Row / Townhouse,Apartment,Condominium"
      heading="Residential Listings"
    />
  );
}

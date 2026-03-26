"use client";

import DdfCategoryListings from "./DdfCategoryListings";

interface RmListingsProps {
  rmName: string;
}

export default function RmListings({ rmName }: RmListingsProps) {
  return (
    <DdfCategoryListings
      rm={rmName}
      heading={`Listings in RM of ${rmName}`}
      pageSize={12}
    />
  );
}

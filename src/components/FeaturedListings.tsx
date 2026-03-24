"use client";
import { useState } from "react";
import { mockListings } from "@/data/mock-listings";
import ListingCard from "./ListingCard";

const tabs = ["All", "Farm / Acreage", "Residential", "Commercial"] as const;

export default function FeaturedListings() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filtered = activeTab === "All"
    ? mockListings
    : mockListings.filter((l) => {
        if (activeTab === "Farm / Acreage") return l.propertyType === "farm" || l.propertyType === "acreage";
        if (activeTab === "Residential") return l.propertyType === "residential";
        return l.propertyType === "commercial";
      });

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-green-900 md:text-3xl">
          Featured Listings
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Browse our latest Saskatchewan properties updated daily from the MLS®
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-green-700 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-gray-400">
          No listings in this category yet. Check back soon!
        </p>
      )}

      {/* View all CTA */}
      <div className="mt-8 text-center">
        <a
          href="/listings"
          className="inline-block rounded-lg border-2 border-green-700 px-6 py-2.5 text-sm font-semibold text-green-700 transition-colors hover:bg-green-700 hover:text-white"
        >
          View All Listings →
        </a>
      </div>
    </section>
  );
}

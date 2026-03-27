"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { DdfListing } from "@/lib/ddf";

/** Adam Hungle's DDF agent key */
const AGENT_KEY = "1659834";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

function getMainPhoto(listing: DdfListing): string | null {
  if (!listing.Media || listing.Media.length === 0) return null;
  const preferred = listing.Media.find((m) => m.PreferredPhotoYN);
  if (preferred) return preferred.MediaURL;
  const first = listing.Media.sort((a, b) => a.Order - b.Order)[0];
  return first?.MediaURL || null;
}

function getAddress(listing: DdfListing): string {
  if (listing.UnparsedAddress) return listing.UnparsedAddress;
  return "Address unavailable";
}

function getDaysAgo(timestamp?: string): number | null {
  if (!timestamp) return null;
  const diff = Date.now() - new Date(timestamp).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getListingUrl(listing: DdfListing): string {
  const id = listing.ListingId || listing.ListingKey;
  return `/listing/${id}`;
}

export default function FeaturedCards() {
  const [listings, setListings] = useState<DdfListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function fetchMyListings() {
      try {
        const res = await fetch(`/api/listings?top=20&agentKey=${AGENT_KEY}&sort=newest`);
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        setListings(data.value || []);
      } catch {
        console.error("Failed to load featured listings");
      } finally {
        setLoading(false);
      }
    }
    fetchMyListings();
  }, []);

  const totalCards = listings.length;
  const cardsToShow = Math.min(4, totalCards);

  const nextSlide = useCallback(() => {
    if (totalCards <= 4) return;
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const prevSlide = useCallback(() => {
    if (totalCards <= 4) return;
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (isPaused || totalCards <= 4) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, totalCards]);

  // Get visible cards (show up to 4, wrapping around)
  const getVisibleCards = () => {
    if (totalCards === 0) return [];
    const cards: DdfListing[] = [];
    for (let i = 0; i < cardsToShow; i++) {
      cards.push(listings[(currentIndex + i) % totalCards]);
    }
    return cards;
  };

  if (loading) {
    return (
      <section id="featured-listings" className="bg-white px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-[#B8944E] md:text-3xl">
          Featured Listings
        </h2>
        <div className="mx-auto mt-1 h-0.5 w-14 rounded bg-[#B8944E]" />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 px-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="animate-pulse overflow-hidden rounded-lg border border-gray-200">
              <div className="h-1 bg-gray-200" />
              <div className="h-48 bg-gray-200" />
              <div className="space-y-2 p-4">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-3 w-full rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (listings.length === 0) {
    return null; // Don't show the section if no personal listings
  }

  const visibleCards = getVisibleCards();

  return (
    <section id="featured-listings" className="bg-white px-4 py-12">
      <h2 className="text-center text-2xl font-bold text-[#B8944E] md:text-3xl">
        Featured Listings
      </h2>
      <div className="mx-auto mt-1 h-0.5 w-14 rounded bg-[#B8944E]" />
      <p className="mt-3 text-center text-sm text-gray-500">
        {totalCards} active listing{totalCards !== 1 ? "s" : ""} by Adam Hungle, REALTOR®
      </p>

      {/* Carousel container */}
      <div
        className="relative mx-auto mt-8 max-w-6xl px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left arrow */}
        {totalCards > 4 && (
          <button
            onClick={prevSlide}
            className="absolute -left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-green-50 md:left-0"
            aria-label="Previous listings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Cards grid */}
        <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${totalCards >= 4 ? "lg:grid-cols-4" : totalCards === 3 ? "lg:grid-cols-3" : totalCards === 2 ? "lg:grid-cols-2" : ""}`}>
          {visibleCards.map((listing, idx) => {
            const photo = getMainPhoto(listing);
            const daysAgo = getDaysAgo(listing.OriginalEntryTimestamp);
            const address = getAddress(listing);
            const lotSize = listing.LotSizeArea
              ? `${listing.LotSizeArea.toLocaleString()} acres`
              : null;

            return (
              <a
                key={`${listing.ListingKey}-${currentIndex}-${idx}`}
                href={getListingUrl(listing)}
                className="group overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg"
              >
                {/* Green accent bar */}
                <div className="h-1 bg-green-700" />

                {/* Image area */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={address}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-300">
                      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}

                  {/* Tag badge */}
                  {daysAgo !== null && daysAgo <= 7 && (
                    <span className="absolute left-0 top-0 rounded-br bg-red-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      NEW
                    </span>
                  )}

                  {/* Property type */}
                  {listing.PropertySubType && (
                    <span className="absolute right-2 top-2 rounded bg-black/50 px-2 py-1 text-[10px] text-white">
                      {listing.PropertySubType}
                    </span>
                  )}

                  {/* Price overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
                    <p className="text-xl font-bold text-white">{formatPrice(listing.ListPrice)}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white px-4 pb-5 pt-3">
                  <h3 className="text-sm font-semibold leading-snug text-gray-900 line-clamp-2">
                    {address}
                  </h3>
                  <div className="mt-1.5 flex items-center justify-between">
                    <p className="text-xs text-gray-500">{listing.City || "Saskatchewan"}</p>
                    {lotSize && (
                      <span className="text-xs font-semibold text-green-700">{lotSize}</span>
                    )}
                  </div>

                  <span className="mt-3 block rounded-md border-2 border-green-700 py-2 text-center text-xs font-bold text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                    View Details
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Right arrow */}
        {totalCards > 4 && (
          <button
            onClick={nextSlide}
            className="absolute -right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-green-50 md:right-0"
            aria-label="Next listings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Dot indicators */}
        {totalCards > 4 && (
          <div className="mt-5 flex items-center justify-center gap-2">
            {listings.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-6 bg-green-700" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <a
          href="/featured"
          className="inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-green-800"
        >
          View All Featured Listings →
        </a>
      </div>
    </section>
  );
}

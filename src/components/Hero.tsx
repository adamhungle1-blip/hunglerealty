"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { rmList } from "@/data/rm-list";

const heroImages = [
  "/hero/slide1.jpg",
  "/hero/slide2.jpg",
  "/hero/slide3.jpg",
  "/hero/slide4.jpg",
  "/hero/slide5.jpg",
  "/hero/slide6.jpg",
  "/hero/slide7.jpg",
];

const propertyTypes = ["All Types", "Farm / Acreage", "Residential", "Commercial"];
const priceRanges = [
  { label: "Any Price", min: 0, max: 0 },
  { label: "Under $250K", min: 0, max: 250000 },
  { label: "$250K – $500K", min: 250000, max: 500000 },
  { label: "$500K – $1M", min: 500000, max: 1000000 },
  { label: "$1M – $2M", min: 1000000, max: 2000000 },
  { label: "$2M+", min: 2000000, max: 0 },
];

export default function Hero() {
  const [query, setQuery] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const filteredRMs = query.length > 0
    ? rmList.filter((rm) => rm.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  return (
    <section className="relative min-h-[600px] overflow-hidden md:min-h-[700px]">
      {/* Background slideshow */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Saskatchewan landscape ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-[600px] items-center px-4 pb-16 pt-12 md:min-h-[700px] md:pb-24 md:pt-20">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl">
            Find Your Perfect Property
            <br />
            <span className="text-gold">in Saskatchewan</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-100 drop-shadow md:text-lg">
            Farmland, acreages, and homes across every Rural Municipality.
            Search hundreds of listings updated daily from the MLS®.
          </p>

          {/* Search form */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-white p-4 shadow-2xl md:p-6">
            <div className="grid gap-3 md:grid-cols-4">
              {/* Location search with autocomplete */}
              <div className="relative md:col-span-2">
                <label className="mb-1 block text-left text-xs font-medium text-gray-500">
                  Location / RM
                </label>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Search by RM, city, or MLS#..."
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                />
                {showSuggestions && filteredRMs.length > 0 && (
                  <ul className="absolute left-0 right-0 top-full z-20 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                    {filteredRMs.map((rm) => (
                      <li key={rm}>
                        <button
                          type="button"
                          onMouseDown={() => { setQuery(rm); setShowSuggestions(false); }}
                          className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-green-50"
                        >
                          RM of {rm}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Property type */}
              <div>
                <label className="mb-1 block text-left text-xs font-medium text-gray-500">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                >
                  {propertyTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Price range */}
              <div>
                <label className="mb-1 block text-left text-xs font-medium text-gray-500">
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                >
                  {priceRanges.map((r) => (
                    <option key={r.label} value={r.label}>{r.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="mt-4 w-full rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 md:w-auto">
              Search Listings
            </button>
          </div>

          {/* Quick stats */}
          <div className="mx-auto mt-8 flex max-w-lg justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-gold drop-shadow">280+</p>
              <p className="text-xs text-gray-200 drop-shadow">Rural Municipalities</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold drop-shadow">500+</p>
              <p className="text-xs text-gray-200 drop-shadow">Active Listings</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold drop-shadow">15+</p>
              <p className="text-xs text-gray-200 drop-shadow">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

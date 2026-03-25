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

const majorTypes = ["No Preference", "Grain", "Pasture", "Mixed", "Development", "Recreational"];
const minAcresOptions = ["No Preference", "40+", "80+", "160+", "320+", "640+", "1000+"];
const priceLowOptions = ["No Limit", "$100,000", "$250,000", "$500,000", "$1,000,000", "$2,500,000", "$5,000,000"];
const priceHighOptions = ["No Limit", "$500,000", "$1,000,000", "$2,500,000", "$5,000,000", "$10,000,000", "$10,000,000+"];

export default function Hero() {
  const [rmName, setRmName] = useState("All Rm's");
  const [majorType, setMajorType] = useState("No Preference");
  const [priceLow, setPriceLow] = useState("No Limit");
  const [priceHigh, setPriceHigh] = useState("No Limit");
  const [minAcres, setMinAcres] = useState("No Preference");
  const [farmChecked, setFarmChecked] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative">
      {/* Background slideshow */}
      <div className="relative h-[280px] overflow-hidden md:h-[340px]">
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
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Search form overlapping the bottom of slideshow */}
      <div className="relative mx-auto -mt-16 max-w-5xl px-4">
        <div className="rounded bg-white/95 px-6 pb-6 pt-5 shadow-lg backdrop-blur">
          <h2 className="mb-4 text-center text-2xl font-bold text-green-800 md:text-3xl">
            Search All Saskatchewan Land Listings
          </h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
            {/* RM Name */}
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-700">RM Name</label>
              <select
                value={rmName}
                onChange={(e) => setRmName(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
              >
                <option>All Rm&apos;s</option>
                {rmList.map((rm) => (
                  <option key={rm} value={rm}>RM of {rm}</option>
                ))}
              </select>
            </div>

            {/* Major Type */}
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-700">Major Type</label>
              <select
                value={majorType}
                onChange={(e) => setMajorType(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
              >
                {majorTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Price Low */}
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-700">Min Price</label>
              <select
                value={priceLow}
                onChange={(e) => setPriceLow(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
              >
                {priceLowOptions.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Price High */}
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-700">Max Price</label>
              <select
                value={priceHigh}
                onChange={(e) => setPriceHigh(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
              >
                {priceHighOptions.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Second row */}
          <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
            {/* Min Acres */}
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-700">Min Acres</label>
              <select
                value={minAcres}
                onChange={(e) => setMinAcres(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
              >
                {minAcresOptions.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="flex items-center gap-2 self-end pb-2.5">
              <span className="text-sm font-bold text-gray-700">Property Type</span>
              <label className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  checked={farmChecked}
                  onChange={(e) => setFarmChecked(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-600"
                />
                <span className="text-sm text-gray-700">Farm</span>
              </label>
            </div>

            {/* Advanced Search link */}
            <div className="self-end pb-2.5">
              <a href="/search" className="text-sm text-green-700 underline hover:text-green-900">
                Advanced Search
              </a>
            </div>

            {/* Search button */}
            <div className="flex items-end">
              <button className="w-full rounded bg-green-700 px-8 py-2.5 text-base font-bold text-white transition-colors hover:bg-green-800">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

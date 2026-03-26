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
const priceLowOptions = ["No Limit", "$50,000", "$100,000", "$200,000", "$300,000", "$500,000", "$750,000", "$1,000,000"];
const priceHighOptions = ["No Limit", "$250,000", "$500,000", "$750,000", "$1,000,000", "$2,000,000", "$3,000,000", "$5,000,000"];

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
        <div className="rounded bg-[#1e293b] px-6 pb-6 pt-5 shadow-lg backdrop-blur">
          <h2 className="mb-4 text-center text-2xl font-light text-white md:text-3xl">
            Search All Saskatchewan Land Listings
          </h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-5 md:items-end">
            {/* RM Name */}
            <div>
              <label className="mb-1 block text-sm font-bold text-blue-200">RM Name</label>
              <select
                value={rmName}
                onChange={(e) => setRmName(e.target.value)}
                className="w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-sm text-white focus:border-blue-400 focus:outline-none"
              >
                <option>All Rm&apos;s</option>
                {rmList.map((rm) => (
                  <option key={rm} value={rm}>RM of {rm}</option>
                ))}
              </select>
            </div>

            {/* Major Type */}
            <div>
              <label className="mb-1 block text-sm font-bold text-blue-200">Major Type</label>
              <select
                value={majorType}
                onChange={(e) => setMajorType(e.target.value)}
                className="w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-sm text-white focus:border-blue-400 focus:outline-none"
              >
                {majorTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Price - two fields */}
            <div>
              <label className="mb-1 block text-sm font-bold text-blue-200">Price</label>
              <div className="flex items-center gap-1">
                <select
                  value={priceLow}
                  onChange={(e) => setPriceLow(e.target.value)}
                  className="w-full rounded border border-white/20 bg-white/10 px-2 py-2 text-sm text-white focus:border-blue-400 focus:outline-none"
                >
                  {priceLowOptions.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
                <span className="shrink-0 text-sm font-bold text-blue-300">TO</span>
                <select
                  value={priceHigh}
                  onChange={(e) => setPriceHigh(e.target.value)}
                  className="w-full rounded border border-white/20 bg-white/10 px-2 py-2 text-sm text-white focus:border-blue-400 focus:outline-none"
                >
                  {priceHighOptions.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search button */}
            <div className="flex items-end">
              <button className="w-full rounded bg-blue-500 px-8 py-2 text-base font-bold text-white transition-colors hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>

          {/* Second row */}
          <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-3">
            {/* Min Acres */}
            <div>
              <label className="mb-1 block text-sm font-bold text-blue-200">Min Acres</label>
              <select
                value={minAcres}
                onChange={(e) => setMinAcres(e.target.value)}
                className="rounded border border-white/20 bg-white/10 px-3 py-2 text-sm text-white focus:border-blue-400 focus:outline-none"
              >
                {minAcresOptions.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="flex items-center gap-2 pb-2">
              <span className="text-sm font-bold text-blue-200">Property Type</span>
              <label className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  checked={farmChecked}
                  onChange={(e) => setFarmChecked(e.target.checked)}
                  className="h-4 w-4 rounded border-white/30 bg-white/10 text-blue-500 focus:ring-blue-400"
                />
                <span className="text-sm text-blue-200">Farm</span>
              </label>
            </div>

            {/* Advanced Search link */}
            <div className="ml-auto pb-2">
              <a href="/search" className="text-sm text-blue-300 underline hover:text-blue-100">
                Advanced Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

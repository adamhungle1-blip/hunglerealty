"use client";
import { useState, useEffect, useCallback, useRef } from "react";
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

const majorTypes = ["No Preference", "Grain", "Hay", "Mixed", "Hobby", "Ranch"];
const minAcresOptions = ["No Preference", "40+", "80+", "160+", "320+", "640+", "1000+"];
const priceLowOptions = ["No Limit", "$100,000", "$250,000", "$500,000", "$1,000,000", "$2,500,000", "$5,000,000"];
const priceHighOptions = ["No Limit", "$500,000", "$1,000,000", "$2,500,000", "$5,000,000", "$10,000,000", "$10,000,000+"];

export default function Hero() {
  const [rmName, setRmName] = useState("");
  const [rmQuery, setRmQuery] = useState("");
  const [rmOpen, setRmOpen] = useState(false);
  const rmRef = useRef<HTMLDivElement>(null);
  const [majorType, setMajorType] = useState("No Preference");
  const [priceLow, setPriceLow] = useState("No Limit");
  const [priceHigh, setPriceHigh] = useState("No Limit");
  const [minAcres, setMinAcres] = useState("No Preference");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter RMs based on query
  const filteredRMs = rmQuery.trim()
    ? rmList.filter((rm) => rm.toLowerCase().includes(rmQuery.toLowerCase()))
    : rmList;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (rmRef.current && !rmRef.current.contains(e.target as Node)) {
        setRmOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
            {/* RM Name - Dropdown + Autocomplete combo */}
            <div ref={rmRef} className="relative">
              <label className="mb-1 block text-sm font-bold text-gray-700">RM Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={rmQuery}
                  placeholder="All RM's — type to search"
                  onChange={(e) => {
                    setRmQuery(e.target.value);
                    setRmName("");
                    setRmOpen(true);
                  }}
                  onFocus={() => setRmOpen(true)}
                  className="w-full rounded border border-gray-300 py-2.5 pl-3 pr-16 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
                />
                {/* Clear button */}
                {rmName && (
                  <button
                    type="button"
                    onClick={() => { setRmName(""); setRmQuery(""); }}
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear selection"
                  >
                    ✕
                  </button>
                )}
                {/* Dropdown toggle arrow */}
                <button
                  type="button"
                  onClick={() => setRmOpen(!rmOpen)}
                  className="absolute right-0 top-0 flex h-full w-8 items-center justify-center rounded-r border-l border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  aria-label="Toggle RM dropdown"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${rmOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {rmOpen && filteredRMs.length > 0 && (
                <ul className="absolute z-50 mt-1 max-h-52 w-full overflow-y-auto rounded border border-gray-200 bg-white shadow-lg">
                  {filteredRMs.slice(0, 50).map((rm) => (
                    <li key={rm}>
                      <button
                        type="button"
                        onClick={() => {
                          setRmName(rm);
                          setRmQuery(`RM of ${rm}`);
                          setRmOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
                      >
                        RM of {rm}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {rmOpen && rmQuery.trim() && filteredRMs.length === 0 && (
                <div className="absolute z-50 mt-1 w-full rounded border border-gray-200 bg-white px-3 py-3 text-center text-sm text-gray-500 shadow-lg">
                  No RMs found
                </div>
              )}
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

            {/* Map Search link */}
            <div className="self-end pb-2.5">
              <a href="/map-search" className="inline-flex items-center gap-1.5 text-sm font-bold text-green-700 hover:text-green-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Map Search
              </a>
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

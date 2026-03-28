"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { rmList } from "@/data/rm-list";

const heroImages = [
  { src: "/hero/slide1.jpg", alt: "Saskatchewan grain farmland at sunset with golden wheat fields" },
  { src: "/hero/slide2.jpg", alt: "Aerial view of Saskatchewan farmland sections and country roads" },
  { src: "/hero/slide3.jpg", alt: "Green canola field in rural Saskatchewan with blue sky" },
  { src: "/hero/slide4.jpg", alt: "Saskatchewan pasture land with rolling hills and fencing" },
  { src: "/hero/slide5.jpg", alt: "Harvested Saskatchewan farmland with grain bins in the distance" },
  { src: "/hero/slide6.jpg", alt: "Mixed-use Saskatchewan farm property with buildings and cropland" },
];

const majorTypes = ["No Preference", "Grain", "Hay", "Mixed", "Hobby", "Ranch"];
const minAcresOptions = ["No Preference", "40+", "80+", "160+", "320+", "640+", "1000+"];
const priceLowOptions = ["No Limit", "$100,000", "$250,000", "$500,000", "$1,000,000", "$2,500,000", "$5,000,000"];
const priceHighOptions = ["No Limit", "$500,000", "$1,000,000", "$2,500,000", "$5,000,000", "$10,000,000", "$10,000,000+"];

function parsePriceStr(str: string): string | null {
  if (str === "No Limit") return null;
  const cleaned = str.replace(/[$,+]/g, "");
  const num = parseInt(cleaned, 10);
  return isNaN(num) ? null : String(num);
}

function parseAcresStr(str: string): string | null {
  if (str === "No Preference") return null;
  const cleaned = str.replace(/[+]/g, "");
  const num = parseInt(cleaned, 10);
  return isNaN(num) ? null : String(num);
}

export default function Hero() {
  const router = useRouter();
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

  // Close dropdown on outside click or page scroll
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (rmRef.current && !rmRef.current.contains(e.target as Node)) {
        setRmOpen(false);
      }
    }
    function handleScroll(e: Event) {
      // Only close when the PAGE scrolls, not when the dropdown list scrolls
      if (rmRef.current && rmRef.current.contains(e.target as Node)) return;
      setRmOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  /** Build URL params and navigate to the search page (farm-only) */
  const handleSearch = () => {
    const params = new URLSearchParams();

    // Always filter to farm/agriculture property types
    params.set("propertyType", "Agriculture");

    if (rmName) params.set("rm", rmName);
    if (majorType !== "No Preference") params.set("farmType", majorType);

    const priceMinVal = parsePriceStr(priceLow);
    if (priceMinVal) params.set("priceMin", priceMinVal);

    const priceMaxVal = parsePriceStr(priceHigh);
    if (priceMaxVal) params.set("priceMax", priceMaxVal);

    const acresVal = parseAcresStr(minAcres);
    if (acresVal) params.set("minAcres", acresVal);

    router.push(`/search?${params.toString()}`);
  };

  return (
    <section className="relative">
      {/* Background slideshow */}
      <div className="relative h-[280px] overflow-hidden md:h-[340px]">
        {heroImages.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
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
        <div className="rounded bg-[#1a3a1a] px-6 pb-6 pt-5 shadow-lg backdrop-blur">
          <h2 className="mb-4 text-center text-2xl font-bold text-[#d4a520] md:text-3xl">
            Search Saskatchewan Farmland Listings
          </h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
            {/* RM Name - Dropdown + Autocomplete combo */}
            <div ref={rmRef} className="relative">
              <label className="mb-1 block text-sm font-bold text-[#d4a520]">RM Name</label>
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
                  className="w-full rounded border border-[#d4a520]/30 bg-white/10 py-2.5 pl-3 pr-8 text-sm text-white placeholder-[#d4a520]/60 focus:border-[#d4a520] focus:outline-none"
                />
                {/* Clear button */}
                {rmName && (
                  <button
                    type="button"
                    onClick={() => { setRmName(""); setRmQuery(""); }}
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                    aria-label="Clear selection"
                  >
                    ✕
                  </button>
                )}
                {/* Dropdown toggle arrow */}
                <button
                  type="button"
                  onClick={() => setRmOpen(!rmOpen)}
                  className="absolute right-0 top-0 flex h-full w-8 items-center justify-center rounded-r border-l border-white/20 text-white/60 hover:bg-white/10 hover:text-white"
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
                        className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-[#f5ecd0] hover:text-[#1a3a1a]"
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
              <label className="mb-1 block text-sm font-bold text-[#d4a520]">Major Type</label>
              <select
                value={majorType}
                onChange={(e) => setMajorType(e.target.value)}
                className="w-full rounded border border-[#d4a520]/30 bg-white/10 px-3 py-2.5 text-sm text-white focus:border-[#d4a520] focus:outline-none"
              >
                {majorTypes.map((t) => (
                  <option key={t} className="bg-white text-gray-800">{t}</option>
                ))}
              </select>
            </div>

            {/* Price Low */}
            <div>
              <label className="mb-1 block text-sm font-bold text-[#d4a520]">Min Price</label>
              <select
                value={priceLow}
                onChange={(e) => setPriceLow(e.target.value)}
                className="w-full rounded border border-[#d4a520]/30 bg-white/10 px-3 py-2.5 text-sm text-white focus:border-[#d4a520] focus:outline-none"
              >
                {priceLowOptions.map((p) => (
                  <option key={p} className="bg-white text-gray-800">{p}</option>
                ))}
              </select>
            </div>

            {/* Price High */}
            <div>
              <label className="mb-1 block text-sm font-bold text-[#d4a520]">Max Price</label>
              <select
                value={priceHigh}
                onChange={(e) => setPriceHigh(e.target.value)}
                className="w-full rounded border border-[#d4a520]/30 bg-white/10 px-3 py-2.5 text-sm text-white focus:border-[#d4a520] focus:outline-none"
              >
                {priceHighOptions.map((p) => (
                  <option key={p} className="bg-white text-gray-800">{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Second row */}
          <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
            {/* Min Acres */}
            <div>
              <label className="mb-1 block text-sm font-bold text-[#d4a520]">Min Acres</label>
              <select
                value={minAcres}
                onChange={(e) => setMinAcres(e.target.value)}
                className="w-full rounded border border-[#d4a520]/30 bg-white/10 px-3 py-2.5 text-sm text-white focus:border-[#d4a520] focus:outline-none"
              >
                {minAcresOptions.map((a) => (
                  <option key={a} className="bg-white text-gray-800">{a}</option>
                ))}
              </select>
            </div>

            {/* Map Search link */}
            <div className="self-end pb-2.5">
              <a href="/map?propertyType=Agriculture" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#d4a520] hover:text-[#e0b830]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Map Search
              </a>
            </div>

            {/* Advanced Search link */}
            <div className="self-end pb-2.5">
              <a href="/advanced-search" className="text-sm text-[#d4a520] underline hover:text-[#e0b830]">
                Advanced Search
              </a>
            </div>

            {/* Search button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full rounded border-2 border-[#d4a520] bg-gradient-to-b from-[#d4a520] to-[#b8891a] px-8 py-2.5 text-base font-bold text-[#1a3a1a] shadow-md transition-all hover:from-[#e0b830] hover:to-[#d4a520]"
              >
                Search Farmland
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { DdfListing } from "@/lib/ddf";
import SraDisclaimer from "@/components/SraDisclaimer";
import FarmLandDetails from "@/components/FarmLandDetails";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

function getDaysAgo(timestamp?: string): number | null {
  if (!timestamp) return null;
  const diff = Date.now() - new Date(timestamp).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function formatDate(timestamp?: string): string {
  if (!timestamp) return "N/A";
  return new Date(timestamp).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ─── Photo Gallery ─── */
function PhotoGallery({ media }: { media: DdfListing["Media"] }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const photos = (media || []).sort((a, b) => a.Order - b.Order);
  if (photos.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-xl bg-gray-100 text-gray-400">
        No photos available
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <>
      {/* Main image */}
      <div className="relative">
        <div
          className="relative aspect-[16/9] cursor-pointer overflow-hidden rounded-xl bg-gray-100"
          onClick={() => setLightbox(true)}
        >
          <Image
            src={photos[current].MediaURL}
            alt={`Photo ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
            unoptimized
            priority={current === 0}
          />
          <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-3 py-1 text-sm text-white">
            {current + 1} of {photos.length}
          </span>
        </div>

        {/* Nav arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-white"
              aria-label="Previous photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-white"
              aria-label="Next photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {photos.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {photos.map((photo, i) => (
            <button
              key={photo.MediaURL}
              onClick={() => setCurrent(i)}
              className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === current
                  ? "border-green-600 ring-2 ring-green-600/30"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={photo.MediaURL}
                alt={`Thumb ${i + 1}`}
                fill
                className="object-cover"
                sizes="96px"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="relative h-[85vh] w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[current].MediaURL}
              alt={`Photo ${current + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              unoptimized
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-black/60 px-3 py-1 text-sm text-white">
            {current + 1} of {photos.length}
          </span>
        </div>
      )}
    </>
  );
}

/* ─── Enquiry Form ─── */
function EnquiryForm({
  mlsNumber,
  address,
}: {
  mlsNumber: string;
  address: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: `[Listing Enquiry — MLS® #${mlsNumber}]\n${address}\n\n${form.message}`,
          source: "listing-enquiry",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-bold text-green-800">Thank you!</p>
        <p className="mt-1 text-sm text-green-700">
          Adam will be in touch about MLS® #{mlsNumber} within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-1 text-base font-bold text-gray-900">
        Enquire About This Listing
      </h3>
      <p className="mb-4 text-xs text-gray-500">
        MLS® #{mlsNumber}
      </p>

      {status === "error" && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          Something went wrong. Please try again or call 306.531.8854.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Email *"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          />
        </div>
        <textarea
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="I'm interested in this property..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-800 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Enquiry"}
        </button>
        <p className="text-center text-[10px] text-gray-400">
          Your information is kept strictly confidential.
        </p>
      </form>
    </div>
  );
}

/* ─── Main Detail Component ─── */
export default function ListingDetail({ listingId }: { listingId: string }) {
  const [listing, setListing] = useState<DdfListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/listing/${listingId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [listingId]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-64 rounded bg-gray-200" />
          <div className="aspect-[16/9] rounded-xl bg-gray-200" />
          <div className="h-40 rounded bg-gray-200" />
        </div>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Listing Not Found</h1>
        <p className="mt-2 text-gray-600">
          This listing may have been sold or removed.
        </p>
        <Link
          href="/search?propertyType=Agriculture"
          className="mt-6 inline-block rounded-lg bg-green-800 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
        >
          Browse Farm Listings
        </Link>
      </div>
    );
  }

  const address =
    listing.UnparsedAddress ||
    [listing.StreetNumber, listing.StreetName, listing.StreetSuffix]
      .filter(Boolean)
      .join(" ") ||
    "Address unavailable";

  const daysOnMarket = getDaysAgo(listing.OriginalEntryTimestamp);
  const lotSize = listing.LotSizeArea
    ? listing.LotSizeUnits?.toLowerCase().includes("acre")
      ? `${listing.LotSizeArea.toLocaleString()} acres`
      : listing.LotSizeArea >= 43560
        ? `${(listing.LotSizeArea / 43560).toFixed(1)} acres`
        : `${listing.LotSizeArea.toLocaleString()} sqft`
    : null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-green-700">
          Home
        </Link>
        <span>/</span>
        <Link
          href="/search?propertyType=Agriculture"
          className="hover:text-green-700"
        >
          Farm Listings
        </Link>
        <span>/</span>
        <span className="text-gray-700">{address}</span>
      </nav>

      {/* Title row */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {address}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {[listing.City, listing.StateOrProvince, listing.PostalCode]
              .filter(Boolean)
              .join(", ")}
          </p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-green-800">
            {formatPrice(listing.ListPrice)}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            MLS® #{listing.ListingId || listing.ListingKey}
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left column — Gallery + Details (2/3 width) */}
        <div className="lg:col-span-2">
          <PhotoGallery media={listing.Media} />

          {/* Quick stats bar */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {lotSize && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                <p className="text-lg font-bold text-green-800">{lotSize}</p>
                <p className="text-xs text-gray-500">Lot Size</p>
              </div>
            )}
            {listing.BedroomsTotal != null && listing.BedroomsTotal > 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                <p className="text-lg font-bold text-green-800">
                  {listing.BedroomsTotal}
                </p>
                <p className="text-xs text-gray-500">Bedrooms</p>
              </div>
            )}
            {listing.BathroomsTotalInteger != null &&
              listing.BathroomsTotalInteger > 0 && (
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                  <p className="text-lg font-bold text-green-800">
                    {listing.BathroomsTotalInteger}
                  </p>
                  <p className="text-xs text-gray-500">Bathrooms</p>
                </div>
              )}
            {listing.LivingArea != null && listing.LivingArea > 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                <p className="text-lg font-bold text-green-800">
                  {listing.LivingArea.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">Sq Ft</p>
              </div>
            )}
            {listing.PropertySubType && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                <p className="text-lg font-bold text-green-800">
                  {listing.PropertySubType}
                </p>
                <p className="text-xs text-gray-500">Property Type</p>
              </div>
            )}
            {listing.StandardStatus && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                <p className="text-lg font-bold text-green-600">
                  {listing.StandardStatus}
                </p>
                <p className="text-xs text-gray-500">Status</p>
              </div>
            )}
            {daysOnMarket !== null && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                <p className="text-lg font-bold text-green-800">
                  {daysOnMarket}
                </p>
                <p className="text-xs text-gray-500">Days on Market</p>
              </div>
            )}
          </div>

          {/* Farm Land Details (parsed from remarks + API fields) */}
          {listing.PropertySubType === "Agriculture" && (
            <FarmLandDetails
              remarks={listing.PublicRemarks}
              totalAcres={listing.LotSizeArea}
              listPrice={listing.ListPrice}
              lotFeatures={listing.LotFeatures}
              fencing={listing.Fencing}
              heating={listing.Heating}
              waterSource={listing.WaterSource}
              yearBuilt={listing.YearBuilt}
              basement={listing.Basement}
              parkingFeatures={listing.ParkingFeatures}
              communityFeatures={listing.CommunityFeatures}
              directions={listing.Directions}
              currentUse={listing.CurrentUse}
              city={listing.City}
            />
          )}

          {/* Property Description */}
          {listing.PublicRemarks && (
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-bold text-gray-900">
                Property Description
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {listing.PublicRemarks}
                </p>
              </div>
            </div>
          )}

          {/* Property Details Table */}
          <div className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              Property Details
            </h2>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-600">
                      List Price
                    </td>
                    <td className="px-4 py-3 text-gray-900">
                      {formatPrice(listing.ListPrice)}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-600">
                      MLS® Number
                    </td>
                    <td className="px-4 py-3 text-gray-900">
                      {listing.ListingId || listing.ListingKey}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-600">
                      Status
                    </td>
                    <td className="px-4 py-3 font-semibold text-green-600">
                      {listing.StandardStatus || "Active"}
                    </td>
                  </tr>
                  {listing.PropertySubType && (
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-600">
                        Property Type
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        {listing.PropertySubType}
                      </td>
                    </tr>
                  )}
                  {lotSize && (
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-600">
                        Acres
                      </td>
                      <td className="px-4 py-3 text-gray-900">{lotSize}</td>
                    </tr>
                  )}
                  {listing.BedroomsTotal != null &&
                    listing.BedroomsTotal > 0 && (
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3 font-medium text-gray-600">
                          Bedrooms
                        </td>
                        <td className="px-4 py-3 text-gray-900">
                          {listing.BedroomsTotal}
                        </td>
                      </tr>
                    )}
                  {listing.BathroomsTotalInteger != null &&
                    listing.BathroomsTotalInteger > 0 && (
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-600">
                          Bathrooms
                        </td>
                        <td className="px-4 py-3 text-gray-900">
                          {listing.BathroomsTotalInteger}
                        </td>
                      </tr>
                    )}
                  {listing.LivingArea != null && listing.LivingArea > 0 && (
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-600">
                        Living Area
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        {listing.LivingArea.toLocaleString()} sq ft
                      </td>
                    </tr>
                  )}
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-600">
                      Address
                    </td>
                    <td className="px-4 py-3 text-gray-900">{address}</td>
                  </tr>
                  {listing.City && (
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-600">
                        RM
                      </td>
                      <td className="px-4 py-3 text-gray-900">
                        {listing.City}
                      </td>
                    </tr>
                  )}
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-600">
                      Listed
                    </td>
                    <td className="px-4 py-3 text-gray-900">
                      {formatDate(listing.OriginalEntryTimestamp)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Map */}
          {listing.Latitude && listing.Longitude && (
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-bold text-gray-900">
                Location
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <iframe
                  src={`https://www.google.com/maps?q=${listing.Latitude},${listing.Longitude}&z=12&output=embed`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Property location"
                />
              </div>
            </div>
          )}

          {/* Courtesy disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs text-gray-500">
            {listing.ListOfficeName && (
              <p className="italic">
                Listing courtesy of {listing.ListOfficeName}.
              </p>
            )}
            <SraDisclaimer />
          </div>
        </div>

        {/* Right column — Contact Sidebar (1/3 width) */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
            {/* Contact Card with Photo */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-center">
                <Image
                  src="/adam-hungle.png"
                  alt="Adam Hungle, REALTOR®"
                  width={80}
                  height={80}
                  className="mx-auto mb-3 h-20 w-20 rounded-full object-cover"
                  unoptimized
                />
                <h3 className="text-lg font-bold text-gray-900">
                  Adam Hungle
                </h3>
                <p className="text-sm font-medium text-green-800">REALTOR®</p>
                <p className="mt-0.5 text-xs text-gray-500">
                  Sutton Group - Results Realty
                </p>
              </div>

              <a
                href="tel:3065318854"
                className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-green-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                306.531.8854
              </a>
            </div>

            {/* Listing Enquiry Form */}
            <EnquiryForm
              mlsNumber={listing.ListingId || listing.ListingKey}
              address={address}
            />

            {/* Quick actions */}
            <div className="flex gap-3">
              {listing.Latitude && listing.Longitude && (
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${listing.Latitude},${listing.Longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Directions
                </a>
              )}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: address,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied!");
                  }
                }}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
              <button
                onClick={() => window.print()}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
            </div>

            {/* Back link */}
            <Link
              href="/search?propertyType=Agriculture"
              className="block text-center text-sm font-medium text-green-700 hover:text-green-800"
            >
              ← Back to Search Results
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

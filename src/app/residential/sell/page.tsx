"use client";

import { useState } from "react";
import Image from "next/image";

export default function ResidentialSellPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

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
          message: `Property Address: ${form.address}\n\n${form.notes}`,
          source: "residential-seller-form",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", address: "", notes: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[240px] overflow-hidden md:h-[300px]">
        <Image
          src="/hero/residential.jpg"
          alt="Sell your home in Regina, Saskatchewan"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-5xl">
            Sell Your Home
          </h1>
          <p className="mt-2 text-lg text-green-200">
            Free, confidential home valuation in the Regina area
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        {/* Intro */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-green-800 md:text-3xl">
            What&apos;s Your Home Worth?
          </h2>
          <p className="mx-auto max-w-xl text-gray-600">
            Thinking about selling your home in Regina or a surrounding
            community? Fill out the short form below and Adam will reach out
            within 24 hours with a free, no-obligation market valuation of
            your property.
          </p>
        </div>

        {/* Why Hungle Realty */}
        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <h3 className="mb-1 text-sm font-bold text-gray-800">
              Maximum MLS® Exposure
            </h3>
            <p className="text-xs text-gray-600">
              Your home listed across 1,000+ websites and seen by every
              REALTOR® in the co-operative.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </div>
            <h3 className="mb-1 text-sm font-bold text-gray-800">
              Professional Photography
            </h3>
            <p className="text-xs text-gray-600">
              High-quality photos and video that make your home stand out
              from the competition.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                />
              </svg>
            </div>
            <h3 className="mb-1 text-sm font-bold text-gray-800">
              Skilled Negotiation
            </h3>
            <p className="text-xs text-gray-600">
              Over $100M in closed transactions. We know how to get you the
              best price and terms.
            </p>
          </div>
        </div>

        {/* Success / Error */}
        {status === "success" && (
          <div className="mb-8 rounded-lg border border-green-200 bg-green-50 px-5 py-4 text-center text-green-800">
            <p className="font-bold">Thank you!</p>
            <p className="mt-1 text-sm">
              Your information has been received. Adam will be in touch within
              24 hours to discuss your home.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mb-8 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-center text-red-800">
            Something went wrong. Please try again or call{" "}
            <a href="tel:3065318854" className="font-bold underline">
              306.531.8854
            </a>{" "}
            directly.
          </div>
        )}

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-bold text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Your full name"
              />
            </div>

            {/* Phone + Email side by side */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-bold text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                  placeholder="306-555-1234"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-bold text-gray-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            {/* Property Address */}
            <div>
              <label
                htmlFor="address"
                className="mb-1.5 block text-sm font-bold text-gray-700"
              >
                Property Address <span className="text-red-500">*</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                value={form.address}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="123 Main Street, Regina, SK"
              />
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="mb-1.5 block text-sm font-bold text-gray-700"
              >
                Additional Details
              </label>
              <p className="mb-2 text-xs text-gray-500">
                Tell us about your home — number of bedrooms, recent
                renovations, when you&apos;re looking to sell, or anything else
                that helps us provide an accurate valuation.
              </p>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={form.notes}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="E.g. 4-bed bi-level, new roof in 2024, finished basement, looking to sell this spring..."
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-lg bg-green-700 px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-green-800 disabled:opacity-50"
          >
            {status === "sending"
              ? "Submitting..."
              : "Get My Free Home Valuation"}
          </button>

          <p className="mt-3 text-center text-xs text-gray-400">
            Your information is kept strictly confidential.
          </p>
        </form>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-xl bg-green-800 p-6 text-center text-white md:p-8">
          <h3 className="mb-2 text-lg font-bold">Rather Chat on the Phone?</h3>
          <p className="mb-4 text-sm text-green-100">
            Call Adam directly for a quick, no-pressure conversation about
            selling your home.
          </p>
          <a
            href="tel:3065318854"
            className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-bold text-green-800 transition-colors hover:bg-green-50"
          >
            Call 306.531.8854
          </a>
        </div>
      </section>
    </div>
  );
}

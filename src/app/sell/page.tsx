"use client";

import { useState } from "react";
import Image from "next/image";
import { trackFormSubmission } from "@/lib/analytics";

export default function SellPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
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
          message: form.notes,
          source: "seller-form",
        }),
      });
      if (res.ok) {
        setStatus("success");
        trackFormSubmission("seller-form");
        setForm({ name: "", phone: "", email: "", notes: "" });
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
      <section className="relative h-[220px] overflow-hidden md:h-[280px]">
        <Image
          src="/hero/slide1.jpg"
          alt="Saskatchewan farmland aerial view"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            Sell Your Farmland
          </h1>
          <p className="mt-2 text-lg text-green-200">
            Confidential market valuation
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        {/* Intro */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-green-800 md:text-3xl">
            Thinking About Selling?
          </h2>
          <p className="mx-auto max-w-xl text-gray-600">
            Fill out the short form below and Adam will reach out within 24
            hours with a confidential, no-obligation valuation of your land.
          </p>
        </div>

        {/* Success / Error */}
        {status === "success" && (
          <div className="mb-8 rounded-lg bg-green-50 border border-green-200 px-5 py-4 text-center text-green-800">
            <p className="font-bold">Thank you!</p>
            <p className="mt-1 text-sm">
              Your information has been received. Adam will be in touch within
              24 hours to discuss your property.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mb-8 rounded-lg bg-red-50 border border-red-200 px-5 py-4 text-center text-red-800">
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

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="mb-1.5 block text-sm font-bold text-gray-700"
              >
                Property Details
              </label>
              <p className="mb-2 text-xs text-gray-500">
                Include legal land descriptions, quarter sections, total
                acreage, whether the land is cultivated or pasture, and anything
                else that would help us provide an accurate valuation.
              </p>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                value={form.notes}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="E.g. NW 25-18-20 W2, 160 acres cultivated, currently seeded to canola..."
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-lg bg-green-700 px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-green-800 disabled:opacity-50"
          >
            {status === "sending" ? "Submitting..." : "Request My Valuation"}
          </button>

          <p className="mt-3 text-center text-xs text-gray-400">
            Your information is kept strictly confidential.
          </p>
        </form>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-xl bg-green-800 p-6 text-center text-white md:p-8">
          <h3 className="mb-2 text-lg font-bold">Rather Chat on the Phone?</h3>
          <p className="mb-4 text-sm text-green-100">
            Call Adam directly for a quick, no-pressure conversation about your
            land.
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

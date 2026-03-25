"use client";

import { useState } from "react";
import Image from "next/image";

export default function BuyPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
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
          message: form.notes,
          source: "buyer-form",
        }),
      });
      if (res.ok) {
        setStatus("success");
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
          src="/hero/slide3.jpg"
          alt="Saskatchewan farmland aerial view"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            Looking to Buy Farmland?
          </h1>
          <p className="mt-2 text-lg text-green-200">
            Tell us what you&apos;re looking for
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-green-800 md:text-3xl">
            Let Us Find the Right Land for You
          </h2>
          <p className="mx-auto max-w-xl text-gray-600">
            Fill out the form below and Adam will reach out within 24 hours to
            discuss what you&apos;re looking for — including off-market listings
            that never hit MLS®.
          </p>
        </div>

        {/* Success message */}
        {status === "success" && (
          <div className="mb-8 rounded-lg border border-green-200 bg-green-50 px-5 py-4 text-center text-green-800">
            <p className="font-bold">Thank you!</p>
            <p className="mt-1 text-sm">
              Your information has been received. Adam will be in touch within 24
              hours to discuss your search criteria.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-8 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-center text-red-800">
            <p className="font-bold">Something went wrong.</p>
            <p className="mt-1 text-sm">
              Please try again or call Adam directly at 306.531.8854.
            </p>
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

            {/* Phone + Email */}
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

            {/* What are you looking for? */}
            <div>
              <label
                htmlFor="notes"
                className="mb-1.5 block text-sm font-bold text-gray-700"
              >
                What Are You Looking For?
              </label>
              <p className="mb-2 text-xs text-gray-500">
                Tell us about the type of land you&apos;re interested in —
                preferred area or RM, acreage, cultivated vs. pasture, budget,
                timeline, or anything else that helps us narrow down your search.
              </p>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                value={form.notes}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="E.g. Looking for 2-3 quarters of cultivated land in the Regina area, budget around $400K, hoping to close by fall..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-lg bg-green-700 px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-green-800 disabled:opacity-50"
          >
            {status === "sending" ? "Submitting..." : "Start My Farm Search"}
          </button>
          <p className="mt-3 text-center text-xs text-gray-400">
            Your information is kept strictly confidential.
          </p>
        </form>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-xl bg-green-800 p-6 text-center text-white md:p-8">
          <h3 className="mb-2 text-lg font-bold">Rather Chat on the Phone?</h3>
          <p className="mb-4 text-sm text-green-100">
            Call Adam directly for a quick, no-pressure conversation about what
            you&apos;re looking for.
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

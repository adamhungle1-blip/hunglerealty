"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Advanced Farm Search", href: "/search" },
  { label: "Buying", href: "/buying" },
  { label: "Selling", href: "/selling" },
  { label: "About", href: "/about" },
  { label: "Acreages", href: "/acreages" },
  { label: "Residential", href: "/residential" },
  { label: "Map Search", href: "/map" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center leading-tight">
          <span className="text-xl font-extrabold uppercase tracking-wide text-green-900">
            Adam Hungle
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-green-800">
            REALTOR®
          </span>
          <span className="text-[10px] italic text-gray-500">
            Sutton Group Results Realty
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:adam@hunglerealty.ca"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-white transition-colors hover:bg-green-700"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
          <a
            href="tel:3065318854"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-white transition-colors hover:bg-green-700"
            aria-label="Call"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-white transition-colors hover:bg-green-700"
            aria-label="Account"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded lg:hidden"
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block border-b border-gray-100 py-3 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3">
            <a href="mailto:adam@hunglerealty.ca" className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a href="tel:3065318854" className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware to fix broken RM URLs.
 *
 * Problem: Traffic arrives at /rm/rm-68-brokenshell or /rm/Rm-68-Brokenshell
 *          but the real page lives at /rm/brokenshell (no RM number prefix, lowercase).
 *
 * This middleware:
 *  1. Strips the "rm-{number}-" prefix from RM slugs  →  /rm/rm-68-brokenshell  →  /rm/brokenshell
 *  2. Lowercases any uppercase RM slugs                →  /rm/Brokenshell       →  /rm/brokenshell
 *  3. 301 redirects so Google consolidates link equity on the canonical URL.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only process /rm/... paths
  if (!pathname.startsWith("/rm/")) return NextResponse.next();

  // Extract the slug part after /rm/
  const slug = pathname.slice(4); // removes "/rm/"
  if (!slug) return NextResponse.next();

  let corrected = slug;

  // Strip "rm-{number}-" or "RM-{number}-" prefix  (e.g. "rm-68-brokenshell" → "brokenshell")
  const prefixMatch = corrected.match(/^[Rr][Mm]-\d+-(.+)$/);
  if (prefixMatch) {
    corrected = prefixMatch[1];
  }

  // Strip trailing slash if present
  corrected = corrected.replace(/\/$/, "");

  // Lowercase the slug
  corrected = corrected.toLowerCase();

  // If nothing changed, let it through
  if (corrected === slug) return NextResponse.next();

  // Build the corrected URL and 301 redirect
  const url = request.nextUrl.clone();
  url.pathname = `/rm/${corrected}`;

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: "/rm/:path*",
};

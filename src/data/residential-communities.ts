/**
 * Communities within ~100 km of Regina for residential pages.
 * "regina" is the main hub; others are satellite communities.
 */

export interface ResidentialCommunity {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  radius: number; // km
  /** If true, filter by City field instead of geo-radius */
  useCity?: boolean;
}

export const RESIDENTIAL_COMMUNITIES: ResidentialCommunity[] = [
  { name: "Regina", slug: "regina", lat: 50.4452, lng: -104.6189, radius: 15, useCity: true },
  { name: "White City", slug: "white-city", lat: 50.4333, lng: -104.3667, radius: 8, useCity: true },
  { name: "Emerald Park", slug: "emerald-park", lat: 50.4386, lng: -104.4067, radius: 8, useCity: true },
  { name: "Pilot Butte", slug: "pilot-butte", lat: 50.4661, lng: -104.4167, radius: 8, useCity: true },
  { name: "Balgonie", slug: "balgonie", lat: 50.4833, lng: -104.2667, radius: 8, useCity: true },
  { name: "Lumsden", slug: "lumsden", lat: 50.6500, lng: -104.8667, radius: 10, useCity: true },
  { name: "Milestone", slug: "milestone", lat: 50.1167, lng: -104.6167, radius: 10, useCity: true },
  { name: "Rouleau", slug: "rouleau", lat: 50.1667, lng: -104.9500, radius: 10, useCity: true },
];

export function getCommunityBySlug(slug: string): ResidentialCommunity | undefined {
  return RESIDENTIAL_COMMUNITIES.find((c) => c.slug === slug);
}

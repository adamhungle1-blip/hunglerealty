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
  { name: "Belle Plaine", slug: "belle-plaine", lat: 50.3943, lng: -105.1561, radius: 8, useCity: true },
  { name: "Buena Vista", slug: "buena-vista", lat: 50.7900, lng: -104.9700, radius: 8, useCity: true },
  { name: "Craven", slug: "craven", lat: 50.7073, lng: -104.8092, radius: 8, useCity: true },
  { name: "Drinkwater", slug: "drinkwater", lat: 50.2973, lng: -105.1369, radius: 8, useCity: true },
  { name: "Grand Coulee", slug: "grand-coulee", lat: 50.4327, lng: -104.8180, radius: 8, useCity: true },
  { name: "Kannata Valley", slug: "kannata-valley", lat: 50.7845, lng: -104.9038, radius: 8, useCity: true },
  { name: "McLean", slug: "mclean", lat: 50.5168, lng: -104.0686, radius: 8, useCity: true },
  { name: "Pense", slug: "pense", lat: 50.4159, lng: -104.9829, radius: 8, useCity: true },
  { name: "Regina Beach", slug: "regina-beach", lat: 50.7912, lng: -104.9858, radius: 8, useCity: true },
  { name: "Saskatchewan Beach", slug: "saskatchewan-beach", lat: 50.7965, lng: -104.9343, radius: 8, useCity: true },
  { name: "Sunset Cove", slug: "sunset-cove", lat: 50.8124, lng: -105.0036, radius: 8, useCity: true },
  { name: "Vibank", slug: "vibank", lat: 50.3340, lng: -103.9457, radius: 8, useCity: true },
  { name: "Wilcox", slug: "wilcox", lat: 50.0977, lng: -104.7258, radius: 8, useCity: true },
];

export function getCommunityBySlug(slug: string): ResidentialCommunity | undefined {
  return RESIDENTIAL_COMMUNITIES.find((c) => c.slug === slug);
}

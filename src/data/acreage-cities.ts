/**
 * Saskatchewan cities with coordinates for acreage proximity search.
 * Radius is in km — 50 km ring around each city center.
 */
export interface AcreageCity {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  radius: number; // km
}

export const ACREAGE_CITIES: AcreageCity[] = [
  { name: "Regina", slug: "regina", lat: 50.4452, lng: -104.6189, radius: 50 },
  { name: "Saskatoon", slug: "saskatoon", lat: 52.1332, lng: -106.6700, radius: 50 },
  { name: "Yorkton", slug: "yorkton", lat: 51.2139, lng: -102.4628, radius: 50 },
  { name: "North Battleford", slug: "north-battleford", lat: 52.7575, lng: -108.2861, radius: 50 },
  { name: "Estevan", slug: "estevan", lat: 49.1392, lng: -102.9861, radius: 50 },
  { name: "Weyburn", slug: "weyburn", lat: 49.6608, lng: -103.8525, radius: 50 },
  { name: "Swift Current", slug: "swift-current", lat: 50.2881, lng: -107.7939, radius: 50 },
];

export function getCityBySlug(slug: string): AcreageCity | undefined {
  return ACREAGE_CITIES.find((c) => c.slug === slug);
}

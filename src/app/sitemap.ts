import type { MetadataRoute } from "next";
import { getAllRMSlugs } from "@/data/rm-data";
import { getAllBlogSlugs } from "@/data/blog-posts";
import { soldListings } from "@/data/sold-listings";
import { RESIDENTIAL_COMMUNITIES } from "@/data/residential-communities";
import { REGINA_NEIGHBOURHOODS } from "@/data/regina-neighbourhoods";
import { ACREAGE_CITIES } from "@/data/acreage-cities";

const BASE = "https://hunglerealty.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/buying`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/selling`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/featured`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/search`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/advanced-search`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/acreages`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/residential`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/residential/regina`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/map`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/field-notes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/field-notes/farmland-market-report-2025`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // RM area pages (280+)
  const rmPages: MetadataRoute.Sitemap = getAllRMSlugs().map((slug) => ({
    url: `${BASE}/rm/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Sold listing posts
  const soldPages: MetadataRoute.Sitemap = soldListings.map((listing) => ({
    url: `${BASE}/field-notes/sold/${listing.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Residential community pages (White City, Emerald Park, Lumsden, etc.)
  const residentialCommunityPages: MetadataRoute.Sitemap = RESIDENTIAL_COMMUNITIES
    .filter((c) => c.slug !== "regina") // regina has its own static entry
    .map((community) => ({
      url: `${BASE}/residential/${community.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  // Regina neighbourhood pages (Albert Park, Cathedral, Harbour Landing, etc.)
  const neighbourhoodPages: MetadataRoute.Sitemap = REGINA_NEIGHBOURHOODS.map((hood) => ({
    url: `${BASE}/residential/regina/${hood.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // Acreage city pages (Regina, Saskatoon, Yorkton, etc.)
  const acreageCityPages: MetadataRoute.Sitemap = ACREAGE_CITIES.map((city) => ({
    url: `${BASE}/acreages/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...rmPages,
    ...blogPages,
    ...soldPages,
    ...residentialCommunityPages,
    ...neighbourhoodPages,
    ...acreageCityPages,
  ];
}

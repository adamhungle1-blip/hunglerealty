import type { MetadataRoute } from "next";
import { getAllRMSlugs } from "@/data/rm-data";
import { getAllBlogSlugs } from "@/data/blog-posts";

const BASE = "https://hunglerealty.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/buying`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/selling`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/acreages`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/residential`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/map`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
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

  return [...staticPages, ...rmPages, ...blogPages];
}

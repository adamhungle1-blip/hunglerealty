import Link from "next/link";
import Image from "next/image";
import { soldListings } from "@/data/sold-listings";

// Market report data
const marketReport = {
  slug: "farmland-market-report-2025",
  title: "Saskatchewan Farmland Market Report — 2025 Update",
  date: "March 2026",
  category: "Market Update",
  excerpt:
    "SK farmland values climbed +12% year-over-year through mid-2025. Provincial avg cultivated price sits at ~$3,200–$3,500/acre with the northeast leading at $4,450+. Here's the full breakdown by region, plus rental rates, irrigated land, and the 2026 outlook.",
  image: "/hero/slide1.jpg",
  stats: [
    { label: "YoY Growth", value: "+12%" },
    { label: "Avg $/Acre", value: "$3,210" },
    { label: "SK Rank", value: "#1 in Canada" },
  ],
};

export default function FieldNotes() {
  // Get 3 most recent sold listings
  const recentSolds = soldListings.slice(0, 3);

  // Combine market report with recent sold listings
  const displayPosts = [marketReport, ...recentSolds];

  return (
    <section className="border-t-[3px] border-[#c49a2a] bg-[#0f1a0f]">
      <div className="mx-auto max-w-7xl px-4 py-14">
        {/* Section heading */}
        <div className="mb-2 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c49a2a]">
            Field Notes
          </p>
          <h2 className="mt-1 text-3xl font-bold text-white md:text-4xl">
            Latest Posts
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#c49a2a] to-transparent" />
        </div>

        {/* Posts grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post) => (
            <Link
              key={post.slug}
              href={
                post.slug === "farmland-market-report-2025"
                  ? `/field-notes/${post.slug}`
                  : `/field-notes/sold/${post.slug}`
              }
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:border-[#c49a2a]/40 hover:bg-white/[0.08]"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0f] via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute left-3 top-3 rounded-full bg-[#c49a2a] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0f1a0f]">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs font-medium text-[#c49a2a]">{post.date}</p>
                <h3 className="mt-1.5 text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#c49a2a]">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-400">
                  {"excerpt" in post ? post.excerpt : post.blurb}
                </p>

                {/* Quick stats - only for market report */}
                {"stats" in post && post.stats && (
                  <div className="mt-4 grid grid-cols-3 gap-2 rounded-lg bg-white/5 p-3">
                    {post.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-base font-bold text-[#c49a2a]">
                          {stat.value}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c49a2a] transition-colors group-hover:text-[#e0b830]">
                  {post.slug === "farmland-market-report-2025"
                    ? "Read Full Report"
                    : "View Details"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}

          {/* Placeholder cards for future posts */}
          <div className="hidden overflow-hidden rounded-xl border border-dashed border-white/10 bg-white/[0.02] md:flex md:flex-col md:items-center md:justify-center md:p-8 md:text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white/10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <p className="mt-3 text-sm font-medium text-white/20">
              More posts coming soon
            </p>
          </div>
        </div>

        {/* View All Sold Listings Link */}
        <div className="mt-12 text-center">
          <Link
            href="/field-notes"
            className="inline-flex items-center gap-2 rounded-lg bg-[#c49a2a] px-6 py-3 font-semibold text-[#0f1a0f] transition-all hover:bg-[#d4a520] hover:shadow-lg"
          >
            View All Sold Listings
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

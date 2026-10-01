import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllFieldNotePosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Field Notes — Market Insights & Sold Listings",
  description:
    "Read Adam Hungle's latest market reports, farmland insights, and view recent sold listings across Saskatchewan. Expert real estate analysis and sales.",
};

const POSTS_PER_PAGE = 9;

export default async function FieldNotesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const requestedPage = Math.max(1, parseInt(page || "1", 10) || 1);

  const allPosts = getAllFieldNotePosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = allPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  return (
    <div className="bg-[#0f1a0f]">
      {/* Hero Section */}
      <div className="border-t-[3px] border-[#c49a2a] px-4 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c49a2a]">
            Field Notes
          </p>
          <h1 className="mt-1 text-4xl font-bold text-white md:text-5xl">
            Market Insights & Sold Listings
          </h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#c49a2a] to-transparent" />
          <p className="mt-6 text-lg text-gray-400">
            Explore Adam Hungle's latest market analysis, regional trends, and
            recent sales across Saskatchewan.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pagePosts.map((post) => (
            <Link
              key={post.slug}
              href={
                post._type === "blog"
                  ? `/blog/${post.slug}`
                  : post._type === "sold"
                  ? `/field-notes/sold/${post.slug}`
                  : `/field-notes/${post.slug}`
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
                  {post.excerpt || post.blurb}
                </p>

                {/* Quick stats - only for market report */}
                {post.stats && (
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
                  {post._type === "blog"
                    ? "Read Article"
                    : post._type === "sold"
                    ? "View Details"
                    : "Read Full Report"}
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
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {currentPage > 1 && (
              <Link
                href={
                  currentPage - 1 === 1
                    ? "/field-notes"
                    : `/field-notes?page=${currentPage - 1}`
                }
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-[#c49a2a]/40 hover:bg-white/[0.08]"
              >
                ← Previous
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  href={
                    pageNum === 1 ? "/field-notes" : `/field-notes?page=${pageNum}`
                  }
                  className={
                    pageNum === currentPage
                      ? "rounded-lg bg-[#c49a2a] px-4 py-2 text-sm font-bold text-[#0f1a0f]"
                      : "rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-[#c49a2a]/40 hover:bg-white/[0.08]"
                  }
                >
                  {pageNum}
                </Link>
              )
            )}
            {currentPage < totalPages && (
              <Link
                href={`/field-notes?page=${currentPage + 1}`}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-[#c49a2a]/40 hover:bg-white/[0.08]"
              >
                Next →
              </Link>
            )}
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Interested in any of these properties?
          </h2>
          <p className="mt-3 text-gray-400">
            Contact Adam Hungle for more details or to discuss your real estate
            goals
          </p>
          <a
            href="tel:3065318854"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#c49a2a] px-6 py-3 font-bold text-[#0f1a0f] transition-all hover:bg-[#d4a520] hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.793.894c.067.463.141.927.223 1.39.282 1.668.454 3.334.454 5.011 0 1.677-.172 3.343-.454 5.011-.082.463-.156.927-.223 1.39l1.793.894a1 1 0 01.54 1.06l-.74 4.435a1 1 0 01-.986.836H3a1 1 0 01-1-1V3z" />
            </svg>
            Call Adam at 306.531.8854
          </a>
        </div>
      </div>
    </div>
  );
}

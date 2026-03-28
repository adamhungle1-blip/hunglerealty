import type { Metadata } from "next";
import Link from "next/link";
import { getSortedPosts, formatDate } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Saskatchewan Farmland News & Insights",
  description:
    "Expert articles on Saskatchewan farmland market trends, buying guides, selling strategies, and RM spotlights from Adam Hungle, REALTOR®.",
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-green-800">Blog</h1>
      <p className="mb-10 text-gray-500">
        Saskatchewan farmland news, market reports, and expert insights.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                {post.category}
              </span>
              <time className="text-xs text-gray-400">{formatDate(post.date)}</time>
            </div>
            <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-green-700">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium text-green-700 hover:text-green-900 hover:underline"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

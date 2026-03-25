import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs, formatDate, getSortedPosts } from "@/data/blog-posts";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Hungle Realty Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const allPosts = getSortedPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-green-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-green-700">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{post.title}</span>
      </nav>

      <article>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
            {post.category}
          </span>
          <time className="text-sm text-gray-400">{formatDate(post.date)}</time>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">{post.title}</h1>

        {/* Author */}
        <div className="mb-8 flex items-center gap-3 border-b border-gray-200 pb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
            AH
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Adam Hungle</p>
            <p className="text-xs text-gray-500">REALTOR® · Sutton Group Results Realty</p>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-green max-w-none prose-headings:text-green-800 prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA */}
      <div className="mt-12 rounded-lg bg-green-50 p-6 text-center">
        <h3 className="mb-2 text-lg font-bold text-green-800">Have Questions About Saskatchewan Farmland?</h3>
        <p className="mb-4 text-sm text-gray-600">
          Adam is available for a no-obligation conversation about buying, selling, or valuing farmland.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded bg-green-700 px-6 py-2.5 text-sm font-bold text-white hover:bg-green-800"
          >
            Contact Adam
          </Link>
          <a href="tel:3065318854" className="text-sm text-gray-500 hover:text-green-700">
            Or call 306.531.8854
          </a>
        </div>
      </div>

      {/* Related Posts */}
      {allPosts.length > 0 && (
        <div className="mt-12">
          <h3 className="mb-4 text-xl font-bold text-gray-900">More Articles</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {allPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
              >
                <span className="mb-1 block text-xs text-gray-400">{formatDate(p.date)}</span>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-700">
                  {p.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

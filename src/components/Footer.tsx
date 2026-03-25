import Image from "next/image";
import Link from "next/link";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Advanced Farm Search", href: "/search" },
  { label: "Buying", href: "/buying" },
  { label: "Selling", href: "/selling" },
  { label: "About", href: "/about" },
  { label: "Acreages", href: "/acreages" },
  { label: "Residential", href: "/residential" },
];

const testimonials = [
  {
    text: "Adam provided the best experience that I have had with any realtor. Highly professional, kind, and considerate — I would not hesitate to recommend him.",
    author: "A. Gutell, Lang, SK",
  },
  {
    text: "Our house sold in 2 days. Adam & Kristy were very helpful and knowledgeable. We would highly recommend them to anyone.",
    author: "D. Sinclair, Regina, SK",
  },
  {
    text: "We may not have sold our acreage without his professionalism. He responded quickly and was very accommodating.",
    author: "R. & E. Chambers, Indian Head, SK",
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Compact Agent Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-8 md:flex-row md:gap-8">
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="relative h-[200px] w-[160px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/adam-hungle.png"
                alt="Adam Hungle — Saskatchewan Farm Real Estate Specialist"
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Adam Hungle</h2>
            <p className="text-sm text-green-400">REALTOR® · Saskatchewan Land Specialist</p>
            <p className="text-xs text-gray-400">Sutton Group Results Realty</p>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-300">
              Over 20 years helping Saskatchewan farmers buy and sell land. Top 5% producer
              with $100M+ in closed transactions.
            </p>

            {/* Stats row */}
            <div className="mt-3 flex flex-wrap justify-center gap-5 md:justify-start">
              {[
                { v: "20+", l: "Years" },
                { v: "$100M+", l: "Sales" },
                { v: "Top 5%", l: "Producer" },
                { v: "280+", l: "RMs" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-lg font-bold text-green-400">{s.v}</p>
                  <p className="text-[10px] uppercase tracking-wide text-gray-500">{s.l}</p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              <a
                href="tel:3065318854"
                className="inline-flex items-center gap-1.5 rounded bg-green-700 px-4 py-2 text-xs font-bold text-white hover:bg-green-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                306.531.8854
              </a>
              <a
                href="mailto:adam@hunglerealty.ca"
                className="inline-flex items-center gap-1.5 rounded border border-gray-600 px-4 py-2 text-xs font-bold text-white hover:border-green-500 hover:text-green-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Testimonials */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded bg-white p-4 shadow-sm">
                <div className="mb-1 flex gap-0.5 text-yellow-500">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs italic text-gray-600">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-1 text-xs font-medium not-italic text-gray-400">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Green nav bar */}
      <div className="bg-green-800">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4 py-2.5">
          {footerNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-white hover:text-green-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 px-4 py-3 text-xs text-gray-500">
          <span>&copy;{new Date().getFullYear()} Hungle Realty | Sutton Group Results Realty</span>
          <span>•</span>
          <span>3904B Gordon Road, Regina, SK</span>
          <span>•</span>
          <Link href="/accessibility" className="hover:text-gray-300">Accessibility</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-gray-300">Terms</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

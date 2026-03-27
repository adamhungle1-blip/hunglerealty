import Image from "next/image";
import Link from "next/link";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Advanced Farm Search", href: "/advanced-search" },
  { label: "Buying", href: "/buying" },
  { label: "Selling", href: "/selling" },
  { label: "About", href: "/about" },
  { label: "Acreages", href: "/acreages" },
  { label: "Residential", href: "/residential" },
];

export default function Footer() {
  return (
    <footer>
      {/* Agent Banner */}
      <section className="bg-[#1a2332]">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-0">
          {/* Photo */}
          <div className="relative hidden shrink-0 md:block">
            <div className="relative h-[130px] w-[110px] overflow-hidden">
              <Image
                src="/adam-hungle.png"
                alt="Adam Hungle — Saskatchewan Farm Real Estate Specialist"
                fill
                className="object-cover object-top"
                sizes="110px"
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="shrink-0 py-5">
            <h2 className="text-xl font-bold italic text-[#d4a520] md:text-2xl">
              Deep Roots. Proven Results.
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Over 20 years helping Saskatchewan farmers buy and sell land.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden flex-1 lg:block" />

          {/* Contact info */}
          <div className="hidden border-l border-gray-700 py-5 pl-6 md:block">
            <p className="text-base font-bold text-white">Adam Hungle</p>
            <p className="text-xs text-green-400">REALTOR® · Saskatchewan Land Specialist</p>
            <p className="text-[11px] text-gray-500">Sutton Group Results Realty</p>
          </div>

          {/* CTA buttons */}
          <div className="ml-auto flex shrink-0 items-center gap-3 py-5">
            <a
              href="tel:3065318854"
              className="inline-flex items-center gap-1.5 rounded bg-green-700 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-green-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              306.531.8854
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded border border-[#d4a520] bg-gradient-to-b from-[#d4a520] to-[#b8891a] px-4 py-2 text-xs font-bold text-[#1a2332] shadow transition-all hover:from-[#e0b830] hover:to-[#d4a520]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send a Message
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/hunglerealty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-gray-300 transition-colors hover:bg-[#1877f2] hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/adam-hungle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-gray-300 transition-colors hover:bg-[#0a66c2] hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
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
      <div className="bg-[#1a2332]">
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

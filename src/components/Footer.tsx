import Image from "next/image";
import Link from "next/link";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Advanced Farm Search", href: "/advanced-search" },
  { label: "Buying", href: "/buying" },
  { label: "Selling", href: "/selling" },
  { label: "About", href: "/about" },
  { label: "Acreages", href: "/acreages" },
  { label: "Residential", href: "/residential/regina" },
];

export default function Footer() {
  return (
    <footer>
      {/* Agent Banner — matches exact design */}
      <section className="relative overflow-hidden border-t-[3px] border-[#c49a2a] bg-[#1a2230]">
        <div className="mx-auto flex max-w-6xl items-end px-4">
          {/* Photo — overlaps bottom, fades into bg */}
          <div className="relative -mb-0 hidden shrink-0 md:block">
            <div className="relative h-[190px] w-[150px]">
              <Image
                src="/adam-hungle.jpg"
                alt="Adam Hungle — Saskatchewan Farm Real Estate Specialist"
                fill
                className="object-cover object-top"
                sizes="150px"
              />
              {/* Right-edge fade into background */}
              <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#1a2230] to-transparent" />
            </div>
          </div>

          {/* Content area */}
          <div className="flex flex-1 flex-col py-4 pl-4 md:pl-6">
            {/* Top row — tagline */}
            <div>
              <h2 className="text-2xl font-bold italic text-[#c49a2a] md:text-3xl">
                Deep Roots. Proven Results.
              </h2>
              <p className="mt-1.5 text-sm text-gray-400">
                Over 15 years helping Saskatchewan farmers buy and sell land.
              </p>
            </div>

            {/* Divider */}
            <div className="my-3 h-px bg-gradient-to-r from-[#c49a2a]/40 via-[#c49a2a]/20 to-transparent" />

            {/* Bottom row — name + contact */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {/* Name & title */}
              <div>
                <p className="text-lg font-bold text-white">Adam Hungle</p>
                <p className="text-xs font-medium text-[#c49a2a]">
                  REALTOR® · Saskatchewan Land Specialist
                </p>
                <p className="text-[11px] text-gray-500">Sutton Group Results Realty</p>
              </div>

              {/* Spacer */}
              <div className="hidden flex-1 lg:block" />

              {/* Phone */}
              <a
                href="tel:3065318854"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c49a2a] transition-colors hover:text-[#e0b830]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                306.531.8854
              </a>

              {/* Email */}
              <a
                href="mailto:hunglerealestate@outlook.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c49a2a] transition-colors hover:text-[#e0b830]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hunglerealestate@outlook.com
              </a>

              {/* Send a Message button */}
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded border border-[#c49a2a] bg-gradient-to-b from-[#c49a2a] to-[#a07d1e] px-5 py-2 text-sm font-bold text-[#1a2230] shadow transition-all hover:from-[#d4a520] hover:to-[#c49a2a]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send a Message
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/hunglerealty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-white"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H0v97.8h80z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-hungle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.83-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
              </div>
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
      <div className="bg-[#1a2230]">
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

import Link from "next/link";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Advanced Farm Search", href: "/search" },
  { label: "Buying", href: "/buying" },
  { label: "Selling", href: "/selling" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer>
      {/* Green nav bar */}
      <div className="bg-green-800">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4 py-3">
          {footerNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white hover:text-green-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
            {/* Left: Logo + contact */}
            <div className="text-center md:text-left">
              {/* Logo placeholder */}
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-800 md:mx-0">
                <span className="text-xs font-bold uppercase leading-tight text-white">
                  Adam<br />Hungle<br />Realty
                </span>
              </div>
              <p className="text-xl font-bold text-gray-800">306.531.8854</p>
              <p className="mt-2 text-sm text-gray-600">Sutton Group Results Realty</p>
              <p className="text-sm text-gray-600">3904B Gordon Road, Regina, Saskatchewan</p>
              <p className="mt-2 text-xs text-gray-500">
                &copy;{new Date().getFullYear()}{" "}
                <Link href="/" className="text-green-700 hover:underline">
                  Hungle Realty
                </Link>{" "}
                | All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 bg-gray-200">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 px-4 py-3 text-xs text-gray-500">
          <span>IDX Real Estate Website by Hungle Realty</span>
          <span>•</span>
          <Link href="/accessibility" className="hover:text-gray-700">Accessibility</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-gray-700">Terms</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

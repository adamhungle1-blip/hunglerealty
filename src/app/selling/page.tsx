import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FeaturedListingsSidebar from "@/components/FeaturedListingsSidebar";

export const metadata: Metadata = {
  title: "Selling Saskatchewan Farmland",
  description:
    "Sell your Saskatchewan farmland for top dollar. MLS® exposure, drone photography, buyer database access, and expert negotiation. Confidential valuation with Adam Hungle, REALTOR®.",
};

const services = [
  {
    title: "Maximum Exposure Through MLS\u00ae",
    text: "Your listing goes on the Multiple Listing Service, a network of over 1,000 websites and every REALTOR® in the co-operative. Your property gets seen by the largest pool of buyers possible.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Professional Drone Photography & Video",
    text: "We use a drone to capture high-definition aerial photos and video of every listing. Buyers get a perspective they can't get from the ground, and it helps them visualize the property before they ever set foot on it.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    title: "Access to Our Buyer Database",
    text: "We've built a large database of active buyers over 15 years, including investors and farmers who are always looking for farmland. We can match your property with qualified buyers quickly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Skilled Negotiation",
    text: "As experienced REALTORS® who've closed over $100 million in transactions, we know how to negotiate the best possible price and terms on your behalf. We understand the market, and we fight for your bottom line.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    title: "Honest, Ethical Service",
    text: "We are bound by a strict code of ethics and we take it seriously. You can trust us to always have your best interests at heart \u2014 no exceptions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "No Cost Unless Your Property Sells",
    text: "Our services are commission-based. We only get paid when your property sells. Our commission covers everything: advertising, promotion, showings, drone photography, and all the legwork. There is no upfront cost to you.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "Top 5%", label: "of all Saskatchewan REALTORS®" },
  { value: "15+", label: "years of experience" },
  { value: "$100M+", label: "in closed transactions" },
  { value: "Hundreds", label: "of properties sold" },
];

const testimonials = [
  {
    name: "R. & E. Chambers",
    location: "Indian Head, SK",
    text: "Adam Hungle was a very friendly, pleasant young man. He responded quickly to any questions or concerns we had. He was very accommodating to meet anywhere convenient for us to sign papers. We highly recommend Adam as we may not have sold our acreage without his professionalism.",
  },
  {
    name: "A. Guteil",
    location: "Lang, SK",
    text: "Adam provided the best experience that I have had with real estate in this province. He is highly professional in all aspects of his work ethic as well as being a kind, caring, and considerate individual who truly listens to his client's needs and desires. I would not hesitate to recommend Adam Hungle for any and all of your real estate needs.",
  },
];

export default function SellingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/hero/selling-new.jpg"
          alt="Selling Saskatchewan Farm Land – Your land deserves more than a listing, it deserves a strategy. Adam Hungle, Saskatchewan Land Specialist."
          width={1500}
          height={844}
          className="w-full h-auto"
          priority
          sizes="100vw"
        />
      </section>

      {/* Main content + sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:flex lg:gap-10">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Intro */}
          <section className="max-w-4xl">
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Selling farm land is a major decision, and you only get one chance to get it right. With
              over 15 years of real estate experience, Adam and Kristy Hungle will help you capitalize on
              every dollar of your hard-earned equity.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We&apos;re a family team who specialize in selling farm and ranch real estate. We&apos;ve sold
              hundreds of properties across Saskatchewan and have seen almost every real estate situation
              there is. We have &ldquo;Acres of Experience.&rdquo; We believe in using the latest technology and
              marketing to get your farm in front of the right buyers &mdash; but we also value the
              importance of doing business with a smile and a handshake.
            </p>
          </section>

      {/* Why Now */}
      <section className="mt-10 overflow-hidden rounded-xl bg-gradient-to-br from-[#1a2a10] via-[#1a3a1a] to-[#0d1f0d] py-12 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold italic text-[#d4a520] md:text-4xl">
            Why Now Is the Time to Sell
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-gray-300">
            Saskatchewan farmland values are at all-time highs. FCC reported a 9.4%
            increase for 2025, following a 13.1% jump in 2024. Values have climbed
            every year for over a decade. Inventory is tight, demand is high, and
            buyers are competing for good land. If you&apos;ve been thinking about selling,
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/sell"
              className="rounded border-2 border-white px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#1a3a1a]"
            >
              Request Valuation
            </Link>
            <span className="text-sm text-gray-400">Or call{" "}
              <a href="tel:3065318854" className="font-semibold text-white hover:text-[#d4a520]">
                306.531.8854
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-green-800">
            What You Get When You List With Us
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                <div className="mb-3 text-green-700">{s.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Info */}
      <section className="mt-10 rounded-xl bg-gray-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-green-800">
            Important Tax Information for Sellers
          </h2>
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <p className="mb-4 text-gray-700 leading-relaxed">
              As a farmer in Saskatchewan, you may be eligible for the <strong>Lifetime Capital Gains
              Exemption (LCGE)</strong> when selling your farmland. The exemption allows you to exclude
              up to <strong>$1,000,000</strong> of capital gains from your taxable income, as long as
              you've owned the land for at least two years and your gross farm income has exceeded all
              other sources of income during that time.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If you're married, your spouse may also be eligible for a separate exemption of up to
              $1,000,000 &mdash; meaning a farming couple could potentially shelter up
              to <strong>$2 million</strong> in capital gains.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A few things to keep in mind: if you receive the Old Age Security pension, you may need
              to pay back a portion of any capital gains exemption claimed in those years. You may also
              be subject to the Alternate Minimum Tax (AMT). The LCGE is a lifetime exemption &mdash;
              if you sell $500,000 worth of farmland now, you still have $500,000 available for future
              transactions.
            </p>
            <p className="text-sm italic text-gray-500">
              We always recommend speaking with your accountant for detailed advice on your specific
              tax situation.
            </p>
          </div>
        </div>
      </section>

      {/* Track Record Stats */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-green-800">Our Track Record</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-green-700">{s.value}</div>
                <div className="mt-1 text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-10 rounded-xl bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-green-800">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-sm italic leading-relaxed text-gray-600">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-sm font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-gray-500">
          <p>
            Looking to buy instead?{" "}
            <Link href="/buying" className="text-green-700 underline hover:text-green-900">
              Learn about buying farmland in Saskatchewan
            </Link>
            .{" "}
            <Link href="/search" className="text-green-700 underline hover:text-green-900">
              Search all MLS® farm listings
            </Link>{" "}
            or{" "}
            <Link href="/about" className="text-green-700 underline hover:text-green-900">
              learn more about Adam Hungle
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 text-center">
        <h2 className="mb-4 text-2xl font-bold text-green-800">
          Ready to Find Out What Your Farm Is Worth?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          No pressure, no obligation &mdash; just straight answers from someone who knows
          Saskatchewan farmland.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded bg-green-700 px-8 py-3 font-bold text-white transition-colors hover:bg-green-800"
          >
            Request My Valuation
          </Link>
          <a href="tel:3065318854" className="text-sm font-medium text-gray-500 hover:text-green-700">
            Or call 306.531.8854
          </a>
        </div>
      </section>
        </div>

        {/* Sidebar - Featured Listings */}
        <aside className="hidden w-[340px] shrink-0 lg:block">
          <div className="sticky top-20">
            <FeaturedListingsSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}

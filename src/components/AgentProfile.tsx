import Image from "next/image";

export default function AgentProfile() {
  return (
    <>
      {/* Dark "Meet Your Agent" hero-style section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-14 md:flex-row md:gap-12 md:py-20">
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="relative h-[340px] w-[280px] overflow-hidden rounded-lg shadow-2xl md:h-[420px] md:w-[320px]">
              <Image
                src="/adam-hungle.jpg"
                alt="Adam Hungle — Saskatchewan Farm Real Estate Specialist"
                fill
                className="object-cover object-top"
                sizes="320px"
                priority
              />
            </div>
            {/* Subtle green accent bar at bottom of photo */}
            <div className="absolute -bottom-1 left-4 right-4 h-1 rounded-full bg-green-600" />
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-4xl">Adam Hungle</h2>
            <p className="mt-1 text-lg text-green-400">REALTOR® · Saskatchewan Land Specialist</p>
            <p className="mt-1 text-sm text-gray-400">Sutton Group Results Realty</p>

            <div className="mt-6 space-y-3 text-base leading-relaxed text-gray-300">
              <p>
                Over 15 years helping Saskatchewan farmers buy and sell land. A top 5% producer
                with $100M+ in closed transactions — Adam grew up on the Prairies and understands
                the land from the ground up.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">15+</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">$100M+</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">Closed Sales</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">Top 5%</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">Producer</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">280+</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">RMs Covered</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="tel:3065318854"
                className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                306.531.8854
              </a>
              <a
                href="mailto:hunglerealestate@outlook.com"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-green-500 hover:text-green-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bio details section */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="mb-4 text-xl font-bold text-green-800">
          Saskatchewan&apos;s Farm Sales Specialist
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-gray-700">
          <p>
            Whether you&apos;re looking to expand your operation, invest in agricultural land, or sell
            your family farm, Adam and his team — Adam &amp; Kristy Hungle, with the resources of
            Sutton Group Results Realty — are here to help.
          </p>
          <ul className="ml-4 list-inside space-y-1">
            <li>✓ Over 15 Years of Saskatchewan Farm Sales Experience</li>
            <li>✓ Top 5% Producer, $100M+ in Closed Transactions</li>
            <li>✓ Province-Wide Network — Buyers and Sellers from Every RM</li>
            <li>✓ The Best Farm Search in the Province — updated every 5 minutes, search by RM, acreage, price, and type</li>
          </ul>
        </div>

        <h3 className="mt-8 mb-3 text-lg font-bold text-green-800">
          Thinking of Selling Your Farm?
        </h3>
        <p className="text-base leading-relaxed text-gray-700">
          Saskatchewan farmland values are at all-time highs. The market is strong, inventory is low,
          and buyers are competing for good land. If you&apos;ve been considering selling, now is
          the time to find out what your farm is worth.
        </p>
        <p className="mt-3 font-semibold text-gray-800">
          Call Adam at 306.531.8854 for a no-obligation farm valuation. With 15+ years of
          experience and a proven marketing system, Adam will get your farm in front of the right
          buyers and get you the best price.
        </p>
      </section>

      {/* Green Valuation CTA Banner */}
      <section className="mx-auto max-w-5xl px-4 pb-10">
        <div className="rounded-lg bg-green-700 px-6 py-10 text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">What Is Your Farmland Worth?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-green-100">
            Get a confidential valuation based on recent comparable sales in your RM.
          </p>
          <p className="mt-1 text-sm text-green-200">
            No obligation. No pressure. Just honest, market-based insight.
          </p>
          <a
            href="/selling"
            className="mt-5 inline-block rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-bold text-white transition-colors hover:bg-white hover:text-green-800"
          >
            Request My Valuation
          </a>
          <p className="mt-3 text-sm text-green-200">
            Or call <a href="tel:3065318854" className="font-bold underline">306.531.8854</a> to speak with Adam directly.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <h2 className="mb-6 text-xl font-bold text-green-800">What Our Clients Say</h2>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="text-base italic text-gray-700">
              <div className="mb-1 flex gap-0.5 text-yellow-500">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p>&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-1 text-sm font-medium not-italic text-gray-500">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}

const testimonials = [
  {
    text: "Adam provided the best experience that I have had with any REALTOR®. He is very thorough in all aspects of his work ethic as well as being a kind, caring, and considerate individual who truly listens to his client's needs. I would not hesitate to recommend Adam Hungle for any and all of your real estate needs.",
    author: "A. Gutell, Lang, SK",
  },
  {
    text: "Adam met with us a year before we actually listed our property. He kept in touch with us and sent us information regularly. Our house sold in 2 days. We would highly recommend them to anyone looking to buy or sell.",
    author: "D. Sinclair, Regina, SK",
  },
  {
    text: "We highly recommend Adam as we may not have sold our acreage without his professionalism. He responded quickly to any questions or concerns we had and was very accommodating.",
    author: "R. & E. Chambers, Indian Head, SK",
  },
];

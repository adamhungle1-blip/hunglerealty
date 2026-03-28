import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Adam Hungle | Farm Sales Specialist | Hungle Realty",
  description:
    "Meet Adam Hungle — top 5% Saskatchewan REALTOR® with 15+ years experience and over $100M in closed farm transactions. Sutton Group Results Realty.",
};

const testimonials = [
  {
    name: "R. & E. Chambers",
    location: "Indian Head, SK",
    text: "Adam Hungle was a very friendly, pleasant young man. He responded quickly to any questions or concerns we had and was very accommodating to meet anywhere convenient for us to sign papers. We highly recommend Adam — we may not have sold our acreage without his professionalism.",
  },
  {
    name: "D. Sinclair",
    location: "Regina, SK",
    text: "Adam met with us a year before we listed our property and stayed in touch with regular updates. Our house sold in 2 days. Adam & Kristy took the time to show us many properties until we found the right fit. They were knowledgeable, helpful, and great to work with. We highly recommend them to anyone buying or selling.",
  },
  {
    name: "A. Gutell",
    location: "Lang, SK",
    text: "Adam provided the best real estate experience I've had in this province — on par with the top professionals I've worked with elsewhere. He's knowledgeable, professional, and truly cares about his clients. He listened from start to finish and stayed in touch well after the deal was done, which is rare. I wouldn't hesitate to recommend Adam for any real estate needs.",
  },
];

const whyChooseAdam = [
  {
    title: "Specialized in Saskatchewan Farmland",
    desc: "Local knowledge that only comes from growing up here.",
  },
  {
    title: "Proven Track Record",
    desc: "Over $100M in sales and ranked in the top 5% of agents in the province.",
  },
  {
    title: "Strategic Marketing Approach",
    desc: "Professional, data-driven marketing that targets serious buyers.",
  },
  {
    title: "Client-First Service",
    desc: "Friendly, responsive, and committed to getting the best results.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero: Wheat field with tagline ── */}
      <section className="relative overflow-hidden bg-[#f5edd4]">
        {/* Wheat field background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero/slide1.jpg"
            alt="Saskatchewan wheat field"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5edd4]/80 via-transparent to-[#f5edd4]/90" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 pb-8 pt-10 text-center md:pt-14 md:pb-10">
          <h1 className="text-4xl font-bold italic text-[#c49a2a] md:text-5xl">
            Deep Roots. Proven Results.
          </h1>
          <p className="mt-2 text-sm font-semibold tracking-wide text-gray-700 md:text-base">
            Saskatchewan Land Specialist. Over $100M+ in closed transactions.
          </p>
        </div>
      </section>

      {/* ── Bio section with photo ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f5edd4] to-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-[320px] w-[260px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/adam-hungle.jpg"
                  alt="Adam Hungle - Saskatchewan Farm Sales Specialist"
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-2">
              <h2 className="mb-1 text-3xl font-bold text-gray-900">Adam Hungle</h2>
              <p className="mb-4 text-base font-medium italic text-[#c49a2a]">
                Trusted, Experienced, Proven.
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">
                Adam Hungle is a top-performing real estate agent with over 15 years of experience
                helping clients buy and sell farmland across Saskatchewan. Born and raised here, he
                offers a deep understanding of the local market, a sharp eye for value, and a passion
                for delivering results.
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">
                Adam&apos;s path into real estate started alongside his father, Ken Hungle, a respected
                and successful agent in the province. When Ken was diagnosed with multiple sclerosis,
                he asked Adam to step in and help with the business. At the time, Adam was working at
                John Deere — but he agreed to give real estate a try. What started as a leap of faith
                quickly turned into a career built on hard work, determination, and results.
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">
                Today, Adam is ranked in the top 5% of all agents in Saskatchewan, with over $100
                million in closed transactions. He&apos;s known for his friendly, get-it-done attitude,
                strategic approach to marketing and negotiations, and his commitment to making the
                process simple, smooth, and successful for every client.
              </p>
              <p className="leading-relaxed text-gray-700">
                When he&apos;s not working with clients, Adam is a husband and a proud dad to his
                3-year-old son. He enjoys spending time with his family, traveling, and staying active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-gray-200 bg-white py-10">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 md:justify-between md:gap-4">
          {/* 15+ Years */}
          <div className="flex items-center gap-3 text-center">
            <svg className="h-8 w-8 text-[#c49a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6 2 10.5c0 2.5 2 4.5 4 6l-1.5 4.5L9 18.5c1 .3 2 .5 3 .5s2-.2 3-.5l4.5 2.5L18 16.5c2-1.5 4-3.5 4-6C22 6 17.52 2 12 2z" />
            </svg>
            <div>
              <div className="text-3xl font-extrabold text-gray-900">15+</div>
              <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Years of Experience</div>
            </div>
          </div>
          {/* $100M+ */}
          <div className="flex items-center gap-3 text-center">
            <svg className="h-8 w-8 text-[#c49a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7-6-4.6h7.6z" />
            </svg>
            <div>
              <div className="text-3xl font-extrabold text-gray-900">$100M+</div>
              <div className="text-xs font-medium uppercase tracking-wide text-gray-500">In Closed Transactions</div>
            </div>
          </div>
          {/* Top 5% */}
          <div className="flex items-center gap-3 text-center">
            <svg className="h-8 w-8 text-[#c49a2a]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div>
              <div className="text-3xl font-extrabold text-gray-900">Top 5%</div>
              <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Of Agents in Saskatchewan</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── My Story + Why Sellers Choose Adam ── */}
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-2">
          {/* My Story */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-gray-900">My Story</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Real estate has deep roots in my family. My dad, Ken Hungle, built a successful career
              helping people buy and sell land in Saskatchewan. When he was diagnosed with multiple
              sclerosis, he asked me to step in and help run the business.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              I was working at John Deere at the time, but I agreed to give it a try. It was a slow
              start, but with a lot of hard work and determination, I quickly found my stride — and a
              passion for the land business.
            </p>
            <p className="leading-relaxed text-gray-700">
              That foundation, built on resilience and real-life experience, still shapes the way I
              work today.
            </p>
          </div>

          {/* Why Sellers Choose Adam */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-gray-900">Why Sellers Choose Adam</h2>
            <div className="space-y-4">
              {whyChooseAdam.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Client Testimonials
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-gray-200 bg-gradient-to-br from-[#f7f3ea] to-[#ede8da] p-6 shadow-sm"
              >
                <p className="mb-5 text-sm italic leading-relaxed text-gray-700">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gray-300 pt-3">
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Statement with wheat field background ── */}
      <section className="relative overflow-hidden">
        {/* Wheat field bg */}
        <div className="absolute inset-0">
          <Image
            src="/hero/slide1.jpg"
            alt="Saskatchewan wheat field"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1a2a10]/75" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-14 text-center">
          <h2 className="mb-5 text-3xl font-bold italic text-[#c49a2a]">Mission Statement</h2>
          <p className="text-base leading-relaxed text-gray-200">
            As a licensed Realtor with over 15 years of experience, I make buying and selling
            farmland in Saskatchewan a simple and stress-free process. I believe in honest advice,
            strong work ethic, and putting clients first. My goal is to provide exceptional service,
            expert guidance, and proven results — every step of the way.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-14 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Ready to Get Started?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Whether you&apos;re buying or selling farmland in Saskatchewan, Adam is here to help. Get
          in touch today for a no-obligation conversation.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded bg-green-700 px-8 py-3 font-bold text-white transition-colors hover:bg-green-800"
          >
            Contact Adam
          </Link>
          <a
            href="tel:3065318854"
            className="text-sm font-medium text-gray-500 hover:text-green-700"
          >
            Or call 306.531.8854
          </a>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Adam Hungle | Farm Sales Specialist | Hungle Realty",
  description:
    "Meet Adam Hungle — top 5% Saskatchewan REALTOR® with 20+ years experience and over $100M in closed farm transactions. Sutton Group Results Realty.",
};

const milestones = [
  { value: "Top 5%", label: "of Saskatchewan Realtors" },
  { value: "20+", label: "Years of Experience" },
  { value: "$100M+", label: "in Closed Transactions" },
  { value: "Hundreds", label: "of Properties Sold" },
];

const testimonials = [
  {
    name: "R. & E. Chambers",
    location: "Indian Head, SK",
    text: "Adam Hungle was a very friendly, pleasant young man. He responded quickly to any questions or concerns we had. He was very accommodating to meet anywhere convenient for us to sign papers. We highly recommend Adam as we may not have sold our acreage without his professionalism.",
  },
  {
    name: "D. Sinclair",
    location: "Regina, SK",
    text: "Adam met with us a year before we actually listed our property. He kept in touch with us and sent us information regularly. Our house sold in 2 days. Adam & Kristy spent a lot of time with us showing us various properties until we found one that met our needs. They were very helpful and knowledgeable. We would highly recommend them to anyone looking to buy or sell.",
  },
  {
    name: "A. Guteil",
    location: "Lang, SK",
    text: "Adam provided the best experience that I have had with real estate in this province. He is highly professional in all aspects of his work ethic as well as being a kind, caring, and considerate individual who truly listens to his client's needs and desires. I would not hesitate to recommend Adam Hungle for any and all of your real estate needs.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[260px] overflow-hidden md:h-[320px]">
        <Image
          src="/hero/slide1.jpg"
          alt="Saskatchewan landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            Adam Hungle
          </h1>
          <p className="mt-2 text-lg font-medium text-green-200">
            Farm Sales Specialist &bull; Sutton Group Results Realty
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-80 w-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/adam-hungle.png"
                alt="Adam Hungle - Saskatchewan Farm Sales Specialist"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>

          {/* Bio Text */}
          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-green-800">About Adam</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Adam Hungle is a top-performing real estate agent with over 20 years of experience in
              the industry. Born and raised in Saskatchewan, Adam has a deep understanding of the
              local market and a passion for helping clients achieve their real estate goals. With a
              background in marketing and negotiations, Adam brings a unique skill set to every
              transaction, ensuring that his clients get the best possible results.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Adam got his start in real estate thanks to his father, Ken Hungle, who was also a
              successful agent. When Ken was diagnosed with multiple sclerosis, he asked Adam to help
              him with his business. Adam was working at John Deere at the time, but he agreed to
              give real estate a try. It was a slow start, but with hard work and determination, Adam
              quickly became one of the most successful agents in Saskatchewan. Today, he is in the
              top 5% of all agents in the province, and he has closed over $100 million in property
              transactions.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Adam prides himself on his dedication to his clients and his ability to provide
              exceptional service. He is known for his friendly, get-it-done attitude, and his
              willingness to go the extra mile to ensure that his clients are happy. In addition to
              his work as a real estate agent, Adam is also a husband and father. He enjoys spending
              time with his family, traveling, and staying active.
            </p>
            <p className="leading-relaxed text-gray-700">
              Specializing in farm, ranch, and pasture properties &mdash; Saskatchewan born and
              raised, family farmed in the Holdfast and Dinsmore area.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-800 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.label} className="text-center text-white">
                <div className="text-3xl font-extrabold">{m.value}</div>
                <div className="mt-1 text-sm text-green-200">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="mb-6 text-center text-2xl font-bold text-green-800">My Approach</h2>
        <p className="text-center text-lg leading-relaxed text-gray-700">
          As a licensed Realtor with over 20 years of experience, I have developed a unique approach
          to real estate that makes the process simple and easy for my clients. My specialty is buying
          and selling farmland in Saskatchewan, and I strive to provide exceptional service and
          guidance to each and every client. I believe in honesty and transparency, and I always make
          sure to put the needs of my clients first. I am committed to working hard, staying
          efficient, and using a proven system to ensure that every transaction goes smoothly.
        </p>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-green-800">
            What Clients Are Saying
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
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

      {/* CTA */}
      <section className="py-14 text-center">
        <h2 className="mb-4 text-2xl font-bold text-green-800">Ready to Get Started?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Whether you're buying or selling farmland in Saskatchewan, Adam is here to help. Get in
          touch today for a free, no-obligation conversation.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded bg-green-700 px-8 py-3 font-bold text-white transition-colors hover:bg-green-800"
          >
            Contact Adam
          </Link>
          <a href="tel:3065318854" className="text-sm font-medium text-gray-500 hover:text-green-700">
            Or call 306.531.8854
          </a>
        </div>
      </section>
    </div>
  );
}

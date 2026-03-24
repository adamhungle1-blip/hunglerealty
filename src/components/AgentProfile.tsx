export default function AgentProfile() {
  return (
    <section className="bg-green-50 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl md:flex md:items-center md:gap-12">
        {/* Photo placeholder */}
        <div className="mx-auto mb-8 h-56 w-56 flex-shrink-0 overflow-hidden rounded-full bg-green-200 md:mx-0 md:mb-0 md:h-64 md:w-64">
          <div className="flex h-full items-center justify-center text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* Bio */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-green-900 md:text-3xl">
            Adam Hungle
          </h2>
          <p className="mt-1 text-sm font-medium text-gold">
            Licensed REALTOR® · Saskatchewan
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Whether you&apos;re buying your first quarter section, expanding an
            existing operation, or looking for the perfect family home, I&apos;m
            here to help. With deep roots in Saskatchewan agriculture and a
            passion for rural property, I bring local market knowledge you can
            count on.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="tel:+13065551234"
              className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
            >
              Call Me
            </a>
            <a
              href="/contact"
              className="rounded-lg border-2 border-green-700 px-5 py-2.5 text-sm font-semibold text-green-700 transition-colors hover:bg-green-700 hover:text-white"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto mt-12 max-w-5xl">
        <h3 className="mb-6 text-center text-lg font-bold text-green-900">
          What Clients Say
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm italic text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-gray-800">
                — {t.name}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Mark & Sandra T.",
    quote:
      "Adam made the process of buying farmland so much easier than we expected. His knowledge of RMs and soil classifications saved us from a bad purchase.",
  },
  {
    name: "Daryl K.",
    quote:
      "Sold our family farm through Adam. He understood what the land was worth and got us above asking. Highly recommend to anyone in SK agriculture.",
  },
  {
    name: "Jessica L.",
    quote:
      "We moved from the city and Adam helped us find an acreage near Lumsden. He was patient, knowledgeable, and made the whole experience smooth.",
  },
];

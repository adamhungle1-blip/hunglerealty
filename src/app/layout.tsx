import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "mapbox-gl/dist/mapbox-gl.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hunglerealty.ca"),
  title: {
    default: "Hungle Realty — Saskatchewan Farmland, Acreages & Regina Real Estate",
    template: "%s | Hungle Realty",
  },
  description:
    "Adam Hungle is your Saskatchewan farmland specialist. Search farm listings across 280+ rural municipalities, acreages near Regina, and residential properties. Sutton Group Results Realty.",
  keywords: [
    "Saskatchewan farmland",
    "SK real estate",
    "farm for sale Saskatchewan",
    "acreage for sale",
    "rural municipality",
    "Hungle Realty",
    "Regina real estate",
    "acreages near Regina",
    "Saskatchewan farm REALTOR®",
    "Adam Hungle",
    "farmland for sale SK",
    "buy farmland Saskatchewan",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Hungle Realty",
    title: "Hungle Realty — Saskatchewan Farmland, Acreages & Regina Real Estate",
    description: "Adam Hungle is your Saskatchewan farmland specialist. Search farm listings across 280+ rural municipalities, acreages near Regina, and residential properties.",
    url: "https://hunglerealty.ca",
    images: [
      {
        url: "/hero/slide1.jpg",
        width: 1200,
        height: 630,
        alt: "Saskatchewan farmland aerial view — Hungle Realty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hungle Realty — Saskatchewan Farmland & Real Estate",
    description: "Adam Hungle is your Saskatchewan farmland specialist. Search 280+ rural municipalities, acreages, and Regina homes.",
    images: ["/hero/slide1.jpg"],
  },
  alternates: {
    canonical: "https://hunglerealty.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "RealEstateAgent",
                  "@id": "https://hunglerealty.ca/#agent",
                  name: "Adam Hungle",
                  jobTitle: "REALTOR\u00ae — Saskatchewan Farmland Specialist",
                  url: "https://hunglerealty.ca",
                  telephone: "+1-306-531-8854",
                  email: "hunglerealestate@outlook.com",
                  image: "https://hunglerealty.ca/hero/adam-hungle.jpg",
                  description:
                    "Top-performing Saskatchewan farmland specialist with over 15 years of experience. Expert in farmland, acreages, and Regina residential real estate.",
                  areaServed: [
                    {
                      "@type": "Province",
                      name: "Saskatchewan",
                      containedInPlace: { "@type": "Country", name: "Canada" },
                    },
                    {
                      "@type": "City",
                      name: "Regina",
                      containedInPlace: { "@type": "Province", name: "Saskatchewan" },
                    },
                  ],
                  knowsAbout: [
                    "Saskatchewan farmland",
                    "Agricultural real estate",
                    "Acreages",
                    "Rural municipality land sales",
                    "Regina residential real estate",
                  ],
                  sameAs: [
                    "https://www.facebook.com/people/Adam-Hungle-Sutton-Group-Results-Realty/100063880312860/",
                    "https://www.linkedin.com/in/adam-hungle",
                    "https://www.google.com/maps/place/?q=place_id:ChIJGRE0YxceHFMRjWRsycS4QDM",
                    "https://www.realtor.ca/agent/1659834/adam-hungle-3904-b-gordon-road-regina-saskatchewan-s4s6y3",
                  ],
                  worksFor: {
                    "@type": "RealEstateAgent",
                    name: "Sutton Group Results Realty",
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://hunglerealty.ca/#business",
                  name: "Hungle Realty",
                  url: "https://hunglerealty.ca",
                  telephone: "+1-306-531-8854",
                  email: "hunglerealestate@outlook.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "3904B Gordon Road",
                    addressLocality: "Regina",
                    addressRegion: "SK",
                    postalCode: "S4W 0B7",
                    addressCountry: "CA",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 50.4452,
                    longitude: -104.6189,
                  },
                  sameAs: [
                    "https://www.facebook.com/people/Adam-Hungle-Sutton-Group-Results-Realty/100063880312860/",
                    "https://www.linkedin.com/in/adam-hungle",
                    "https://www.google.com/maps/place/?q=place_id:ChIJGRE0YxceHFMRjWRsycS4QDM",
                  ],
                  priceRange: "$$",
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "08:00",
                    closes: "18:00",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://hunglerealty.ca/#website",
                  name: "Hungle Realty",
                  url: "https://hunglerealty.ca",
                  publisher: { "@id": "https://hunglerealty.ca/#business" },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://hunglerealty.ca/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "How much does farmland cost in Saskatchewan?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Saskatchewan farmland prices vary by region, soil class, and improvements. As of 2025, values range from under $1,000/acre in some northern areas to over $3,500/acre for top-quality grain land near major centres. Contact Adam Hungle at 306.531.8854 for a free comparable sales analysis.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do I need a REALTOR\u00ae to buy farmland in Saskatchewan?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "While not legally required, a farmland specialist like Adam Hungle provides comparable sales data, mineral rights verification, soil analysis, and expert negotiation \u2014 all at no cost to the buyer.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is Saskatchewan farmland a good investment?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "FCC reported a 9.4% increase in Saskatchewan farmland values for 2025, following 13.1% in 2024. Saskatchewan ranked third nationally behind Manitoba (12.2%) and Alberta (11.4%).",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

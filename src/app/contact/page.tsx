"use client";

import { useState } from "react";
import Image from "next/image";

const rmOptions = [
  "Not sure / General inquiry",
  "Aberdeen", "Abernethy", "Antelope Park", "Antler", "Arborfield", "Arlington",
  "Arm River", "Barrier Valley", "Battle River", "Bayne", "Beaver River", "Benson",
  "Big Arm", "Big Quill", "Big River", "Big Stick", "Biggar", "Birch Hills",
  "Bjorkdale", "Blucher", "Blaine Lake", "Bone Creek", "Bratt's Lake", "Britannia",
  "Brock", "Browning", "Buchanan", "Calder", "Caledonia", "Cambria", "Canaan",
  "Cana", "Carmichael", "Caron", "Chaplin", "Chester", "Chesterfield", "Churchbridge",
  "Clayton", "Clinworth", "Coalfields", "Colonsay", "Connaught", "Corman Park",
  "Coteau", "Coulee", "Craik", "Cupar", "Cut Knife", "Deer Forks",
  "Douglas", "Duck Lake", "Dufferin", "Dundurn", "Eagle Creek", "Edenwold",
  "Elcapo", "Eldon", "Elfros", "Elmsthorpe", "Emerald", "Enniskillen",
  "Enterprise", "Enfield", "Estevan", "Excel", "Excelsior",
  "Eye Hill", "Fertile Belt", "Fertile Valley", "Fish Creek", "Flett's Springs",
  "Foam Lake", "Fox Valley", "Francis", "Frenchman Butte", "Frontier",
  "Garden River", "Glen Bain", "Glen McPherson", "Glenside", "Golden West",
  "Good Lake", "Grandview", "Grant", "Grass Lake", "Grassy Creek",
  "Gravelbourg", "Great Bend", "Griffin", "Gull Lake", "Happy Valley",
  "Happyland", "Harris", "Hart Butte", "Hazel Dell", "Hazelwood",
  "Heart's Hill", "Hillsborough", "Hillsdale", "Hoodoo", "Huron",
  "Indian Head", "Insinger", "Invermay", "Ituna Bon Accord",
  "Kellross", "Key West", "Keys", "Kindersley", "King George",
  "Kingsley", "Kinistino", "Kutawa", "Lac Pelletier", "Lacadena",
  "Laird", "Lake Alma", "Lake Johnson", "Lake Lenore",
  "Lake of the Rivers", "Lakeview", "Lakeside", "Langenburg", "Last Mountain Valley",
  "Laurier", "Leask", "Leoville", "Leroy", "Lipton", "Living Sky",
  "Livingston", "Lone Tree", "Longlaketon", "Loon Lake", "Loreburn",
  "Lost River", "Lumsden", "Mankota", "Maple Bush", "Maple Creek",
  "Mariposa", "Marquis", "Marriott", "Martin", "McCraney",
  "McKillop", "McLeod", "Meadow Lake", "Medstead", "Meeting Lake",
  "Meota", "Mervin", "Milden", "Milton", "Miry Creek",
  "Monet", "Montrose", "Moose Creek", "Moose Jaw", "Moose Mountain",
  "Moose Range", "Moosomin", "Morris", "Morse", "Mount Hope",
  "Mount Pleasant", "Mountain View", "Newcombe", "Nipawin",
  "North Battleford", "North Qu'Appelle", "Norton", "Oakdale",
  "Old Post", "Orkney", "Paddockwood", "Parkdale",
  "Paynton", "Pense", "Perdue", "Piapot", "Pittville",
  "Pleasant Valley", "Pleasantdale", "Ponass Lake", "Porcupine",
  "Prairie Rose", "Prairiedale", "Preeceville", "Prince Albert",
  "Progress", "Reciprocity", "Redberry", "Redburn", "Reford",
  "Regina", "Reno", "Riverside", "Rodgers", "Rocanville",
  "Rosemount", "Rosthern", "Round Hill", "Round Valley", "Rudy",
  "Saltcoats", "Sarnia", "Saskatchewan Landing", "Sasman",
  "Scott", "Serpent River", "Shamrock", "Shellbrook", "Sherwood",
  "Sliding Hills", "Snipe Lake", "South Qu'Appelle", "Spalding",
  "Spiritwood", "Spy Hill", "St. Andrews", "St. Louis",
  "St. Peter", "St. Phillips", "Stanley", "Star City",
  "Stonehenge", "Storthoaks", "Surprise Valley", "Sutton",
  "Swift Current", "Tecumseh", "Terrell", "The Gap",
  "Thistle Creek", "Three Lakes", "Tisdale", "Torch River",
  "Touchwood", "Tramping Lake", "Tulleymet", "Turtle River",
  "Usborne", "Val Marie", "Vanscoy", "Victory", "Viscount",
  "Walpole", "Waverley", "Webb", "Wellington", "Wheatlands",
  "Whiska Creek", "White Valley", "Willner", "Willow Bunch",
  "Willow Creek", "Willowdale", "Winslow", "Wise Creek",
  "Wolverine", "Wolseley", "Wood Creek", "Wood River",
  "Wreford",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    rm: "Not sure / General inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", rm: "Not sure / General inquiry", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[220px] overflow-hidden md:h-[280px]">
        <Image
          src="/hero/slide2.jpg"
          alt="Saskatchewan farmland"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-2 text-lg text-green-200">
            No-obligation farmland valuation
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            <h2 className="mb-2 text-2xl font-bold text-green-800">Request a Valuation</h2>
            <p className="mb-6 text-gray-600">
              Fill out the form below and Adam will get back to you within 24 hours with a
              confidential, market-based valuation of your farmland.
            </p>

            {status === "success" && (
              <div className="mb-6 rounded bg-green-50 border border-green-200 px-4 py-3 text-green-800">
                Thank you! Your message has been sent. Adam will be in touch shortly.
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 rounded bg-red-50 border border-red-200 px-4 py-3 text-red-800">
                Something went wrong. Please try again or call 306.531.8854 directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-bold text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-bold text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
                    placeholder="306-555-1234"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-bold text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="rm" className="mb-1 block text-sm font-bold text-gray-700">
                  Rural Municipality
                </label>
                <select
                  id="rm"
                  name="rm"
                  value={form.rm}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
                >
                  {rmOptions.map((rm) => (
                    <option key={rm} value={rm}>{rm}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-bold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-green-600 focus:outline-none"
                  placeholder="Tell us about your property or what you're looking for..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded bg-green-700 px-8 py-3 font-bold text-white transition-colors hover:bg-green-800 disabled:opacity-50 sm:w-auto"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="md:col-span-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-bold text-gray-900">Get In Touch</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <a href="tel:3065318854" className="text-green-700 hover:underline">306.531.8854</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a href="mailto:adam@hunglerealty.ca" className="text-green-700 hover:underline">adam@hunglerealty.ca</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900">Office</p>
                    <p>Sutton Group &mdash; Results Realty</p>
                    <p>3904B Gordon Road</p>
                    <p>Regina, Saskatchewan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-green-800 p-6 text-white">
              <h3 className="mb-2 text-lg font-bold">Prefer to Talk?</h3>
              <p className="mb-4 text-sm text-green-100">
                Call Adam directly for a quick, no-pressure chat about your farm or property.
              </p>
              <a
                href="tel:3065318854"
                className="inline-block rounded bg-white px-6 py-2.5 text-sm font-bold text-green-800 transition-colors hover:bg-green-50"
              >
                Call 306.531.8854
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

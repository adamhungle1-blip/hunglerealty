import { soldListings, type SoldListing } from "@/data/sold-listings";
import { getSortedPosts } from "@/data/blog-posts";

export interface FieldNotePost {
    slug: string;
    title: string;
    date: string; // display string shown on the card
  sortDate: string; // YYYY-MM-DD, used only for ordering
  category: string;
    excerpt?: string;
    blurb?: string;
    image: string;
    stats?: { label: string; value: string }[];
    _type: "standalone" | "blog" | "sold";
}

// Standalone field-notes pages (market reports etc.)
const standalonePages: FieldNotePost[] = [
    {
            slug: "saskatchewan-farmland-market-report-october-2026",
            title: "Saskatchewan Farmland Market Report — October 2026",
            date: "October 2026",
            sortDate: "2026-10-01",
            category: "Market Update",
            excerpt:
                      "Farmland values, interest rates, farm income and the late 2026 harvest - where the Saskatchewan market stands heading into the final quarter, and what it means for buyers and sellers.",
            image: "/hero/slide2.jpg",
            stats: [
                { label: "2025 Growth", value: "+9.4%" },
                { label: "BoC Rate", value: "2.25%" },
                { label: "Harvested", value: "41%" },
                    ],
            _type: "standalone",
    },
  {
        slug: "farmland-market-report-2025",
        title: "Saskatchewan Farmland Market Report — 2025 Update",
        date: "March 2026",
        sortDate: "2026-03-15",
        category: "Market Update",
        excerpt:
                "SK farmland values rose 9.4% in 2025 (FCC full-year data), ranking third nationally behind Manitoba and Alberta. Provincial avg cultivated price sits at ~$3,200–$3,500/acre with the northeast leading at $4,450+. Full breakdown by region, plus rental rates, irrigated land, and the 2026 outlook.",
        image: "/hero/slide1.jpg",
        stats: [
          { label: "YoY Growth", value: "+9.4%" },
          { label: "Avg $/Acre", value: "$3,210" },
          { label: "SK Rank", value: "#3 in Canada" },
              ],
        _type: "standalone",
  },
  {
        slug: "saskatchewan-farmland-rental-rates",
        title: "Saskatchewan Farmland Rental Rates (2026)",
        date: "March 2026",
        sortDate: "2026-03-15",
        category: "Market Report",
        excerpt:
                "Cash rent across Saskatchewan ranges from $68–$124/acre depending on region and soil quality. Full breakdown of rental rates by region, how rates are determined, cash rent vs crop share, and the 3.1% rent-to-price ratio.",
        image: "/hero/slide3.jpg",
        stats: [
          { label: "Avg Cash Rent", value: "$68–$124" },
          { label: "Rent-to-Price", value: "3.1%" },
          { label: "Top Region", value: "Northeast" },
              ],
        _type: "standalone",
  },
  {
        slug: "saskatchewan-farmland-price-history",
        title: "Saskatchewan Farmland Prices: 40 Years of Growth (1986–2025)",
        date: "March 2026",
        sortDate: "2026-03-15",
        category: "Market Analysis",
        excerpt:
                "From $200/acre in the late 1980s to $3,200+ today — trace four decades of Saskatchewan farmland value growth using FCC data. Key inflection points, era-by-era analysis, and what the trend means for buyers and sellers.",
        image: "/hero/slide2.jpg",
        stats: [
          { label: "1986 Avg", value: "$200" },
          { label: "2025 Avg", value: "$3,200+" },
          { label: "40-Yr Growth", value: "1,500%+" },
              ],
        _type: "standalone",
  },
  ];

// Blog article images mapped by category
const blogCategoryImages: Record<string, string> = {
    "Tax & Finance": "/hero/slide3.jpg",
    "Investment Guide": "/hero/slide1.jpg",
    "Acreage Guide": "/hero/slide2.jpg",
    "Buying Guide": "/hero/slide1.jpg",
    "Market Analysis": "/hero/slide3.jpg",
    "Market Insights": "/hero/slide2.jpg",
    "RM Spotlight": "/hero/slide1.jpg",
    "Market Report": "/hero/slide3.jpg",
};

/** All Field Notes content (market reports, blog articles, sold listings), sorted newest first by actual date. */
export function getAllFieldNotePosts(): FieldNotePost[] {
    const blogArticles: FieldNotePost[] = getSortedPosts().map((post) => ({
          slug: post.slug,
          title: post.title,
          date: post.date,
          sortDate: post.date,
          category: post.category,
          excerpt: post.excerpt,
          image: blogCategoryImages[post.category] || "/hero/slide1.jpg",
          _type: "blog",
    }));

  const soldPosts: FieldNotePost[] = soldListings.map((listing: SoldListing) => ({
        slug: listing.slug,
        title: listing.title,
        date: listing.date,
        sortDate: listing.date,
        category: listing.category,
        blurb: listing.blurb,
        image: listing.image,
        _type: "sold",
  }));

  const all = [...standalonePages, ...blogArticles, ...soldPosts];
    return all.sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}

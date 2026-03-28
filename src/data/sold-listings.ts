export interface SoldListing {
  slug: string;
  title: string;
  date: string;          // YYYY-MM-DD format
  category: string;      // "Sold" for all
  blurb: string;         // Short 2-3 sentence description
  image: string;         // Path to image
  mls: string;           // MLS number
  location: string;      // Full location/address
  propertyType: string;  // Property type (Detached, Agriculture, etc.)
  thankYou: string;      // Personalized thank you message
  details?: {
    beds?: number;
    baths?: number;
    sqft?: number;
    acres?: number;
  };
}

export const soldListings: SoldListing[] = [
  {
    slug: "sk-020293-sherwood-land",
    title: "SK020293 | Sherwood Rm No 159 | 39.96 Acres | Land Sold",
    date: "2025-12-15",
    category: "Sold",
    blurb:
      "This beautiful 39.96-acre parcel in Sherwood RM #159 showcases pristine Black and Grade A soils perfect for grain and oilseed operations. Strategic location near grain handling corridors with excellent road access and future development potential in this high-demand agricultural region.",
    image: "/hero/slide1.jpg",
    mls: "SK020293",
    location: "Sherwood Rm No 159, Saskatchewan",
    propertyType: "Land",
    thankYou: "Thank you to our wonderful clients for trusting us with this sale. It was a pleasure helping you navigate the sale of this premium farmland and connecting you with a buyer who shares your commitment to agricultural excellence.",
  },
  {
    slug: "sk-020291-sherwood-agriculture",
    title: "SK020291 | Sherwood Rm No 159 | Agriculture Sold",
    date: "2025-12-12",
    category: "Sold",
    blurb:
      "This productive agricultural parcel in Sherwood RM #159 features excellent soil classification and established operational systems. With access to modern grain handling infrastructure and strong market connectivity, this property provided an ideal foundation for a growing farming operation.",
    image: "/hero/slide2.jpg",
    mls: "SK020291",
    location: "Sherwood Rm No 159, Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "We're grateful for the opportunity to facilitate this transaction and connect the seller with a buyer eager to build on this property's strong agricultural legacy. Congratulations to the new owners!",
  },
  {
    slug: "sk-022480-acreage",
    title: "SK022480 | 4 Bed | 2 Bath | 1,212 Sqft | Acreage Sold",
    date: "2025-11-28",
    category: "Sold",
    blurb:
      "This charming 4-bedroom, 2-bathroom acreage home sits on a generous rural lot with mature trees, well-established landscaping, and breathtaking countryside views. The open-concept living spaces and modern kitchen make it perfect for families who value space, privacy, and the peaceful pace of country living.",
    image: "/hero/slide6.jpg",
    mls: "SK022480",
    location: "Acreage, Saskatchewan",
    propertyType: "Acreage",
    details: {
      beds: 4,
      baths: 2,
      sqft: 1212,
    },
    thankYou: "It was a pleasure working with our clients on this special property sale. Thank you for allowing us to help your family transition to the next chapter—we wish the new owners and their family many happy years of acreage living.",
  },
  {
    slug: "sk-022451-agriculture-sold",
    title: "SK022451 | Agriculture Sold",
    date: "2025-11-20",
    category: "Sold",
    blurb:
      "This productive agricultural parcel boasts a strong track record of excellent yields with well-maintained operational infrastructure. Located in Saskatchewan's prime grain belt with established drainage systems and direct market access—a turnkey opportunity for experienced farmers.",
    image: "/hero/slide4.jpg",
    mls: "SK022451",
    location: "Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "We're honored to have helped our clients transition this quality farmland to new stewards. Thank you for trusting us with this important sale. Wishing the new operators a successful and prosperous farming future.",
  },
  {
    slug: "sk-020394-grayson-agriculture",
    title: "SK020394 | Grayson Rm No 184 | Agriculture Sold",
    date: "2025-11-15",
    category: "Sold",
    blurb:
      "This exceptional agricultural property in Grayson RM #184 features outstanding soil classification and streamlined operational systems. Positioned near major grain handling hubs and essential transportation corridors, it provided significant competitive advantages for a modern farming operation.",
    image: "/hero/slide5.jpg",
    mls: "SK020394",
    location: "Grayson Rm No 184, Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "It was an honour to represent our clients in this significant land transaction. Thank you for allowing us to connect you with a buyer committed to agricultural excellence. We wish the new operators outstanding success.",
  },
  {
    slug: "sk-020391-saltcoats-agriculture",
    title: "SK020391 | Saltcoats Rm No 213 | Agriculture Sold",
    date: "2025-11-10",
    category: "Sold",
    blurb:
      "This quality agricultural land in Saltcoats RM #213 offers solid production potential with proven market access and excellent community support. The established local farming infrastructure and proximity to processing facilities made it an outstanding choice for expansion-minded producers.",
    image: "/hero/slide2.jpg",
    mls: "SK020391",
    location: "Saltcoats Rm No 213, Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "Thank you to our clients for allowing us to facilitate this meaningful transaction. We're grateful we could help connect this property with owners who understand and value its agricultural potential.",
  },
  {
    slug: "sk-010215-lajord-agriculture",
    title: "SK010215 | Lajord Rm No 128 | Agriculture Sold",
    date: "2025-10-30",
    category: "Sold",
    blurb:
      "This well-established agricultural operation in Lajord RM #128 carries a legacy of strong historical yields and solid management practices. Direct access to professional grain handling infrastructure and a thriving local farming community made it an ideal transition property.",
    image: "/hero/slide4.jpg",
    mls: "SK010215",
    location: "Lajord Rm No 128, Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "We're grateful for the trust our clients placed in us to represent this established farming operation. Congratulations to the new owners—we wish you a prosperous and rewarding agricultural journey ahead.",
  },
  {
    slug: "sk-020404-agriculture-opportunity",
    title: "SK020404 | Agriculture Sold",
    date: "2025-10-25",
    category: "Sold",
    blurb:
      "This prime agricultural property sits in Saskatchewan's productive heartland with Grade A soil classification and efficient operational systems. Positioned for maximum market opportunity with direct shipping access and established farm-to-market logistics already in place.",
    image: "/hero/slide6.jpg",
    mls: "SK020404",
    location: "Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "It was an honour to help our clients transition this outstanding agricultural asset. Thank you for trusting us with the sale. We wish the new operators years of abundant harvests and agricultural success.",
  },
  {
    slug: "sk-020765-regina-attached",
    title: "SK020765 | 35 Quincy Drive, Regina | 3 Bed | 3 Bath | Attached Sold",
    date: "2025-10-18",
    category: "Sold",
    blurb:
      "This charming 3-bedroom, 3-bathroom attached home on Quincy Drive features contemporary updates, hardwood flooring, and an open-concept kitchen. Located in one of Regina's most vibrant neighbourhoods with walkable access to trendy cafes, award-winning schools, and beautiful parks.",
    image: "/hero/residential.jpg",
    mls: "SK020765",
    location: "35 Quincy Drive, Regina, Saskatchewan",
    propertyType: "Attached",
    details: {
      beds: 3,
      baths: 3,
      sqft: 1606,
    },
    thankYou: "We're grateful for the opportunity to help our clients sell this wonderful urban home. Thank you for your trust—we wish the new owners countless memories and a warm welcome to this fantastic community.",
  },
  {
    slug: "sk-020772-regina-battel",
    title: "SK020772 | 835 Battel Street N, Regina | 3 Bed | 3 Bath | Detached Sold",
    date: "2025-10-12",
    category: "Sold",
    blurb:
      "This lovely 3-bedroom, 3-bathroom detached home on Battel Street North features recently updated kitchen, beautiful hardwood throughout, and a spacious backyard perfect for families. The stable north-end neighbourhood offers excellent schools, tree-lined streets, and strong community spirit.",
    image: "/hero/residential.jpg",
    mls: "SK020772",
    location: "835 Battel Street N, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 3,
      baths: 3,
      sqft: 1600,
    },
    thankYou: "Thank you to our clients for allowing us to represent this beautiful home. We're delighted to have helped you move forward—congratulations to the new family on their wonderful north-end home!",
  },
  {
    slug: "sk-009594-hazel-dell-mixed-use",
    title: "SK009594 | Hazel Dell Rm No 335 | 2 Bed | 1 Bath | Mixed Use Sold",
    date: "2025-10-05",
    category: "Sold",
    blurb:
      "This unique mixed-use property in Hazel Dell RM #335 offers 2 bedrooms, 1 bathroom, plus commercial opportunity on productive land. The combination of residential comfort and entrepreneurial potential made it an ideal platform for business-minded owners seeking diversified rural income.",
    image: "/hero/slide1.jpg",
    mls: "SK009594",
    location: "Hazel Dell Rm No 335, Saskatchewan",
    propertyType: "Mixed Use",
    details: {
      beds: 2,
      baths: 1,
      sqft: 1440,
    },
    thankYou: "We're grateful we could help facilitate the sale of this distinctive property. Thank you for trusting us—we wish the new owners great success with their mixed-use venture!",
  },
  {
    slug: "sk-003016-agriculture-holdings",
    title: "SK003016 | Agriculture Sold",
    date: "2025-09-28",
    category: "Sold",
    blurb:
      "This well-managed agricultural holding boasts years of solid production history with reliable crop performance and modern operational systems in place. The strategic location provides premium access to grain markets, input suppliers, and the services that successful farming operations depend on.",
    image: "/hero/slide5.jpg",
    mls: "SK003016",
    location: "Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "It was an honour to represent our clients in selling this established agricultural holding. Thank you for your confidence in us—we wish the new operators tremendous prosperity and productive years ahead.",
  },
  {
    slug: "sk-005331-rouleau-drysdale",
    title: "SK005331 | 104 Drysdale Street, Rouleau | 4 Bed | 3 Bath | Detached Sold",
    date: "2025-09-20",
    category: "Sold",
    blurb:
      "This well-built 4-bedroom, 3-bathroom detached home in Rouleau perfectly blends small-town charm with modern comfort and conveniences. The spacious layout, updated mechanical systems, and quiet street made it ideal for families seeking authentic rural community living with proximity to schools and services.",
    image: "/hero/residential.jpg",
    mls: "SK005331",
    location: "104 Drysdale Street, Rouleau, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 3,
      sqft: 1288,
    },
    thankYou: "Thank you to our clients for the privilege of selling this special Rouleau home. We're thrilled we could help your family find your next chapter. Warmest wishes to the new owners in their tight-knit community!",
  },
  {
    slug: "sk-000233-bethune-wilton",
    title: "SK000233 | 319 Wilton Street, Bethune | 5 Bed | 3 Bath | Detached Sold",
    date: "2025-09-15",
    category: "Sold",
    blurb:
      "This spacious 5-bedroom, 3-bathroom detached home on Wilton Street in Bethune provided exceptional room for growing families. The established, safe neighbourhood combined with convenient rural access and strong local schools made it an outstanding choice for families seeking both comfort and community.",
    image: "/hero/residential.jpg",
    mls: "SK000233",
    location: "319 Wilton Street, Bethune, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 5,
      baths: 3,
      sqft: 1388,
    },
    thankYou: "We're honoured to have helped our clients transition from this beloved Bethune home. Thank you for trusting us throughout the process. Best wishes to the new family—we know they'll love this wonderful space!",
  },
  {
    slug: "sk-993872-regina-apartment",
    title: "SK993872 | 3520 Hillsdale Street #908, Regina | 2 Bed | 2 Bath | Apartment Sold",
    date: "2025-09-08",
    category: "Sold",
    blurb:
      "This modern 2-bedroom, 2-bathroom apartment in a prime central location offers vibrant urban living with spectacular city views. Walking distance to trendy restaurants, upscale retail, and entertainment—the perfect low-maintenance lifestyle for professionals and active downsizers.",
    image: "/hero/residential.jpg",
    mls: "SK993872",
    location: "3520 Hillsdale Street #908, Regina, Saskatchewan",
    propertyType: "Apartment",
    details: {
      beds: 2,
      baths: 2,
      sqft: 969,
    },
    thankYou: "We're grateful for the opportunity to help our clients sell this fantastic urban apartment. Thank you for your trust—we wish the new residents an exciting chapter filled with great dining, culture, and city vibrancy!",
  },
  {
    slug: "sk-984930-agriculture-operations",
    title: "SK984930 | Agriculture Sold",
    date: "2025-09-01",
    category: "Sold",
    blurb:
      "This productive agricultural operation sits in Saskatchewan's premium grain belt with award-winning soils and a track record of consistent yields. Well-maintained equipment and systems, plus established market relationships, made it an outstanding succession opportunity for farming families.",
    image: "/hero/slide4.jpg",
    mls: "SK984930",
    location: "Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "It was our pleasure to guide our clients through the sale of this established agricultural operation. Thank you for allowing us to be part of this important transition. We wish the new farming family abundant harvests and long-term success.",
  },
  {
    slug: "sk-992807-regina-mcara",
    title: "SK992807 | 2652 Mcara Street, Regina | 4 Bed | 2 Bath | Detached Sold",
    date: "2025-08-25",
    category: "Sold",
    blurb:
      "This 4-bedroom, 2-bathroom detached home on Mcara Street offered comfortable family living with a solid foundation and excellent bones. The established neighbourhood provides great schools, parks, and community character—perfect for first-time buyers or savvy investors.",
    image: "/hero/residential.jpg",
    mls: "SK992807",
    location: "2652 Mcara Street, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 2,
      sqft: 748,
    },
    thankYou: "Thank you to our clients for allowing us to represent this great starter home. We're pleased we could help you move forward. Warmest congratulations to the new family on their investment!",
  },
  {
    slug: "sk-986054-agriculture-land",
    title: "SK986054 | Agriculture Sold",
    date: "2025-08-18",
    category: "Sold",
    blurb:
      "This quality agricultural land in Saskatchewan's heart boasts strong production potential with consistently excellent crop performance. Modern drainage infrastructure and proximity to grain terminals and input suppliers made it an outstanding addition to any farming operation.",
    image: "/hero/slide6.jpg",
    mls: "SK986054",
    location: "Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "We're honoured to have helped facilitate the sale of this quality farmland. Thank you for trusting us with your agricultural asset. Best wishes to the new owners for exceptional harvests and agricultural prosperity.",
  },
  {
    slug: "sk-986995-regina-knowles",
    title: "SK986995 | 65 Knowles Crescent, Regina | 4 Bed | 2 Bath | Detached Sold",
    date: "2025-08-10",
    category: "Sold",
    blurb:
      "This spacious 4-bedroom, 2-bathroom detached home on prestigious Knowles Crescent showcases beautiful landscaping and recent upgrades. Located in Regina's most sought-after south side neighbourhood with award-winning schools, manicured parks, and effortless access to shopping and dining.",
    image: "/hero/residential.jpg",
    mls: "SK986995",
    location: "65 Knowles Crescent, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 2,
      sqft: 1293,
    },
    thankYou: "We're grateful for the opportunity to represent this lovely south-side home. Thank you to our clients for their confidence in us. Wonderful congratulations to the new family on their beautiful new address!",
  },
  {
    slug: "sk-985622-regina-harding",
    title: "SK985622 | 3115 Harding Street, Regina | 4 Bed | 3 Bath | Detached Sold",
    date: "2025-08-03",
    category: "Sold",
    blurb:
      "This well-appointed 4-bedroom, 3-bathroom detached home on Harding Street features meticulous updates, designer finishes, and contemporary systems throughout. The convenient east-end location, mature trees, and quality construction make it an ideal choice for discerning families.",
    image: "/hero/residential.jpg",
    mls: "SK985622",
    location: "3115 Harding Street, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 3,
      sqft: 1302,
    },
    thankYou: "Thank you to our clients for the privilege of selling this beautifully maintained home. We're delighted we could help you transition to your next chapter. Best wishes to the new owners in this wonderful east-end home!",
  },
  {
    slug: "sk-984099-agriculture-prime",
    title: "SK984099 | Agriculture Sold",
    date: "2025-07-27",
    category: "Sold",
    blurb:
      "This prime agricultural property boasts exceptional soil classification and a proven operational history of consistent yields. Located in Saskatchewan's productive corridor with established relationships with grain buyers and reliable access to agricultural services and technology.",
    image: "/hero/slide2.jpg",
    mls: "SK984099",
    location: "Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "It was an honour to help our clients sell this premium agricultural asset. Thank you for entrusting us with this significant transaction. We wish the new farming partners years of excellent crops and agricultural achievement.",
  },
  {
    slug: "sk-983254-regina-wellband",
    title: "SK983254 | 6238 Wellband Drive, Regina | 4 Bed | 4 Bath | Detached Sold",
    date: "2025-07-20",
    category: "Sold",
    blurb:
      "This premium 4-bedroom, 4-bathroom detached home on prestigious Wellband Drive features luxury finishes, high-end appliances, radiant heating, and custom millwork throughout. Set on a beautifully landscaped lot in Regina's most exclusive neighbourhood—a true showcase home.",
    image: "/hero/residential.jpg",
    mls: "SK983254",
    location: "6238 Wellband Drive, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 4,
      sqft: 1585,
    },
    thankYou: "We're honoured to have represented the sale of this exceptional home. Thank you to our clients for their trust and grace throughout this process. Warmest congratulations to the new owners on this spectacular residence!",
  },
  {
    slug: "sk-981375-sherwood-acreage",
    title: "SK981375 | Sherwood Rm No 159 | 4 Bed | 3 Bath | 2,160 Sqft | Acreage Sold",
    date: "2025-07-12",
    category: "Sold",
    blurb:
      "This exceptional 4-bedroom, 3-bathroom acreage home with 2,160 sq ft sits on beautiful grounds in Sherwood RM #159 with mature tree plantings and pastoral views. Premium finishes, modern systems, and the perfect balance of rural tranquility and comfortable family living.",
    image: "/hero/slide5.jpg",
    mls: "SK981375",
    location: "Sherwood Rm No 159, Saskatchewan",
    propertyType: "Acreage",
    details: {
      beds: 4,
      baths: 3,
      sqft: 2160,
    },
    thankYou: "Thank you to our clients for allowing us to represent this beautiful acreage property. We're thrilled we could help you transition to the next phase of your lives. Best wishes to the new family for wonderful years of rural living!",
  },
  {
    slug: "sk-976915-agriculture-final",
    title: "SK976915 | Agriculture Sold",
    date: "2025-07-05",
    category: "Sold",
    blurb:
      "This strategic agricultural holding features strong fundamentals with well-maintained operational infrastructure and outstanding market positioning. Excellent grain handling relationships, reliable input suppliers, and a supportive farming community made it ideal for expansion-minded operators.",
    image: "/hero/slide6.jpg",
    mls: "SK976915",
    location: "Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "It was our privilege to help facilitate the sale of this strategic agricultural asset. Thank you to our clients for their trust and confidence. We wish the new farming operation tremendous success and abundant future harvests.",
  },
];

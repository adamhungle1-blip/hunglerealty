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
      "A pristine 39.96-acre parcel in Sherwood RM #159 presents an exceptional opportunity for expansion, consolidation, or long-term holding. Prime location in one of Saskatchewan's highest-performing soil zones with excellent access and development potential.",
    image: "/hero/slide1.jpg",
    mls: "SK020293",
    location: "Sherwood Rm No 159, Saskatchewan",
    propertyType: "Land",
  },
  {
    slug: "sk-020291-sherwood-agriculture",
    title: "SK020291 | Sherwood Rm No 159 | Agriculture Sold",
    date: "2025-12-12",
    category: "Sold",
    blurb:
      "Agricultural land in Sherwood RM #159 offering strong fundamentals for grain and oilseed production. Excellent soil classification and operational infrastructure make this a turnkey investment for active producers.",
    image: "/hero/slide1.jpg",
    mls: "SK020291",
    location: "Sherwood Rm No 159, Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-022480-acreage",
    title: "SK022480 | 4 Bed | 2 Bath | 1,212 Sqft | Acreage Sold",
    date: "2025-11-28",
    category: "Sold",
    blurb:
      "Beautiful acreage home with 4 bedrooms and 2 bathrooms on a sprawling rural lot. Perfect for families seeking space, privacy, and country living while maintaining reasonable proximity to urban amenities and services.",
    image: "/hero/slide1.jpg",
    mls: "SK022480",
    location: "Acreage, Saskatchewan",
    propertyType: "Acreage",
    details: {
      beds: 4,
      baths: 2,
      sqft: 1212,
    },
  },
  {
    slug: "sk-022451-agriculture-sold",
    title: "SK022451 | Agriculture Sold",
    date: "2025-11-20",
    category: "Sold",
    blurb:
      "Productive agricultural parcel with strong historical yields and established infrastructure. Ideal for grain producers seeking quality land with proven performance in Saskatchewan's prime farmland corridor.",
    image: "/hero/slide1.jpg",
    mls: "SK022451",
    location: "Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-020394-grayson-agriculture",
    title: "SK020394 | Grayson Rm No 184 | Agriculture Sold",
    date: "2025-11-15",
    category: "Sold",
    blurb:
      "Agriculture property in Grayson RM #184 showcasing excellent soil class and operational efficiency. Strategic location near grain handling facilities and transportation corridors provides competitive advantages.",
    image: "/hero/slide1.jpg",
    mls: "SK020394",
    location: "Grayson Rm No 184, Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-020391-saltcoats-agriculture",
    title: "SK020391 | Saltcoats Rm No 213 | Agriculture Sold",
    date: "2025-11-10",
    category: "Sold",
    blurb:
      "Quality agricultural land in Saltcoats RM #213 offering solid production potential and good market access. Well-positioned in Saskatchewan's agricultural corridor with established infrastructure and support services.",
    image: "/hero/slide1.jpg",
    mls: "SK020391",
    location: "Saltcoats Rm No 213, Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-010215-lajord-agriculture",
    title: "SK010215 | Lajord Rm No 128 | Agriculture Sold",
    date: "2025-10-30",
    category: "Sold",
    blurb:
      "Established agricultural operation in Lajord RM #128 with strong historical performance. Excellent access to grain handling infrastructure and established support services for active farming operations.",
    image: "/hero/slide1.jpg",
    mls: "SK010215",
    location: "Lajord Rm No 128, Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-020404-agriculture-opportunity",
    title: "SK020404 | Agriculture Sold",
    date: "2025-10-25",
    category: "Sold",
    blurb:
      "Prime agricultural land offering strong fundamentals for grain and oilseed operations. Positioned in Saskatchewan's productive heartland with excellent soil classification and operational efficiency.",
    image: "/hero/slide1.jpg",
    mls: "SK020404",
    location: "Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-020765-regina-attached",
    title: "SK020765 | 35 Quincy Drive, Regina | 3 Bed | 3 Bath | Attached Sold",
    date: "2025-10-18",
    category: "Sold",
    blurb:
      "Charming 3-bedroom, 3-bathroom attached home on Quincy Drive in a desirable Regina neighbourhood. Well-maintained with modern conveniences and excellent walkability to shopping, schools, and recreation.",
    image: "/hero/residential.jpg",
    mls: "SK020765",
    location: "35 Quincy Drive, Regina, Saskatchewan",
    propertyType: "Attached",
    details: {
      beds: 3,
      baths: 3,
      sqft: 1606,
    },
  },
  {
    slug: "sk-020772-regina-battel",
    title: "SK020772 | 835 Battel Street N, Regina | 3 Bed | 3 Bath | Detached Sold",
    date: "2025-10-12",
    category: "Sold",
    blurb:
      "Lovely 3-bedroom, 3-bathroom detached home on Battel Street North offering comfortable living and easy access to Regina's north end amenities. Updated finishes and excellent neighbourhood character.",
    image: "/hero/residential.jpg",
    mls: "SK020772",
    location: "835 Battel Street N, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 3,
      baths: 3,
      sqft: 1600,
    },
  },
  {
    slug: "sk-009594-hazel-dell-mixed-use",
    title: "SK009594 | Hazel Dell Rm No 335 | 2 Bed | 1 Bath | Mixed Use Sold",
    date: "2025-10-05",
    category: "Sold",
    blurb:
      "Unique mixed-use property in Hazel Dell RM #335 combining residential and commercial potential. Excellent opportunity for entrepreneurs or investors seeking diversified income from a single parcel.",
    image: "/hero/slide1.jpg",
    mls: "SK009594",
    location: "Hazel Dell Rm No 335, Saskatchewan",
    propertyType: "Mixed Use",
    details: {
      beds: 2,
      baths: 1,
      sqft: 1440,
    },
  },
  {
    slug: "sk-003016-agriculture-holdings",
    title: "SK003016 | Agriculture Sold",
    date: "2025-09-28",
    category: "Sold",
    blurb:
      "Agricultural holding with solid production history and established operational systems. Strategic location provides competitive access to markets and support services essential for modern farming.",
    image: "/hero/slide1.jpg",
    mls: "SK003016",
    location: "Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-005331-rouleau-drysdale",
    title: "SK005331 | 104 Drysdale Street, Rouleau | 4 Bed | 3 Bath | Detached Sold",
    date: "2025-09-20",
    category: "Sold",
    blurb:
      "Well-built 4-bedroom, 3-bathroom detached home in Rouleau offering small-town charm and modern comfort. Excellent value for families seeking tight-knit community living with robust rural infrastructure.",
    image: "/hero/residential.jpg",
    mls: "SK005331",
    location: "104 Drysdale Street, Rouleau, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 3,
      sqft: 1288,
    },
  },
  {
    slug: "sk-000233-bethune-wilton",
    title: "SK000233 | 319 Wilton Street, Bethune | 5 Bed | 3 Bath | Detached Sold",
    date: "2025-09-15",
    category: "Sold",
    blurb:
      "Spacious 5-bedroom, 3-bathroom detached home on Wilton Street in Bethune. Exceptional value for larger families, with established neighbourhood and great access to rural services and amenities.",
    image: "/hero/residential.jpg",
    mls: "SK000233",
    location: "319 Wilton Street, Bethune, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 5,
      baths: 3,
      sqft: 1388,
    },
  },
  {
    slug: "sk-993872-regina-apartment",
    title: "SK993872 | 3520 Hillsdale Street #908, Regina | 2 Bed | 2 Bath | Apartment Sold",
    date: "2025-09-08",
    category: "Sold",
    blurb:
      "Modern 2-bedroom, 2-bathroom apartment in Regina's central location offering urban convenience and downtown lifestyle. Perfect for professionals or downsizers seeking maintenance-free living near shopping and entertainment.",
    image: "/hero/residential.jpg",
    mls: "SK993872",
    location: "3520 Hillsdale Street #908, Regina, Saskatchewan",
    propertyType: "Apartment",
    details: {
      beds: 2,
      baths: 2,
      sqft: 969,
    },
  },
  {
    slug: "sk-984930-agriculture-operations",
    title: "SK984930 | Agriculture Sold",
    date: "2025-09-01",
    category: "Sold",
    blurb:
      "Productive agricultural parcel positioned in Saskatchewan's premium grain belt. Established operation with excellent soil classification and strong fundamentals for continued success.",
    image: "/hero/slide1.jpg",
    mls: "SK984930",
    location: "Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-992807-regina-mcara",
    title: "SK992807 | 2652 Mcara Street, Regina | 4 Bed | 2 Bath | Detached Sold",
    date: "2025-08-25",
    category: "Sold",
    blurb:
      "4-bedroom, 2-bathroom detached home on Mcara Street offering comfortable living in an established Regina neighbourhood. Solid foundation and great bones make this an excellent starter or investment property.",
    image: "/hero/residential.jpg",
    mls: "SK992807",
    location: "2652 Mcara Street, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 2,
      sqft: 748,
    },
  },
  {
    slug: "sk-986054-agriculture-land",
    title: "SK986054 | Agriculture Sold",
    date: "2025-08-18",
    category: "Sold",
    blurb:
      "Quality agricultural land offering strong production potential in Saskatchewan's heart. Well-positioned for grain and oilseed operations with established infrastructure and reliable support services.",
    image: "/hero/slide1.jpg",
    mls: "SK986054",
    location: "Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-986995-regina-knowles",
    title: "SK986995 | 65 Knowles Crescent, Regina | 4 Bed | 2 Bath | Detached Sold",
    date: "2025-08-10",
    category: "Sold",
    blurb:
      "Spacious 4-bedroom, 2-bathroom detached home on Knowles Crescent in Regina's desirable south side. Excellent neighbourhood with good schools, parks, and convenient access to city amenities.",
    image: "/hero/residential.jpg",
    mls: "SK986995",
    location: "65 Knowles Crescent, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 2,
      sqft: 1293,
    },
  },
  {
    slug: "sk-985622-regina-harding",
    title: "SK985622 | 3115 Harding Street, Regina | 4 Bed | 3 Bath | Detached Sold",
    date: "2025-08-03",
    category: "Sold",
    blurb:
      "Well-appointed 4-bedroom, 3-bathroom detached home on Harding Street with modern updates and thoughtful finishes. Perfect for families seeking quality construction and convenient east-end Regina location.",
    image: "/hero/residential.jpg",
    mls: "SK985622",
    location: "3115 Harding Street, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 3,
      sqft: 1302,
    },
  },
  {
    slug: "sk-984099-agriculture-prime",
    title: "SK984099 | Agriculture Sold",
    date: "2025-07-27",
    category: "Sold",
    blurb:
      "Prime agricultural property with excellent soil class and operational history. Positioned in Saskatchewan's productive corridor with strong fundamentals for established farming operations.",
    image: "/hero/slide1.jpg",
    mls: "SK984099",
    location: "Saskatchewan",
    propertyType: "Agriculture",
  },
  {
    slug: "sk-983254-regina-wellband",
    title: "SK983254 | 6238 Wellband Drive, Regina | 4 Bed | 4 Bath | Detached Sold",
    date: "2025-07-20",
    category: "Sold",
    blurb:
      "Premium 4-bedroom, 4-bathroom detached home on Wellband Drive offering luxury finishes and modern amenities. Excellent location in Regina with exceptional quality construction and professional landscaping.",
    image: "/hero/residential.jpg",
    mls: "SK983254",
    location: "6238 Wellband Drive, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 4,
      sqft: 1585,
    },
  },
  {
    slug: "sk-981375-sherwood-acreage",
    title: "SK981375 | Sherwood Rm No 159 | 4 Bed | 3 Bath | 2,160 Sqft | Acreage Sold",
    date: "2025-07-12",
    category: "Sold",
    blurb:
      "Exceptional 4-bedroom, 3-bathroom acreage home with 2,160 sqft in Sherwood RM #159. Perfect blend of rural living and residential comfort with premium finishes and excellent land value in a sought-after area.",
    image: "/hero/slide1.jpg",
    mls: "SK981375",
    location: "Sherwood Rm No 159, Saskatchewan",
    propertyType: "Acreage",
    details: {
      beds: 4,
      baths: 3,
      sqft: 2160,
    },
  },
  {
    slug: "sk-976915-agriculture-final",
    title: "SK976915 | Agriculture Sold",
    date: "2025-07-05",
    category: "Sold",
    blurb:
      "Strategic agricultural holding with strong fundamentals and excellent operational infrastructure. Positioned for success with reliable market access and established support services for farming operations.",
    image: "/hero/slide1.jpg",
    mls: "SK976915",
    location: "Saskatchewan",
    propertyType: "Agriculture",
  },
];

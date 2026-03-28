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
      "This 39.96-acre parcel sits directly on Regina's southern Eastern boundary, only ½ mile south of Regina Siast. The land offers a prime location close to the University of Regina and Highway #1, making it an excellent opportunity for a small business, hobby farm, horse boarding operation, or other rural-residential or commercial ventures.",
    image: "/sold/sk020293-sherwood-39acres.jpg",
    mls: "SK020293",
    location: "Sherwood Rm No 159, Saskatchewan",
    propertyType: "Land",
    thankYou: "A big thank you to our clients for trusting us with this one. Glad we could get it done!",
  },
  {
    slug: "sk-020291-sherwood-agriculture",
    title: "SK020291 | Sherwood Rm No 159 | 120 Acres | Agriculture Sold",
    date: "2025-12-12",
    category: "Sold",
    blurb:
      "This 120-acre parcel offers a rare combination of prime location and high-quality farmland, featuring Class B Regina Heavy Clay soil, well known for its productivity and long-term value. Situated only ½ mile south of Regina SIast and directly bordering Regina's city limits, the property is strategically positioned near major traffic corridors, including Highway #1 and the University of Regina, making it highly desirable for a wide range of future uses. The land is currently zoned Agricultural (AG) but holds strong redevelopment potential with RM approval. Possible opportunities include commercial, industrial, residential, or mixed-use development, making it an exceptional holding property for investors with vision.",
    image: "/sold/sk020291-sherwood-120acres.jpg",
    mls: "SK020291",
    location: "Sherwood Rm No 159, Saskatchewan",
    propertyType: "Agriculture",
    thankYou: "Grateful to have been part of this transaction. Wishing everyone involved all the best!",
  },
  {
    slug: "sk-022480-acreage",
    title: "SK022480 | 20 Acres | 3+1 Bed | 2 Bath | 1,212 Sqft | Acreage Sold",
    date: "2025-11-28",
    category: "Sold",
    blurb:
      "Welcome to your prairie retreat — a 20-acre acreage with tons of potential just 30 minutes east of Regina, perfectly set up for horse lovers, hobby farmers, or anyone seeking a peaceful country living with modern comfort. Located just 1.5 miles East of the town of Qu'Appelle, this property offers wide-open views, versatility, and the space to live your dream rural lifestyle. The 1,212 sq ft bungalow features 3 bedrooms up and 1 down, with spacious living room and a bright kitchen showcasing quartz countertops, vinyl plank floors, and a spectacular view of the land. The home sits on a solid ICF foundation with a 9' high basement and is equipped with a reliable geothermal heating and cooling system—offering efficient comfort year-round. The home was moved onto the foundation in 2009. Outside, the acreage is turnkey for equestrian use or small-scale livestock. You'll find a massive 80' x 160' outdoor riding arena, a 70' round pen, 4 fenced pastures, a powered 36'x 50' pole barn with an insulated and heated tack room that measures 20'x12', and a 30' x 50' Coverall Quonset with a 16' overhead door and 22' ceilings. There is also a 24' x 30' double detached garage for extra parking and workspace. The property also has a chicken coop and multiple small storage sheds. The strong-flowing well, combined with reverse osmosis filtration, provides excellent drinking water. Kids play structure is included; trampoline optional. Negotiable items include portable corral panels, roping chute, and dummy. With the perfect balance of rural tranquility and convenience, this acreage is ready for its next owner to build memories and live their country dream.",
    image: "/sold/sk022480-quappelle-acreage.jpg",
    mls: "SK022480",
    location: "Qu'Appelle, Saskatchewan",
    propertyType: "Acreage",
    details: {
      beds: 4,
      baths: 2,
      sqft: 1212,
      acres: 20,
    },
    thankYou: "Congratulations to the sellers and the new buyers!",
  },
  {
    slug: "sk-022451-agriculture-sold",
    title: "SK022451 | RM of South Qu'Appelle | 142.49 Acres | Land Sold",
    date: "2025-11-20",
    category: "Sold",
    blurb:
      "Here are 142.49 Acres in the Rm of South Qu'appelle located 1.5 miles East of the town of Qu'appelle and 30 minutes from Regina. There are approximately 110 cultivable acres and more acres could be broken up. Buyers are encouraged to do their own due diligence on the amount of cultivable land. The SCIC soil class is G and the SAMA assessment is $229,600 with a final soil rating of 59.22. The land is currently in grass and alfalfa but was cultivated in the past. The property also offers multiple building spots for a buyer looking to build their country retreat.",
    image: "/sold/sk022451-south-quappelle-land.jpg",
    mls: "SK022451",
    location: "RM of South Qu'Appelle, Saskatchewan",
    propertyType: "Land",
    thankYou: "Thanks to our clients for the opportunity — happy we could help make this happen.",
  },
  {
    slug: "sk-020394-grayson-agriculture",
    title: "SK020394 | RM of Grayson | 158.92 Acres | Land Sold",
    date: "2025-11-15",
    category: "Sold",
    blurb:
      "Here is an excellent opportunity to acquire a quarter section of farmland in the RM of Grayson, ideally located just one mile east of Dubuc and east of Highway 22. The property offers good access and consists of 158.92 ISC titled acres, with 94 acres currently cultivated according to SAMA. The land is rated Soil Class H and has potential for additional acres to be brought into production. The farmland is available for the 2026 farming season. Offers to Purchase must be submitted in writing to the Seller's Brokerage by 4:00 p.m. on Wednesday, November 12th, 2025 and left open for acceptance until November 19th at 4:00 p.m. Highest or any offer will not necessarily be accepted. Please contact agent for more information.",
    image: "/sold/sk020394-grayson-land.jpg",
    mls: "SK020394",
    location: "RM of Grayson, Saskatchewan",
    propertyType: "Land",
    thankYou: "Appreciate the trust from our clients on this one. Congrats to all parties!",
  },
  {
    slug: "sk-020391-saltcoats-agriculture",
    title: "SK020391 | RM of Saltcoats | 157.81 Acres | Land Sold",
    date: "2025-11-10",
    category: "Sold",
    blurb:
      "This is a prime opportunity to purchase a highly productive quarter section of farmland in the RM of Saltcoats. The property offers excellent access, located just 1.5 miles south of Highway 15 or 6 miles north of Bangor. With 157.81 ISC titled acres, including 145 cultivated acres according to the seller, this quarter is well suited for grain production or as an addition to an existing operation. The land is rated Soil Class G, carries a strong SAMA assessment of $319,500, and will be available for the 2026 farming season. With its quality soil, strong cultivated acres, and desirable location, this is a very attractive piece of farmland. Offers to Purchase must be submitted in writing to the Seller's Brokerage by 4:00 p.m. on Wednesday, November 12th, 2025 and left open for acceptance until November 19th at 4:00 p.m. Highest or any offer will not necessarily be accepted.",
    image: "/sold/sk020391-saltcoats-land.jpg",
    mls: "SK020391",
    location: "RM of Saltcoats, Saskatchewan",
    propertyType: "Land",
    thankYou: "Great working with our clients on this sale. Wishing the new owners every success!",
  },
  {
    slug: "sk-010215-lajord-agriculture",
    title: "SK010215 | RM of Lajord | 319.34 Acres | Land Sold",
    date: "2025-10-30",
    category: "Sold",
    blurb:
      "Here are two quarter sections of land in the RM of Lajord, located 3/4 of a mile north of Hwy 33 and the town of Lajord. There is a quality tenant currently farming the land for the 2025 crop season. There are 295.75 cultivated acres according to the SAMA field reports and 319.34 ISC titled acres. This would make a good investment as the tenant would like to continue to farm the land.",
    image: "/sold/sk010215-lajord-land.jpg",
    mls: "SK010215",
    location: "RM of Lajord, Saskatchewan",
    propertyType: "Land",
    thankYou: "Pleased to have helped our clients close on this property. All the best going forward!",
  },
  {
    slug: "sk-020404-agriculture-opportunity",
    title: "SK020404 | RM of Whiska Creek | 406.34 Acres | Land Sold",
    date: "2025-10-25",
    category: "Sold",
    blurb:
      "This is a great opportunity to purchase three quarter sections of high-quality farmland in the RM of Whiska Creek No. 106. The property is located 2 miles south and 1 mile west of Pambrun South of Highway 43, making it easily accessible for farming operations. Together the three quarter sections total 406.34 ISC titled acres with 375 acres cultivated according to SAMA. The land is soil class H and will be available for the 2026 farming season, offering strong productivity potential for grain growers or investors alike. Offers to Purchase must be submitted in writing to the Seller's Brokerage by 4:00 p.m. on Friday, November 7th, 2025 and left open for acceptance until November 14th at 4:00 p.m. Highest or any offer will not necessarily be accepted. Please contact agent for more information.",
    image: "/sold/sk020404-whiska-creek-land.jpg",
    mls: "SK020404",
    location: "RM of Whiska Creek, Saskatchewan",
    propertyType: "Land",
    thankYou: "Thank you to everyone involved — glad we could bring this one together.",
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

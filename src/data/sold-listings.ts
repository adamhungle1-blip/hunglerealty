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
    title: "SK020765 | 35 Quincy Drive, Regina | Quincy Greene Townhouse | Sold",
    date: "2025-10-18",
    category: "Sold",
    blurb:
      "Discover Quincy Greene, a highly desirable townhouse condo community set in a peaceful location just steps from Wascana Lake, the University of Regina, and only a quick drive to downtown. Surrounded by mature trees and meticulously landscaped grounds, this property blends tranquility with everyday convenience. The inviting foyer offers direct access to the single attached garage. From here, step into the spacious living room, featuring 12-foot ceilings and a garden door that opens to a private patio—an ideal space for relaxing or entertaining. Just above, the dining area overlooks the living room and is enhanced by striking 17-foot ceilings. The kitchen is designed for functionality with abundant cabinetry, generous counter space, and a large window that fills the room with natural light. An adjoining dining nook with built-in cabinetry provides extra versatility—whether used as is or transformed into a stylish butler's pantry. A convenient two-piece bathroom completes this level. Upstairs offers three comfortable bedrooms plus a bonus room, along with a full four-piece bath. The primary suite is highlighted by a walk-in closet and its own two-piece ensuite. The lower level adds valuable living space, perfect for a family room, home gym, or office, along with laundry and plenty of storage. Quincy Greene residents also enjoy exclusive amenities, including an outdoor pool, tennis courts, a playground, and community garden plots. Notable upgrades include triple-pane windows, Hardie Board siding with added insulation, a new driveway, updated kitchen countertops, hardwood flooring on the main level, new vinyl plank flooring in the bedrooms, and fresh paint throughout most of the condo. This is a rare opportunity to own a spacious, beautifully maintained home in a prime location—truly move-in ready.",
    image: "/sold/sk020765-quincy-greene-condo.jpg",
    mls: "SK020765",
    location: "35 Quincy Drive, Regina, Saskatchewan",
    propertyType: "Attached",
    details: {
      beds: 3,
      baths: 3,
      sqft: 1606,
    },
    thankYou: "Congrats to the new owners on a beautiful home — enjoy Quincy Greene!",
  },
  {
    slug: "sk-020772-regina-battel",
    title: "SK020772 | 835 Battel Street N, Regina | 4-Level Split | Sold",
    date: "2025-10-12",
    category: "Sold",
    blurb:
      "Excellent location on this large 1600 sqft 4 level split, directly across from École Centennial School and Hayworth Crescent Park, and just a short walk to St. Jerome School. Perfect for a growing family. The main floor features a bright living room and an eat-in kitchen with plenty of cabinetry, along with garden doors that open to a large back deck. Enjoy a private, fully fenced yard—ideal for kids, pets, or entertaining. Upstairs, you'll find three comfortable bedrooms and a four-piece bathroom upgraded with a Bath-fitter tub surround. The primary bedroom includes a walk-in closet and its own two-piece ensuite. The third level offers a generous family room, an additional three-piece bathroom, and great space for everyday living. The basement adds even more flexibility with a finished den, laundry area, and extra storage. Outside, the property includes a 24' x 26' double garage with RV parking beside it, plus two storage sheds. Recent updates include shingles on the house (3 years ago), several vinyl window upgrades, and a new pressure-treated backyard fence (within the last year).",
    image: "/sold/sk020772-regina-house.jpg",
    mls: "SK020772",
    location: "835 Battel Street N, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 3,
      baths: 3,
      sqft: 1600,
    },
    thankYou: "Happy to have helped on this one — great family home in a great neighbourhood!",
  },
  {
    slug: "sk-009594-hazel-dell-mixed-use",
    title: "SK009594 | Hazel Dell Rm No 335 | 158 Acres | Hunter's Paradise Sold",
    date: "2025-10-05",
    category: "Sold",
    blurb:
      "Welcome to 158.01 acres of wild, scenic Saskatchewan — a hunter's paradise, a recreational haven, and a peaceful escape all in one. Located just 1.5 miles from the Boreal Forest and half a mile from Shutte Lake, this rare property offers unmatched access to big game, wilderness trails, and excellent fishing. Whether you're hunting whitetail, elk, moose, or bear, this land delivers. With approximately 70 cultivated acres and the rest in dense bush and forested terrain, the property is a magnet for wildlife. A large water feature on the northeast side draws animals year-round, and a heated hunting stand is already in place, offering a warm, elevated view in any season. To the east and southeast, the land borders crown property, expanding your hunting area and preserving privacy. Shutte Lake is just minutes away and is well known to locals for its great walleye, perch and jack fishing. Beyond hunting, this property is ideal as a year-round vacation home or off-grid getaway. The well-maintained yardsite is surrounded by mature trees and offers ample space for gear, equipment, and recreational vehicles. Two powered garages—one with both 220V and 240V service—and a third storage building make it ready for all your needs. The home is a solid 1,440 square foot two-storey. The main floor serves as a man cave and utility area with wood/electric furnace, while upstairs features two bedrooms, a three-piece bathroom, and an eat-in kitchen with wood-burning fireplace and beautiful views of the land. It's perfectly suited for downtime between outdoor adventures. The Saskatchewan Snowmobile Trail runs directly past the property, connecting you to Greenwater, Hudson Bay, and Yorkton. Whether you're tracking game, casting for walleye, sledding in fresh snow, or sitting fireside, this is a true four-season retreat.",
    image: "/sold/sk009594-hunting-land.jpg",
    mls: "SK009594",
    location: "Hazel Dell Rm No 335, Saskatchewan",
    propertyType: "Recreational",
    details: {
      beds: 2,
      baths: 1,
      sqft: 1440,
      acres: 158,
    },
    thankYou: "What a special property — congrats to the new owners on their own slice of the wild!",
  },
  {
    slug: "sk-003016-agriculture-holdings",
    title: "SK003016 | RM of South Qu'Appelle | 198.38 Acres | Land Sold",
    date: "2025-09-28",
    category: "Sold",
    blurb:
      "Here is a unique opportunity to acquire 198.38 acres of prime land in the Rm of South Qu'appelle. There are approximately 190 acres of cultivated land, buyers are encouraged to do their own due diligence on the amount of cultivated acres. The soil class is F and G and the total ag assessment is $269,500. This parcel is strategically located with half a mile of frontage on highway #1 and bordering the town of Qu'Appelle. The North portion closest to the town has been subdivided into 17 residential lots that range in size from .45 acres to ¾ of an acre. There are 140 acres of land that border the #1 highway and #35 highway entering Qu'Appelle that would work well for commercial/industrial use like a Co/op or Tim Hortons. This farmland makes a great investment as there is a quality tenant currently farming the land that would like to continue doing so and is renting the land for $100 dollars per acre. The land is available for the 2026 growing season.",
    image: "/sold/sk003016-south-quappelle-land.jpg",
    mls: "SK003016",
    location: "RM of South Qu'Appelle, Saskatchewan",
    propertyType: "Land",
    thankYou: "Excited for all parties on this one — a truly unique piece of land with big potential!",
  },
  {
    slug: "sk-005331-rouleau-drysdale",
    title: "SK005331 | 104 Drysdale Street, Rouleau | 4 Bed | 3 Bath | Sold",
    date: "2025-09-20",
    category: "Sold",
    blurb:
      "Welcome to this charming 1.5 storey home in the welcoming town of Rouleau. With 4 bedrooms and 3 bathrooms, this well-kept property offers flexible living for a growing family—or the perfect setup for retirement. The main floor features a spacious bedroom, full 4-piece bathroom, and convenient main floor laundry, making it ideal for those seeking single-level living. Situated on a private 50'x120' lot backing onto open fields, you'll love the peaceful prairie views and added privacy. There's ample space to park your RV, camper, or boat, and the 24x24 insulated detached garage provides extra storage and year-round workspace Inside, you're greeted by a bright porch, cozy eat-in kitchen, and a generously sized living room, perfect for relaxing or entertaining. The upper level includes two more bedrooms and a 3-piece bathroom—an ideal setup for guests or kids. The basement, poured in the 1980s with concrete for lasting durability, was recently finished and adds even more living space with a fourth bedroom, a den, a 3-piece bath, and a storage room. Enjoy the outdoors from your large backyard deck or explore all Rouleau has to offer, including a town-wide water osmosis system, ensuring clean, drinkable water. Amenities like the community hall, skating and curling rinks, drop-in centre, library, spray park, and school are all nearby. Located just a short commute to both Regina and Moose Jaw, this home offers small-town charm with city convenience. Recent upgrades include the roof, flooring, furnace, bathrooms, and basement—this is a move-in-ready home that shows true pride of ownership.",
    image: "/sold/sk005331-rouleau-house.jpg",
    mls: "SK005331",
    location: "104 Drysdale Street, Rouleau, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 3,
      sqft: 1288,
    },
    thankYou: "Small-town living at its finest — congrats to all and welcome to Rouleau!",
  },
  {
    slug: "sk-000233-bethune-wilton",
    title: "SK000233 | 319 Wilton Street, Bethune | 5 Bed | 3 Bath | Sold",
    date: "2025-09-15",
    category: "Sold",
    blurb:
      "Welcome to this beautifully maintained 1388 sqft 5-bedroom bungalow built in 2008 in the thriving town of Bethune, ideally located on a 12196.8 sqft (.28 acre) lot at the end of a quiet street and surrounded by open fields for added privacy. This spacious home offers a functional layout with 3 generous bedrooms on the main floor and 2 additional bedrooms in the partially finished basement, perfect for families or those needing extra space. Step inside to find an inviting living room filled with natural light, featuring a cozy gas fireplace as its focal point. The heart of the home is the Texas-sized kitchen, complete with a large center island, an abundance of cabinetry, a convenient pantry, and an adjoining dining area that walks out to a large deck overlooking the well-manicured backyard and patio. The main floor also includes a 3-piece ensuite in the primary bedroom, a full bathroom, and main floor laundry for added convenience. Downstairs, the basement is partially finished with a spacious rec room, two bedrooms, a half bath, and ample storage space to meet your needs. Additional highlights include an oversized double detached garage, recently replaced shingles (2020). This home is move in ready and a pleasure to view.",
    image: "/sold/sk000233-bethune-house.jpg",
    mls: "SK000233",
    location: "319 Wilton Street, Bethune, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 5,
      baths: 3,
      sqft: 1388,
    },
    thankYou: "Thrilled for the new family settling into Bethune — what a great spot to call home!",
  },
  {
    slug: "sk-993872-regina-apartment",
    title: "SK993872 | Robert's Plaza #908, Regina | 2 Bed | 1.5 Bath | Condo Sold",
    date: "2025-09-08",
    category: "Sold",
    blurb:
      "Professionally re-modelled 2 bedroom, 1.5 bath, Southwest facing condo on the 9th floor in Robert's Plaza. The interior has been totally re-done including new Triple glazed low-e windows, 8' patio door, all flooring and freshly painted with new style knockdown spraytex ceilings. Custom built White Lacquered kitchen cabinets, new counter tops, double stainless steel sink and taps. Sit down Centre Island complete with roll-out drawers. Whirlpool Appliances, including side-by-side fridge, convection smooth top stove, microwave/range hood and dishwasher. Bathrooms have new cabinets, counters, porcelain sinks, taps, mirrors and toilets and the main bath has a new fibreglass tub and wall unit. Primary bedroom has 1/2 bath ensuite and double 6' closet doors complete w/ space saving wire racking and new bifold doors. 2nd bedroom has new doors and space saving wire racking and both bedrooms are wired for cable and Internet connection. Storage room has shelving and been painted and new flooring to match the suite. Miami Louvered door used here for the style and look. All doors are new style 2 panel square top smooth sprayed in a white lacquer. New baseboards and casings throughout, light fixtures, fans, pewter door locks and window shades. New Air Conditioning unit. Amenities include: indoor saltwater swimming pool, large hot tub, racquetball court, sauna and a brand new State of the art Fitness Facility with 10+ workout stations that has extended hours. Hospitality room and guest suite is available at a great rate. There is also a rooftop deck available for summer tanning or to just enjoy the panoramic 21 storeys high views of the Summer Sky. Excellent location that is walking distance to Wascana Park, Legislative Buildings and University of Regina. This unit is completely move in ready!",
    image: "/sold/sk993872-regina-roberts-plaza.jpg",
    mls: "SK993872",
    location: "3520 Hillsdale Street #908, Regina, Saskatchewan",
    propertyType: "Apartment",
    details: {
      beds: 2,
      baths: 1.5,
    },
    thankYou: "What a stunning renovation — the new owners are in for a treat at Robert's Plaza!",
  },
  {
    slug: "sk-984930-agriculture-operations",
    title: "SK984930 | RM of Storthoaks | 480.83 Acres | Land Sold",
    date: "2025-09-01",
    category: "Sold",
    blurb:
      "Here are three quarter sections in the RM of Storthoaks. The land is located 7 miles North and 1 mile East of the town of Carievale. There are 480.83 title acres, 248 cultivated acres, & 165 pasture acres according to the SAMA records. The soil is Oxbow loam and the SCIC soil class is H for the NE & SW quarters, and J for the SE quarter. The SAMA assessments are $190,600, $127,800, and $187,900. The legal land descriptions are NE, SE & SW 10-04-31 W1. There are 14 surface oil leases included in the sale with an annual income of $38,375. The land is leased for the 2025 crop year. There is more land available in the area for sale as well.",
    image: "/sold/sk984930-storthoaks-land.jpg",
    mls: "SK984930",
    location: "RM of Storthoaks, Saskatchewan",
    propertyType: "Land",
    thankYou: "A solid deal all around — thanks to our clients and best of luck to the new owners!",
  },
  {
    slug: "sk-992807-regina-mcara",
    title: "SK992807 | 2652 Mcara Street, Regina | 4 Bed | 2 Bath | Bungalow Sold",
    date: "2025-08-25",
    category: "Sold",
    blurb:
      "Situated in an excellent location directly across from Queen Elizabeth Park, this fully finished, move-in ready bungalow offers numerous upgrades and value-added features. The main floor boasts a renovated kitchen with sleek quartz countertops, an undermount sink, and upgraded stainless steel appliances. The pantry cupboard and pot rack are also included. The main floor offers two good sized bedrooms and an updated bathroom. The fully developed basement provides additional living space with a cozy living room, two extra bedrooms, and another updated bathroom. Plus, the projection TV and screen in the basement are included. There is a nice laundry area with an upgraded stackable washer and dryer, and extra cupboards for storage. Step outside to your private backyard retreat, perfect for entertaining. The expansive 16' x 20' deck w/ gazebo is ideal for relaxing or hosting guests. A 9' x 10' deck connects to the Jacuzzi hot tub, which is also included and purchased in August 2023. The backyard is fully fenced and features a large fire pit area with seating for 10-12 people. There is a single car garage with a upgraded garage door opener and door. The driveway can accommodate RV parking. Home upgrades include a high-efficiency furnace, sewer and water line (2018), shingles (2016), and stucco (2014). The home also features a new 10' x 16' front deck. Inclusions: Hot tub, gazebo, projection TV and screen, fridge, stove, washer, dryer, microwave, dishwasher, pantry cupboard, pot rack and TV in master bedroom. This home truly offers the best in comfort, convenience, and style!",
    image: "/sold/sk992807-regina-bungalow.jpg",
    mls: "SK992807",
    location: "2652 Mcara Street, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 2,
    },
    thankYou: "So happy for the new homeowners — what a gem across from Queen Elizabeth Park!",
  },
  {
    slug: "sk-986054-agriculture-land",
    title: "SK986054 | RM of Sarnia | 319.51 Acres | Land Sold",
    date: "2025-08-18",
    category: "Sold",
    blurb:
      "Good opportunity to acquire two quarter sections in the Rm of Sarnia #221, the ISC title acres are 319.51 and the SAMA cultivated acres are 290. The land is located 4.5 miles North and 2.5 miles East of Dilke, or 1 mile West of Wee Too Beach. The land descriptions are NE 06-23-23 W2 and SE 07-23-23 W2. The assessments are $148,300 and $141,200. The total assessment is $289,500. The land is currently in hay and can be broke and put into cultivation. The farmland is available for the 2025 farming season. This land would make a nice investment or addition onto an existing farm.",
    image: "/sold/sk986054-sarnia-land.jpg",
    mls: "SK986054",
    location: "RM of Sarnia, Saskatchewan",
    propertyType: "Land",
    thankYou: "Thanks to our clients for a smooth transaction — wishing the new owners all the best with this land!",
  },
  {
    slug: "sk-986995-regina-knowles",
    title: "SK986995 | 65 Knowles Crescent, Regina | 4 Bed | 2 Bath | Hillsdale Bungalow Sold",
    date: "2025-08-10",
    category: "Sold",
    blurb:
      "Meticulously maintained 1293 sqft bungalow located in desirable Hillsdale neighborhood. The main level is comprised of a spacious living room, kitchen/dining room plus an addition off the dining area that is currently used as a formal dining room with access to the deck through French doors. Completing the main level is 3 bedrooms, and a 4-piece bathroom, the basement is very comfortable and welcoming with a large Rec room, wet bar, spacious family room with a gas fireplace, a 4th bedroom, 3-piece bathroom, plus a laundry and storage room. The seller states there are original hardwood floors in the living room and bedrooms. Upgrades include updated vinyl windows throughout, French door installation (2023), New side entry door, sewer line replacement to street. The back yard features a two-tone low-maintenance composite deck, fully fenced yard with vinyl fencing on two sides, beautifully designed patio perfect for entertaining, pristine landscaping in both front and back. Storage shed and appliances are included.",
    image: "/sold/sk986995-regina-hillsdale.jpg",
    mls: "SK986995",
    location: "65 Knowles Crescent, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 2,
      sqft: 1293,
    },
    thankYou: "A real pleasure working with our clients on this beautiful Hillsdale home. Enjoy it!",
  },
  {
    slug: "sk-985622-regina-harding",
    title: "SK985622 | 3115 Harding Street, Regina | 4 Bed | 3 Bath | Gardiner Heights Sold",
    date: "2025-08-03",
    category: "Sold",
    blurb:
      "Discover this beautifully maintained 1,302 sqft bungalow with a double attached garage, nestled in the desirable Gardiner Heights neighborhood. Step into a warm and inviting family room featuring a charming wood-burning fireplace, perfect for cozy evenings. The spacious dining room and kitchen boast garden doors that lead you to a large deck, overlooking a fully landscaped and fenced backyard, ideal for outdoor entertaining. The kitchen is designed with ample counter space, an island, and a generously sized pantry. This residence offers three comfortable bedrooms on the main level, including a sizable primary bedroom complete with a 3-piece en-suite. The main 4-piece bathroom rounds out this level. The basement is 90% finished, providing two expansive rec areas, a roomy fourth bedroom, a 3-piece bathroom, and laundry room. Recent updates include new shingles installed approximately three years ago and this living room window has been replaced. This home has been lovingly cared for and is ready for you to move in. Enjoy the perks of living in this fantastic east-side Regina community!",
    image: "/sold/sk985622-regina-gardiner.jpg",
    mls: "SK985622",
    location: "3115 Harding Street, Regina, Saskatchewan",
    propertyType: "Detached",
    details: {
      beds: 4,
      baths: 3,
      sqft: 1302,
    },
    thankYou: "Lovely home in a lovely neighbourhood — thanks to all involved and enjoy Gardiner Heights!",
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

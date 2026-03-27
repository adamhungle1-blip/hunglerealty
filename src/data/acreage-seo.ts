/**
 * SEO content for acreage pages — unique, keyword-rich descriptions
 * for each city and the main "All Saskatchewan" page.
 */

export interface AcreageSeoContent {
  heading: string;
  paragraphs: string[];
}

export const ACREAGE_SEO: Record<string, AcreageSeoContent> = {
  /* ── All Saskatchewan (default / no city selected) ── */
  all: {
    heading: "Saskatchewan Acreages for Sale — Country Living at Its Best",
    paragraphs: [
      "Saskatchewan offers some of the most affordable and desirable acreage properties in all of Canada. Whether you're searching for a hobby farm outside Regina, a sprawling rural estate near Saskatoon, or a quiet retreat in the parkland belt, the province delivers wide-open skies, fertile soil, and a quality of life that's hard to match. With average farmland prices well below the national average and communities that welcome newcomers, Saskatchewan acreages are attracting buyers from across the country.",
      "From the grain fields of the south to the mixed-farming country around Yorkton and North Battleford, every region has its own character. Acreage buyers typically look for properties with two or more acres that offer space for gardens, livestock, shops, and the kind of privacy you simply can't get in town. Many listings include updated homes, outbuildings, shelterbelts, and municipal water — all within a short commute of city amenities. If you're ready to explore acreages for sale in Saskatchewan, browse the current MLS® listings above or contact Adam Hungle, your Saskatchewan land specialist, for a personalized property search.",
    ],
  },

  /* ── Regina ── */
  regina: {
    heading: "Acreages for Sale Near Regina, Saskatchewan",
    paragraphs: [
      "Regina acreages are among the most sought-after rural properties in southern Saskatchewan. Families and investors alike are drawn to the mix of country charm and city convenience — most acreages within 50 km of Regina put you just 20 to 40 minutes from shopping, schools, health care, and the Trans-Canada Highway. Popular corridors include the Qu'Appelle Valley to the north, the communities of Emerald Park, White City, and Pilot Butte to the east, and the scenic rolling farmland south toward Kronau, Milestone, and Balgonie. Whether you want a turnkey hobby farm, a bare-land parcel ready for your dream build, or a developed estate with a shop and outbuildings, the greater Regina area has options at every price point.",
      "Demand for acreages near Regina has climbed steadily as remote work allows more buyers to choose rural living without leaving their careers behind. Saskatchewan's favourable property taxes, low cost of living, and strong agricultural economy make these properties an excellent long-term investment. Lots with municipal water and natural gas hook-ups are especially popular, while properties bordering crown land or the Qu'Appelle lakes offer recreational value year-round. As a REALTOR® who specializes in Saskatchewan land and acreages, Adam Hungle can help you navigate well-water testing, septic requirements, and RM zoning bylaws so you buy with confidence. Contact Adam today at 306.531.8854 to start your acreage search near Regina.",
    ],
  },

  /* ── Saskatoon ── */
  saskatoon: {
    heading: "Acreages for Sale Near Saskatoon, Saskatchewan",
    paragraphs: [
      "Saskatoon-area acreages offer the perfect balance of rural tranquillity and urban access. Located along the South Saskatchewan River, Saskatoon is the province's largest city — and the surrounding RMs of Corman Park, Vanscoy, Aberdeen, and Dundurn are home to some of the most desirable acreage communities in western Canada. Properties range from compact five-acre parcels with modern homes to larger quarter-section estates suited to hobby farming, horse operations, or market gardening.",
      "Buyers searching for acreages near Saskatoon benefit from excellent highway connectivity, a growing regional economy anchored by potash mining and the University of Saskatchewan, and a vibrant food and arts scene just minutes away. Whether you're looking for a country property along the river valley, a developed acreage near Martensville or Warman, or raw land you can build on, Adam Hungle can guide you through the process — from RM development permits to financing options for rural properties. Browse current Saskatoon-area acreage listings above or call 306.531.8854 for a customized search.",
    ],
  },

  /* ── Yorkton ── */
  yorkton: {
    heading: "Acreages for Sale Near Yorkton, Saskatchewan",
    paragraphs: [
      "Yorkton sits at the heart of east-central Saskatchewan's parkland region, where rolling hills, abundant sloughs, and mixed farmland create an ideal setting for acreage living. Properties within 50 km of Yorkton often feature mature shelterbelts, established yards, and a slower pace of life that families and retirees find irresistible. The area is also a prime destination for hunters and outdoor enthusiasts, with some of the best waterfowl and white-tail deer habitat in the province right outside your door.",
      "Acreage prices near Yorkton tend to be lower than in the Regina or Saskatoon corridors, making this area especially attractive for first-time rural buyers or anyone looking to get more land for their dollar. Local amenities include the Gallagher Centre, Yorkton Regional Health Centre, and a full range of shopping and services. If you're considering a move to the Yorkton area or want to invest in rural Saskatchewan real estate, contact Adam Hungle to see what's available — from small hobby farms to larger mixed-use parcels.",
    ],
  },

  /* ── North Battleford ── */
  "north-battleford": {
    heading: "Acreages for Sale Near North Battleford, Saskatchewan",
    paragraphs: [
      "The North Battleford region is where Saskatchewan's prairies meet the North Saskatchewan River valley, creating some of the most scenic acreage country in the province. Properties here range from compact residential acreages along the river to large mixed-farm parcels in the surrounding RMs of Battle River, North Battleford, and Meota. Outdoor recreation is a major draw — Jackfish Lake and Battlefords Provincial Park are nearby, and the area is known for excellent fishing, snowmobiling, and cross-country skiing.",
      "For buyers seeking affordable rural property in northwest Saskatchewan, acreages near North Battleford deliver strong value. The twin cities of North Battleford and Battleford provide essential services, schools, and a regional hospital, while the surrounding countryside offers the space and privacy that acreage buyers crave. Whether you're after a lakeside retreat, a working hobby farm, or a quiet homestead with room to grow, Adam Hungle can help you find the right property. Call 306.531.8854 or browse the listings above.",
    ],
  },

  /* ── Estevan ── */
  estevan: {
    heading: "Acreages for Sale Near Estevan, Saskatchewan",
    paragraphs: [
      "Estevan, known as the Energy City of Canada, anchors Saskatchewan's southeast corner — and the acreages surrounding it benefit from a strong local economy driven by oil, potash, and agriculture. Rural properties within 50 km of Estevan include everything from modest country homes on a few acres to larger grain-and-cattle operations with extensive outbuildings. The Souris River valley adds scenic beauty, and nearby Boundary Dam and Rafferty Reservoir offer year-round recreation.",
      "Acreage buyers near Estevan enjoy some of the warmest growing seasons in Saskatchewan, making the area popular for market gardens, hobby farms, and equestrian properties. With competitive property prices and a tight-knit community feel, Estevan-area acreages are a smart choice for families and investors alike. Reach out to Adam Hungle for help navigating rural real estate in southeast Saskatchewan — from RM regulations to well and septic assessments.",
    ],
  },

  /* ── Weyburn ── */
  weyburn: {
    heading: "Acreages for Sale Near Weyburn, Saskatchewan",
    paragraphs: [
      "Weyburn is a thriving community in south-central Saskatchewan surrounded by some of the richest agricultural land in the province. Acreages near Weyburn appeal to buyers who want easy access to Highway 39, excellent schools, and a full complement of shopping and health-care services — all while living on a spacious rural property. The surrounding RMs feature gently rolling cropland, pastureland, and sheltered yard sites perfect for building your dream acreage home.",
      "Whether you're relocating from a larger city, retiring to the country, or expanding an existing farming operation, Weyburn-area acreages offer outstanding value. Properties with newer homes, heated shops, and landscaped yards regularly come to market, alongside bare-land parcels waiting for development. Contact Adam Hungle, your Saskatchewan acreage REALTOR®, to explore available listings near Weyburn and get expert guidance on every step of the buying process.",
    ],
  },

  /* ── Swift Current ── */
  "swift-current": {
    heading: "Acreages for Sale Near Swift Current, Saskatchewan",
    paragraphs: [
      "Swift Current straddles the Trans-Canada Highway in southwest Saskatchewan, making it one of the most accessible acreage markets in the province. The surrounding landscape is classic short-grass prairie — big skies, wide-open views, and a dry climate that appeals to ranchers, hobby farmers, and anyone who craves space. Acreages within 50 km of Swift Current range from small residential parcels near town to expansive ranch-style properties along the Swift Current Creek and beyond.",
      "The city itself offers strong amenities for its size, including the InnovationPlex recreation facility, regional hospital, and a growing downtown core. For acreage buyers, that means you can enjoy a rural lifestyle without sacrificing convenience. Land prices in the Swift Current corridor remain competitive, and the area's cattle-ranching heritage means many properties come with corrals, barns, and fenced pasture already in place. To find your ideal southwest Saskatchewan acreage, contact Adam Hungle at 306.531.8854 or browse the MLS® listings above.",
    ],
  },
};

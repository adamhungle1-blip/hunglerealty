export interface Listing {
  id: string;
  mls: string;
  title: string;
  price: number;
  acreage: number | null;
  rm: string;
  location: string;
  propertyType: "farm" | "residential" | "acreage" | "commercial";
  status: "active" | "pending" | "sold";
  description: string;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  brokerage: string;
  daysOnMarket: number;
  photos: string[];
  tag?: "NEW" | "FEATURED" | "PRICE REDUCED";
}

export const mockListings: Listing[] = [
  {
    id: "1", mls: "SK031105", title: "Clavet 481 Acres Grain Farmland With Yard",
    price: 2253500, acreage: 481, rm: "Edenwold", location: "Clavet, SK",
    propertyType: "farm", status: "active",
    description: "Located just 6 miles east of Clavet, SK. This productive agricultural property sits at the corner of Highway 16 and Road 763 to Bradwell. Majority cultivated with excellent soil ratings and strong crop history.",
    beds: 5, baths: 1, sqft: null, brokerage: "Hammond Realty",
    daysOnMarket: 3, photos: [], tag: "NEW"
  },
  {
    id: "2", mls: "SK031067", title: "Kinequon Land, Mount Hope",
    price: 400000, acreage: 160, rm: "Mount Hope", location: "Punnichy, SK",
    propertyType: "farm", status: "active",
    description: "Quarter section of land located near Punnichy with strong potential for agricultural use. Includes an abandoned yard site with house, garage, and barn. No services.",
    beds: null, baths: null, sqft: null, brokerage: "eXp Realty",
    daysOnMarket: 12, photos: []
  },
  {
    id: "3", mls: "SK030899", title: "124 Acres - Preeceville Rm 334",
    price: 195000, acreage: 124, rm: "Preeceville", location: "Preeceville, SK",
    propertyType: "farm", status: "active",
    description: "Scenic 125 acres of land for sale with a balanced mix of open fields for crop or hay production, the Assiniboine River flowing through the south end of the land.",
    beds: null, baths: null, sqft: null, brokerage: "RE/MAX Crown Real Estate",
    daysOnMarket: 28, photos: [], tag: "PRICE REDUCED"
  },
  {
    id: "4", mls: "SK030629", title: "Rm Of Pleasantdale Land",
    price: 840000, acreage: 640, rm: "Pleasantdale", location: "Pleasantdale, SK",
    propertyType: "farm", status: "active",
    description: "The perfect opportunity to expand your existing farming operation with this half section of productive farmland located in the RM of Pleasantdale. This package includes strong soil ratings.",
    beds: null, baths: null, sqft: null, brokerage: "Prairie Skies Realty",
    daysOnMarket: 45, photos: [], tag: "FEATURED"
  },
  {
    id: "5", mls: "SK031150", title: "199 Acres W/Oil Revenue Near Creelman",
    price: 700000, acreage: 199, rm: "Griffin", location: "Creelman, SK",
    propertyType: "farm", status: "active",
    description: "199.37 acres of mixed land with oil surface leases for sale in the RM of Griffin. The land is located near Creelman, SK just south of Highway #33.",
    beds: null, baths: null, sqft: null, brokerage: "Sutton Group Results Realty",
    daysOnMarket: 7, photos: [], tag: "NEW"
  },
  {
    id: "6", mls: "SK031200", title: "Rm Of Biggar Farmland - 158 Acres",
    price: 250000, acreage: 158, rm: "Biggar", location: "Biggar, SK",
    propertyType: "farm", status: "active",
    description: "Quarter section in the RM of Biggar offering 158 title acres with a mix of cultivated land and a functional yardsite. Strong soil composition ideal for grain or mixed farming.",
    beds: null, baths: null, sqft: null, brokerage: "Hammond Realty",
    daysOnMarket: 1, photos: [], tag: "NEW"
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(price);
}

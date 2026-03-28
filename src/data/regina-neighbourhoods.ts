/**
 * Regina neighbourhoods with geo-coordinates for bounding-box filtering.
 * The DDF API does not populate SubdivisionName, so we filter by lat/lng instead.
 */

export interface ReginaNeighbourhood {
  /** Display name (friendly) */
  name: string;
  /** URL slug */
  slug: string;
  /** Exact MLS SubdivisionName value (kept for future use if DDF adds support) */
  mlsName: string;
  /** Center latitude */
  lat: number;
  /** Center longitude */
  lng: number;
  /** Search radius in km */
  radius: number;
}

export const REGINA_NEIGHBOURHOODS: ReginaNeighbourhood[] = [
  { name: "Albert Park", slug: "albert-park", mlsName: "Albert Park", lat: 50.4081, lng: -104.6304, radius: 2 },
  { name: "Argyle Park", slug: "argyle-park", mlsName: "Argyle Park", lat: 50.4888, lng: -104.6328, radius: 2 },
  { name: "Arnhem Place", slug: "arnhem-place", mlsName: "Arnhem Place", lat: 50.4356, lng: -104.5865, radius: 2 },
  { name: "Broders Annex", slug: "broders-annex", mlsName: "Broders Annex", lat: 50.4446, lng: -104.5861, radius: 2 },
  { name: "Cathedral", slug: "cathedral", mlsName: "Cathedral RG", lat: 50.4451, lng: -104.6288, radius: 2 },
  { name: "Churchill Downs", slug: "churchill-downs", mlsName: "Churchill Downs", lat: 50.4789, lng: -104.6043, radius: 2 },
  { name: "Cityview", slug: "cityview", mlsName: "Cityview", lat: 50.4802, lng: -104.6113, radius: 2 },
  { name: "Coronation Park", slug: "coronation-park", mlsName: "Coronation Park", lat: 50.4751, lng: -104.6225, radius: 2 },
  { name: "Crescents", slug: "crescents", mlsName: "Crescents", lat: 50.4398, lng: -104.6231, radius: 2 },
  { name: "Dieppe Place", slug: "dieppe-place", mlsName: "Dieppe Place", lat: 50.4592, lng: -104.685, radius: 2 },
  { name: "Dominion Heights", slug: "dominion-heights", mlsName: "Dominion Heights RG", lat: 50.4357, lng: -104.5698, radius: 2 },
  { name: "Douglas Place", slug: "douglas-place", mlsName: "Douglas Place", lat: 50.4313, lng: -104.5776, radius: 2 },
  { name: "Downtown District", slug: "downtown-district", mlsName: "Downtown District", lat: 50.4488, lng: -104.6112, radius: 2 },
  { name: "East Pointe Estates", slug: "east-pointe-estates", mlsName: "East Pointe Estates", lat: 50.4245, lng: -104.518, radius: 2 },
  { name: "Eastbrook", slug: "eastbrook", mlsName: "Eastbrook", lat: 50.4308, lng: -104.5118, radius: 2 },
  { name: "Eastview", slug: "eastview", mlsName: "Eastview RG", lat: 50.4613, lng: -104.5908, radius: 2 },
  { name: "Edgewater", slug: "edgewater", mlsName: "Edgewater", lat: 50.4818, lng: -104.7078, radius: 2 },
  { name: "Englewood", slug: "englewood", mlsName: "Englewood", lat: 50.4925, lng: -104.624, radius: 2 },
  { name: "Fairways West", slug: "fairways-west", mlsName: "Fairways West", lat: 50.4756, lng: -104.6945, radius: 2 },
  { name: "Garden Ridge", slug: "garden-ridge", mlsName: "Garden Ridge", lat: 50.4953, lng: -104.6493, radius: 2 },
  { name: "Gardiner Heights", slug: "gardiner-heights", mlsName: "Gardiner Heights", lat: 50.4308, lng: -104.5428, radius: 2 },
  { name: "Gardiner Park", slug: "gardiner-park", mlsName: "Gardiner Park", lat: 50.4386, lng: -104.5547, radius: 2 },
  { name: "General Hospital", slug: "general-hospital", mlsName: "General Hospital", lat: 50.4438, lng: -104.6036, radius: 2 },
  { name: "Glen Elm Park", slug: "glen-elm-park", mlsName: "Glen Elm Park", lat: 50.4521, lng: -104.5676, radius: 2 },
  { name: "Glencairn", slug: "glencairn", mlsName: "Glencairn", lat: 50.456, lng: -104.5553, radius: 2 },
  { name: "Glencairn Village", slug: "glencairn-village", mlsName: "Glencairn Village", lat: 50.4578, lng: -104.5469, radius: 2 },
  { name: "Greens on Gardiner", slug: "greens-on-gardiner", mlsName: "Greens on Gardiner", lat: 50.4239, lng: -104.5204, radius: 2 },
  { name: "Harbour Landing", slug: "harbour-landing", mlsName: "Harbour Landing", lat: 50.4101, lng: -104.6544, radius: 2 },
  { name: "Hawkstone", slug: "hawkstone", mlsName: "Hawkstone", lat: 50.4961, lng: -104.6267, radius: 2 },
  { name: "Highland Park", slug: "highland-park", mlsName: "Highland Park", lat: 50.4729, lng: -104.6141, radius: 2 },
  { name: "Hillsdale", slug: "hillsdale", mlsName: "Hillsdale", lat: 50.421, lng: -104.6071, radius: 2 },
  { name: "Kensington Green", slug: "kensington-green", mlsName: "Kensington Green", lat: 50.4185, lng: -104.546, radius: 2 },
  { name: "Lakeridge Addition", slug: "lakeridge-addition", mlsName: "Lakeridge Addition", lat: 50.498, lng: -104.648, radius: 2 },
  { name: "Lakeridge", slug: "lakeridge", mlsName: "Lakeridge RG", lat: 50.5006, lng: -104.6541, radius: 2 },
  { name: "Lakewood", slug: "lakewood", mlsName: "Lakewood", lat: 50.5015, lng: -104.6682, radius: 2 },
  { name: "Maple Ridge", slug: "maple-ridge", mlsName: "Maple Ridge", lat: 50.5022, lng: -104.6814, radius: 2 },
  { name: "McCarthy Park", slug: "mccarthy-park", mlsName: "McCarthy Park", lat: 50.4909, lng: -104.6695, radius: 2 },
  { name: "Mount Royal", slug: "mount-royal", mlsName: "Mount Royal RG", lat: 50.4654, lng: -104.6717, radius: 2 },
  { name: "Normanview", slug: "normanview", mlsName: "Normanview", lat: 50.4804, lng: -104.658, radius: 2 },
  { name: "Normanview West", slug: "normanview-west", mlsName: "Normanview West", lat: 50.4808, lng: -104.6761, radius: 2 },
  { name: "Parkridge", slug: "parkridge", mlsName: "Parkridge RG", lat: 50.4628, lng: -104.5339, radius: 2 },
  { name: "Parliament Place", slug: "parliament-place", mlsName: "Parliament Place", lat: 50.4138, lng: -104.6299, radius: 2 },
  { name: "Pioneer Village", slug: "pioneer-village", mlsName: "Pioneer Village", lat: 50.4512, lng: -104.6476, radius: 2 },
  { name: "Richmond Place", slug: "richmond-place", mlsName: "Richmond Place", lat: 50.4216, lng: -104.5532, radius: 2 },
  { name: "River Bend", slug: "river-bend", mlsName: "River Bend", lat: 50.443, lng: -104.5435, radius: 2 },
  { name: "River Heights", slug: "river-heights", mlsName: "River Heights RG", lat: 50.4376, lng: -104.6384, radius: 2 },
  { name: "Rochdale Park", slug: "rochdale-park", mlsName: "Rochdale Park", lat: 50.4967, lng: -104.6837, radius: 2 },
  { name: "Rosemont", slug: "rosemont", mlsName: "Rosemont", lat: 50.466, lng: -104.6619, radius: 2 },
  { name: "Sherwood Estates", slug: "sherwood-estates", mlsName: "Sherwood Estates", lat: 50.4896, lng: -104.6805, radius: 2 },
  { name: "Spruce Meadows", slug: "spruce-meadows", mlsName: "Spruce Meadows", lat: 50.4427, lng: -104.5337, radius: 2 },
  { name: "The Creeks", slug: "the-creeks", mlsName: "The Creeks", lat: 50.4129, lng: -104.5204, radius: 2 },
  { name: "The Towns", slug: "the-towns", mlsName: "The Towns", lat: 50.4308, lng: -104.5185, radius: 2 },
  { name: "Transition Area", slug: "transition-area", mlsName: "Transition Area", lat: 50.452, lng: -104.6025, radius: 2 },
  { name: "University Park", slug: "university-park", mlsName: "University Park", lat: 50.4297, lng: -104.5645, radius: 2 },
  { name: "University Park East", slug: "university-park-east", mlsName: "University Park East", lat: 50.4268, lng: -104.5528, radius: 2 },
  { name: "Uplands", slug: "uplands", mlsName: "Uplands", lat: 50.4948, lng: -104.6081, radius: 2 },
  { name: "Varsity Park", slug: "varsity-park", mlsName: "Varsity Park", lat: 50.4243, lng: -104.5461, radius: 2 },
  { name: "Walsh Acres", slug: "walsh-acres", mlsName: "Walsh Acres", lat: 50.4888, lng: -104.6535, radius: 2 },
  { name: "Warehouse District", slug: "warehouse-district", mlsName: "Warehouse District", lat: 50.4553, lng: -104.6139, radius: 2 },
  { name: "Wascana View", slug: "wascana-view", mlsName: "Wascana View", lat: 50.4183, lng: -104.5371, radius: 2 },
  { name: "Washington Park", slug: "washington-park", mlsName: "Washington Park", lat: 50.4654, lng: -104.6231, radius: 2 },
  { name: "Westerra", slug: "westerra", mlsName: "Westerra", lat: 50.4504, lng: -104.6984, radius: 2 },
  { name: "Westhill", slug: "westhill", mlsName: "Westhill RG", lat: 50.481, lng: -104.6944, radius: 2 },
  { name: "Whitmore Park", slug: "whitmore-park", mlsName: "Whitmore Park", lat: 50.4031, lng: -104.6062, radius: 2 },
  { name: "Windsor Park", slug: "windsor-park", mlsName: "Windsor Park", lat: 50.4334, lng: -104.5296, radius: 2 },
  { name: "Wood Meadows", slug: "wood-meadows", mlsName: "Wood Meadows", lat: 50.4348, lng: -104.5411, radius: 2 },
  { name: "Woodland Grove", slug: "woodland-grove", mlsName: "Woodland Grove", lat: 50.4248, lng: -104.5326, radius: 2 },
];

export function getNeighbourhoodBySlug(slug: string): ReginaNeighbourhood | undefined {
  return REGINA_NEIGHBOURHOODS.find((n) => n.slug === slug);
}

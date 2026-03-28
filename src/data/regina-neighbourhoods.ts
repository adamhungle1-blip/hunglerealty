/**
 * Regina neighbourhoods — names match the MLS SubdivisionName field exactly.
 * Used for filtering residential listings by neighbourhood.
 */

export interface ReginaNeighbourhood {
  /** Display name (friendly) */
  name: string;
  /** URL slug */
  slug: string;
  /** Exact MLS SubdivisionName value for API filtering */
  mlsName: string;
}

export const REGINA_NEIGHBOURHOODS: ReginaNeighbourhood[] = [
  { name: "Albert Park", slug: "albert-park", mlsName: "Albert Park" },
  { name: "Argyle Park", slug: "argyle-park", mlsName: "Argyle Park" },
  { name: "Arnhem Place", slug: "arnhem-place", mlsName: "Arnhem Place" },
  { name: "Broders Annex", slug: "broders-annex", mlsName: "Broders Annex" },
  { name: "Cathedral", slug: "cathedral", mlsName: "Cathedral RG" },
  { name: "Churchill Downs", slug: "churchill-downs", mlsName: "Churchill Downs" },
  { name: "Cityview", slug: "cityview", mlsName: "Cityview" },
  { name: "Coronation Park", slug: "coronation-park", mlsName: "Coronation Park" },
  { name: "Crescents", slug: "crescents", mlsName: "Crescents" },
  { name: "Dieppe Place", slug: "dieppe-place", mlsName: "Dieppe Place" },
  { name: "Dominion Heights", slug: "dominion-heights", mlsName: "Dominion Heights RG" },
  { name: "Douglas Place", slug: "douglas-place", mlsName: "Douglas Place" },
  { name: "Downtown District", slug: "downtown-district", mlsName: "Downtown District" },
  { name: "East Pointe Estates", slug: "east-pointe-estates", mlsName: "East Pointe Estates" },
  { name: "Eastbrook", slug: "eastbrook", mlsName: "Eastbrook" },
  { name: "Eastview", slug: "eastview", mlsName: "Eastview RG" },
  { name: "Edgewater", slug: "edgewater", mlsName: "Edgewater" },
  { name: "Englewood", slug: "englewood", mlsName: "Englewood" },
  { name: "Fairways West", slug: "fairways-west", mlsName: "Fairways West" },
  { name: "Garden Ridge", slug: "garden-ridge", mlsName: "Garden Ridge" },
  { name: "Gardiner Heights", slug: "gardiner-heights", mlsName: "Gardiner Heights" },
  { name: "Gardiner Park", slug: "gardiner-park", mlsName: "Gardiner Park" },
  { name: "General Hospital", slug: "general-hospital", mlsName: "General Hospital" },
  { name: "Glen Elm Park", slug: "glen-elm-park", mlsName: "Glen Elm Park" },
  { name: "Glencairn", slug: "glencairn", mlsName: "Glencairn" },
  { name: "Glencairn Village", slug: "glencairn-village", mlsName: "Glencairn Village" },
  { name: "Greens on Gardiner", slug: "greens-on-gardiner", mlsName: "Greens on Gardiner" },
  { name: "Harbour Landing", slug: "harbour-landing", mlsName: "Harbour Landing" },
  { name: "Hawkstone", slug: "hawkstone", mlsName: "Hawkstone" },
  { name: "Highland Park", slug: "highland-park", mlsName: "Highland Park" },
  { name: "Hillsdale", slug: "hillsdale", mlsName: "Hillsdale" },
  { name: "Kensington Green", slug: "kensington-green", mlsName: "Kensington Green" },
  { name: "Lakeridge Addition", slug: "lakeridge-addition", mlsName: "Lakeridge Addition" },
  { name: "Lakeridge", slug: "lakeridge", mlsName: "Lakeridge RG" },
  { name: "Lakewood", slug: "lakewood", mlsName: "Lakewood" },
  { name: "Maple Ridge", slug: "maple-ridge", mlsName: "Maple Ridge" },
  { name: "McCarthy Park", slug: "mccarthy-park", mlsName: "McCarthy Park" },
  { name: "Mount Royal", slug: "mount-royal", mlsName: "Mount Royal RG" },
  { name: "Normanview", slug: "normanview", mlsName: "Normanview" },
  { name: "Normanview West", slug: "normanview-west", mlsName: "Normanview West" },
  { name: "Parkridge", slug: "parkridge", mlsName: "Parkridge RG" },
  { name: "Parliament Place", slug: "parliament-place", mlsName: "Parliament Place" },
  { name: "Pioneer Village", slug: "pioneer-village", mlsName: "Pioneer Village" },
  { name: "Richmond Place", slug: "richmond-place", mlsName: "Richmond Place" },
  { name: "River Bend", slug: "river-bend", mlsName: "River Bend" },
  { name: "River Heights", slug: "river-heights", mlsName: "River Heights RG" },
  { name: "Rochdale Park", slug: "rochdale-park", mlsName: "Rochdale Park" },
  { name: "Rosemont", slug: "rosemont", mlsName: "Rosemont" },
  { name: "Sherwood Estates", slug: "sherwood-estates", mlsName: "Sherwood Estates" },
  { name: "Spruce Meadows", slug: "spruce-meadows", mlsName: "Spruce Meadows" },
  { name: "The Creeks", slug: "the-creeks", mlsName: "The Creeks" },
  { name: "The Towns", slug: "the-towns", mlsName: "The Towns" },
  { name: "Transition Area", slug: "transition-area", mlsName: "Transition Area" },
  { name: "University Park", slug: "university-park", mlsName: "University Park" },
  { name: "University Park East", slug: "university-park-east", mlsName: "University Park East" },
  { name: "Uplands", slug: "uplands", mlsName: "Uplands" },
  { name: "Varsity Park", slug: "varsity-park", mlsName: "Varsity Park" },
  { name: "Walsh Acres", slug: "walsh-acres", mlsName: "Walsh Acres" },
  { name: "Warehouse District", slug: "warehouse-district", mlsName: "Warehouse District" },
  { name: "Wascana View", slug: "wascana-view", mlsName: "Wascana View" },
  { name: "Washington Park", slug: "washington-park", mlsName: "Washington Park" },
  { name: "Westerra", slug: "westerra", mlsName: "Westerra" },
  { name: "Westhill", slug: "westhill", mlsName: "Westhill RG" },
  { name: "Whitmore Park", slug: "whitmore-park", mlsName: "Whitmore Park" },
  { name: "Windsor Park", slug: "windsor-park", mlsName: "Windsor Park" },
  { name: "Wood Meadows", slug: "wood-meadows", mlsName: "Wood Meadows" },
  { name: "Woodland Grove", slug: "woodland-grove", mlsName: "Woodland Grove" },
];

export function getNeighbourhoodBySlug(slug: string): ReginaNeighbourhood | undefined {
  return REGINA_NEIGHBOURHOODS.find((n) => n.slug === slug);
}

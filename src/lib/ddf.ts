/**
 * CREA DDF® RESO Web API Client
 * Fetches live MLS® listing data from the National Shared Pool
 */

const TOKEN_URL = "https://identity.crea.ca/connect/token";
const API_BASE = "https://ddfapi.realtor.ca/odata/v1";

let cachedToken: { token: string; expires: number } | null = null;

/** Get an OAuth2 access token (cached for ~55 min) */
async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expires) {
    return cachedToken.token;
  }

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.DDF_CLIENT_ID!,
      client_secret: process.env.DDF_CLIENT_SECRET!,
      scope: "DDFApi_Read",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DDF token error ${res.status}: ${text}`);
  }

  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    // Refresh 5 minutes early to be safe
    expires: Date.now() + (data.expires_in - 300) * 1000,
  };
  return cachedToken.token;
}

/** Make an authenticated request to the DDF API */
async function ddfFetch(path: string): Promise<Response> {
  const token = await getAccessToken();
  return fetch(`${API_BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    next: { revalidate: 300 }, // Cache for 5 minutes
  });
}

export interface DdfListing {
  ListingKey: string;
  ListPrice: number;
  UnparsedAddress?: string;
  StreetNumber?: string;
  StreetName?: string;
  StreetSuffix?: string;
  City?: string;
  StateOrProvince?: string;
  PostalCode?: string;
  PropertySubType?: string;
  BedroomsTotal?: number;
  BathroomsTotalInteger?: number;
  LivingArea?: number;
  LotSizeArea?: number;
  LotSizeUnits?: string;
  PublicRemarks?: string;
  ListOfficeKey?: string;
  ListingId?: string;
  PhotosCount?: number;
  ModificationTimestamp?: string;
  OriginalEntryTimestamp?: string;
  StandardStatus?: string;
  Media?: Array<{
    MediaURL: string;
    Order: number;
    PreferredPhotoYN?: boolean;
    MediaCategory?: string;
  }>;
}

export interface DdfResponse {
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value: DdfListing[];
}

/**
 * Fetch Saskatchewan listings from the DDF.
 * @param top - Number of listings to return (max 100)
 * @param skip - Offset for pagination
 * @param orderby - OData orderby clause
 * @param filter - Additional OData filter (appended to province filter)
 */
export async function fetchListings({
  top = 24,
  skip = 0,
  orderby = "ModificationTimestamp desc",
  filter,
}: {
  top?: number;
  skip?: number;
  orderby?: string;
  filter?: string;
} = {}): Promise<DdfResponse> {
  // Always filter to Saskatchewan + Active listings
  let filterStr = "StateOrProvince eq 'Saskatchewan' and StandardStatus eq 'Active'";
  if (filter) {
    filterStr += ` and (${filter})`;
  }

  const params = new URLSearchParams({
    $filter: filterStr,
    $top: String(Math.min(top, 100)),
    $skip: String(skip),
    $orderby: orderby,
    $count: "true",
    $select: [
      "ListingKey",
      "ListingId",
      "ListPrice",
      "UnparsedAddress",
      "City",
      "StateOrProvince",
      "PostalCode",
      "PropertySubType",
      "BedroomsTotal",
      "BathroomsTotalInteger",
      "LivingArea",
      "LotSizeArea",
      "LotSizeUnits",
      "PublicRemarks",
      "ListOfficeKey",
      "ModificationTimestamp",
      "OriginalEntryTimestamp",
      "StandardStatus",
      "PhotosCount",
      "Media",
    ].join(","),
  });

  const res = await ddfFetch(`/Property?${params.toString()}`);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DDF API error ${res.status}: ${text}`);
  }

  return res.json();
}

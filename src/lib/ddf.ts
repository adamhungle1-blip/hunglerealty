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
  ListingURL?: string;
  Latitude?: number;
  Longitude?: number;
  ListAgentKey?: string;
  ListOfficeName?: string; // Resolved from Office endpoint
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

/** Selected fields to request from the DDF API */
const DDF_SELECT_FIELDS = [
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
  "ListingURL",
  "Latitude",
  "Longitude",
  "ListAgentKey",
  "Media",
].join(",");

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
    $select: DDF_SELECT_FIELDS,
  });

  const res = await ddfFetch(`/Property?${params.toString()}`);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DDF API error ${res.status}: ${text}`);
  }

  return res.json();
}

/**
 * Fetch a single listing by its MLS® ID (e.g. SK031210).
 */
export async function fetchListingById(
  listingId: string
): Promise<DdfListing | null> {
  const params = new URLSearchParams({
    $filter: `ListingId eq '${listingId}'`,
    $top: "1",
    $select: DDF_SELECT_FIELDS,
  });

  const res = await ddfFetch(`/Property?${params.toString()}`);
  if (!res.ok) return null;

  const data: DdfResponse = await res.json();
  return data.value[0] || null;
}

/** In-memory cache for office names (OfficeKey → OfficeName) */
const officeNameCache = new Map<string, string>();

/**
 * Fetch office names for a list of OfficeKeys.
 * Uses an in-memory cache to avoid repeated lookups.
 */
export async function fetchOfficeNames(
  officeKeys: string[]
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const uncachedKeys: string[] = [];

  for (const key of officeKeys) {
    if (officeNameCache.has(key)) {
      result.set(key, officeNameCache.get(key)!);
    } else {
      uncachedKeys.push(key);
    }
  }

  if (uncachedKeys.length === 0) return result;

  // Batch fetch: OData filter with 'or' for up to ~20 keys at a time
  const batchSize = 20;
  for (let i = 0; i < uncachedKeys.length; i += batchSize) {
    const batch = uncachedKeys.slice(i, i + batchSize);
    const filterParts = batch.map((k) => `OfficeKey eq '${k}'`).join(" or ");
    const params = new URLSearchParams({
      $filter: filterParts,
      $select: "OfficeKey,OfficeName",
      $top: String(batch.length),
    });

    try {
      const res = await ddfFetch(`/Office?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        for (const office of data.value || []) {
          officeNameCache.set(office.OfficeKey, office.OfficeName);
          result.set(office.OfficeKey, office.OfficeName);
        }
      }
    } catch {
      // Silently fail — courtesy line just won't show
    }
  }

  return result;
}

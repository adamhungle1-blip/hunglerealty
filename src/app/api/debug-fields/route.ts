import { NextResponse } from "next/server";

const TOKEN_URL = "https://identity.crea.ca/connect/token";
const API_BASE = "https://ddfapi.realtor.ca/odata/v1";

export async function GET() {
  // Get token
  const tokenRes = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.DDF_CLIENT_ID!,
      client_secret: process.env.DDF_CLIENT_SECRET!,
      scope: "DDFApi_Read",
    }),
  });
  const tokenData = await tokenRes.json();

  // Fetch one Regina listing with NO $select to see ALL fields
  const params = new URLSearchParams({
    $filter:
      "StateOrProvince eq 'Saskatchewan' and StandardStatus eq 'Active' and contains(City,'Regina') and PropertySubType eq 'Single Family'",
    $top: "3",
    $orderby: "OriginalEntryTimestamp desc",
  });

  const res = await fetch(`${API_BASE}/Property?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      Accept: "application/json",
    },
  });

  const data = await res.json();

  // Return just the field names and neighbourhood-related values
  if (data.value && data.value.length > 0) {
    const allFields = Object.keys(data.value[0]).sort();
    const neighbourhoodFields: Record<string, unknown>[] = [];
    for (const listing of data.value) {
      const relevant: Record<string, unknown> = {
        Address: listing.UnparsedAddress,
        City: listing.City,
      };
      // Grab any field that might relate to neighbourhood/subdivision/area
      for (const key of allFields) {
        const lk = key.toLowerCase();
        if (
          lk.includes("neigh") ||
          lk.includes("subdiv") ||
          lk.includes("area") ||
          lk.includes("district") ||
          lk.includes("community") ||
          lk.includes("zone") ||
          lk.includes("location") ||
          lk.includes("region") ||
          lk.includes("ward")
        ) {
          relevant[key] = listing[key];
        }
      }
      neighbourhoodFields.push(relevant);
    }
    return NextResponse.json({
      totalFields: allFields.length,
      allFieldNames: allFields,
      neighbourhoodRelated: neighbourhoodFields,
    });
  }

  return NextResponse.json({ error: "No data", raw: data });
}

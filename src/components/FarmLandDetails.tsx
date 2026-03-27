"use client";

import { parseFarmDetails } from "@/lib/parseFarmDetails";

function fmt(n: number): string {
  return n.toLocaleString("en-CA");
}
function fmtDollar(n: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
}

/* ── Stat tile (for the top grid) ── */
function Stat({
  label,
  value,
  sub,
  amber,
}: {
  label: string;
  value: string;
  sub?: string;
  amber?: boolean;
}) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-100 bg-white px-3 py-4 text-center shadow-sm">
      <p className={`text-lg font-bold ${amber ? "text-amber-600" : "text-green-800"}`}>
        {value}
      </p>
      <p className="mt-0.5 text-xs font-medium text-gray-600">{label}</p>
      {sub && <p className="mt-0.5 text-[10px] text-gray-400">{sub}</p>}
    </div>
  );
}

/* ── Info row inside a details table ── */
function Row({
  label,
  value,
  even,
}: {
  label: string;
  value: string;
  even: boolean;
}) {
  return (
    <tr className={even ? "bg-gray-50/60" : ""}>
      <td className="px-4 py-2.5 text-sm font-medium text-gray-500 w-[40%]">
        {label}
      </td>
      <td className="px-4 py-2.5 text-sm text-gray-900">{value}</td>
    </tr>
  );
}

/* ── Section header ── */
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3 mt-6 first:mt-0">
      <h3 className="text-base font-bold text-gray-800 whitespace-nowrap">
        {title}
      </h3>
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

/* ── Main component ── */
export default function FarmLandDetails({
  remarks,
  totalAcres,
  listPrice,
  lotFeatures,
  fencing,
  heating,
  waterSource,
  yearBuilt,
  basement,
  parkingFeatures,
  communityFeatures,
  directions,
  currentUse,
  city,
}: {
  remarks?: string;
  totalAcres?: number;
  listPrice: number;
  lotFeatures?: string[];
  fencing?: string[];
  heating?: string[];
  waterSource?: string[];
  yearBuilt?: number;
  basement?: string[];
  parkingFeatures?: string[];
  communityFeatures?: string[];
  directions?: string;
  currentUse?: string[];
  city?: string;
}) {
  const details = parseFarmDetails(remarks, totalAcres, listPrice, {
    lotFeatures,
    fencing,
    heating,
    waterSource,
    yearBuilt,
    basement,
    parkingFeatures,
    communityFeatures,
    directions,
    currentUse,
  });

  if (!details) return null;

  // ── Build stat tiles ──
  const stats: Array<{
    label: string;
    value: string;
    sub?: string;
    amber?: boolean;
  }> = [];

  if (details.totalAcres) {
    stats.push({ label: "Total Acres", value: fmt(details.totalAcres) });
  }
  if (details.cultivatedAcres) {
    stats.push({
      label: "Cultivated",
      value: `${fmt(details.cultivatedAcres)} ac`,
      sub: details.totalAcres
        ? `${Math.round((details.cultivatedAcres / details.totalAcres) * 100)}% of total`
        : undefined,
    });
  }
  if (details.pastureAcres) {
    stats.push({ label: "Pasture / Grass", value: `${fmt(details.pastureAcres)} ac` });
  }
  if (details.quarters) {
    stats.push({ label: "Parcels", value: String(details.quarters) });
  }
  if (details.pricePerAcre) {
    stats.push({ label: "Price / Acre", value: fmtDollar(details.pricePerAcre), amber: true });
  }
  if (details.pricePerCultivatedAcre && details.cultivatedAcres) {
    stats.push({
      label: "Price / Cult. Acre",
      value: fmtDollar(details.pricePerCultivatedAcre),
      amber: true,
    });
  }

  // ── Build "Land Information" rows ──
  const landRows: Array<{ label: string; value: string }> = [];
  if (details.totalAcres) {
    landRows.push({ label: "Lot Size", value: `${fmt(details.totalAcres)} acres` });
  }
  if (details.quarters) {
    landRows.push({ label: "Parcel Count", value: `${details.quarters} quarter sections` });
  }
  if (details.soilClass) {
    landRows.push({ label: "Soil Rating (SCIC)", value: details.soilClass });
  }
  if (details.topography) {
    landRows.push({ label: "Topography", value: details.topography });
  }
  if (details.fencing) {
    landRows.push({ label: "Fencing", value: details.fencing });
  }
  if (details.nearestTown) {
    landRows.push({ label: "Nearest Town", value: details.nearestTown });
  }
  if (details.waterSource) {
    landRows.push({ label: "Water Source", value: details.waterSource });
  } else if (details.waterInfo) {
    // Capitalize first letter
    const w = details.waterInfo.charAt(0).toUpperCase() + details.waterInfo.slice(1);
    landRows.push({ label: "Water", value: w });
  }
  if (details.currentUse) {
    landRows.push({ label: "Current Use", value: details.currentUse });
  }
  if (details.communityFeatures) {
    landRows.push({ label: "Community", value: details.communityFeatures });
  }
  if (details.directions) {
    landRows.push({ label: "Directions", value: details.directions });
  }

  // ── Build "Financial Summary" rows ──
  const finRows: Array<{ label: string; value: string }> = [];
  if (details.assessmentValue) {
    finRows.push({ label: "SAMA Assessment", value: fmtDollar(details.assessmentValue) });
  }
  if (details.pricePerAcre) {
    finRows.push({ label: "Price per Acre", value: fmtDollar(details.pricePerAcre) });
  }
  if (details.pricePerCultivatedAcre && details.cultivatedAcres) {
    finRows.push({
      label: "Price per Cultivated Acre",
      value: fmtDollar(details.pricePerCultivatedAcre),
    });
  }
  if (details.surfaceLeaseIncome) {
    finRows.push({
      label: "Surface Lease Revenue",
      value: `${fmtDollar(details.surfaceLeaseIncome)} / year${details.surfaceLeases ? ` (${details.surfaceLeases} leases)` : ""}`,
    });
  }

  // ── Build "Building Details" rows (only if farm has a home) ──
  const bldgRows: Array<{ label: string; value: string }> = [];
  if (details.yearBuilt) {
    bldgRows.push({ label: "Year Built", value: String(details.yearBuilt) });
  }
  if (details.heating) {
    bldgRows.push({ label: "Heating", value: details.heating });
  }
  if (details.basement) {
    bldgRows.push({ label: "Basement", value: details.basement });
  }
  if (details.parking) {
    bldgRows.push({ label: "Parking", value: details.parking });
  }

  const hasStats = stats.length > 0;
  const hasLand = landRows.length > 0;
  const hasFin = finRows.length > 0;
  const hasBldg = bldgRows.length > 0;
  const hasLegals = details.legalDescriptions && details.legalDescriptions.length > 0;

  if (!hasStats && !hasLand && !hasFin) return null;

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        Farm &amp; Land Details
      </h2>

      <div className="rounded-xl border border-green-200 bg-gradient-to-b from-green-50/50 to-white p-5 space-y-0">
        {/* ── Key Metrics Grid ── */}
        {hasStats && (
          <>
            <SectionHeader title="Key Metrics" />
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-3">
              {stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
          </>
        )}

        {/* ── Land Information ── */}
        {hasLand && (
          <>
            <SectionHeader title="Land Information" />
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
                <tbody>
                  {landRows.map((row, i) => (
                    <Row key={row.label} label={row.label} value={row.value} even={i % 2 === 0} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ── Financial Summary ── */}
        {hasFin && (
          <>
            <SectionHeader title="Financial Summary" />
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
                <tbody>
                  {finRows.map((row, i) => (
                    <Row key={row.label} label={row.label} value={row.value} even={i % 2 === 0} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ── Building Details (only shows if farm has structures) ── */}
        {hasBldg && (
          <>
            <SectionHeader title="Building Details" />
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
                <tbody>
                  {bldgRows.map((row, i) => (
                    <Row key={row.label} label={row.label} value={row.value} even={i % 2 === 0} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ── Legal Descriptions ── */}
        {hasLegals && (
          <>
            <SectionHeader title="Legal Descriptions" />
            <div className="flex flex-wrap gap-2">
              {details.legalDescriptions!.map((ld) => (
                <span
                  key={ld}
                  className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-mono text-gray-700 shadow-sm"
                >
                  {ld}
                </span>
              ))}
            </div>
          </>
        )}

        <p className="mt-4 text-[10px] text-gray-400">
          Details extracted from listing data. Verify all figures with the
          listing agent.
        </p>
      </div>
    </div>
  );
}

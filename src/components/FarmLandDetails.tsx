"use client";

import { parseFarmDetails, type FarmDetails } from "@/lib/parseFarmDetails";

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

/** Single stat block */
function Stat({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-100 bg-white px-3 py-4 text-center">
      <p
        className={`text-lg font-bold ${
          highlight ? "text-amber-600" : "text-green-800"
        }`}
      >
        {value}
      </p>
      <p className="mt-0.5 text-xs font-medium text-gray-600">{label}</p>
      {sub && <p className="mt-0.5 text-[10px] text-gray-400">{sub}</p>}
    </div>
  );
}

export default function FarmLandDetails({
  remarks,
  totalAcres,
  listPrice,
}: {
  remarks?: string;
  totalAcres?: number;
  listPrice: number;
}) {
  const details = parseFarmDetails(remarks, totalAcres, listPrice);

  if (!details) return null;

  // Determine which stats to show
  const stats: Array<{
    label: string;
    value: string;
    sub?: string;
    highlight?: boolean;
  }> = [];

  if (details.totalAcres) {
    stats.push({
      label: "Total Acres",
      value: fmt(details.totalAcres),
    });
  }

  if (details.cultivatedAcres) {
    stats.push({
      label: "Cultivated Acres",
      value: fmt(details.cultivatedAcres),
      sub: details.totalAcres
        ? `${Math.round(
            (details.cultivatedAcres / details.totalAcres) * 100
          )}% of total`
        : undefined,
    });
  }

  if (details.pastureAcres) {
    stats.push({
      label: "Pasture / Grass",
      value: `${fmt(details.pastureAcres)} ac`,
    });
  }

  if (details.quarters) {
    stats.push({
      label: "Quarter Sections",
      value: String(details.quarters),
    });
  }

  if (details.soilClass) {
    stats.push({
      label: "Soil Class (SCIC)",
      value: details.soilClass,
    });
  }

  if (details.assessmentValue) {
    stats.push({
      label: "SAMA Assessment",
      value: fmtDollar(details.assessmentValue),
    });
  }

  if (details.pricePerAcre) {
    stats.push({
      label: "Price / Acre",
      value: fmtDollar(details.pricePerAcre),
      highlight: true,
    });
  }

  if (details.pricePerCultivatedAcre && details.cultivatedAcres) {
    stats.push({
      label: "Price / Cult. Acre",
      value: fmtDollar(details.pricePerCultivatedAcre),
      highlight: true,
    });
  }

  if (details.surfaceLeaseIncome) {
    stats.push({
      label: "Surface Lease Income",
      value: `${fmtDollar(details.surfaceLeaseIncome)}/yr`,
      sub: details.surfaceLeases
        ? `${details.surfaceLeases} leases`
        : undefined,
    });
  }

  if (stats.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="mb-3 text-xl font-bold text-gray-900">
        Farm Land Details
      </h2>
      <div className="rounded-xl border border-green-200 bg-green-50/40 p-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>

        {/* Legal descriptions */}
        {details.legalDescriptions && details.legalDescriptions.length > 0 && (
          <div className="mt-4 rounded-lg border border-gray-100 bg-white px-4 py-3">
            <p className="mb-1 text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Legal Descriptions
            </p>
            <div className="flex flex-wrap gap-2">
              {details.legalDescriptions.map((ld) => (
                <span
                  key={ld}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-mono text-gray-700"
                >
                  {ld}
                </span>
              ))}
            </div>
          </div>
        )}

        <p className="mt-3 text-[10px] text-gray-400">
          Land details extracted from listing remarks. Verify all figures with
          the listing agent.
        </p>
      </div>
    </div>
  );
}

/**
 * Parse structured farm/land details from MLS PublicRemarks text.
 * The DDF API doesn't expose parcel-level fields, but agents often
 * include cultivated acres, soil class, assessment, etc. in the
 * remarks. This utility extracts what it can.
 */

export interface FarmDetails {
  cultivatedAcres?: number;
  pastureAcres?: number;
  totalAcres?: number;
  quarters?: number;
  soilClass?: string;
  assessmentValue?: number;
  surfaceLeaseIncome?: number;
  surfaceLeases?: number;
  pricePerAcre?: number;
  pricePerCultivatedAcre?: number;
  legalDescriptions?: string[];
}

/** Remove commas from number strings, then parse */
function parseNum(s: string): number {
  return parseFloat(s.replace(/,/g, ""));
}

export function parseFarmDetails(
  remarks: string | undefined,
  totalAcres: number | undefined,
  listPrice: number
): FarmDetails | null {
  if (!remarks) return null;
  const r = remarks;
  const details: FarmDetails = {};
  let hasData = false;

  // Total acres (from API field, fallback to remarks)
  if (totalAcres && totalAcres > 0) {
    details.totalAcres = totalAcres;
  }

  // Cultivated acres — "3,462 cultivated acres", "129 cult acres", "1245 cultivated"
  const cultMatch = r.match(/([\d,]+(?:\.\d+)?)\s*(?:cultivated|cult\.?)\s*acres?/i);
  if (cultMatch) {
    details.cultivatedAcres = parseNum(cultMatch[1]);
    hasData = true;
  }

  // Pasture acres — "679 pasture acres", "200 acres of pasture"
  const pastureMatch =
    r.match(/([\d,]+(?:\.\d+)?)\s*(?:pasture|grass|native grass)\s*acres?/i) ||
    r.match(/([\d,]+(?:\.\d+)?)\s*acres?\s+(?:of\s+)?(?:pasture|grass|native grass)/i);
  if (pastureMatch) {
    details.pastureAcres = parseNum(pastureMatch[1]);
    hasData = true;
  }

  // Number of quarters — "25 quarter sections", "11 quarters"
  const qMatch = r.match(/([\d]+)\s*quarter\s*(?:sections?)?/i);
  if (qMatch) {
    details.quarters = parseInt(qMatch[1]);
    hasData = true;
  }

  // Soil class — "soil class P", "soil classes are 9 (H), 1 (J) and 1(K)", "SCIC soil class M"
  const soilMatch =
    r.match(/soil\s*class(?:es)?\s*(?:are\s*)?([A-Z0-9\s,()and]+?)(?:\.|,\s*[A-Z]|\s*SAMA|\s*\d+\s*cultivated)/i) ||
    r.match(/SCIC\s*(?:soil\s*)?class\s*([A-Z])/i) ||
    r.match(/soil\s*(?:rating|class)\s+([A-Z])/i);
  if (soilMatch) {
    details.soilClass = soilMatch[1].trim().replace(/\s+/g, " ");
    hasData = true;
  }

  // Assessment value — "assessed value of $6,182,800", "total assessment is $2,700,300"
  const assessMatch = r.match(/assess(?:ed|ment)\s*(?:value)?\s*(?:of|is|:)?\s*\$?([\d,]+)/i);
  if (assessMatch) {
    details.assessmentValue = parseNum(assessMatch[1]);
    hasData = true;
  }

  // Surface lease income — "income of $160,650 from 51 surface leases"
  const leaseIncomeMatch = r.match(/(?:income|revenue)\s*(?:of|from|:)?\s*\$?([\d,]+)\s*(?:from|per year|yearly|annually)/i);
  if (leaseIncomeMatch) {
    details.surfaceLeaseIncome = parseNum(leaseIncomeMatch[1]);
    hasData = true;
  }
  // Also try: "$37000 in yearly surface revenue"
  const leaseIncomeMatch2 = r.match(/\$?([\d,]+)\s*(?:in\s*)?(?:yearly|annual)\s*(?:surface\s*)?(?:revenue|income)/i);
  if (!details.surfaceLeaseIncome && leaseIncomeMatch2) {
    details.surfaceLeaseIncome = parseNum(leaseIncomeMatch2[1]);
    hasData = true;
  }

  // Number of surface leases
  const leaseCountMatch = r.match(/([\d]+)\s*surface\s*leases?/i);
  if (leaseCountMatch) {
    details.surfaceLeases = parseInt(leaseCountMatch[1]);
    hasData = true;
  }

  // Legal descriptions — "NW 08-53-15-2", "SE 11-26-29-2"
  const legalPattern = /\b(NW|NE|SE|SW)\s+(\d{1,2}[-–]\d{1,2}[-–]\d{1,2}[-–]\d)\b/gi;
  const legals: string[] = [];
  let lm;
  while ((lm = legalPattern.exec(r)) !== null) {
    legals.push(`${lm[1].toUpperCase()} ${lm[2]}`);
  }
  if (legals.length > 0) {
    details.legalDescriptions = legals;
    hasData = true;
  }

  // Price per acre
  if (details.totalAcres && details.totalAcres > 0) {
    details.pricePerAcre = Math.round(listPrice / details.totalAcres);
  }
  if (details.cultivatedAcres && details.cultivatedAcres > 0) {
    details.pricePerCultivatedAcre = Math.round(listPrice / details.cultivatedAcres);
  }

  // Only return if we found meaningful data beyond just price/acre
  return hasData ? details : null;
}

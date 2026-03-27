/**
 * Parse structured farm/land details from MLS PublicRemarks text
 * and structured DDF API fields.
 */

export interface FarmDetails {
  // Parsed from remarks
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
  nearestTown?: string;
  waterInfo?: string;
  // From DDF API fields
  topography?: string;
  fencing?: string;
  heating?: string;
  waterSource?: string;
  currentUse?: string;
  communityFeatures?: string;
  yearBuilt?: number;
  parking?: string;
  basement?: string;
  directions?: string;
}

function parseNum(s: string): number {
  return parseFloat(s.replace(/,/g, ""));
}

export function parseFarmDetails(
  remarks: string | undefined,
  totalAcres: number | undefined,
  listPrice: number,
  apiFields?: {
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
  }
): FarmDetails | null {
  const details: FarmDetails = {};
  let hasData = false;

  // ── Total acres ──
  if (totalAcres && totalAcres > 0) {
    details.totalAcres = totalAcres;
  }

  // ── Parse from remarks ──
  if (remarks) {
    const r = remarks;

    // Cultivated acres
    const cultMatch = r.match(
      /([\d,]+(?:\.\d+)?)\s*(?:cultivated|cult\.?)\s*acres?/i
    );
    if (cultMatch) {
      details.cultivatedAcres = parseNum(cultMatch[1]);
      hasData = true;
    }

    // Pasture / grass acres
    const pastureMatch =
      r.match(
        /([\d,]+(?:\.\d+)?)\s*(?:pasture|grass|native grass)\s*acres?/i
      ) ||
      r.match(
        /([\d,]+(?:\.\d+)?)\s*acres?\s+(?:of\s+)?(?:pasture|grass|native grass)/i
      );
    if (pastureMatch) {
      details.pastureAcres = parseNum(pastureMatch[1]);
      hasData = true;
    }

    // Number of quarters
    const qMatch = r.match(/([\d]+)\s*quarter\s*(?:sections?)?/i);
    if (qMatch) {
      details.quarters = parseInt(qMatch[1]);
      hasData = true;
    }

    // Soil class
    const soilMatch =
      r.match(
        /soil\s*class(?:es)?\s*(?:are\s*)?([A-Z0-9\s,()and]+?)(?:\.|,\s*[A-Z]|\s*SAMA|\s*\d+\s*cultivated)/i
      ) ||
      r.match(/SCIC\s*(?:soil\s*)?class\s*([A-Z])/i) ||
      r.match(/soil\s*(?:rating|class)\s+([A-Z])/i) ||
      r.match(/rated\s+([A-Z](?:\s*and\s*[A-Z])?)\s+by\s+SCIC/i);
    if (soilMatch) {
      details.soilClass = soilMatch[1].trim().replace(/\s+/g, " ");
      hasData = true;
    }

    // Assessment value
    const assessMatch = r.match(
      /assess(?:ed|ment)\s*(?:value)?\s*(?:of|is|:)?\s*\$?([\d,]+)/i
    );
    if (assessMatch) {
      details.assessmentValue = parseNum(assessMatch[1]);
      hasData = true;
    }

    // Surface lease income
    const leaseIncomeMatch = r.match(
      /(?:income|revenue)\s*(?:of|from|:)?\s*\$?([\d,]+)\s*(?:from|per year|yearly|annually)/i
    );
    if (leaseIncomeMatch) {
      details.surfaceLeaseIncome = parseNum(leaseIncomeMatch[1]);
      hasData = true;
    }
    const leaseIncomeMatch2 = r.match(
      /\$?([\d,]+)\s*(?:in\s*)?(?:yearly|annual)\s*(?:surface\s*)?(?:revenue|income)/i
    );
    if (!details.surfaceLeaseIncome && leaseIncomeMatch2) {
      details.surfaceLeaseIncome = parseNum(leaseIncomeMatch2[1]);
      hasData = true;
    }

    // Surface lease count
    const leaseCountMatch = r.match(/([\d]+)\s*surface\s*leases?/i);
    if (leaseCountMatch) {
      details.surfaceLeases = parseInt(leaseCountMatch[1]);
      hasData = true;
    }

    // Legal descriptions
    const legalPattern =
      /\b(NW|NE|SE|SW)\s+(\d{1,2}[-–]\d{1,2}[-–]\d{1,2}[-–]\d)\b/gi;
    const legals: string[] = [];
    let lm;
    while ((lm = legalPattern.exec(r)) !== null) {
      legals.push(`${lm[1].toUpperCase()} ${lm[2]}`);
    }
    if (legals.length > 0) {
      details.legalDescriptions = legals;
      hasData = true;
    }

    // Nearest town — "south of Tribune", "north of Love", "near Grayson", "Dodsland, Plenty and Stranraer area"
    const townMatch =
      r.match(
        /(?:south|north|east|west|miles?\s+(?:from|to))\s+(?:of\s+)?([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/
      ) ||
      r.match(/(?:near|close to|outside of)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
    if (townMatch) {
      details.nearestTown = townMatch[1];
      hasData = true;
    }

    // Water info from remarks
    const waterMatch = r.match(
      /(?:water|well|dugout|creek|river|lake|slough|pond)[^.]{0,80}/i
    );
    if (waterMatch) {
      // Clean up — take just a useful snippet
      const snippet = waterMatch[0].trim();
      if (snippet.length > 10 && snippet.length < 120) {
        details.waterInfo = snippet;
        hasData = true;
      }
    }
  }

  // ── DDF API fields ──
  if (apiFields) {
    if (apiFields.lotFeatures?.length) {
      details.topography = apiFields.lotFeatures.join(", ");
      hasData = true;
    }
    if (apiFields.fencing?.length) {
      details.fencing = apiFields.fencing.join(", ");
      hasData = true;
    }
    if (apiFields.heating?.length) {
      details.heating = apiFields.heating.join(", ");
      hasData = true;
    }
    if (apiFields.waterSource?.length) {
      details.waterSource = apiFields.waterSource.join(", ");
      hasData = true;
    }
    if (apiFields.currentUse?.length) {
      details.currentUse = apiFields.currentUse.join(", ");
      hasData = true;
    }
    if (apiFields.communityFeatures?.length) {
      details.communityFeatures = apiFields.communityFeatures.join(", ");
      hasData = true;
    }
    if (apiFields.yearBuilt) {
      details.yearBuilt = apiFields.yearBuilt;
      hasData = true;
    }
    if (apiFields.parkingFeatures?.length) {
      details.parking = apiFields.parkingFeatures.join(", ");
      hasData = true;
    }
    if (apiFields.basement?.length) {
      details.basement = apiFields.basement.join(", ");
      hasData = true;
    }
    if (apiFields.directions) {
      details.directions = apiFields.directions;
      hasData = true;
    }
  }

  // ── Calculated ──
  if (details.totalAcres && details.totalAcres > 0) {
    details.pricePerAcre = Math.round(listPrice / details.totalAcres);
  }
  if (details.cultivatedAcres && details.cultivatedAcres > 0) {
    details.pricePerCultivatedAcre = Math.round(
      listPrice / details.cultivatedAcres
    );
  }

  return hasData ? details : null;
}

import type { ServiceAreaEntry } from "@/types";
import { deriveDefaultStatus } from "@/lib/service-area/public-message";

/**
 * Where the studio works: every EU member state, plus Serbia (home base).
 * Each country offers discovery, a structured brief, remote design and scope definition;
 * local partner and execution coordination are agreed case by case.
 * "GR" is Greece (the EU itself uses "EL"; people type GR).
 */
const eu = {
  discoveryAvailable: true,
  remoteDesignAvailable: true,
  scopeDefinitionAvailable: true,
  partnerCoordinationAvailable: false,
  executionCoordinationAvailable: false,
  additionalPublicNote: null,
  internalNote: "EU member state.",
};

const raw: Omit<ServiceAreaEntry, "status">[] = [
  { countryCode: "AT", countryName: "Austria", ...eu },
  { countryCode: "BE", countryName: "Belgium", ...eu },
  { countryCode: "BG", countryName: "Bulgaria", ...eu },
  { countryCode: "HR", countryName: "Croatia", ...eu },
  { countryCode: "CY", countryName: "Cyprus", ...eu },
  { countryCode: "CZ", countryName: "Czechia", ...eu },
  { countryCode: "DK", countryName: "Denmark", ...eu },
  { countryCode: "EE", countryName: "Estonia", ...eu },
  { countryCode: "FI", countryName: "Finland", ...eu },
  { countryCode: "FR", countryName: "France", ...eu },
  { countryCode: "DE", countryName: "Germany", ...eu },
  { countryCode: "GR", countryName: "Greece", ...eu },
  { countryCode: "HU", countryName: "Hungary", ...eu },
  { countryCode: "IE", countryName: "Ireland", ...eu },
  { countryCode: "IT", countryName: "Italy", ...eu },
  { countryCode: "LV", countryName: "Latvia", ...eu },
  { countryCode: "LT", countryName: "Lithuania", ...eu },
  { countryCode: "LU", countryName: "Luxembourg", ...eu },
  { countryCode: "MT", countryName: "Malta", ...eu },
  { countryCode: "NL", countryName: "Netherlands", ...eu },
  { countryCode: "PL", countryName: "Poland", ...eu },
  { countryCode: "PT", countryName: "Portugal", ...eu },
  { countryCode: "RO", countryName: "Romania", ...eu },
  { countryCode: "SK", countryName: "Slovakia", ...eu },
  { countryCode: "SI", countryName: "Slovenia", ...eu },
  { countryCode: "ES", countryName: "Spain", ...eu },
  { countryCode: "SE", countryName: "Sweden", ...eu },
  { countryCode: "RS", countryName: "Serbia", ...eu, internalNote: "Home base." },
];

export const serviceAreas: ServiceAreaEntry[] = raw.map((entry) => ({ ...entry, status: deriveDefaultStatus(entry) }));

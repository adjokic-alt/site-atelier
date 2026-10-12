import { serviceAreas } from "@/config/service-areas.config";
import { buildPublicMessage } from "@/lib/service-area/public-message";

const statusLabel = {
  en: { available: "We work here", "review-required": "We work here", "not-available": "Not available yet" },
  sr: { available: "Radimo ovde", "review-required": "Radimo ovde", "not-available": "Još nije dostupno" },
} as const;

export function getServiceAreaMessage(country: string, locale: "en" | "sr" = "en") {
  const key = country.trim().toUpperCase();
  const entry = serviceAreas.find((item) => item.countryCode.toUpperCase() === key);
  return entry ? { status: statusLabel[locale][entry.status] ?? entry.status, message: buildPublicMessage(entry, locale) } : null;
}

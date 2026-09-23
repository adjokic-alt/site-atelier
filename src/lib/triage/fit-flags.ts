import type { ClientBrief } from "@/types";
import type { ClientFitFlag } from "@/types/submission";
import { serviceAreas } from "@/config/service-areas.config";

export function computeClientFitFlags(brief: ClientBrief): ClientFitFlag[] {
  const flags: ClientFitFlag[] = [];
  const area = serviceAreas.find((item) => item.countryCode.toUpperCase() === brief.project.country.toUpperCase());

  if (!area || area.status === "not-available") {
    flags.push({ type: "country-not-available", detail: "Service availability for this location must be reviewed individually." });
  } else if (area.status === "review-required") {
    flags.push({ type: "country-review-required", detail: "Availability for this location requires an individual review." });
  }

  if (brief.budget.startWindow === "asap") {
    flags.push({ type: "urgent-timeline", detail: "The requested timing may require clarification before availability can be confirmed." });
  }

  if (!brief.style.primaryStyleId || !brief.budget.rangeId || (!brief.goals.goalIds.length && !brief.goals.ownWords.trim())) {
    flags.push({ type: "brief-incomplete", detail: "The brief can be reviewed, but a few open questions may need clarification." });
  }

  return flags;
}

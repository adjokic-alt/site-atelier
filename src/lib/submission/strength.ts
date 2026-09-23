import type { ClientBrief } from "@/types";
import type { SubmissionStrengthLevel } from "@/types/submission";

export function computeSubmissionStrength(brief: ClientBrief): SubmissionStrengthLevel {
  const checks = [
    Boolean(brief.style.primaryStyleId),
    brief.project.projectCategoryIds.length > 0,
    Boolean(brief.project.country),
    brief.goals.goalIds.length > 0 || brief.goals.ownWords.trim().length >= 30,
    Boolean(brief.space.propertyType || brief.space.notes.trim()),
    Boolean(brief.budget.rangeId),
    Boolean(brief.budget.startWindow),
    brief.visuals.moodboardItemIds.length >= 3 || brief.visuals.localFileNames.length > 0,
    Boolean(brief.contact.name && brief.contact.email),
  ];
  const completed = checks.filter(Boolean).length;
  if (completed >= 8) return "detailed";
  if (completed >= 5) return "solid";
  return "starter";
}

import type { ClientBrief } from "@/types";
export type BriefStrengthLevel = "starter" | "solid" | "detailed";
export interface BriefStrength { level: BriefStrengthLevel; completedSections: number; totalSections: number; suggestions: { label: string; href: string }[]; }
export function getBriefStrength(brief: ClientBrief): BriefStrength {
  const checks = [Boolean(brief.style.primaryStyleId), brief.project.projectCategoryIds.length > 0, Boolean(brief.project.country), brief.goals.goalIds.length > 0 || brief.goals.ownWords.trim().length > 30, Boolean(brief.budget.rangeId), brief.visuals.moodboardItemIds.length >= 3 || brief.visuals.uploadedAssetIds.length >= 1, Boolean(brief.contact.name && brief.contact.email)];
  const completedSections = checks.filter(Boolean).length;
  const level: BriefStrengthLevel = completedSections >= 6 ? "detailed" : completedSections >= 3 ? "solid" : "starter";
  const suggestions = [
    !checks[0] && { label: "Choose a style", href: "/styles" },
    !checks[1] && { label: "Add a project type", href: "/inquiry/project" },
    !checks[2] && { label: "Add the country", href: "/inquiry/project" },
    !checks[4] && { label: "Choose a budget range", href: "/inquiry/budget" },
    !checks[5] && { label: "Save inspiration", href: "/inspiration" },
  ].filter((item): item is { label: string; href: string } => Boolean(item)).slice(0, 3);
  return { level, completedSections, totalSections: checks.length, suggestions };
}

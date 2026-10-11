import type { ClientBrief } from "@/types";
import type { ClientFitFlag, InternalTriageResult, SubmissionStrengthLevel } from "@/types/submission";

export function computeInternalTriage(
  brief: ClientBrief,
  strengthLevel: SubmissionStrengthLevel,
  fitFlags: ClientFitFlag[],
): InternalTriageResult {
  const unavailableCoordination = brief.project.helpNeeded.includes("coordinate-through-completion") && fitFlags.some((flag) => flag.type.startsWith("country-"));
  const suggestedPriority =
    strengthLevel === "starter" || unavailableCoordination
      ? "clarify-before-reply"
      : fitFlags.some((flag) => flag.type.includes("review") || flag.type.includes("not-available"))
        ? "review-first"
        : "standard";

  return {
    strengthLevel,
    fitFlags,
    suggestedPriority,
    computedAt: new Date().toISOString(),
  };
}

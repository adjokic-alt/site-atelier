export type SubmissionStrengthLevel = "starter" | "solid" | "detailed";
export type ClientFitFlagType =
  | "country-not-available"
  | "country-review-required"
  | "urgent-timeline"
  | "brief-incomplete";

export interface ClientFitFlag {
  type: ClientFitFlagType;
  detail: string;
}

export interface InternalTriageResult {
  strengthLevel: SubmissionStrengthLevel;
  fitFlags: ClientFitFlag[];
  suggestedPriority: "standard" | "review-first" | "clarify-before-reply";
  computedAt: string;
}

export interface SubmissionSuccessResponse {
  success: true;
  referenceCode: string;
  submittedAt: string;
  strengthLevel: SubmissionStrengthLevel;
  clientFlags: ClientFitFlag[];
  demoMode: boolean;
  duplicate: boolean;
}

export interface SubmissionErrorResponse {
  success: false;
  error: "validation_failed" | "spam_detected" | "server_error";
  message: string;
  fieldErrors?: Record<string, string>;
}

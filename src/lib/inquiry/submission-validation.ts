import type { ClientBrief } from "@/types";
import type { InquiryStepId } from "./steps";

export type SubmissionField =
  | "projectCategoryIds"
  | "country"
  | "name"
  | "email"
  | "privacyAccepted";

export interface SubmissionFieldError {
  field: SubmissionField;
  step: InquiryStepId;
  message: string;
  targetId: string;
}

export const INQUIRY_ERRORS_KEY = "site-atelier:inquiry-errors";

export function validateBriefForSubmission(brief: ClientBrief): SubmissionFieldError[] {
  const errors: SubmissionFieldError[] = [];
  if (brief.project.projectCategoryIds.length === 0) {
    errors.push({ field: "projectCategoryIds", step: "project", message: "Choose at least one project category.", targetId: "project-category-field" });
  }
  if (!brief.project.country.trim()) {
    errors.push({ field: "country", step: "project", message: "Add the project country.", targetId: "country-field" });
  }
  if (!brief.contact.name.trim()) {
    errors.push({ field: "name", step: "review", message: "Add your name.", targetId: "name-field" });
  }
  if (!/^\S+@\S+\.\S+$/.test(brief.contact.email)) {
    errors.push({ field: "email", step: "review", message: "Enter a valid email address.", targetId: "email-field" });
  }
  if (!brief.contact.privacyAccepted) {
    errors.push({ field: "privacyAccepted", step: "review", message: "Privacy consent is required.", targetId: "privacy-field" });
  }
  return errors;
}

export function saveInquiryErrors(errors: SubmissionFieldError[]) {
  window.sessionStorage.setItem(INQUIRY_ERRORS_KEY, JSON.stringify(errors));
}

export function loadInquiryErrors(): SubmissionFieldError[] {
  try {
    const raw = window.sessionStorage.getItem(INQUIRY_ERRORS_KEY);
    return raw ? (JSON.parse(raw) as SubmissionFieldError[]) : [];
  } catch {
    return [];
  }
}

export function clearInquiryError(field: SubmissionField) {
  saveInquiryErrors(loadInquiryErrors().filter((error) => error.field !== field));
}

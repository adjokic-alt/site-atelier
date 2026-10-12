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

const messages = {
  en: { space: "Choose at least one space.", country: "Add the project country.", name: "Add your name.", email: "Enter a valid email address.", privacy: "Privacy consent is required." },
  sr: { space: "Izaberite bar jedan prostor.", country: "Unesite državu projekta.", name: "Unesite svoje ime.", email: "Unesite ispravnu imejl adresu.", privacy: "Potrebna je saglasnost za privatnost." },
};

export function validateBriefForSubmission(brief: ClientBrief, locale: "en" | "sr" = "en"): SubmissionFieldError[] {
  const errors: SubmissionFieldError[] = [];
  const m = messages[locale];
  if (brief.project.projectCategoryIds.length === 0) {
    errors.push({ field: "projectCategoryIds", step: "space", message: m.space, targetId: "project-category-field" });
  }
  if (!brief.project.country.trim()) {
    errors.push({ field: "country", step: "project", message: m.country, targetId: "country-field" });
  }
  if (!brief.contact.name.trim()) {
    errors.push({ field: "name", step: "review", message: m.name, targetId: "name-field" });
  }
  if (!/^\S+@\S+\.\S+$/.test(brief.contact.email)) {
    errors.push({ field: "email", step: "review", message: m.email, targetId: "email-field" });
  }
  if (!brief.contact.privacyAccepted) {
    errors.push({ field: "privacyAccepted", step: "review", message: m.privacy, targetId: "privacy-field" });
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

"use client";
import { useEffect, useState } from "react";
import { Card, Input } from "@/components/ui";
import { useBrief } from "@/providers/BriefProvider";
import { SubmitBriefPanel } from "./SubmitBriefPanel";
import { ValidationErrorSummary } from "./ValidationErrorSummary";
import {
  clearInquiryError,
  loadInquiryErrors,
  type SubmissionField,
  type SubmissionFieldError,
} from "@/lib/inquiry/submission-validation";

export function ReviewSubmission() {
  const { brief, dispatch } = useBrief();
  const [errors, setErrors] = useState<SubmissionFieldError[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const loaded = loadInquiryErrors().filter((error) => error.step === "review");
      setErrors(loaded);
      const hash = window.location.hash.slice(1);
      if (hash) {
        document.getElementById(hash)?.focus();
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const fieldError = (field: SubmissionField) => errors.find((error) => error.field === field)?.message;
  const resolve = (field: SubmissionField) => {
    clearInquiryError(field);
    setErrors((current) => current.filter((error) => error.field !== field));
  };

  return (
    <>
      <ValidationErrorSummary errors={errors} />
      <Card>
        <dl className="grid gap-4 text-sm sm:grid-cols-2">
          <div><dt className="text-ink-500">Style</dt><dd className="capitalize">{brief.style.primaryStyleId ?? "Not selected"}</dd></div>
          <div><dt className="text-ink-500">Project</dt><dd>{brief.project.projectCategoryIds.join(", ") || "Not selected"}</dd></div>
          <div><dt className="text-ink-500">Location</dt><dd>{[brief.project.city, brief.project.country].filter(Boolean).join(", ") || "Not added"}</dd></div>
          <div><dt className="text-ink-500">Budget</dt><dd>{brief.budget.rangeId ?? "Not selected"}</dd></div>
          <div><dt className="text-ink-500">Moodboard</dt><dd>{brief.visuals.moodboardItemIds.length} saved</dd></div>
          <div><dt className="text-ink-500">Files</dt><dd>{brief.visuals.localFileNames.length} selected</dd></div>
        </dl>
      </Card>

      <div className="grid gap-5 sm:grid-cols-2">
        <div id="name-field" tabIndex={-1} className={fieldError("name") ? "rounded-lg ring-2 ring-error ring-offset-2" : ""}>
          <Input label="Name" value={brief.contact.name} error={fieldError("name")} onChange={(event) => { dispatch({ type: "SET_CONTACT", name: event.target.value }); if (event.target.value.trim()) resolve("name"); }} />
        </div>
        <div id="email-field" tabIndex={-1} className={fieldError("email") ? "rounded-lg ring-2 ring-error ring-offset-2" : ""}>
          <Input label="Email" type="email" value={brief.contact.email} error={fieldError("email")} onChange={(event) => { dispatch({ type: "SET_CONTACT", email: event.target.value }); if (/^\S+@\S+\.\S+$/.test(event.target.value)) resolve("email"); }} />
        </div>
      </div>

      <div id="privacy-field" tabIndex={-1} className={`rounded-lg p-3 ${fieldError("privacyAccepted") ? "border-2 border-error bg-red-50" : ""}`}>
        <label className="flex gap-3 text-sm text-ink-700">
          <input type="checkbox" checked={brief.contact.privacyAccepted} aria-invalid={Boolean(fieldError("privacyAccepted"))} onChange={(event) => { dispatch({ type: "SET_CONTACT", privacyAccepted: event.target.checked }); if (event.target.checked) resolve("privacyAccepted"); }} />
          <span>I accept the placeholder privacy terms for this demo.</span>
        </label>
        {fieldError("privacyAccepted") ? <p role="alert" className="mt-2 text-sm font-medium text-error">{fieldError("privacyAccepted")}</p> : null}
      </div>

      <SubmitBriefPanel />
    </>
  );
}

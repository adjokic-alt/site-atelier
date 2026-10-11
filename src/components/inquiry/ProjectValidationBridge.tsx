"use client";
import { useEffect, useState } from "react";
import type { InquiryStepId } from "@/lib/inquiry/steps";
import {
  clearInquiryError,
  loadInquiryErrors,
  type SubmissionField,
  type SubmissionFieldError,
} from "@/lib/inquiry/submission-validation";
import { ValidationErrorSummary } from "./ValidationErrorSummary";

export function useProjectValidation(step: InquiryStepId = "project") {
  const [errors, setErrors] = useState<SubmissionFieldError[]>([]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const loaded = loadInquiryErrors().filter((error) => error.step === step);
      setErrors(loaded);
      const hash = window.location.hash.slice(1);
      if (hash) {
        const target = document.getElementById(hash);
        target?.focus();
        target?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [step]);
  const fieldError = (field: SubmissionField) => errors.find((error) => error.field === field)?.message;
  const resolve = (field: SubmissionField) => {
    clearInquiryError(field);
    setErrors((current) => current.filter((error) => error.field !== field));
  };
  return { errors, fieldError, resolve };
}

export function ProjectErrorSummary({ errors }: { errors: SubmissionFieldError[] }) {
  return <ValidationErrorSummary errors={errors} />;
}

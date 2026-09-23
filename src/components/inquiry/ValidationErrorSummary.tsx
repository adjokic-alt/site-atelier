"use client";
import Link from "next/link";
import type { SubmissionFieldError } from "@/lib/inquiry/submission-validation";

export function ValidationErrorSummary({ errors }: { errors: SubmissionFieldError[] }) {
  if (!errors.length) return null;
  return (
    <div role="alert" aria-labelledby="validation-title" className="rounded-lg border-2 border-error bg-red-50 p-5 text-left">
      <h2 id="validation-title" className="font-display text-h3 text-ink-900">Complete {errors.length} required {errors.length === 1 ? "item" : "items"} before sending</h2>
      <ul className="mt-4 space-y-2">
        {errors.map((error) => (
          <li key={error.field}>
            <Link href={`/inquiry/${error.step}#${error.targetId}`} className="focus-ring rounded-sm text-sm font-medium text-error underline underline-offset-4">{error.message}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { useBrief } from "@/providers/BriefProvider";
import type { SubmissionErrorResponse, SubmissionSuccessResponse } from "@/types/submission";
import { saveInquiryErrors, validateBriefForSubmission } from "@/lib/inquiry/submission-validation";
import { TurnstileWidget } from "./TurnstileWidget";
import { useLocale } from "@/i18n/client";

export function SubmitBriefPanel() {
  const { brief: draft } = useBrief();
  const locale = useLocale();
  const sr = locale === "sr";
  // The brief travels with the language it was written in, so the PDF and email match.
  const brief = { ...draft, locale };
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [resetSignal, setResetSignal] = useState(0);
  const turnstileEnabled = process.env.NEXT_PUBLIC_TURNSTILE_ENABLED === "true";

  async function submit() {
    if (status === "submitting") return;
    const clientErrors = validateBriefForSubmission(brief, locale);
    if (clientErrors.length) {
      saveInquiryErrors(clientErrors);
      const first = clientErrors[0];
      router.push(`/inquiry/${first.step}#${first.targetId}`);
      return;
    }

    if (turnstileEnabled && !turnstileToken) {
      setStatus("error");
      setMessage(sr ? "Pre slanja dovršite proveru da niste robot." : "Complete the bot verification before sending.");
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brief, companyWebsite, turnstileToken }),
      });
      const data = (await response.json()) as SubmissionSuccessResponse | SubmissionErrorResponse;
      if (!response.ok || !data.success) {
        const details = !data.success && data.fieldErrors
          ? Object.values(data.fieldErrors).slice(0, 3).join(" ")
          : "";
        const errorMessage = sr
          ? "Brief nije mogao da bude poslat."
          : "message" in data
            ? data.message
            : "The brief could not be submitted.";
        throw new Error(`${errorMessage} ${details}`.trim());
      }

      window.sessionStorage.removeItem("site-atelier:inquiry-errors");
      window.sessionStorage.setItem("site-atelier:last-submission", JSON.stringify(data));
      router.push(`/inquiry/thank-you?reference=${encodeURIComponent(data.referenceCode)}`);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : sr ? "Brief nije mogao da bude poslat." : "The brief could not be submitted.");
      setResetSignal((current) => current + 1);
    }
  }

  return (
    <div className="space-y-4">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company-website">Company website</label>
        <input id="company-website" tabIndex={-1} autoComplete="off" value={companyWebsite} onChange={(event) => setCompanyWebsite(event.target.value)} />
      </div>

      <TurnstileWidget onToken={setTurnstileToken} resetSignal={resetSignal} />

      <Button size="lg" isLoading={status === "submitting"} disabled={status === "submitting"} onClick={submit}>
        {sr ? "Pošaljite moj brief" : "Send my brief"}
      </Button>
      <p className="text-sm text-ink-500">
        {sr ? "Vaš brief se bezbedno proverava pre nego što se sačuva i pošalje na pregled." : "Your brief is validated securely before it is stored and sent for review."}
      </p>
      {status === "error" ? (
        <p role="alert" className="text-sm text-error">
          {message} {sr ? "Vaš brief ostaje sačuvan u ovom pregledaču." : "Your brief remains saved in this browser."}
        </p>
      ) : null}
    </div>
  );
}

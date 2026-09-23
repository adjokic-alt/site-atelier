"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { useBrief } from "@/providers/BriefProvider";
import type { SubmissionErrorResponse, SubmissionSuccessResponse } from "@/types/submission";
import { saveInquiryErrors, validateBriefForSubmission } from "@/lib/inquiry/submission-validation";

export function SubmitBriefPanel() {
  const { brief } = useBrief();
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  async function submit() {
    if (status === "submitting") return;
    const clientErrors = validateBriefForSubmission(brief);
    if (clientErrors.length) {
      saveInquiryErrors(clientErrors);
      const first = clientErrors[0];
      router.push(`/inquiry/${first.step}#${first.targetId}`);
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch("/api/brief", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ brief, companyWebsite }) });
      const data = (await response.json()) as SubmissionSuccessResponse | SubmissionErrorResponse;
      if (!response.ok || !data.success) {
        const details = !data.success && data.fieldErrors ? Object.values(data.fieldErrors).slice(0, 3).join(" ") : "";
        const errorMessage = "message" in data ? data.message : "The brief could not be submitted.";
        throw new Error(`${errorMessage} ${details}`.trim());
      }
      window.sessionStorage.removeItem("site-atelier:inquiry-errors");
      window.sessionStorage.setItem("site-atelier:last-submission", JSON.stringify(data));
      router.push(`/inquiry/thank-you?reference=${encodeURIComponent(data.referenceCode)}`);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The brief could not be submitted.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="company-website">Company website</label><input id="company-website" tabIndex={-1} autoComplete="off" value={companyWebsite} onChange={(event) => setCompanyWebsite(event.target.value)} /></div>
      <Button size="lg" isLoading={status === "submitting"} disabled={status === "submitting"} onClick={submit}>Send my brief</Button>
      <p className="text-sm text-ink-500">Demo mode: the server validates the brief and prints two email previews to the server log. No real email is sent.</p>
      {status === "error" ? <p role="alert" className="text-sm text-error">{message} Your brief remains saved in this browser.</p> : null}
    </div>
  );
}

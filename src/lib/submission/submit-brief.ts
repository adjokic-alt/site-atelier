import type { ClientBrief } from "@/types";
import type { SubmissionSuccessResponse } from "@/types/submission";
import { renderCustomerBriefPdf } from "@/lib/pdf/customer-brief";
import { consoleEmailAdapter } from "@/lib/adapters/email/console-log";
import { getSubmissionStore } from "./idempotency";
import { createReferenceCode } from "./reference-code";
import { computeSubmissionStrength } from "./strength";
import { computeClientFitFlags } from "@/lib/triage/fit-flags";
import { computeInternalTriage } from "@/lib/triage/internal-triage";

export async function submitBrief(brief: ClientBrief): Promise<SubmissionSuccessResponse> {
  const store = getSubmissionStore();
  const existing = store.get(brief.id);
  if (existing) return { ...existing, duplicate: true };

  const submittedAt = new Date().toISOString();
  const referenceCode = createReferenceCode(brief.id, submittedAt);
  const strengthLevel = computeSubmissionStrength(brief);
  const clientFlags = computeClientFitFlags(brief);
  const triage = computeInternalTriage(brief, strengthLevel, clientFlags);
  const pdfBytes = await renderCustomerBriefPdf(brief);
  const pdfFileName = `project-brief-${referenceCode}.pdf`;

  const result: SubmissionSuccessResponse = {
    success: true,
    referenceCode,
    submittedAt,
    strengthLevel,
    clientFlags,
    demoMode: true,
    duplicate: false,
  };

  await consoleEmailAdapter.sendCustomerConfirmation({ brief, result, triage, pdfFileName, pdfSizeBytes: pdfBytes.length });
  await consoleEmailAdapter.sendInternalNotification({ brief, result, triage, pdfFileName, pdfSizeBytes: pdfBytes.length });

  store.set(brief.id, result);
  return result;
}

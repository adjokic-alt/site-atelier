import type { ClientBrief } from "@/types";
import type { SubmissionSuccessResponse } from "@/types/submission";
import { renderCustomerBriefPdf } from "@/lib/pdf/customer-brief";
import { consoleEmailAdapter } from "@/lib/adapters/email/console-log";
import { sendProductionEmails } from "@/lib/adapters/email/resend";
import {
  findInquiryByBriefId,
  persistInquiry,
  storeEmailIds,
} from "@/lib/adapters/database/supabase-inquiries";
import { integrationConfig } from "@/lib/integrations/env";
import { getSubmissionStore } from "./idempotency";
import { createReferenceCode } from "./reference-code";
import { computeSubmissionStrength } from "./strength";
import { computeClientFitFlags } from "@/lib/triage/fit-flags";
import { computeInternalTriage } from "@/lib/triage/internal-triage";

export async function submitBrief(
  brief: ClientBrief,
): Promise<SubmissionSuccessResponse> {
  const memoryStore = getSubmissionStore();
  const memoryResult = memoryStore.get(brief.id);
  if (memoryResult) return { ...memoryResult, duplicate: true };

  if (integrationConfig.productionIntegrationsEnabled) {
    const persisted = await findInquiryByBriefId(brief.id);
    if (persisted) {
      memoryStore.set(brief.id, persisted);
      return persisted;
    }
  }

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
    demoMode: !integrationConfig.productionIntegrationsEnabled,
    duplicate: false,
  };

  const emailContext = {
    brief,
    result,
    triage,
    pdfFileName,
    pdfSizeBytes: pdfBytes.length,
  };

  if (integrationConfig.productionIntegrationsEnabled) {
    await persistInquiry({ brief, result, triage, pdfFileName });
    const ids = await sendProductionEmails({ ...emailContext, pdfBytes });
    await storeEmailIds(
      brief.id,
      ids.customerEmailId,
      ids.internalEmailId,
    );
  } else {
    await consoleEmailAdapter.sendCustomerConfirmation(emailContext);
    await consoleEmailAdapter.sendInternalNotification(emailContext);
  }

  memoryStore.set(brief.id, result);
  return result;
}

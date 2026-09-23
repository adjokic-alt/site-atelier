import type { ClientBrief } from "@/types";
import type { InternalTriageResult, SubmissionSuccessResponse } from "@/types/submission";

export interface DemoEmailContext {
  brief: ClientBrief;
  result: SubmissionSuccessResponse;
  triage: InternalTriageResult;
  pdfFileName: string;
  pdfSizeBytes: number;
}

export interface EmailAdapter {
  sendCustomerConfirmation(context: DemoEmailContext): Promise<void>;
  sendInternalNotification(context: DemoEmailContext): Promise<void>;
}

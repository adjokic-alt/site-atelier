import { createClient } from "@supabase/supabase-js";
import type { ClientBrief } from "@/types";
import type {
  InternalTriageResult,
  SubmissionSuccessResponse,
} from "@/types/submission";
import { integrationConfig } from "@/lib/integrations/env";

interface PersistInquiryInput {
  brief: ClientBrief;
  result: SubmissionSuccessResponse;
  triage: InternalTriageResult;
  pdfFileName: string;
}

interface ExistingInquiry {
  reference_code: string;
  submitted_at: string;
  strength_level: SubmissionSuccessResponse["strengthLevel"];
  fit_flags: SubmissionSuccessResponse["clientFlags"];
}

function client() {
  return createClient(
    integrationConfig.supabaseUrl,
    integrationConfig.supabaseServiceRoleKey,
    {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { headers: { "X-Client-Info": "site-atelier-server" } },
    },
  );
}

export async function findInquiryByBriefId(
  briefId: string,
): Promise<SubmissionSuccessResponse | null> {
  const { data, error } = await client()
    .from("inquiries")
    .select("reference_code,submitted_at,strength_level,fit_flags")
    .eq("brief_id", briefId)
    .maybeSingle<ExistingInquiry>();

  if (error) throw new Error(`Supabase inquiry lookup failed: ${error.message}`);
  if (!data) return null;

  return {
    success: true,
    referenceCode: data.reference_code,
    submittedAt: data.submitted_at,
    strengthLevel: data.strength_level,
    clientFlags: data.fit_flags,
    demoMode: true,
    duplicate: true,
  };
}

export async function persistInquiry({
  brief,
  result,
  triage,
  pdfFileName,
}: PersistInquiryInput): Promise<void> {
  const { error } = await client().from("inquiries").insert({
    brief_id: brief.id,
    reference_code: result.referenceCode,
    status: "new",
    customer_name: brief.contact.name,
    customer_email: brief.contact.email,
    customer_phone: brief.contact.phone,
    project_country: brief.project.country,
    project_categories: brief.project.projectCategoryIds,
    primary_style: brief.style.primaryStyleId,
    budget_currency: brief.budget.currency,
    budget_range: brief.budget.rangeId,
    strength_level: result.strengthLevel,
    triage_priority: triage.suggestedPriority,
    fit_flags: triage.fitFlags,
    brief_data: brief,
    pdf_file_name: pdfFileName,
    submitted_at: result.submittedAt,
  });

  if (error?.code === "23505") return;
  if (error) throw new Error(`Supabase inquiry insert failed: ${error.message}`);
}

export async function storeEmailIds(
  briefId: string,
  customerEmailId: string | null,
  internalEmailId: string | null,
): Promise<void> {
  const { error } = await client()
    .from("inquiries")
    .update({
      customer_email_id: customerEmailId,
      internal_email_id: internalEmailId,
    })
    .eq("brief_id", briefId);

  if (error) throw new Error(`Supabase email update failed: ${error.message}`);
}

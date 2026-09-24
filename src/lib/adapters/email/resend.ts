import { Resend } from "resend";
import type { DemoEmailContext } from "./types";
import { integrationConfig } from "@/lib/integrations/env";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function sendProductionEmails(
  context: DemoEmailContext & { pdfBytes: Uint8Array },
): Promise<{ customerEmailId: string | null; internalEmailId: string | null }> {
  const resend = new Resend(integrationConfig.resendApiKey);
  const attachment = Buffer.from(context.pdfBytes).toString("base64");
  const reference = escapeHtml(context.result.referenceCode);
  const name = escapeHtml(context.brief.contact.name);

  const customer = await resend.emails.send({
    from: integrationConfig.resendFromEmail,
    to: [context.brief.contact.email],
    subject: `We received your project brief - ${context.result.referenceCode}`,
    html: `<h1>Thank you, ${name}</h1><p>Your project brief has been received.</p><p><strong>Reference:</strong> ${reference}</p><p>The next step is a human review of scope and availability.</p>`,
    attachments: [{
      content: attachment,
      filename: context.pdfFileName,
    }],
  });
  if (customer.error) {
    throw new Error(`Customer email failed: ${customer.error.message}`);
  }

  const internal = await resend.emails.send({
    from: integrationConfig.resendFromEmail,
    to: [integrationConfig.inquiryNotificationEmail],
    replyTo: context.brief.contact.email,
    subject: `New project brief - ${context.result.referenceCode}`,
    html: `<h1>New project brief</h1><p><strong>Reference:</strong> ${reference}</p><p><strong>Customer:</strong> ${name}</p><p><strong>Country:</strong> ${escapeHtml(context.brief.project.country)}</p><p><strong>Priority:</strong> ${escapeHtml(context.triage.suggestedPriority)}</p><p><strong>Strength:</strong> ${escapeHtml(context.result.strengthLevel)}</p>`,
    attachments: [{
      content: attachment,
      filename: context.pdfFileName,
    }],
  });
  if (internal.error) {
    throw new Error(`Internal email failed: ${internal.error.message}`);
  }

  return {
    customerEmailId: customer.data?.id ?? null,
    internalEmailId: internal.data?.id ?? null,
  };
}

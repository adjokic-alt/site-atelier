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
  // The client gets the email in the language they used on the site.
  const sr = context.brief.locale === "sr";

  const customer = await resend.emails.send({
    from: integrationConfig.resendFromEmail,
    to: [context.brief.contact.email],
    subject: sr ? `Vaš brief doma ${context.result.referenceCode}` : `Your home brief ${context.result.referenceCode}`,
    html: sr
      ? `<h1>Hvala, ${name}</h1><p>Vaš brief doma je primljen. Sve što ste izabrali — vaš stil, slike iz moodboarda i odgovori — nalazi se u priloženom PDF-u.</p><p><strong>Serijski broj:</strong> ${reference}</p><p>Dizajner će ga pročitati i javiti vam se sa sledećim korakom.</p>`
      : `<h1>Thank you, ${name}</h1><p>Your home brief has been received. Everything you chose — your style, moodboard pictures and answers — is in the attached PDF.</p><p><strong>Serial number:</strong> ${reference}</p><p>A designer will read it and get back to you with the next step.</p>`,
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
    html: `<h1>New project brief</h1><p><strong>Reference:</strong> ${reference}</p><p><strong>Language:</strong> ${sr ? "Serbian" : "English"}</p><p><strong>Customer:</strong> ${name}</p><p><strong>Country:</strong> ${escapeHtml(context.brief.project.country)}</p><p><strong>Priority:</strong> ${escapeHtml(context.triage.suggestedPriority)}</p><p><strong>Strength:</strong> ${escapeHtml(context.result.strengthLevel)}</p>`,
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

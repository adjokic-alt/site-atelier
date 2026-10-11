import type { EmailAdapter } from "./types";

export const consoleEmailAdapter: EmailAdapter = {
  async sendCustomerConfirmation({ brief, result, pdfFileName, pdfSizeBytes }) {
    console.log("\n=== DEMO CUSTOMER EMAIL ===");
    console.log(`To: ${brief.contact.email}`);
    console.log(`Subject: We received your project brief - ${result.referenceCode}`);
    console.log(`Reference: ${result.referenceCode}`);
    console.log(`Brief strength: ${result.strengthLevel}`);
    console.log("Next steps: review, honest availability check, response after review.");
    console.log(`Attachment: ${pdfFileName} (${pdfSizeBytes} bytes)`);
    console.log("Demo mode: no real email was sent.\n");
  },

  async sendInternalNotification({ brief, result, triage, pdfFileName }) {
    console.log("\n=== DEMO INTERNAL EMAIL ===");
    console.log("To: hello@example.com");
    console.log(`Subject: New brief - ${brief.project.projectCategoryIds[0] ?? "project"} - ${brief.project.country} - ${result.referenceCode}`);
    console.log(`Primary style: ${brief.style.primaryStyleId ?? "not supplied"}`);
    console.log(`Budget: ${brief.budget.currency ?? ""} ${brief.budget.rangeId ?? "not supplied"}`.trim());
    console.log(`Strength: ${result.strengthLevel}`);
    console.log(`Priority: ${triage.suggestedPriority}`);
    console.log(`Fit flags: ${triage.fitFlags.map((flag) => `${flag.type}: ${flag.detail}`).join(" | ") || "none"}`);
    console.log(`Attachment: ${pdfFileName}`);
    console.log("Demo mode: no real email was sent.\n");
  },
};

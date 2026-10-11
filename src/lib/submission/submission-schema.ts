import { z } from "zod";
import { clientBriefSchema } from "@/lib/brief/validation";

export const submissionPayloadSchema = z.object({
  brief: clientBriefSchema,
  companyWebsite: z.string().max(0, "Spam check failed.").default(""),
  turnstileToken: z.string().default(""),
});

export function validateSubmission(payload: unknown) {
  const parsed = submissionPayloadSchema.safeParse(payload);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fieldErrors[issue.path.join(".")] = issue.message;
    }
    return { success: false as const, fieldErrors };
  }

  const { brief } = parsed.data;
  const requiredErrors: Record<string, string> = {};
  if (brief.project.projectCategoryIds.length === 0) requiredErrors["brief.project.projectCategoryIds"] = "Choose at least one project category.";
  if (!brief.project.country.trim()) requiredErrors["brief.project.country"] = "Add the project country.";
  if (!brief.contact.name.trim()) requiredErrors["brief.contact.name"] = "Add your name.";
  if (!z.string().email().safeParse(brief.contact.email).success) requiredErrors["brief.contact.email"] = "Enter a valid email address.";
  if (!brief.contact.privacyAccepted) requiredErrors["brief.contact.privacyAccepted"] = "Privacy consent is required.";

  return Object.keys(requiredErrors).length
    ? { success: false as const, fieldErrors: requiredErrors }
    : { success: true as const, data: parsed.data };
}

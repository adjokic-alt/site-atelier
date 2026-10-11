import { NextResponse } from "next/server";
import type { SubmissionErrorResponse } from "@/types/submission";
import { validateSubmission } from "@/lib/submission/submission-schema";
import { submitBrief } from "@/lib/submission/submit-brief";
import { validateTurnstileToken } from "@/lib/security/turnstile";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const validation = validateSubmission(payload);

    if (!validation.success) {
      const spamDetected = validation.fieldErrors.companyWebsite === "Spam check failed.";
      const response: SubmissionErrorResponse = {
        success: false,
        error: spamDetected ? "spam_detected" : "validation_failed",
        message: spamDetected ? "The request could not be processed." : "Please complete the required project and contact details.",
        fieldErrors: spamDetected ? undefined : validation.fieldErrors,
      };
      return NextResponse.json(response, { status: spamDetected ? 400 : 422 });
    }

    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const turnstileValid = await validateTurnstileToken(
      validation.data.turnstileToken,
      forwardedFor,
    );

    if (!turnstileValid) {
      const response: SubmissionErrorResponse = {
        success: false,
        error: "spam_detected",
        message: "Bot verification failed or expired. Please complete the verification and try again.",
      };
      return NextResponse.json(response, { status: 400 });
    }

    return NextResponse.json(await submitBrief(validation.data.brief), { status: 200 });
  } catch (error) {
    console.error("Brief submission failed", error);
    const response: SubmissionErrorResponse = {
      success: false,
      error: "server_error",
      message: "The brief could not be processed. Your local draft has not been deleted.",
    };
    return NextResponse.json(response, { status: 500 });
  }
}

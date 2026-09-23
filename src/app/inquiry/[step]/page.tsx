import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InquiryStep, ReviewSubmission, StepShell } from "@/components/inquiry";
import { inquiryStepIds, isInquiryStep } from "@/lib/inquiry/steps";

interface PageProps { params: Promise<{ step: string }>; }

export function generateStaticParams() {
  return inquiryStepIds.map((step) => ({ step }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { step } = await params;
  return { title: `${step[0]?.toUpperCase()}${step.slice(1)} | Project Inquiry` };
}

export default async function Page({ params }: PageProps) {
  const { step } = await params;
  if (!isInquiryStep(step)) notFound();
  if (step === "review") {
    return (
      <StepShell step="review" title="Review your brief." intro="Check the essentials and submit the demo brief. The server will validate everything again.">
        <ReviewSubmission />
      </StepShell>
    );
  }
  return <InquiryStep step={step} />;
}

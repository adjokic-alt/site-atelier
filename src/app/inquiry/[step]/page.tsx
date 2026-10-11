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
      <StepShell step="review" title="Your brief is ready." intro="Keep it, share it, or send it to a designer. You can come back and change it any time.">
        <ReviewSubmission />
      </StepShell>
    );
  }
  return <InquiryStep step={step} />;
}

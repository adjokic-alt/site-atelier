import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InquiryStep, ReviewSubmission, StepShell } from "@/components/inquiry";
import { inquiryStepIds, isInquiryStep } from "@/lib/inquiry/steps";
import { getLocale } from "@/i18n/server";

interface PageProps { params: Promise<{ step: string }>; }

export function generateStaticParams() {
  return inquiryStepIds.map((step) => ({ step }));
}

const stepTitles = {
  en: { photos: "Your inspiration", project: "Who is this home for?", space: "Which spaces?", goals: "What should change?", review: "Your brief", style: "Your style", budget: "Budget and timing" } as Record<string, string>,
  sr: { photos: "Vaša inspiracija", project: "Za koga je ovaj dom?", space: "Koji prostori?", goals: "Šta treba da se promeni?", review: "Vaš brief", style: "Vaš stil", budget: "Budžet i rokovi" } as Record<string, string>,
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { step } = await params;
  const locale = await getLocale();
  return { title: stepTitles[locale][step] ?? step };
}

export default async function Page({ params }: PageProps) {
  const { step } = await params;
  if (!isInquiryStep(step)) notFound();
  if (step === "review") {
    const sr = (await getLocale()) === "sr";
    return (
      <StepShell step="review" title={sr ? "Vaš brief je spreman." : "Your brief is ready."} intro={sr ? "Sačuvajte ga, podelite ili pošaljite dizajneru. Možete se vratiti i promeniti ga bilo kada." : "Keep it, share it, or send it to a designer. You can come back and change it any time."}>
        <ReviewSubmission />
      </StepShell>
    );
  }
  return <InquiryStep step={step} />;
}

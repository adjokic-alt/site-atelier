export const inquiryStepIds=["style","project","goals","space","budget","photos","review"] as const;
export type InquiryStepId=(typeof inquiryStepIds)[number];
export const inquirySteps=inquiryStepIds.map((id,index)=>({id,order:index+1,title:{style:"Style & materials",project:"Project & place",goals:"Goals",space:"Your space",budget:"Budget & timeline",photos:"Photos & documents",review:"Review & send"}[id]}));
export function isInquiryStep(value:string):value is InquiryStepId{return inquiryStepIds.includes(value as InquiryStepId)}

/**
 * The simple brief: five visible steps, mapped onto the existing routes so no URL changes.
 * "style" and "budget" stay reachable (e.g. from the full brief's Edit links) as optional detail pages.
 */
export const flowSteps: { id: InquiryStepId; title: string }[] = [
  { id: "project", title: "Who" },
  { id: "space", title: "Spaces" },
  { id: "photos", title: "Inspiration" },
  { id: "goals", title: "Goals" },
  { id: "review", title: "Your brief" },
];
export function flowIndex(step: InquiryStepId) { return flowSteps.findIndex((s) => s.id === step); }

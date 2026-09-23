export const inquiryStepIds=["style","project","goals","space","budget","photos","review"] as const;
export type InquiryStepId=(typeof inquiryStepIds)[number];
export const inquirySteps=inquiryStepIds.map((id,index)=>({id,order:index+1,title:{style:"Style & materials",project:"Project & place",goals:"Goals",space:"Your space",budget:"Budget & timeline",photos:"Photos & documents",review:"Review & send"}[id]}));
export function isInquiryStep(value:string):value is InquiryStepId{return inquiryStepIds.includes(value as InquiryStepId)}

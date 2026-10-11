import type { ClientBrief } from "./brief";
export interface SubmittedBrief extends ClientBrief { submittedAt:string; referenceCode:string; }
export interface InternalSubmissionMetadata { suggestedPriority:"standard"|"review-first"|"clarify-before-reply"; internalNotes:string[]; computedAt:string; }

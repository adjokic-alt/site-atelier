import type { CurrencyCode, LanguageCode, ProjectCategoryId } from "./common";
export interface BusinessConfiguration { legalName:string; displayName:string; registeredAddress:string; registrationNumber:string|null; vatNumber:string|null; contactEmail:string; responseTimePromiseDays:number|null; timezone:string; bookingUrl:string|null; }
export interface RetentionConfiguration { draftRetentionDays:number; submittedBriefRetentionDays:number; autoDeleteEnabled:boolean; }
export interface LegalConfiguration { privacyPolicyVersion:string; termsVersion:string; imprintText:string; cookiePolicyText:string; dataProcessingRegion:string; retention:RetentionConfiguration; }
export interface BudgetRange { id:string; currency:CurrencyCode; label:string; minValue:number|null; maxValue:number|null; applicableCategoryIds:ProjectCategoryId[]; }
export interface TimelineOption { id:string; label:string; sortOrder:number; }
export interface LanguageConfiguration { defaultLocale:LanguageCode; supportedLocales:LanguageCode[]; translations:Partial<Record<LanguageCode,Record<string,string>>>; }

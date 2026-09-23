import type { CountryCode } from "./common";
export type ServiceAreaStatus="available"|"review-required"|"not-available";
export interface ServiceCapabilities { discoveryAvailable:boolean; remoteDesignAvailable:boolean; scopeDefinitionAvailable:boolean; partnerCoordinationAvailable:boolean; executionCoordinationAvailable:boolean; }
export interface ServiceAreaEntry extends ServiceCapabilities { countryCode:CountryCode; countryName:string; status:ServiceAreaStatus; additionalPublicNote:string|null; internalNote:string; }

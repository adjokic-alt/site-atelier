import type { ServiceAreaEntry } from "@/types"; import { deriveDefaultStatus } from "@/lib/service-area/public-message";
const raw:Omit<ServiceAreaEntry,"status">[]=[
{countryCode:"NL",countryName:"Netherlands",discoveryAvailable:true,remoteDesignAvailable:true,scopeDefinitionAvailable:true,partnerCoordinationAvailable:true,executionCoordinationAvailable:false,additionalPublicNote:null,internalNote:"PLACEHOLDER example only."},
{countryCode:"DE",countryName:"Germany",discoveryAvailable:true,remoteDesignAvailable:false,scopeDefinitionAvailable:true,partnerCoordinationAvailable:false,executionCoordinationAvailable:false,additionalPublicNote:"Availability is confirmed after reviewing the brief.",internalNote:"PLACEHOLDER example only."},
{countryCode:"US",countryName:"United States",discoveryAvailable:false,remoteDesignAvailable:false,scopeDefinitionAvailable:false,partnerCoordinationAvailable:false,executionCoordinationAvailable:false,additionalPublicNote:null,internalNote:"PLACEHOLDER example only."}
];
export const serviceAreas:ServiceAreaEntry[]=raw.map(entry=>({...entry,status:deriveDefaultStatus(entry)}));

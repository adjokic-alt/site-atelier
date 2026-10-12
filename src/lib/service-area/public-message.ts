import type { ServiceAreaEntry, ServiceAreaStatus } from "@/types";
function joinNaturally(items:string[]):string { if(items.length<2)return items[0]??""; if(items.length===2)return `${items[0]} and ${items[1]}`; return `${items.slice(0,-1).join(", ")}, and ${items.at(-1)}`; }
export function deriveDefaultStatus(entry:Omit<ServiceAreaEntry,"status">):ServiceAreaStatus { if(entry.executionCoordinationAvailable||entry.partnerCoordinationAvailable)return "available"; if(entry.discoveryAvailable||entry.remoteDesignAvailable||entry.scopeDefinitionAvailable)return "review-required"; return "not-available"; }
export function buildPublicMessage(entry:ServiceAreaEntry, locale:"en"|"sr"="en"):string { if(locale==="sr")return buildPublicMessageSr(entry); const c:string[]=[]; if(entry.discoveryAvailable)c.push("project discovery and a structured brief"); if(entry.remoteDesignAvailable)c.push("remote design"); if(entry.scopeDefinitionAvailable)c.push("project scope definition"); if(entry.partnerCoordinationAvailable)c.push("local partner coordination"); if(entry.executionCoordinationAvailable)c.push("execution coordination"); const base=c.length?`In ${entry.countryName}, I currently offer ${joinNaturally(c)}.`:`I am not yet able to support projects in ${entry.countryName}, but you may submit a brief for an honest review.`; return entry.additionalPublicNote?`${base} ${entry.additionalPublicNote}`:base; }

/** Serbian version of the public service-area message. */
function buildPublicMessageSr(entry:ServiceAreaEntry):string {
  const c:string[]=[];
  if(entry.discoveryAvailable)c.push("analizu projekta i strukturisan brief");
  if(entry.remoteDesignAvailable)c.push("dizajn na daljinu");
  if(entry.scopeDefinitionAvailable)c.push("definisanje obima projekta");
  if(entry.partnerCoordinationAvailable)c.push("koordinaciju sa lokalnim izvođačima");
  if(entry.executionCoordinationAvailable)c.push("koordinaciju izvođenja");
  const join=c.length<2?(c[0]??""):`${c.slice(0,-1).join(", ")} i ${c.at(-1)}`;
  return c.length?`U ovoj državi trenutno nudim ${join}.`:"Za sada ne mogu da podržim projekte u ovoj državi, ali možete poslati brief na iskrenu procenu.";
}

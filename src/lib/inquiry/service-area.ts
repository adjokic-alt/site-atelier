import{serviceAreas}from"@/config/service-areas.config";import{buildPublicMessage}from"@/lib/service-area/public-message";
export function getServiceAreaMessage(country:string){const key=country.trim().toUpperCase();const entry=serviceAreas.find(item=>item.countryCode.toUpperCase()===key);return entry?{status:entry.status,message:buildPublicMessage(entry)}:null}

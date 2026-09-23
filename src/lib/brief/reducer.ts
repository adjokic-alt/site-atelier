import type { ClientBrief, CurrencyCode, ProjectCategoryId, StyleId } from "@/types";
export type BriefAction =
  | { type:"HYDRATE"; brief:ClientBrief } | { type:"RESET"; brief:ClientBrief }
  | { type:"SET_PRIMARY_STYLE"; styleId:StyleId|null } | { type:"SET_ACCENT_STYLE"; styleId:StyleId|null }
  | { type:"TOGGLE_MATERIAL"; materialId:string } | { type:"SET_PROJECT_CATEGORIES"; categoryIds:ProjectCategoryId[] }
  | { type:"SET_HELP_NEEDED"; values:string[] } | { type:"SET_LOCATION"; country:string; city?:string; postcode?:string }
  | { type:"SET_GOALS"; goalIds:string[]; topGoalIds:string[]; mustHaves:string[]; avoid:string; ownWords:string }
  | { type:"SET_SPACE"; value:ClientBrief["space"] }
  | { type:"SET_BUDGET"; currency:CurrencyCode|null; rangeId:string|null; flexibility?:ClientBrief["budget"]["flexibility"]; startWindow?:string|null; finishBy?:ClientBrief["budget"]["finishBy"] }
  | { type:"ADD_MOODBOARD_ITEM"; itemId:string } | { type:"REMOVE_MOODBOARD_ITEM"; itemId:string }
  | { type:"SET_LOCAL_FILES"; fileNames:string[] }
  | { type:"SET_CONTACT"; name?:string; email?:string; phone?:string|null; preferredChannel?:ClientBrief["contact"]["preferredChannel"]; privacyAccepted?:boolean };
const touch=(brief:ClientBrief):ClientBrief=>({...brief,updatedAt:new Date().toISOString()});
export function briefReducer(state:ClientBrief,action:BriefAction):ClientBrief {
  switch(action.type){
    case"HYDRATE":case"RESET":return action.brief;
    case"SET_PRIMARY_STYLE":return touch({...state,style:{...state.style,primaryStyleId:action.styleId,accentStyleId:action.styleId===state.style.accentStyleId?null:state.style.accentStyleId}});
    case"SET_ACCENT_STYLE":return touch({...state,style:{...state.style,accentStyleId:action.styleId===state.style.primaryStyleId?null:action.styleId}});
    case"TOGGLE_MATERIAL":{const yes=state.style.materialIdsLiked.includes(action.materialId);return touch({...state,style:{...state.style,materialIdsLiked:yes?state.style.materialIdsLiked.filter(id=>id!==action.materialId):[...state.style.materialIdsLiked,action.materialId]}})}
    case"SET_PROJECT_CATEGORIES":return touch({...state,project:{...state.project,projectCategoryIds:action.categoryIds}});
    case"SET_HELP_NEEDED":return touch({...state,project:{...state.project,helpNeeded:action.values}});
    case"SET_LOCATION":return touch({...state,project:{...state.project,country:action.country,city:action.city??state.project.city,postcode:action.postcode??state.project.postcode}});
    case"SET_GOALS":return touch({...state,goals:{goalIds:action.goalIds,topGoalIds:action.topGoalIds,mustHaves:action.mustHaves,avoid:action.avoid,ownWords:action.ownWords}});
    case"SET_SPACE":return touch({...state,space:action.value});
    case"SET_BUDGET":return touch({...state,budget:{...state.budget,currency:action.currency,rangeId:action.rangeId,flexibility:action.flexibility??state.budget.flexibility,startWindow:action.startWindow??state.budget.startWindow,finishBy:action.finishBy??state.budget.finishBy}});
    case"ADD_MOODBOARD_ITEM":return state.visuals.moodboardItemIds.includes(action.itemId)?state:touch({...state,visuals:{...state.visuals,moodboardItemIds:[...state.visuals.moodboardItemIds,action.itemId]}});
    case"REMOVE_MOODBOARD_ITEM":return touch({...state,visuals:{...state.visuals,moodboardItemIds:state.visuals.moodboardItemIds.filter(id=>id!==action.itemId)}});
    case"SET_LOCAL_FILES":return touch({...state,visuals:{...state.visuals,localFileNames:action.fileNames}});
    case"SET_CONTACT":{const{type:_type,...contact}=action;void _type;return touch({...state,contact:{...state.contact,...contact}})}
    default:return state;
  }
}

import type { ClientBrief } from "@/types";
import { clientBriefSchema } from "@/lib/brief/validation";
export const BRIEF_STORAGE_KEY = "site-atelier:brief:v1";
export function loadBrief(): ClientBrief | null { try { const raw = window.localStorage.getItem(BRIEF_STORAGE_KEY); if (!raw) return null; const parsed = clientBriefSchema.safeParse(JSON.parse(raw)); return parsed.success ? parsed.data as ClientBrief : null; } catch { return null; } }
export function saveBrief(brief: ClientBrief): void { window.localStorage.setItem(BRIEF_STORAGE_KEY, JSON.stringify(brief)); }
export function clearBrief(): void { window.localStorage.removeItem(BRIEF_STORAGE_KEY); }

import type { SubmissionSuccessResponse } from "@/types/submission";

const globalStore = globalThis as typeof globalThis & {
  __siteAtelierSubmissions?: Map<string, SubmissionSuccessResponse>;
};

export function getSubmissionStore() {
  if (!globalStore.__siteAtelierSubmissions) {
    globalStore.__siteAtelierSubmissions = new Map();
  }
  return globalStore.__siteAtelierSubmissions;
}

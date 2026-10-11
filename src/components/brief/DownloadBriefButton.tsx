"use client";
import { useState } from "react";
import { Button } from "@/components/ui";
import { useBrief } from "@/providers/BriefProvider";

export function DownloadBriefButton() {
  const { brief } = useBrief();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  async function download() {
    setStatus("loading");
    try {
      const response = await fetch("/api/brief/pdf", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(brief) });
      if (!response.ok) throw new Error();
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `project-brief-${brief.id.slice(0, 8)}.pdf`;
      anchor.click();
      URL.revokeObjectURL(url);
      setStatus("idle");
    } catch { setStatus("error"); }
  }
  return <div><Button size="lg" isLoading={status === "loading"} onClick={download}>Download A4 PDF</Button>{status === "error" ? <p role="alert" className="mt-2 text-sm text-error">PDF generation failed. Your brief is still saved locally.</p> : null}</div>;
}

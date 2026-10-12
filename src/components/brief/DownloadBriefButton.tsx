"use client";
import { useState } from "react";
import { Button } from "@/components/ui";
import { useBrief } from "@/providers/BriefProvider";
import { useLocale } from "@/i18n/client";

/** Downloads the designed A4 brief. After sending, pass the reference so the PDF carries the serial number. */
export function DownloadBriefButton({ referenceCode }: { referenceCode?: string } = {}) {
  const { brief: draft } = useBrief();
  const locale = useLocale();
  const brief = { ...draft, locale };
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  async function download() {
    setStatus("loading");
    try {
      const response = await fetch("/api/brief/pdf", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(referenceCode ? { brief, referenceCode } : brief) });
      if (!response.ok) throw new Error();
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `home-brief-${referenceCode ?? brief.id.slice(0, 8)}.pdf`;
      anchor.click();
      URL.revokeObjectURL(url);
      setStatus("idle");
    } catch { setStatus("error"); }
  }
  return <div><Button size="lg" isLoading={status === "loading"} onClick={download}>{locale === "sr" ? "Preuzmite A4 PDF" : "Download A4 PDF"}</Button>{status === "error" ? <p role="alert" className="mt-2 text-sm text-error">{locale === "sr" ? "PDF nije mogao da se napravi. Vaš brief je i dalje sačuvan." : "PDF generation failed. Your brief is still saved locally."}</p> : null}</div>;
}

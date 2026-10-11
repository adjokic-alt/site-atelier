import { readFile } from "node:fs/promises";
import path from "node:path";
import fontkit from "@pdf-lib/fontkit";
import {
  PDFDocument, rgb, clip, endPath, popGraphicsState, pushGraphicsState, rectangle, setCharacterSpacing,
  type PDFFont, type PDFImage, type PDFPage, type RGB,
} from "pdf-lib";
import type { ClientBrief, StyleId } from "@/types";
import { siteConfig } from "@/config/site.config";
import { inspirationItems } from "@/content/inspiration";
import { styleCatalog } from "@/content/style-catalog";
import { styleStudios } from "@/content/style-studios";
import { materialBoards } from "@/content/material-boards";
import { describeStyle } from "@/content/style-pairings";
import { styleMix } from "@/lib/brief/style-mix";
import {
  budgetLabel, conditionLabel, goalLabel, propertyLabel, spaceLabel, stageLabel, whoLabel,
} from "@/components/inquiry/brief-options";

/**
 * The customer's home brief as a designed A4 document:
 * cover with serial number → style → moodboard → the brief → next steps.
 * Fonts and pictures come from /pdf-assets (built by scripts/build-pdf-assets.py).
 */

export interface BriefPdfOptions {
  /** Serial number shown on every page, e.g. BR-2026-476B43. Drafts get a DRAFT number. */
  referenceCode?: string;
  issuedAt?: string;
}

const W = 595.28, H = 841.89, M = 48;
const hex = (h: string): RGB => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const C = {
  paper: hex("#f3f0ea"), surface: hex("#fbfaf7"), sunken: hex("#e9e3d9"),
  ink: hex("#1e1c19"), ink7: hex("#4a453e"), ink5: hex("#6b645a"),
  border: hex("#ddd7cc"), accent: hex("#7a5c40"), cognac: hex("#9c5f37"), tan: hex("#c9a27e"), white: rgb(1, 1, 1),
};
const styleName = Object.fromEntries(styleCatalog.map((s) => [s.id, s.name])) as Record<string, string>;
const spaceName: Record<string, string> = { living: "Living", kitchen: "Kitchen", bedroom: "Bedroom", bath: "Bath", outdoor: "Outdoor", exterior: "Exterior" };
const words = (v: string | null | undefined) => (v ? v.replaceAll("-", " ").replace(/^./, (c) => c.toUpperCase()) : "");

const assetsDir = path.join(process.cwd(), "pdf-assets");
const fileCache = new Map<string, Uint8Array | null>();
async function asset(rel: string) {
  if (!fileCache.has(rel)) fileCache.set(rel, await readFile(path.join(assetsDir, rel)).catch(() => null));
  return fileCache.get(rel) ?? null;
}
/** "/images/x/y.png" → the small JPEG copy in pdf-assets. */
const imageAsset = (src: string) => src.replace(/^\//, "").replace(/\.(png|jpe?g|webp)$/i, ".jpg");

type Fonts = { serif: PDFFont; sans: PDFFont; semi: PDFFont };

export async function renderCustomerBriefPdf(brief: ClientBrief, options: BriefPdfOptions = {}): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const [serifBytes, sansBytes, semiBytes] = await Promise.all([
    asset("fonts/InstrumentSerif-Regular.ttf"), asset("fonts/Manrope-Regular.ttf"), asset("fonts/Manrope-SemiBold.ttf"),
  ]);
  if (!serifBytes || !sansBytes || !semiBytes) throw new Error("PDF fonts are missing from pdf-assets/fonts");
  const f: Fonts = {
    serif: await doc.embedFont(serifBytes, { subset: true }),
    sans: await doc.embedFont(sansBytes, { subset: true }),
    semi: await doc.embedFont(semiBytes, { subset: true }),
  };

  const serial = options.referenceCode ?? `DRAFT-${brief.id.slice(0, 8).toUpperCase()}`;
  const issued = new Date(options.issuedAt ?? brief.updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const isDraft = !options.referenceCode;

  const imageCache = new Map<string, PDFImage | null>();
  const image = async (src: string) => {
    if (!imageCache.has(src)) {
      const bytes = await asset(imageAsset(src));
      imageCache.set(src, bytes ? await doc.embedJpg(bytes).catch(() => null) : null);
    }
    return imageCache.get(src) ?? null;
  };

  const primary = brief.style.primaryStyleId as StyleId | null;
  const accent = brief.style.accentStyleId as StyleId | null;
  const combo = primary ? (accent ? `${styleName[primary]} – ${styleName[accent]}` : styleName[primary]) : null;
  const saved = brief.visuals.moodboardItemIds
    .map((id) => inspirationItems.find((i) => i.id === id))
    .filter((i): i is (typeof inspirationItems)[number] => Boolean(i));
  const mix = styleMix(brief.visuals.moodboardItemIds);
  const name = brief.contact.name.trim();

  // ——— drawing helpers ———
  const wrap = (text: string, font: PDFFont, size: number, width: number) => {
    const out: string[] = [];
    for (const para of text.split(/\n+/)) {
      let line = "";
      for (const word of para.split(/\s+/).filter(Boolean)) {
        const next = line ? `${line} ${word}` : word;
        if (font.widthOfTextAtSize(next, size) <= width) line = next;
        else { if (line) out.push(line); line = word; }
      }
      if (line) out.push(line);
    }
    return out;
  };
  const write = (page: PDFPage, text: string, x: number, y: number, size: number, font: PDFFont, color: RGB, width?: number, lineGap = 1.45) => {
    const lines = width ? wrap(text, font, size, width) : [text];
    lines.forEach((l, i) => page.drawText(l, { x, y: y - i * size * lineGap, size, font, color }));
    return y - lines.length * size * lineGap;
  };
  /** Small capitals with open letter-spacing, like the site's eyebrow labels. */
  const caps = (page: PDFPage, text: string, x: number, y: number, color = C.ink5, size = 7.5) => {
    page.pushOperators(pushGraphicsState(), setCharacterSpacing(size * 0.12));
    page.drawText(text.toUpperCase(), { x, y, size, font: f.semi, color });
    page.pushOperators(popGraphicsState());
  };
  /** Picture cropped to fill a box (like CSS object-fit: cover). */
  const cover = (page: PDFPage, img: PDFImage, x: number, y: number, w: number, h: number) => {
    const s = Math.max(w / img.width, h / img.height);
    const iw = img.width * s, ih = img.height * s;
    page.pushOperators(pushGraphicsState(), rectangle(x, y, w, h), clip(), endPath());
    page.drawImage(img, { x: x + (w - iw) / 2, y: y + (h - ih) / 2, width: iw, height: ih });
    page.pushOperators(popGraphicsState());
  };
  const newPage = (bg = C.paper) => {
    const p = doc.addPage([W, H]);
    p.drawRectangle({ x: 0, y: 0, width: W, height: H, color: bg });
    return p;
  };
  const pageHead = (p: PDFPage, label: string, title: string) => {
    caps(p, siteConfig.name, M, H - M + 4, C.ink5, 7);
    const sw = f.semi.widthOfTextAtSize(`No. ${serial}`, 7.5);
    p.drawText(`No. ${serial}`, { x: W - M - sw, y: H - M + 4, size: 7.5, font: f.semi, color: C.accent });
    p.drawLine({ start: { x: M, y: H - M - 6 }, end: { x: W - M, y: H - M - 6 }, thickness: 0.6, color: C.border });
    caps(p, label, M, H - M - 40, C.accent);
    p.drawText(title, { x: M, y: H - M - 80, size: 38, font: f.serif, color: C.ink });
    return H - M - 112;
  };

  // ——— 1. Cover ———
  {
    const p = newPage();
    const heroSrc = saved[0]?.image ?? (primary ? styleStudios[primary]?.heroImage : undefined) ?? "/images/inspiration/industrial-brick-living-room.jpg";
    const hero = await image(heroSrc);
    const heroH = 470;
    if (hero) cover(p, hero, 0, H - heroH, W, heroH);
    else p.drawRectangle({ x: 0, y: H - heroH, width: W, height: heroH, color: C.sunken });
    p.drawRectangle({ x: 0, y: H - 70, width: W, height: 70, color: C.ink, opacity: 0.28 });
    p.drawText(siteConfig.name, { x: M, y: H - 42, size: 15, font: f.serif, color: C.white });
    const tag = isDraft ? "DRAFT" : "HOME BRIEF";
    const tw = f.semi.widthOfTextAtSize(tag, 7.5);
    p.drawRectangle({ x: W - M - tw - 20, y: H - 49, width: tw + 20, height: 20, color: C.white, opacity: 0.9 });
    p.drawText(tag, { x: W - M - tw - 10, y: H - 42, size: 7.5, font: f.semi, color: C.ink });

    let y = H - heroH - 54;
    caps(p, "Home brief", M, y, C.accent);
    y -= 44;
    const headline = combo ?? "Our home brief";
    const hl = wrap(headline, f.serif, 44, W - 2 * M - 150);
    hl.forEach((l, i) => p.drawText(l, { x: M, y: y - i * 46, size: 44, font: f.serif, color: C.ink }));
    y -= (hl.length - 1) * 46 + 26;
    write(p, name ? `Prepared for ${name}` : "Prepared from your saved choices", M, y, 12, f.sans, C.ink7);

    // serial number block
    const bx = W - M - 150, by = H - heroH - 150;
    p.drawRectangle({ x: bx, y: by, width: 150, height: 96, color: C.surface, borderColor: C.border, borderWidth: 0.6 });
    caps(p, "Serial number", bx + 14, by + 74, C.ink5, 6.5);
    write(p, serial, bx + 14, by + 50, serial.length > 16 ? 11 : 13, f.semi, C.ink);
    caps(p, "Issued", bx + 14, by + 28, C.ink5, 6.5);
    p.drawText(issued, { x: bx + 14, y: by + 12, size: 9, font: f.sans, color: C.ink7 });

    // key facts
    const facts: [string, string][] = [
      ["Spaces", brief.project.projectCategoryIds.map(spaceLabel).join(", ") || "—"],
      ["Home", [propertyLabel(brief.space.propertyType), brief.space.approxSize ? `${brief.space.approxSize.value} ${brief.space.approxSize.unit === "m2" ? "m²" : "ft²"}` : ""].filter(Boolean).join(", ") || "—"],
      ["Budget", brief.budget.rangeId ? `${budgetLabel(brief.budget.rangeId)}${brief.budget.rangeId !== "not-sure" && brief.budget.currency ? ` ${brief.budget.currency}` : ""}` : "—"],
      ["Where", [brief.project.city, brief.project.country].filter(Boolean).join(", ") || "—"],
    ];
    const fy = 150, colW = (W - 2 * M) / 4;
    p.drawLine({ start: { x: M, y: fy + 30 }, end: { x: W - M, y: fy + 30 }, thickness: 0.6, color: C.border });
    facts.forEach(([k, v], i) => {
      caps(p, k, M + i * colW, fy + 10, C.ink5, 6.5);
      write(p, v, M + i * colW, fy - 8, 10.5, f.sans, C.ink, colW - 14, 1.35);
    });
    p.drawText(`${saved.length} saved picture${saved.length === 1 ? "" : "s"}${brief.visuals.inspirationLinks.length ? ` · ${brief.visuals.inspirationLinks.length} board link${brief.visuals.inspirationLinks.length === 1 ? "" : "s"}` : ""}`, { x: M, y: 62, size: 8.5, font: f.sans, color: C.ink5 });
  }

  // ——— 2. Style ———
  if (primary) {
    const p = newPage();
    let y = pageHead(p, "Your style", combo ?? styleName[primary]);
    y = write(p, describeStyle(primary, accent), M, y, 13, f.sans, C.ink7, W - 2 * M - 60, 1.5) - 18;

    if (mix.length) {
      caps(p, "What your pictures say", M, y, C.ink5); y -= 16;
      const barW = W - 2 * M; let bx = M;
      p.drawRectangle({ x: M, y, width: barW, height: 6, color: C.border });
      const tones = [C.ink, C.accent, C.tan];
      mix.forEach((s, i) => { p.drawRectangle({ x: bx, y, width: barW * s.share, height: 6, color: tones[i] }); bx += barW * s.share; });
      y -= 18; let lx = M;
      mix.forEach((s, i) => {
        p.drawCircle({ x: lx + 3, y: y + 3, size: 3, color: tones[i] });
        const label = `${styleName[s.styleId]} ${Math.round(s.share * 100)}%`;
        p.drawText(label, { x: lx + 11, y, size: 9, font: f.sans, color: C.ink7 });
        lx += f.sans.widthOfTextAtSize(label, 9) + 30;
      });
      y -= 34;
    }

    const boards: [StyleId, string][] = [[primary, `Materials · ${styleName[primary]}`]];
    if (accent) boards.push([accent, `Accent materials · ${styleName[accent]}`]);
    const sw = (W - 2 * M - 3 * 12) / 4, sh = sw * 1.15;
    for (const [sid, label] of boards) {
      caps(p, label, M, y, C.ink5); y -= 12;
      const samples = materialBoards[sid] ?? [];
      for (let i = 0; i < Math.min(4, samples.length); i++) {
        const x = M + i * (sw + 12);
        const img = await image(samples[i].image);
        if (img) cover(p, img, x, y - sh, sw, sh); else p.drawRectangle({ x, y: y - sh, width: sw, height: sh, color: C.sunken });
        p.drawText(samples[i].name, { x, y: y - sh - 15, size: 10, font: f.semi, color: C.ink });
        p.drawText(samples[i].use, { x, y: y - sh - 28, size: 8.5, font: f.sans, color: C.ink5 });
      }
      y -= sh + 56;
    }
  }

  // ——— 3. Moodboard ———
  if (saved.length) {
    const cols = 3, gap = 10, cw = (W - 2 * M - gap * (cols - 1)) / cols, ch = cw * 1.06, perPage = 9;
    for (let start = 0; start < saved.length; start += perPage) {
      const p = newPage();
      const first = start === 0;
      let y = pageHead(p, first ? `Moodboard · ${saved.length} picture${saved.length === 1 ? "" : "s"}` : "Moodboard, continued", first ? "Your moodboard" : "More from your moodboard");
      y -= 4;
      const chunk = saved.slice(start, start + perPage);
      for (let i = 0; i < chunk.length; i++) {
        const item = chunk[i];
        const x = M + (i % cols) * (cw + gap);
        const top = y - Math.floor(i / cols) * (ch + 30);
        const img = await image(item.image);
        if (img) cover(p, img, x, top - ch, cw, ch); else p.drawRectangle({ x, y: top - ch, width: cw, height: ch, color: C.sunken });
        p.drawText(`${String(start + i + 1).padStart(2, "0")}`, { x, y: top - ch - 14, size: 8, font: f.semi, color: C.accent });
        p.drawText(`${spaceName[item.space] ?? words(item.space)} · ${styleName[item.styleId]}`, { x: x + 16, y: top - ch - 14, size: 8.5, font: f.sans, color: C.ink7 });
      }
    }
  }

  // ——— 4. The brief ———
  {
    let p = newPage();
    let y = pageHead(p, "The brief", name ? `${name.split(" ")[0]}’s home` : "Our home") - 14;
    const labelW = 130, valueX = M + labelW, valueW = W - M - valueX;
    const ensure = (need: number) => {
      if (y - need < 70) { p = newPage(); y = pageHead(p, "The brief", "The brief, continued") - 14; }
    };
    const section = (title: string, rows: [string, string][]) => {
      const filled = rows.filter(([, v]) => v && v.trim());
      if (!filled.length) return;
      ensure(60);
      p.drawText(title, { x: M, y, size: 17, font: f.serif, color: C.ink });
      y -= 12;
      p.drawLine({ start: { x: M, y }, end: { x: W - M, y }, thickness: 0.6, color: C.border });
      y -= 18;
      for (const [k, v] of filled) {
        const lines = wrap(v, f.sans, 10, valueW);
        ensure(lines.length * 14.5 + 8);
        p.drawText(k, { x: M, y, size: 9, font: f.sans, color: C.ink5 });
        lines.forEach((l, i) => p.drawText(l, { x: valueX, y: y - i * 14.5, size: 10, font: f.sans, color: C.ink }));
        y -= lines.length * 14.5 + 8;
      }
      y -= 16;
    };
    const budget = brief.budget.rangeId ? `${budgetLabel(brief.budget.rangeId)}${brief.budget.rangeId !== "not-sure" && brief.budget.currency ? ` ${brief.budget.currency}` : ""}` : "";

    section("Inspiration", [
      ["Feels like", combo ?? ""],
      ["Saved pictures", saved.length ? `${saved.length} (see moodboard)` : ""],
      ["Board links", brief.visuals.inspirationLinks.join("\n")],
      ["Own files", brief.visuals.localFileNames.join(", ")],
    ]);
    section("Who and where", [
      ["Home for", whoLabel(brief.space.ownership) ?? ""],
      ["Where", [brief.project.city, brief.project.postcode, brief.project.country].filter(Boolean).join(", ")],
    ]);
    section("Spaces", [["Spaces", brief.project.projectCategoryIds.map(spaceLabel).join(", ")]]);
    section("Goals and the home", [
      ["Goals", brief.goals.goalIds.map(goalLabel).join(", ")],
      ["In their words", brief.goals.ownWords],
      ["Budget", budget],
      ["Flexibility", words(brief.budget.flexibility)],
      ["Home", propertyLabel(brief.space.propertyType) ?? ""],
      ["Condition", conditionLabel(brief.space.condition) ?? ""],
      ["Size", brief.space.approxSize ? `${brief.space.approxSize.value} ${brief.space.approxSize.unit === "m2" ? "m²" : "ft²"}` : ""],
      ["Final goal", stageLabel(brief.space.stage) ?? ""],
      ["Start", words(brief.budget.startWindow)],
      ["Avoid", brief.goals.avoid],
      ["Help wanted", brief.project.helpNeeded.map(words).join(", ")],
      ["Notes", brief.space.notes],
    ]);
    section("Contact", [
      ["Name", brief.contact.name],
      ["Email", brief.contact.email],
      ["Phone", brief.contact.phone ?? ""],
      ["Prefers", words(brief.contact.preferredChannel)],
    ]);

    ensure(120);
    p.drawRectangle({ x: M, y: y - 84, width: W - 2 * M, height: 92, color: C.sunken });
    p.drawText("What happens next", { x: M + 18, y: y - 16, size: 15, font: f.serif, color: C.ink });
    write(p, isDraft
      ? "This is a draft of your brief. Send it from the website and we will reply with a reference number."
      : "A designer reads your brief and gets back to you with first thoughts and the next step. Keep this serial number for any questions.",
      M + 18, y - 36, 9.5, f.sans, C.ink7, W - 2 * M - 36);
    y -= 110;
    write(p, "This document records the choices made on the website. It is not a quote, contract, technical specification or permit assessment. Pictures are illustrative.", M, Math.max(y, 80), 7.5, f.sans, C.ink5, W - 2 * M);
  }

  // ——— footer on every page ———
  const pages = doc.getPages();
  pages.forEach((pg, i) => {
    if (i === 0) return;
    pg.drawText(`${siteConfig.name}  ·  No. ${serial}`, { x: M, y: 30, size: 7.5, font: f.sans, color: C.ink5 });
    const label = `${i + 1} / ${pages.length}`;
    pg.drawText(label, { x: W - M - f.sans.widthOfTextAtSize(label, 7.5), y: 30, size: 7.5, font: f.sans, color: C.ink5 });
  });

  doc.setTitle(`Home brief ${serial}`);
  doc.setAuthor(siteConfig.name);
  doc.setSubject(combo ? `Home brief — ${combo}` : "Home brief");
  return doc.save();
}

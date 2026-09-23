import { PDFDocument, StandardFonts, rgb, type PDFFont } from "pdf-lib";
import type { ClientBrief } from "@/types";

const A4: [number, number] = [595.28, 841.89];
const margin = 52;
const ink = rgb(0.13, 0.11, 0.09);
const muted = rgb(0.36, 0.33, 0.29);
const border = rgb(0.88, 0.85, 0.80);
const accent = rgb(0.48, 0.37, 0.27);

function words(value: string) {
  return value.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function wrap(text: string, font: PDFFont, size: number, width: number): string[] {
  const output: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= width) line = next;
    else { if (line) output.push(line); line = word; }
  }
  if (line) output.push(line);
  return output.length ? output : [""];
}

export async function renderCustomerBriefPdf(brief: ClientBrief): Promise<Uint8Array> {
  const document = await PDFDocument.create();
  const regular = await document.embedFont(StandardFonts.Helvetica);
  const bold = await document.embedFont(StandardFonts.HelveticaBold);
  let page = document.addPage(A4);
  let y = A4[1] - margin;

  const addPage = () => { page = document.addPage(A4); y = A4[1] - margin; };
  const ensure = (height: number) => { if (y - height < margin) addPage(); };
  const text = (value: string, size = 10, color = ink, font = regular, indent = 0) => {
    const lines = wrap(value || "Not provided", font, size, A4[0] - margin * 2 - indent);
    ensure(lines.length * (size + 4));
    for (const line of lines) { page.drawText(line, { x: margin + indent, y, size, font, color }); y -= size + 4; }
  };
  const heading = (label: string) => {
    ensure(46); y -= 12;
    page.drawLine({ start: { x: margin, y }, end: { x: A4[0] - margin, y }, thickness: 0.7, color: border });
    y -= 25; text(label, 16, ink, bold); y -= 5;
  };
  const field = (label: string, value: string) => { text(label.toUpperCase(), 8, accent, bold); text(value || "Not provided", 10, ink); y -= 7; };

  text("PROJECT BRIEF", 9, accent, bold);
  y -= 8;
  text(brief.project.projectCategoryIds[0] ? words(brief.project.projectCategoryIds[0]) : "Your project", 28, ink, bold);
  text(`Reference ${brief.id.slice(0, 8).toUpperCase()}  |  Draft updated ${new Date(brief.updatedAt).toLocaleDateString("en-GB")}`, 9, muted);
  y -= 20;
  text("This customer document records the information supplied in the browser draft. It is not a quote, contract, technical specification, permit assessment or guarantee of service availability.", 9, muted);

  heading("Style and materials");
  field("Primary style", brief.style.primaryStyleId ? words(brief.style.primaryStyleId) : "Not selected");
  field("Accent style", brief.style.accentStyleId ? words(brief.style.accentStyleId) : "None selected");
  field("Liked materials", brief.style.materialIdsLiked.map(words).join(", ") || "None selected");

  heading("Project and location");
  field("Project categories", brief.project.projectCategoryIds.map(words).join(", "));
  field("Help needed", brief.project.helpNeeded.map(words).join(", "));
  field("Location", [brief.project.city, brief.project.postcode, brief.project.country].filter(Boolean).join(", "));

  heading("Goals");
  field("Selected goals", brief.goals.goalIds.map(words).join(", "));
  field("Top priorities", brief.goals.topGoalIds.map(words).join(", "));
  field("Must haves", brief.goals.mustHaves.join(", "));
  field("Avoid", brief.goals.avoid);
  field("In their own words", brief.goals.ownWords);

  heading("The property");
  field("Property type", brief.space.propertyType ? words(brief.space.propertyType) : "Not provided");
  field("Approximate size", brief.space.approxSize ? `${brief.space.approxSize.value} ${brief.space.approxSize.unit}` : "Not provided");
  field("Condition", brief.space.condition ? words(brief.space.condition) : "Not provided");
  field("Project stage", brief.space.stage ? words(brief.space.stage) : "Not provided");
  field("Notes", brief.space.notes);

  heading("Budget and timing");
  field("Budget", [brief.budget.currency, brief.budget.rangeId ? words(brief.budget.rangeId) : ""].filter(Boolean).join(" "));
  field("Flexibility", brief.budget.flexibility ? words(brief.budget.flexibility) : "Not provided");
  field("Preferred start", brief.budget.startWindow ? words(brief.budget.startWindow) : "Not provided");

  heading("Visual references");
  field("Moodboard items", String(brief.visuals.moodboardItemIds.length));
  field("Selected local files", brief.visuals.localFileNames.join(", ") || "None selected");
  field("Inspiration links", brief.visuals.inspirationLinks.join(", ") || "None provided");

  heading("Contact");
  field("Name", brief.contact.name);
  field("Email", brief.contact.email);
  field("Phone", brief.contact.phone ?? "Not provided");
  field("Preferred channel", brief.contact.preferredChannel ? words(brief.contact.preferredChannel) : "Not provided");

  const pageCount = document.getPageCount();
  document.getPages().forEach((current, index) => {
    current.drawText(`Site Atelier - customer brief - page ${index + 1} of ${pageCount}`, { x: margin, y: 24, size: 8, font: regular, color: muted });
  });

  return document.save();
}


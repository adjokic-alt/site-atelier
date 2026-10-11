import { NextResponse } from "next/server";
import { clientBriefSchema } from "@/lib/brief/validation";
import { renderCustomerBriefPdf } from "@/lib/pdf/customer-brief";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Accepts the brief itself, or { brief, referenceCode } after it has been sent.
    const wrapped = body && typeof body === "object" && "brief" in body;
    const parsed = clientBriefSchema.safeParse(wrapped ? body.brief : body);
    if (!parsed.success) return NextResponse.json({ error: "The brief data is invalid." }, { status: 400 });
    const reference = wrapped && typeof body.referenceCode === "string" && /^BR-\d{4}-[A-Z0-9]{6}$/.test(body.referenceCode) ? body.referenceCode : undefined;
    const bytes = await renderCustomerBriefPdf(parsed.data, { referenceCode: reference });
    return new Response(Buffer.from(bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="home-brief-${reference ?? parsed.data.id.slice(0, 8)}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "The PDF could not be created." }, { status: 500 });
  }
}

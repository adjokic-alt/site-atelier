import { NextResponse } from "next/server";
import { clientBriefSchema } from "@/lib/brief/validation";
import { renderCustomerBriefPdf } from "@/lib/pdf/customer-brief";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const parsed = clientBriefSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "The brief data is invalid." }, { status: 400 });
    const bytes = await renderCustomerBriefPdf(parsed.data);
    return new Response(Buffer.from(bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="project-brief-${parsed.data.id.slice(0, 8)}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "The PDF could not be created." }, { status: 500 });
  }
}

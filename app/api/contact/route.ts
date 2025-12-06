import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // For now just log and return success. In production, wire this to an email service or DB.
    // eslint-disable-next-line no-console
    console.log("Contact form submission:", data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

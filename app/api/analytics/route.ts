import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("ANALYTICS_EVENT", body);
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

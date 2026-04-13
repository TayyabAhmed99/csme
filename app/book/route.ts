import { NextRequest, NextResponse } from "next/server";
import { getTelegramBookRedirectUrl } from "@/lib/telegram";

export function GET(request: NextRequest) {
  const raw = Object.fromEntries(request.nextUrl.searchParams.entries());
  const target = getTelegramBookRedirectUrl(raw);
  return NextResponse.redirect(target, 302);
}

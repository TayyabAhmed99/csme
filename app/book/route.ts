import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";
import { ROUTES } from "@/lib/routes";
import { getTelegramBookRedirectUrl } from "@/lib/telegram";

export function GET(request: NextRequest) {
  if (!siteConfig.enableTelegramCtas) {
    return NextResponse.redirect(new URL(ROUTES.touristHandsFree, request.url), 302);
  }
  const raw = Object.fromEntries(request.nextUrl.searchParams.entries());
  const target = getTelegramBookRedirectUrl(raw);
  return NextResponse.redirect(target, 302);
}

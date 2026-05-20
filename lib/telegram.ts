import { siteConfig } from "@/lib/config";
import { getInboundParams, type InboundParams } from "@/lib/query";

/** Per-button attribution when no marketing override (?ref / ?partner / ?campaign). */
export const TELEGRAM_PLACEMENT = {
  topbar: "landing_topbar",
  header: "landing_header",
  hero: "landing_hero",
  spacehunters: "landing_spacehunters",
  howItWorks: "landing_howitworks",
  security: "landing_security",
  verifySupport: "landing_verify",
  finalCta: "landing_finalcta",
  footer: "landing_footer",
  sticky: "landing_sticky",
} as const;

export type TelegramPlacement =
  (typeof TELEGRAM_PLACEMENT)[keyof typeof TELEGRAM_PLACEMENT];

const PLACEHOLDER_USERNAMES = new Set(["yourbotusername", "botusername", ""]);

/** Opens Telegram (app or web login) — same pattern as wa.me for WhatsApp. */
export const TELEGRAM_FALLBACK_URL = "https://t.me/";

export function sanitizeToken(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 48);
}

/**
 * Marketing override for ?ref, ?partner, ?campaign (priority: ref → partner → campaign).
 * Matches engineer pack: ref_hotel123, partner_x, camp_x.
 */
export function buildMarketingStartParam(inbound: InboundParams): string | null {
  if (inbound.ref) return `ref_${sanitizeToken(inbound.ref)}`;
  if (inbound.partner) return `partner_${sanitizeToken(inbound.partner)}`;
  if (inbound.campaign) return `camp_${sanitizeToken(inbound.campaign)}`;
  return null;
}

export function getTelegramBotUsername(): string {
  return siteConfig.telegramBotUsername.replace(/^@/, "").trim();
}

export function isTelegramBotConfigured(): boolean {
  const username = getTelegramBotUsername().toLowerCase();
  return username.length > 0 && !PLACEHOLDER_USERNAMES.has(username);
}

/**
 * Universal Telegram open URL (t.me). Mobile opens the app when installed;
 * otherwise Telegram Web / sign-in — like wa.me for WhatsApp.
 */
export function buildTelegramUrl(start?: string): string {
  if (!isTelegramBotConfigured()) {
    return TELEGRAM_FALLBACK_URL;
  }
  const username = getTelegramBotUsername();
  if (!start) {
    return `https://t.me/${username}`;
  }
  return `https://t.me/${username}?start=${encodeURIComponent(start)}`;
}

/**
 * Telegram deep link: marketing params override placement; otherwise use placement code.
 */
export function getTelegramDeepLink(
  placement: TelegramPlacement,
  searchParams: { [key: string]: string | string[] | undefined }
): string {
  const inbound = getInboundParams(searchParams);
  const marketing = buildMarketingStartParam(inbound);
  const start = marketing ?? placement;
  return buildTelegramUrl(start);
}

/**
 * /book redirect: ref → start is raw sanitized token (e.g. hotel01); else marketing; else landing_book.
 */
export function getTelegramBookRedirectUrl(
  query: Record<string, string | undefined>
): string {
  const ref = query.ref;
  const partner = query.partner;
  const campaign = query.campaign;

  let start = "landing_book";
  if (ref) start = sanitizeToken(ref);
  else if (partner) start = `partner_${sanitizeToken(partner)}`;
  else if (campaign) start = `camp_${sanitizeToken(campaign)}`;

  return buildTelegramUrl(start);
}

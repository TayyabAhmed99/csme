import { siteConfig } from "@/lib/config";

export function isTelegramCtaEnabled(): boolean {
  return siteConfig.enableTelegramCtas;
}

export const TELEGRAM_CTA_DISABLED_TITLE =
  "Telegram booking is coming soon — check back shortly.";

export const telegramCtaDisabledClass =
  "pointer-events-none cursor-not-allowed opacity-55 saturate-[0.85]";

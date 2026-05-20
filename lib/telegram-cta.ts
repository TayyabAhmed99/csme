import { siteConfig } from "@/lib/config";

export function isTelegramCtaEnabled(): boolean {
  return siteConfig.enableTelegramCtas;
}

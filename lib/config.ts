export const siteConfig = {
  name: "Tourist Hands Free",
  companyIntro: "C.S. MENIK SL",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://yourdomain.com",
  telegramBotUsername:
    process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME ?? "YourBotUsername",
  defaultTelegramStart:
    process.env.NEXT_PUBLIC_DEFAULT_TELEGRAM_START ?? "web_main",
  supportEmail:
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@yourdomain.com",
  supportWhatsApp: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP ?? "",
  enableVerify: process.env.NEXT_PUBLIC_ENABLE_VERIFY !== "false",
  enableShare: process.env.NEXT_PUBLIC_ENABLE_SHARE !== "false",
  /** Set NEXT_PUBLIC_ENABLE_TELEGRAM_CTAS=true when bot deep links are ready. */
  enableTelegramCtas:
    process.env.NEXT_PUBLIC_ENABLE_TELEGRAM_CTAS === "true",
  /** Optional public HTTPS URL for FX Discovery; when set, /fx-discovery shows an external launch CTA. */
  guduFxUrl: (process.env.NEXT_PUBLIC_GUDUX_FX_URL ?? "").trim(),
} as const;

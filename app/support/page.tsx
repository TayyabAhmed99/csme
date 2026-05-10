import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ROUTES } from "@/lib/routes";
import {
  getTelegramDeepLink,
  TELEGRAM_PLACEMENT,
} from "@/lib/telegram";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";

export const metadata = {
  title: "Support | Tourist Hands Free",
};

export default function SupportPage() {
  const telegramHref = getTelegramDeepLink(TELEGRAM_PLACEMENT.verifySupport, {});
  const wa = siteConfig.supportWhatsApp;

  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-lg px-4 py-12 sm:py-16">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link
            href={ROUTES.touristHandsFree}
            className="font-medium text-brand-accent hover:underline"
          >
            ← Tourist Hands Free
          </Link>
          <Link
            href={ROUTES.parent}
            className="text-brand/60 hover:text-brand hover:underline"
          >
            Company home
          </Link>
        </div>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-brand">
          Support
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand/75">
          Need help with your luggage booking or service status? The fastest path is
          the same Telegram thread where you booked — our team can see your context
          there.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <TrackedTelegramCta
            href={telegramHref}
            event="cta_support_telegram_support_page"
            className="w-full"
          >
            Open Telegram
          </TrackedTelegramCta>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="inline-flex w-full items-center justify-center rounded-lg border border-brand/15 bg-white px-5 py-3 text-sm font-semibold text-brand hover:bg-brand/5"
          >
            Email {siteConfig.supportEmail}
          </a>
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-brand/15 bg-white px-5 py-3 text-sm font-semibold text-brand hover:bg-brand/5"
            >
              WhatsApp
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ROUTES } from "@/lib/routes";
import {
  getTelegramDeepLink,
  TELEGRAM_PLACEMENT,
} from "@/lib/telegram";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";

export const metadata = {
  title: "Help | Tourist Hands Free",
};

export default function SupportPage() {
  const telegramHref = getTelegramDeepLink(TELEGRAM_PLACEMENT.verifySupport, {});
  const wa = siteConfig.supportWhatsApp;

  return (
    <div className="thf-product min-h-screen bg-thf-cream font-thf">
      <div className="mx-auto max-w-lg px-4 py-12 sm:py-16">
        <Link
          href={ROUTES.touristHandsFree}
          className="text-sm font-semibold text-thf-navy hover:underline"
        >
          ← Back to Tourist Hands Free
        </Link>
        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-thf-navy">
          Help &amp; support
        </h1>
        <p className="mt-4 text-base leading-relaxed text-thf-muted">
          The fastest path is your Telegram booking thread — our team can see your
          context there.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <TrackedTelegramCta
            href={telegramHref}
            event="cta_support_telegram_support_page"
            tone="thf"
            className="w-full"
          >
            Open Telegram
          </TrackedTelegramCta>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="inline-flex w-full items-center justify-center rounded-md border border-thf-navy/25 bg-thf-cream px-5 py-3 text-sm font-semibold text-thf-navy hover:bg-thf-sky"
          >
            Email {siteConfig.supportEmail}
          </a>
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md border border-thf-navy/25 bg-thf-cream px-5 py-3 text-sm font-semibold text-thf-navy hover:bg-thf-sky"
            >
              WhatsApp
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

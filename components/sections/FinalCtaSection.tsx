"use client";

import Link from "next/link";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { ShareServiceButton } from "@/components/ShareServiceButton";
import { IconTelegram, IconShield, IconHeart } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import { ROUTES } from "@/lib/routes";

type FinalCtaSectionProps = {
  telegramHref: string;
  shareUrl: string;
};

export function FinalCtaSection({ telegramHref, shareUrl }: FinalCtaSectionProps) {
  return (
    <section
      id="final-cta"
      className="scroll-mt-28 border-t border-thf-line bg-thf-sky py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-thf-navy sm:text-3xl">
          Get started in seconds!
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-thf-muted sm:text-base">
          Chat with our Telegram bot now:
        </p>
        <div className="mt-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-thf-navy text-white shadow-thf-cta sm:h-24 sm:w-24">
            <IconTelegram className="h-10 w-10 text-thf-telegram sm:h-12 sm:w-12" />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <TrackedTelegramCta
            href={telegramHref}
            event="cta_telegram_click_finalcta"
            tone="thf"
            iconPosition="end"
            className="min-w-[260px] px-8 py-4 text-xs font-bold"
          >
            Launch Telegram bot
          </TrackedTelegramCta>
        </div>
        {siteConfig.enableShare ? (
          <div className="mt-6 flex justify-center">
            <ShareServiceButton shareUrl={shareUrl} />
          </div>
        ) : null}
        <div className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-6 text-sm text-thf-navy">
          <span className="inline-flex items-center gap-2">
            <IconShield className="h-5 w-5 shrink-0 text-thf-navy" />
            Secure payment
          </span>
          <span className="inline-flex items-center gap-2">
            <IconHeart className="h-5 w-5 shrink-0 text-thf-navy" />
            Trusted service
          </span>
        </div>
        <Link
          href={ROUTES.support}
          className="mt-8 inline-block text-sm font-semibold text-thf-navy underline-offset-4 hover:underline"
          onClick={() => trackEvent("cta_support_click", { from: "final_cta" })}
        >
          Need help?
        </Link>
        <p className="mt-6 text-xs text-thf-muted">
          Fast, simple, and built for travelers on the move.
        </p>
      </div>
    </section>
  );
}

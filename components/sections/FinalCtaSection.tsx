"use client";

import Link from "next/link";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { ShareServiceButton } from "@/components/ShareServiceButton";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

type FinalCtaSectionProps = {
  telegramHref: string;
  shareUrl: string;
};

export function FinalCtaSection({ telegramHref, shareUrl }: FinalCtaSectionProps) {
  return (
    <section
      id="final-cta"
      className="scroll-mt-28 border-t border-black/5 bg-gradient-to-b from-white to-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
          Ready to explore Tarragona without your luggage?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-brand/70 sm:text-base">
          Get your quote in seconds. Book in under 2 minutes. Secure QR bag tagging
          included.
        </p>
        <div className="mt-8 flex justify-center">
          <TrackedTelegramCta
            href={telegramHref}
            event="cta_telegram_click_finalcta"
            className="min-w-[240px] px-8 py-4"
          >
            Start Booking on Telegram
          </TrackedTelegramCta>
        </div>
        {siteConfig.enableShare ? (
          <div className="mt-6 flex justify-center">
            <ShareServiceButton shareUrl={shareUrl} />
          </div>
        ) : null}
        <Link
          href="/support"
          className="mt-6 inline-block text-sm font-semibold text-brand-accent underline-offset-4 hover:underline"
          onClick={() => trackEvent("cta_support_click", { from: "final_cta" })}
        >
          Need help?
        </Link>
        <p className="mt-6 text-xs text-brand/50">
          Fast, simple, and built for travelers on the move.
        </p>
      </div>
    </section>
  );
}

"use client";

import { HeroBackgroundCarousel } from "@/components/sections/HeroBackgroundCarousel";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { trackEvent } from "@/lib/analytics";

type HeroSectionProps = {
  telegramHref: string;
};

const sectors = ["Energy", "Finance", "Infrastructure", "Technology"];

export function HeroSection({ telegramHref }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative scroll-mt-0 overflow-hidden border-b border-black/5"
    >
      <HeroBackgroundCarousel />

      <div className="relative z-10 mx-auto flex min-h-[min(88vh,760px)] max-w-4xl flex-col items-center justify-center px-4 py-14 text-center sm:py-20">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white drop-shadow-md [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl md:leading-tight">
          Structuring Capital Across Global Markets
        </h1>
        <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/92 drop-shadow-sm [text-shadow:0_1px_3px_rgba(0,0,0,0.35)] sm:text-lg md:text-xl">
          C.S. MENIK SL structures cross-border trade and capital partnerships
          across energy, finance, infrastructure, and technology markets.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {sectors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/95 backdrop-blur-sm sm:text-sm"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-14 w-full max-w-md border-t border-white/20 pt-10 sm:max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
            Travel · Hands-Free Tarragona
          </p>
          <TrackedTelegramCta
            href={telegramHref}
            event="cta_telegram_click_hero"
            iconPosition="end"
            className="mt-4 w-full rounded-xl px-8 py-4 text-sm uppercase tracking-wide sm:text-base"
          >
            Book now on Telegram
          </TrackedTelegramCta>
          <p className="mt-3 text-sm font-medium text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
            Safe &amp; fast payment
          </p>
          <a
            href="#how-it-works"
            className="mt-2 inline-block text-sm font-semibold text-white underline-offset-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] hover:text-white/95 hover:underline"
            onClick={() => trackEvent("cta_how_it_works_click", { section: "hero" })}
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}

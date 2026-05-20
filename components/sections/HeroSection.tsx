"use client";

import { HeroBackgroundCarousel } from "@/components/sections/HeroBackgroundCarousel";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { IconMapPin, IconSuitcase, IconTruck } from "@/components/icons";
import { trackEvent } from "@/lib/analytics";

type HeroSectionProps = {
  telegramHref: string;
};

const features = [
  { label: "Store your bags", icon: IconSuitcase },
  { label: "Easy transfers", icon: IconTruck },
  { label: "Explore freely", icon: IconMapPin },
] as const;

export function HeroSection({ telegramHref }: HeroSectionProps) {
  return (
    <section id="hero" className="relative scroll-mt-0 overflow-hidden">
      <HeroBackgroundCarousel />

      <div
        className="pointer-events-none absolute inset-0 bg-thf-hero"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[min(88vh,760px)] max-w-4xl flex-col items-center justify-center px-4 py-14 text-center sm:py-20">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl md:leading-tight">
          Travel light in Tarragona
        </h1>
        <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/95 sm:text-lg md:text-xl">
          Secure luggage storage &amp; transfer service
        </p>
        <p className="mt-2 max-w-xl text-sm font-medium text-white/90 sm:text-base">
          Book in minutes on Telegram.
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-y-2">
          {features.flatMap(({ label, icon: Icon }, i) => {
            const pill = (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold text-white/95 backdrop-blur-sm sm:text-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-white/90" aria-hidden />
                {label}
              </li>
            );
            if (i === 0) return [pill];
            return [
              <li
                key={`sep-${label}`}
                className="hidden items-center px-1 text-sm font-semibold text-white/45 sm:flex"
                aria-hidden
              >
                ›
              </li>,
              pill,
            ];
          })}
        </ul>

        <div className="mt-14 w-full max-w-md border-t border-white/20 pt-10 sm:max-w-lg">
          <TrackedTelegramCta
            href={telegramHref}
            event="cta_telegram_click_hero"
            tone="thf"
            iconPosition="end"
            className="mt-0 w-full px-8 py-4 text-xs font-bold"
          >
            Book now on Telegram
          </TrackedTelegramCta>
          <p className="mt-3 text-sm font-medium text-white/90">
            Safe &amp; fast payment
          </p>
          <a
            href="#how-it-works"
            className="mt-2 inline-block text-sm font-semibold text-white underline-offset-4 hover:underline"
            onClick={() => trackEvent("cta_how_it_works_click", { section: "hero" })}
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}

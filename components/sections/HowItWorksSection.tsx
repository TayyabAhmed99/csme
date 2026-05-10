"use client";

import Image from "next/image";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { touristHowItWorksMedia } from "@/lib/tourist-media";

type HowItWorksSectionProps = {
  telegramHref: string;
};

const steps = [
  {
    title: "Reserve on Telegram",
    body: "Quick booking via our bot — quote and time windows in one thread.",
  },
  {
    title: "Drop off or transfer",
    body: "We collect from your hotel, station, or Airbnb and handle your bags securely.",
  },
  {
    title: "Enjoy your day",
    body: "Explore Tarragona hands-free while we store or move your luggage for you.",
  },
] as const;

export function HowItWorksSection({ telegramHref }: HowItWorksSectionProps) {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-28 border-b border-black/5 bg-surface py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
            How it works
          </h2>
          <p className="mt-3 text-sm text-brand/70 sm:text-base">
            Three simple steps from booking to exploring — all centered on Telegram.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const media = touristHowItWorksMedia[i];
            return (
              <article
                key={step.title}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-sky-200/60 bg-gradient-to-b from-sky-50/90 to-white p-5 shadow-soft sm:p-6"
              >
                {i < steps.length - 1 ? (
                  <span
                    className="absolute right-[-14px] top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-light text-brand/25 md:block"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-brand">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand/70">{step.body}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <TrackedTelegramCta
            href={telegramHref}
            event="cta_telegram_click_howitworks"
            variant="primary"
          >
            Book now on Telegram
          </TrackedTelegramCta>
        </div>
      </div>
    </section>
  );
}

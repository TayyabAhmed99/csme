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
      className="scroll-mt-28 border-b border-thf-line bg-thf-step py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-thf-navy sm:text-3xl">
            How it works
          </h2>
          <p className="mt-3 text-sm text-thf-muted sm:text-base">
            Three simple steps from booking to exploring — all centered on Telegram.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const media = touristHowItWorksMedia[i];
            return (
              <article
                key={step.title}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-thf-line/80 bg-thf-step p-5 shadow-soft sm:p-6"
              >
                {i < steps.length - 1 ? (
                  <span
                    className="absolute right-[-14px] top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-light text-thf-navy/25 md:block"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
                <p className="text-xs font-semibold uppercase tracking-wider text-thf-blue">
                  Step {i + 1}
                </p>
                <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden rounded-xl bg-thf-cream">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-thf-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-thf-muted">{step.body}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <TrackedTelegramCta
            href={telegramHref}
            event="cta_telegram_click_howitworks"
            tone="thf"
            variant="primary"
          >
            Book now on Telegram
          </TrackedTelegramCta>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  IconMessage,
  IconMapPin,
  IconClock,
  IconTruck,
} from "@/components/icons";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";

type HowItWorksSectionProps = {
  telegramHref: string;
};

const steps = [
  {
    title: "Start in Telegram",
    body: 'Tap “Start Booking” and answer a few quick questions.',
    icon: IconMessage,
  },
  {
    title: "Choose pickup & drop-off",
    body: "Tell us where we should collect your bags and where you want them delivered later.",
    icon: IconMapPin,
  },
  {
    title: "Receive your instant quote",
    body: "Get your price, pickup window, and delivery timing before payment.",
    icon: IconClock,
  },
  {
    title: "We collect, secure, and deliver",
    body: "Your luggage is tagged with secure QR bag IDs at pickup and delivered later to your destination.",
    icon: IconTruck,
  },
];

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
            A simple Telegram-first booking experience built for travelers who want to
            move around Tarragona without luggage stress.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/5 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand/45">
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
            Start Booking on Telegram
          </TrackedTelegramCta>
        </div>
      </div>
    </section>
  );
}

"use client";

import { IconQr, IconShield } from "@/components/icons";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";

type SecuritySectionProps = {
  telegramHref: string;
};

const features = [
  "Unique bag tag ID per bag",
  "Secure QR-based bag identification",
  "Pickup confirmation",
  "Storage intake scan",
  "Delivery release verification",
  "Designed to reduce wrong-bag risk and improve accountability",
];

const why = [
  "Reduced wrong-bag risk",
  "More confidence during handoff",
  "Better operational accountability",
  "A smoother traveler experience",
];

export function SecuritySection({ telegramHref }: SecuritySectionProps) {
  return (
    <section
      id="security"
      className="scroll-mt-28 border-b border-black/5 bg-brand py-14 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Trust
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Secure QR bag tagging
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Every booking is supported by a secure luggage handling flow designed to
              improve confidence and reduce mix-ups.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-white/85">Why it matters</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/70">
              {why.map((w) => (
                <li key={w}>— {w}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-white/55">
              Built for simple, secure, real-world luggage handling. At delivery, release
              may require booking reference plus QR verification depending on the
              scenario.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/90">
                <IconQr className="h-4 w-4" />
                QR-first workflow
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/90">
                <IconShield className="h-4 w-4" />
                Chain of custody
              </div>
            </div>
            <div className="mt-8">
              <TrackedTelegramCta
                href={telegramHref}
                event="cta_telegram_click_security"
                variant="secondary"
                className="border-white/25 bg-white text-brand hover:bg-white/95"
              >
                Start secure booking
              </TrackedTelegramCta>
            </div>
          </div>
          <div
            className="flex min-h-[280px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm lg:min-h-[420px]"
            aria-hidden
          >
            <div className="relative w-full max-w-[220px] rounded-xl border border-dashed border-white/25 bg-white/5 p-6 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-lg bg-white/10">
                <IconQr className="h-14 w-14 text-white/90" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                Luggage tag + QR
              </p>
              <p className="mt-1 text-sm text-white/70">
                Visual placeholder — swap for branded tag mockup when ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

type VerificationSectionProps = {
  telegramHref: string;
};

const benefits = [
  "Confirm your booking status",
  "Share your service details if needed",
  "Help others verify your luggage arrangement",
  "Reach support faster when required",
];

export function VerificationSection({
  telegramHref,
}: VerificationSectionProps) {
  const showVerify = siteConfig.enableVerify;

  return (
    <section
      id="verify"
      className="scroll-mt-28 border-b border-black/5 bg-surface py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
            Booking verification and share-friendly flow
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand/75 sm:text-base">
            After booking, customers can receive a booking confirmation reference and a
            lightweight verification flow designed to make travel coordination easier.
          </p>
        </div>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          {benefits.map((b) => (
            <li
              key={b}
              className="rounded-xl border border-black/5 bg-white px-4 py-3 text-left text-sm text-brand/80 shadow-soft"
            >
              {b}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-brand/55">
          Helpful when sharing details with travel companions, hotel reception, Airbnb
          hosts, or family.
        </p>
        <div className="mx-auto mt-10 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <TrackedTelegramCta
            href={telegramHref}
            event="cta_support_telegram_verify"
            className="w-full sm:w-auto"
          >
            Support / Telegram
          </TrackedTelegramCta>
          {showVerify ? (
            <Link
              href="/verify/demo"
              className="inline-flex w-full items-center justify-center rounded-lg border border-brand/15 bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5 sm:w-auto"
              onClick={() => trackEvent("verify_click", { target: "/verify/demo" })}
            >
              Verify a booking (sample)
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

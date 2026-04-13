"use client";

import Link from "next/link";
import type { PublicVerifyData } from "@/lib/types";
import { siteConfig } from "@/lib/config";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";

type VerifyCardProps = {
  data: PublicVerifyData;
  /** Pass-through for Telegram verify support link (no marketing params on verify page). */
  telegramSupportHref: string;
};

export function VerifyCard({ data, telegramSupportHref }: VerifyCardProps) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white p-6 shadow-lift sm:p-8">
      <h1 className="text-xl font-semibold text-brand sm:text-2xl">
        Booking verification
      </h1>
      <p className="mt-2 text-sm text-brand/65">
        Public-safe summary only — replace with API-backed data in production.
      </p>
      <dl className="mt-8 space-y-4 text-sm">
        <div className="flex flex-col gap-1 border-b border-black/5 pb-3 sm:flex-row sm:justify-between">
          <dt className="text-brand/55">Booking code</dt>
          <dd className="font-mono font-semibold text-brand">{data.bookingCode}</dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-black/5 pb-3 sm:flex-row sm:justify-between">
          <dt className="text-brand/55">Status</dt>
          <dd>
            <span className="inline-flex rounded-full bg-brand/5 px-3 py-0.5 text-xs font-semibold text-brand">
              {data.status}
            </span>
          </dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-black/5 pb-3 sm:flex-row sm:justify-between">
          <dt className="text-brand/55">Pickup window</dt>
          <dd className="text-brand/85">{data.pickupWindow}</dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-black/5 pb-3 sm:flex-row sm:justify-between">
          <dt className="text-brand/55">Delivery window</dt>
          <dd className="text-brand/85">{data.deliveryWindow}</dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-black/5 pb-3 sm:flex-row sm:justify-between">
          <dt className="text-brand/55">Bag count</dt>
          <dd className="text-brand/85">{data.bagCount}</dd>
        </div>
        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
          <dt className="text-brand/55">Security</dt>
          <dd className="text-brand/85">{data.securityStatus}</dd>
        </div>
      </dl>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <TrackedTelegramCta
          href={telegramSupportHref}
          event="cta_support_telegram_verify_page"
          className="w-full sm:w-auto"
        >
          Need help?
        </TrackedTelegramCta>
        <Link
          href={`mailto:${siteConfig.supportEmail}`}
          className="inline-flex w-full items-center justify-center rounded-lg border border-brand/15 px-5 py-3 text-sm font-semibold text-brand hover:bg-brand/5 sm:w-auto"
        >
          Email support
        </Link>
      </div>
    </article>
  );
}

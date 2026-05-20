"use client";

import Link from "next/link";
import type { PublicVerifyData } from "@/lib/types";
import { siteConfig } from "@/lib/config";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";

type VerifyCardProps = {
  data: PublicVerifyData;
  telegramSupportHref: string;
};

export function VerifyCard({ data, telegramSupportHref }: VerifyCardProps) {
  return (
    <article className="rounded-3xl border border-thf-line bg-white p-6 shadow-thf-card sm:p-8">
      <h1 className="text-xl font-extrabold text-thf-navy sm:text-2xl">
        Booking verification
      </h1>
      <p className="mt-2 text-sm text-thf-muted">
        Public-safe summary only — replace with API-backed data in production.
      </p>
      <dl className="mt-8 space-y-4 text-sm">
        <div className="flex flex-col gap-1 border-b border-thf-line pb-3 sm:flex-row sm:justify-between">
          <dt className="text-thf-muted">Booking code</dt>
          <dd className="font-mono font-semibold text-thf-navy">{data.bookingCode}</dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-thf-line pb-3 sm:flex-row sm:justify-between">
          <dt className="text-thf-muted">Status</dt>
          <dd>
            <span className="inline-flex rounded-full bg-thf-step px-3 py-0.5 text-xs font-semibold text-thf-navy">
              {data.status}
            </span>
          </dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-thf-line pb-3 sm:flex-row sm:justify-between">
          <dt className="text-thf-muted">Pickup window</dt>
          <dd className="text-thf-navy">{data.pickupWindow}</dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-thf-line pb-3 sm:flex-row sm:justify-between">
          <dt className="text-thf-muted">Delivery window</dt>
          <dd className="text-thf-navy">{data.deliveryWindow}</dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-thf-line pb-3 sm:flex-row sm:justify-between">
          <dt className="text-thf-muted">Bag count</dt>
          <dd className="text-thf-navy">{data.bagCount}</dd>
        </div>
        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
          <dt className="text-thf-muted">Security</dt>
          <dd className="text-thf-navy">{data.securityStatus}</dd>
        </div>
      </dl>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <TrackedTelegramCta
          href={telegramSupportHref}
          event="cta_support_telegram_verify_page"
          tone="thf"
          className="w-full sm:w-auto"
        >
          Need help?
        </TrackedTelegramCta>
        <Link
          href={`mailto:${siteConfig.supportEmail}`}
          className="inline-flex w-full items-center justify-center rounded-md border border-thf-navy/25 px-5 py-3 text-sm font-semibold text-thf-navy hover:bg-thf-sky sm:w-auto"
        >
          Email support
        </Link>
      </div>
    </article>
  );
}

"use client";

import Link from "next/link";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

type SpecializedPlatformsSectionProps = {
  spacehuntersTelegramHref: string;
};

export function SpecializedPlatformsSection({
  spacehuntersTelegramHref,
}: SpecializedPlatformsSectionProps) {
  const guduHref =
    siteConfig.guduFxUrl.length > 0 ? siteConfig.guduFxUrl : "/gudux-fx";
  const guduExternal = /^https?:\/\//i.test(guduHref);

  return (
    <section
      id="platforms"
      className="scroll-mt-28 border-b border-black/5 bg-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
          Expanding Through Specialized Platforms
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
            <h3 className="text-xl font-semibold tracking-tight text-brand sm:text-2xl">
              SpaceHunters
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-brand/75 sm:text-base">
              Tourist-based storage retrieval and logistics Telegram API bot powered
              by automation-first coordination.
            </p>
            <TrackedTelegramCta
              href={spacehuntersTelegramHref}
              event="cta_spacehunters_visit"
              variant="primary"
              className="mt-8 w-full sm:w-auto"
            >
              Visit SpaceHunters
            </TrackedTelegramCta>
          </article>

          <article className="flex flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
            <h3 className="text-xl font-semibold tracking-tight text-brand sm:text-2xl">
              GuduX FX
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-brand/75 sm:text-base">
              Real-time FX price discovery engine designed to improve transparency
              for cross-border participants.
            </p>
            {guduExternal ? (
              <a
                href={guduHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-brand/20 bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-surface sm:w-auto"
                onClick={() =>
                  trackEvent("cta_gudux_fx_visit", { href: guduHref })
                }
              >
                Visit GuduX FX
              </a>
            ) : (
              <Link
                href={guduHref}
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-brand/20 bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-surface sm:w-auto"
                onClick={() =>
                  trackEvent("cta_gudux_fx_visit", { href: guduHref })
                }
              >
                Visit GuduX FX
              </Link>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { ParentCompanyHeader } from "@/components/ParentCompanyHeader";
import { CompanyFooter } from "@/components/CompanyFooter";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.companyIntro} | Tourist Hands Free · FX Discovery`,
  description:
    `${siteConfig.companyIntro} operates focused product lines: hands-free luggage in Tarragona (Tourist Hands Free) and FX Discovery (coming soon).`,
  openGraph: {
    title: siteConfig.companyIntro,
    description:
      "Lightweight corporate presence — enter the product you need without browsing a traditional multi-section site.",
    type: "website",
    url: siteConfig.siteUrl,
  },
};

export default function ParentHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-brand">
      <ParentCompanyHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-black/5 bg-brand py-20 sm:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            aria-hidden
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_70%_20%,rgba(13,110,110,0.35),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              One ecosystem
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Focused products. Clear journeys.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {siteConfig.companyIntro} brings together standalone product experiences designed for speed, simplicity, and seamless customer journeys.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href={ROUTES.touristHandsFree}
                className="inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-lift transition-colors hover:bg-white/95"
              >
                Tourist Hands Free
              </Link>
              <Link
                href={ROUTES.fxDiscovery}
                className="inline-flex rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                FX Discovery
              </Link>
            </div>
          </div>
        </section>

        <section
          id="brands"
          className="scroll-mt-24 border-b border-black/5 bg-white py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
              Our brands
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-brand/70 sm:text-base">
              Each product has its own visual identity, landing structure, and
              conversion path. Campaign traffic can land on a brand URL directly.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <article className="flex flex-col rounded-2xl border border-black/5 bg-surface p-8 shadow-soft sm:p-10">
                <h3 className="text-xl font-semibold tracking-tight text-brand sm:text-2xl">
                  Tourist Hands Free
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-accent">
                  Tarragona · Live
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand/75 sm:text-base">
                  Luggage storage, pickup, and delivery with Telegram-first booking.
                  Built for visitors who want to land from an ad and move straight to
                  the bot.
                </p>
                <Link
                  href={ROUTES.touristHandsFree}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-muted sm:w-auto"
                >
                  Enter product
                </Link>
              </article>

              <article className="flex flex-col rounded-2xl border border-black/5 bg-surface p-8 shadow-soft sm:p-10">
                <h3 className="text-xl font-semibold tracking-tight text-brand sm:text-2xl">
                  FX Discovery
                </h3>
                <p className="mt-1 text-sm font-medium text-brand/55">
                  Coming soon
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand/75 sm:text-base">
                  A separate FX-focused experience under the same company — isolated
                  branding and funnel, no mixed messaging with travel logistics.
                </p>
                <Link
                  href={ROUTES.fxDiscovery}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-brand/20 bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-surface sm:w-auto"
                >
                  View status
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-b border-black/5 bg-surface py-14 sm:py-20"
        >
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
              About {siteConfig.companyIntro}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand/75 sm:text-base">
              We keep this site intentionally light. The priority is each
              product&apos;s own journey — especially fast paths from web to
              Telegram or other APIs where the transaction happens.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand/75 sm:text-base">
              Legal, privacy, and support links are shared at the company level; the
              product surface stays focused on one offer at a time.
            </p>
          </div>
        </section>
      </main>

      <CompanyFooter />
    </div>
  );
}

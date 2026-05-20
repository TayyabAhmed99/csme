"use client";

import Link from "next/link";
import { IconTelegram } from "@/components/icons";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import { isTelegramCtaEnabled } from "@/lib/telegram-cta";

type SiteFooterProps = {
  telegramHref: string;
};

export function SiteFooter({ telegramHref }: SiteFooterProps) {
  const mail = siteConfig.supportEmail;
  const wa = siteConfig.supportWhatsApp;
  const year = new Date().getFullYear();
  const telegramEnabled = isTelegramCtaEnabled();

  return (
    <footer className="border-t-2 border-thf-blue/25 bg-gradient-to-b from-thf-step to-thf-footer py-12 text-thf-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-b border-thf-navy/15 px-4 pb-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm font-semibold tracking-wide text-thf-navy">
          Affordable, Reliable, Safe.
        </p>
        {telegramEnabled ? (
          <a
            href={telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-thf-navy text-white transition-colors hover:bg-thf-navy-dark"
            aria-label="Telegram"
            onClick={() =>
              void trackEvent("cta_telegram_click_footer_social", { href: telegramHref })
            }
          >
            <IconTelegram className="h-5 w-5" />
          </a>
        ) : null}
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-thf-navy">Tourist Hands Free</p>
          <p className="mt-2 text-sm text-thf-muted">
            Tarragona · Travel lighter. Explore more.
          </p>
          <p className="mt-2 text-xs text-thf-muted">Tarragona, Spain</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-thf-navy">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm text-thf-muted">
            <li>
              <a href="#how-it-works" className="hover:text-thf-navy">
                How it works
              </a>
            </li>
            <li>
              <a href="#service-features" className="hover:text-thf-navy">
                Services
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-thf-navy">
                FAQ
              </a>
            </li>
            <li>
              <TrackedTelegramCta
                href={telegramHref}
                event="cta_telegram_click_footer_link"
                tone="thf"
                variant="ghost"
                icon={false}
                className="!justify-start !p-0 !text-sm !font-normal !text-thf-muted hover:!bg-transparent hover:!text-thf-navy"
              >
                Start booking
              </TrackedTelegramCta>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-thf-navy">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-thf-muted">
            <li>
              <Link href="/privacy" className="hover:text-thf-navy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-thf-navy">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/terms#service-conditions" className="hover:text-thf-navy">
                Service conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-thf-navy">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-thf-muted">
            <li>
              <a
                href={`mailto:${mail}`}
                className="hover:text-thf-navy"
                onClick={() => trackEvent("cta_support_click", { channel: "email" })}
              >
                {mail}
              </a>
            </li>
            {wa ? (
              <li>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-thf-navy"
                  onClick={() =>
                    trackEvent("cta_support_click", { channel: "whatsapp" })
                  }
                >
                  WhatsApp
                </a>
              </li>
            ) : null}
            <li>
              <Link
                href="/support"
                className="hover:text-thf-navy"
                onClick={() =>
                  trackEvent("cta_support_click", { channel: "support_page" })
                }
              >
                Support page
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs text-thf-muted">
        © {year} Tourist Hands Free · Tarragona, Spain. Service availability depends on
        zones and booking confirmation.
      </p>
    </footer>
  );
}

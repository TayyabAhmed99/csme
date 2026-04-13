"use client";

import Link from "next/link";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

type SiteFooterProps = {
  telegramHref: string;
};

export function SiteFooter({ telegramHref }: SiteFooterProps) {
  const mail = siteConfig.supportEmail;
  const wa = siteConfig.supportWhatsApp;

  return (
    <footer className="border-t border-black/5 bg-brand py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold">Hands-Free Tarragona</p>
          <p className="mt-2 text-sm text-white/75">Travel lighter. Explore more.</p>
          <p className="mt-3 text-sm text-white/65">
            Introduced and operated by{" "}
            <span className="text-white/90">C.S. MENIK SL</span>
          </p>
          <p className="mt-2 text-xs text-white/45">Tarragona, Spain</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white/90">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href="#how-it-works" className="hover:text-white">
                How it works
              </a>
            </li>
            <li>
              <a href="#security" className="hover:text-white">
                Security
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <TrackedTelegramCta
                href={telegramHref}
                event="cta_telegram_click_footer_link"
                variant="ghost"
                icon={false}
                className="!justify-start !p-0 !text-sm !font-normal !text-white/70 hover:!bg-transparent hover:!text-white"
              >
                Start booking
              </TrackedTelegramCta>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white/90">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/terms#service-conditions" className="hover:text-white">
                Service conditions
              </Link>
            </li>
            <li>
              <Link href="/terms#refunds" className="hover:text-white">
                Refunds &amp; cancellation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white/90">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a
                href={`mailto:${mail}`}
                className="hover:text-white"
                onClick={() => trackEvent("cta_support_click", { channel: "email" })}
              >
                {mail}
              </a>
            </li>
            <li>
              <TrackedTelegramCta
                href={telegramHref}
                event="cta_telegram_click_footer"
                variant="ghost"
                icon={false}
                className="!justify-start !p-0 !text-sm !font-normal !text-white/70 hover:!bg-transparent hover:!text-white"
              >
                Telegram booking
              </TrackedTelegramCta>
            </li>
            {wa ? (
              <li>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                  onClick={() => trackEvent("cta_support_click", { channel: "whatsapp" })}
                >
                  WhatsApp
                </a>
              </li>
            ) : null}
            <li>
              <Link
                href="/support"
                className="hover:text-white"
                onClick={() => trackEvent("cta_support_click", { channel: "support_page" })}
              >
                Support page
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs text-white/45">
        Service availability depends on operational zones, service windows, and booking
        confirmation. Add a cookie notice if you enable analytics or third-party scripts.
      </p>
      <div className="mx-auto mt-6 max-w-6xl border-t border-white/10 px-4 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} C.S. MENIK SL. All rights reserved.
      </div>
    </footer>
  );
}

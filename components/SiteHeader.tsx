"use client";

import Link from "next/link";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";

type SiteHeaderProps = {
  bookTelegramHref: string;
};

const nav = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#security", label: "Security" },
  { href: "#faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export function SiteHeader({ bookTelegramHref }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.08] bg-white/95 backdrop-blur-md">
      <div className="mx-auto grid h-[4.25rem] max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 md:grid-cols-[1fr_auto_1fr] md:h-[4.5rem]">
        <Link href="/" className="min-w-0 justify-self-start">
          <span className="block truncate text-base font-bold tracking-tight text-brand sm:text-lg">
            C.S. MENIK SL
          </span>
          <span className="mt-0.5 hidden text-[11px] font-medium text-neutral-500 sm:block">
            Hands-Free Tarragona
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 text-sm font-medium text-neutral-600 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="justify-self-end">
          <TrackedTelegramCta
            href={bookTelegramHref}
            event="cta_telegram_click_header"
            variant="primary"
            className="px-4 py-2.5 text-xs sm:px-5 sm:text-sm"
          >
            Book on Telegram
          </TrackedTelegramCta>
        </div>
      </div>

      <nav
        className="border-t border-black/[0.06] bg-neutral-50/90 md:hidden"
        aria-label="Section shortcuts"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-2 py-2 text-xs font-medium text-neutral-600">
          {nav.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 hover:bg-white hover:text-brand"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 hover:bg-white hover:text-brand"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}

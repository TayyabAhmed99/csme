import Link from "next/link";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";
type TouristHandsFreeHeaderProps = {
  bookTelegramHref: string;
};

export function TouristHandsFreeHeader({
  bookTelegramHref,
}: TouristHandsFreeHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.08] bg-white/95 backdrop-blur-md">
      <div className="mx-auto grid h-[4.25rem] max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 md:grid-cols-[1fr_auto_1fr] md:h-[4.5rem]">
        <Link
          href={ROUTES.touristHandsFree}
          className="min-w-0 justify-self-start"
        >
          <span className="flex items-center gap-2.5">
            <img
              src="/tourist-hands-free/logo-hf.svg"
              width={36}
              height={36}
              alt=""
              className="h-9 w-9 shrink-0 rounded-lg"
              decoding="async"
            />
            <span className="min-w-0">
              <span className="block truncate text-base font-bold tracking-tight text-brand sm:text-lg">
                Tourist Hands Free
              </span>
              <span className="mt-0.5 hidden text-[11px] font-medium text-neutral-500 sm:block">
                Tarragona · Luggage &amp; transfers
              </span>
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-6 text-sm font-medium text-neutral-600 md:flex"
          aria-label="Page"
        >
          <a href="#how-it-works" className="whitespace-nowrap hover:text-brand">
            How it works
          </a>
          <a href="#faq" className="whitespace-nowrap hover:text-brand">
            FAQ
          </a>
          <Link href={ROUTES.support} className="whitespace-nowrap hover:text-brand">
            Support
          </Link>
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
        aria-label="Shortcuts"
      >
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-2 py-2 text-xs font-medium text-neutral-600">
          <a
            href="#how-it-works"
            className="whitespace-nowrap rounded-full px-3 py-1.5 hover:bg-white hover:text-brand"
          >
            How it works
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap rounded-full px-3 py-1.5 hover:bg-white hover:text-brand"
          >
            FAQ
          </a>
          <Link
            href={ROUTES.support}
            className="whitespace-nowrap rounded-full px-3 py-1.5 hover:bg-white hover:text-brand"
          >
            Support
          </Link>
        </div>
      </nav>

      <div className="border-t border-black/[0.04] bg-neutral-50/80">
        <div className="mx-auto max-w-6xl px-4 py-1.5 text-center">
          <Link
            href={ROUTES.parent}
            className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 transition-colors hover:text-neutral-600"
          >
            {siteConfig.companyIntro}
          </Link>
        </div>
      </div>
    </header>
  );
}

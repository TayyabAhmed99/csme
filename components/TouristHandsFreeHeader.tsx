import Link from "next/link";
import { TrackedTelegramCta } from "@/components/TrackedTelegramCta";
import { ROUTES } from "@/lib/routes";

type TouristHandsFreeHeaderProps = {
  bookTelegramHref: string;
};

export function TouristHandsFreeHeader({
  bookTelegramHref,
}: TouristHandsFreeHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-thf-line bg-thf-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem]">
        <Link
          href={ROUTES.touristHandsFree}
          className="flex min-w-0 items-center gap-3"
        >
          <img
            src="/tourist-hands-free/logo-hf.svg"
            width={36}
            height={36}
            alt=""
            className="h-9 w-9 shrink-0"
            decoding="async"
          />
          <span className="min-w-0">
            <span className="block truncate text-base font-bold tracking-tight text-thf-navy sm:text-lg">
              Tourist Hands Free
            </span>
            <span className="mt-0.5 hidden text-[11px] font-medium text-thf-muted sm:block">
              Tarragona · Luggage &amp; transfers
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-semibold text-thf-navy md:flex"
          aria-label="Page"
        >
          <a href="#how-it-works" className="transition-colors hover:text-thf-navy-dark">
            How it works
          </a>
          <a href="#faq" className="transition-colors hover:text-thf-navy-dark">
            FAQ
          </a>
          <Link href={ROUTES.support} className="transition-colors hover:text-thf-navy-dark">
            Help
          </Link>
        </nav>

        <TrackedTelegramCta
          href={bookTelegramHref}
          event="cta_telegram_click_header"
          tone="thf"
          variant="primary"
          className="shrink-0 px-4 py-2.5 text-xs normal-case sm:px-5 sm:text-sm"
        >
          Book on Telegram
        </TrackedTelegramCta>
      </div>

      <nav
        className="border-t border-thf-line md:hidden"
        aria-label="Shortcuts"
      >
        <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-3 py-2.5">
          {[
            { href: "#how-it-works", label: "How it works" },
            { href: "#service-features", label: "Services" },
            { href: "#faq", label: "FAQ" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap rounded-md border border-thf-line bg-thf-cream px-4 py-1.5 text-xs font-semibold text-thf-navy transition-colors hover:bg-thf-step"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

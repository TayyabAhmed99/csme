import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export function ParentCompanyHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.08] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem]">
        <Link href={ROUTES.parent} className="min-w-0">
          <span className="block truncate text-base font-bold tracking-tight text-brand sm:text-lg">
            {siteConfig.companyIntro}
          </span>
          <span className="mt-0.5 hidden text-[11px] font-medium text-neutral-500 sm:block">
            Travel &amp; markets
          </span>
        </Link>

        <nav
          className="flex items-center gap-2 text-sm font-medium text-neutral-600 sm:gap-4"
          aria-label="Primary"
        >
          <details className="relative">
            <summary className="cursor-pointer list-none rounded-lg px-3 py-2 transition-colors hover:bg-neutral-100 hover:text-brand [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-1">
                Brands
                <span className="text-xs text-neutral-400" aria-hidden>
                  ▾
                </span>
              </span>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border border-black/10 bg-white py-2 shadow-soft">
              <Link
                href={ROUTES.touristHandsFree}
                className="block px-4 py-2.5 text-sm text-brand hover:bg-surface"
              >
                Tourist Hands Free
                <span className="mt-0.5 block text-xs font-normal text-neutral-500">
                  Luggage · Tarragona
                </span>
              </Link>
              <Link
                href={ROUTES.fxDiscovery}
                className="block px-4 py-2.5 text-sm text-brand hover:bg-surface"
              >
                FX Discovery
                <span className="mt-0.5 block text-xs font-normal text-neutral-500">
                  Coming soon
                </span>
              </Link>
            </div>
          </details>

          <a
            href="#about"
            className="hidden rounded-lg px-3 py-2 transition-colors hover:bg-neutral-100 hover:text-brand sm:inline-block"
          >
            About
          </a>

          <Link
            href={ROUTES.support}
            className="rounded-lg px-3 py-2 transition-colors hover:bg-neutral-100 hover:text-brand"
          >
            Contact
          </Link>

          <Link
            href={ROUTES.touristHandsFree}
            className="rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white shadow-soft transition-colors hover:bg-brand-muted sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">THF</span>
            <span className="hidden sm:inline">Tourist Hands Free</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

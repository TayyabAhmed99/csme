import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "FX Discovery | Coming soon | C.S. MENIK SL",
  description: "FX Discovery — coming soon.",
};

export default function FxDiscoveryPage() {
  const external =
    siteConfig.guduFxUrl.length > 0 && /^https?:\/\//i.test(siteConfig.guduFxUrl);
  const launchHref = external ? siteConfig.guduFxUrl : null;

  return (
    <div className="flex min-h-screen flex-col bg-surface text-brand">
      <header className="sticky top-0 z-40 border-b border-black/[0.08] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem]">
          <div className="min-w-0">
            <p className="truncate text-base font-bold tracking-tight text-brand sm:text-lg">
              FX Discovery
            </p>
            <p className="mt-0.5 truncate text-xs font-medium text-brand/55">
              Coming soon
            </p>
          </div>
          {launchHref ? (
            <a
              href={launchHref}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white shadow-soft transition-colors hover:bg-brand-muted sm:text-sm"
            >
              Open product
            </a>
          ) : null}
        </div>
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

      <main className="flex flex-1 flex-col">
        {!launchHref ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 sm:text-sm">
              FX Discovery
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-brand sm:text-7xl md:text-8xl">
              Coming Soon
            </h1>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand sm:text-5xl">
              FX Discovery
            </h1>
            <a
              href={launchHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-xl bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-muted"
            >
              Open product
            </a>
          </div>
        )}
      </main>

      <footer className="border-t border-black/5 bg-brand py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-center text-sm text-white/85 sm:text-left">
            <span className="font-semibold text-white">FX Discovery</span>
            <span className="text-white/50"> · </span>
            <Link
              href={ROUTES.parent}
              className="text-white/75 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              {siteConfig.companyIntro}
            </Link>
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/75">
            <li>
              <Link href={ROUTES.privacy} className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href={ROUTES.terms} className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href={ROUTES.support} className="hover:text-white">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.companyIntro}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

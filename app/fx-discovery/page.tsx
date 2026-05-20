import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export default function FxDiscoveryPage() {
  const external =
    siteConfig.guduFxUrl.length > 0 && /^https?:\/\//i.test(siteConfig.guduFxUrl);
  const launchHref = external ? siteConfig.guduFxUrl : null;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-fx-edge/80 bg-fx-void/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem]">
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-fx-glow/30 bg-fx-panel font-fx-mono text-xs font-bold text-fx-glow"
              aria-hidden
            >
              FX
            </span>
            <div>
              <p className="text-base font-semibold tracking-tight text-white sm:text-lg">
                FX Discovery
              </p>
              <p className="font-fx-mono text-[10px] uppercase tracking-[0.2em] text-fx-mist">
                {launchHref ? "Live" : "Preview build"}
              </p>
            </div>
          </div>
          {launchHref ? (
            <a
              href={launchHref}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg border border-fx-glow/50 bg-fx-glow/10 px-4 py-2 font-fx-mono text-xs font-semibold uppercase tracking-wider text-fx-glow transition-colors hover:bg-fx-glow/20 sm:text-sm"
            >
              Launch app
            </a>
          ) : (
            <span className="font-fx-mono text-[10px] uppercase tracking-widest text-fx-mist">
              Waitlist open
            </span>
          )}
        </div>
      </header>

      <main className="relative flex flex-1 flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-fx-grid bg-fx-grid opacity-60"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-fx-glow/10 blur-[120px]"
          aria-hidden
        />

        {!launchHref ? (
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:py-24">
            <p className="font-fx-mono text-xs uppercase tracking-[0.35em] text-fx-glow">
              Market intelligence
            </p>
            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
              Discover
              <span className="block bg-gradient-to-r from-fx-glow via-fx-pulse to-fx-signal bg-clip-text text-transparent">
                what moves markets
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-fx-mist sm:text-lg">
              FX Discovery is a separate environment for traders and analysts —
              built for clarity, speed, and the next wave of market tooling.
            </p>

            <div className="mt-14 grid w-full max-w-lg gap-4 text-left sm:grid-cols-3">
              {[
                { label: "Signals", desc: "Curated FX context" },
                { label: "Discovery", desc: "Cross-pair insight" },
                { label: "Future", desc: "API-first roadmap" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-fx-edge bg-fx-panel/80 p-4 backdrop-blur-sm"
                >
                  <p className="font-fx-mono text-[10px] uppercase tracking-widest text-fx-glow">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-fx-mist">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-16 font-fx-mono text-sm uppercase tracking-[0.4em] text-fx-mist/80">
              Coming soon
            </p>
          </div>
        ) : (
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              FX Discovery
            </h1>
            <p className="mt-4 max-w-md text-fx-mist">
              The product environment is ready. Continue in the dedicated app.
            </p>
            <a
              href={launchHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-lg border border-fx-glow bg-fx-glow/15 px-8 py-3.5 font-fx-mono text-sm font-semibold uppercase tracking-wider text-fx-glow shadow-fx-glow transition-colors hover:bg-fx-glow/25"
            >
              Launch app →
            </a>
          </div>
        )}
      </main>

      <footer className="relative z-10 border-t border-fx-edge bg-fx-panel/50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="font-fx-mono text-xs text-fx-mist">
            FX Discovery · © {new Date().getFullYear()}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-fx-mist">
            <li>
              <Link href={ROUTES.privacy} className="transition-colors hover:text-fx-glow">
                Privacy
              </Link>
            </li>
            <li>
              <Link href={ROUTES.terms} className="transition-colors hover:text-fx-glow">
                Terms
              </Link>
            </li>
            <li>
              <Link href={ROUTES.support} className="transition-colors hover:text-fx-glow">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

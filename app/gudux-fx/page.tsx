import Link from "next/link";

export const metadata = {
  title: "GuduX FX | C.S. MENIK SL",
  description:
    "Real-time FX price discovery for cross-border participants — a specialized platform by C.S. MENIK SL.",
};

export default function GuduXFxPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-brand">
      <header className="sticky top-0 z-40 border-b border-black/[0.08] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem]">
          <div className="min-w-0">
            <Link href="/" className="block truncate text-sm font-semibold text-brand hover:text-brand-accent">
              C.S. MENIK SL
            </Link>
            <p className="truncate text-base font-bold tracking-tight text-brand sm:text-lg">
              GuduX FX
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 rounded-lg border border-brand/15 bg-white px-4 py-2 text-xs font-semibold text-brand shadow-sm transition-colors hover:border-brand/25 hover:bg-surface sm:text-sm"
          >
            Company site
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
          <h1 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
            FX price discovery
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-brand/75 sm:text-base">
            Real-time FX price discovery for cross-border participants. This page is a
            placeholder — set{" "}
            <code className="rounded bg-brand/5 px-1.5 py-0.5 text-xs text-brand">
              NEXT_PUBLIC_GUDUX_FX_URL
            </code>{" "}
            in your environment to send &quot;Visit GuduX FX&quot; to your live product
            URL.
          </p>
          <p className="mt-6 text-sm text-brand/65">
            <Link href="/#platforms" className="font-medium text-brand-accent hover:underline">
              ← All platforms
            </Link>
          </p>
        </div>
      </main>

      <footer className="border-t border-black/5 bg-brand py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className="text-center text-sm text-white/80 sm:text-left">
            <span className="font-semibold text-white">GuduX FX</span>
            <span className="text-white/50"> · </span>
            <span className="text-white/70">C.S. MENIK SL</span>
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs text-white/45">
          © {new Date().getFullYear()} C.S. MENIK SL. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

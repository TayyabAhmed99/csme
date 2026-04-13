import Link from "next/link";

export const metadata = {
  title: "GuduX FX | C.S. MENIK SL",
};

export default function GuduXFxPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:py-20">
        <Link
          href="/#platforms"
          className="text-sm font-medium text-brand-accent hover:underline"
        >
          ← Back to platforms
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-brand">
          GuduX FX
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
      </div>
    </div>
  );
}

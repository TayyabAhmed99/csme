import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Hands-Free Tarragona",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <Link
          href="/"
          className="text-sm font-medium text-brand-accent hover:underline"
        >
          ← Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-brand">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-brand/70">
          This page is a placeholder for your legal counsel to replace. It
          describes how the marketing website operated by C.S. MENIK SL may
          process limited technical data (for example, standard server logs and
          analytics, if enabled).
        </p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-brand/80">
          <h2 className="text-lg font-semibold text-brand">Telegram booking</h2>
          <p className="mt-2">
            Booking conversations occur on Telegram and are subject to
            Telegram&apos;s own terms and privacy practices. This site does not
            host a booking form or store booking details submitted through this
            page.
          </p>
          <h2 className="mt-8 text-lg font-semibold text-brand">Cookies &amp; analytics</h2>
          <p className="mt-2">
            If you enable analytics (for example GA4 or Plausible), add a concise
            cookie / tracking notice here and link to consent tools as required in your
            jurisdiction.
          </p>
          <h2 className="mt-8 text-lg font-semibold text-brand">Contact</h2>
          <p className="mt-2">
            For privacy questions related to Hands-Free Tarragona, contact C.S.
            MENIK SL through the channels you publish for your business (for
            example, your official email or Telegram presence).
          </p>
        </div>
      </div>
    </div>
  );
}

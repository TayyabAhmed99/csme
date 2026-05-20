import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <Link
          href={ROUTES.touristHandsFree}
          className="text-sm text-neutral-500 hover:text-neutral-800"
        >
          ← Tourist Hands Free
        </Link>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-neutral-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-neutral-600">
          Placeholder for legal counsel. Describes how marketing sites may process
          limited technical data (server logs, analytics if enabled).
        </p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-700">
          <section>
            <h2 className="text-lg font-semibold text-neutral-900">
              Telegram booking
            </h2>
            <p className="mt-2">
              Booking conversations occur on Telegram and are subject to
              Telegram&apos;s own terms and privacy practices.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-neutral-900">
              Cookies &amp; analytics
            </h2>
            <p className="mt-2">
              If you enable analytics, add a concise cookie / tracking notice here.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

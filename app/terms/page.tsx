import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
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
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-neutral-600">
          Placeholder for legal counsel. Service availability, pricing, and consumer
          rights should be defined here and aligned with your Telegram booking flow.
        </p>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-700">
          <section id="service-conditions" className="scroll-mt-24">
            <h2 className="text-lg font-semibold text-neutral-900">
              Service conditions &amp; availability
            </h2>
            <p className="mt-2">
              Tourist Hands Free availability depends on operational zones, timing
              windows, and confirmed booking details.
            </p>
          </section>
          <section id="refunds" className="scroll-mt-24">
            <h2 className="text-lg font-semibold text-neutral-900">
              Refunds &amp; cancellation
            </h2>
            <p className="mt-2">
              Placeholder: cancellation windows, refund rules, and dispute handling.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

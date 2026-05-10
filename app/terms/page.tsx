import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Terms & Conditions | C.S. MENIK SL",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link
            href={ROUTES.parent}
            className="font-medium text-brand-accent hover:underline"
          >
            ← Company home
          </Link>
          <Link
            href={ROUTES.touristHandsFree}
            className="text-brand/60 hover:text-brand hover:underline"
          >
            Tourist Hands Free
          </Link>
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-brand">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-brand/70">
          This page is a placeholder for your legal counsel to replace. Service
          availability, pricing, liability limits, and consumer rights for
          Tourist Hands Free and other services should be defined here and aligned
          with your Telegram booking flow.
        </p>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-brand/80">
          <h2
            id="service-conditions"
            className="scroll-mt-24 text-lg font-semibold text-brand"
          >
            Service conditions &amp; availability
          </h2>
          <p className="mt-2">
            Tourist Hands Free is a lightweight MVP. Service availability depends on
            operational zones, timing windows, route coverage, and confirmed booking
            details. Replace this section with counsel-approved terms.
          </p>
          <h2
            id="refunds"
            className="scroll-mt-24 text-lg font-semibold text-brand"
          >
            Refunds &amp; cancellation
          </h2>
          <p className="mt-2">
            Placeholder: describe cancellation windows, refund rules, and how disputes
            are handled — aligned with your Telegram payment and booking confirmation
            flow.
          </p>
          <h2 className="text-lg font-semibold text-brand">Marketing site</h2>
          <p className="mt-2">
            Content on this website is provided for information and may change.
            Operational commitments are established in your booking channel (Telegram)
            and any confirmation materials you issue to customers.
          </p>
        </div>
      </div>
    </div>
  );
}

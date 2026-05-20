"use client";

import { trackEvent } from "@/lib/analytics";

const faqs = [
  {
    id: "what-is",
    q: "What is Tourist Hands Free?",
    a: "Tourist Hands Free is a luggage pickup, hold, and later delivery service in Tarragona that lets you explore the city without carrying your bags.",
  },
  {
    id: "how-book",
    q: "How do I book?",
    a: "Tap the Telegram booking button on this page. The bot will guide you step by step and provide your quote before payment.",
  },
  {
    id: "how-long",
    q: "How long does booking take?",
    a: "Most bookings can be completed in under 2 minutes.",
  },
  {
    id: "where-collect",
    q: "Where can you collect from?",
    a: "We support pickup from common traveler locations such as the train station, hotels, Airbnb stays, and other approved points.",
  },
  {
    id: "where-deliver",
    q: "Where can you deliver my luggage?",
    a: "Delivery can be arranged to hotels, Airbnb stays, Tarragona station, or other approved destination points depending on service availability.",
  },
  {
    id: "secure",
    q: "Is my luggage handled securely?",
    a: "The service is designed around a structured luggage handling process that can include secure QR bag tagging and booking reference verification to improve chain-of-custody confidence.",
  },
  {
    id: "share",
    q: "Can I share my booking details with someone else?",
    a: "Yes. The booking flow is designed to support a share-friendly confirmation and verification experience for companions, reception desks, or hosts.",
  },
  {
    id: "support",
    q: "What if I need support?",
    a: "You can use the support option inside Telegram or contact support through the website support page.",
  },
  {
    id: "coverage",
    q: "Do you cover all of Tarragona?",
    a: "Service availability may depend on operational zones, timing, and current service windows.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 bg-thf-cream py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-thf-navy sm:text-3xl">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-thf-muted sm:text-base">
          For booking-specific details, your Telegram thread remains the clearest record.
        </p>
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.id}
              className="group rounded-xl border border-thf-line bg-thf-sky px-4 py-1 shadow-soft open:shadow-thf-card"
              onToggle={(e) => {
                const el = e.currentTarget;
                if (el.open) {
                  trackEvent("faq_expand", { id: item.id });
                }
              }}
            >
              <summary className="cursor-pointer list-none py-3 text-sm font-semibold text-thf-navy outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {item.q}
                  <span className="text-thf-navy/40 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-thf-line pb-4 pt-3 text-sm leading-relaxed text-thf-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { IconMessage, IconClock, IconCheck } from "@/components/icons";

const reasons = [
  "No long forms",
  "Fast mobile-first booking",
  "Quick confirmations and updates",
  "Easy support communication",
  "Ideal for travelers already moving around the city",
];

export function TelegramWhySection() {
  return (
    <section className="border-b border-black/5 bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-soft">
              <IconMessage className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
              Why Telegram?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand/75 sm:text-base">
              We use Telegram as the fastest way to give you an instant quote, confirm
              details, and keep your booking simple on the go.
            </p>
          </div>
          <ul className="space-y-3 rounded-2xl border border-black/5 bg-white p-8 shadow-soft">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-brand/85">
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                <span>{r}</span>
              </li>
            ))}
            <li className="flex items-start gap-3 border-t border-black/5 pt-4 text-sm font-medium text-brand/80">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
              <span>
                Telegram is the booking interface for the MVP. This website is your
                entry point; the bot handles the flow.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

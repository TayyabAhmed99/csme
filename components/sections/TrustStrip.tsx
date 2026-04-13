import { IconClock, IconCheck, IconQr, IconMapPin } from "@/components/icons";

const items = [
  {
    title: "Instant quote",
    body: "Get your price in seconds directly inside Telegram.",
    Icon: IconClock,
  },
  {
    title: "Fast booking",
    body: "Complete your booking in under 2 minutes.",
    Icon: IconCheck,
  },
  {
    title: "Secure QR bag tags",
    body: "Each bag can be tagged and tracked through structured QR handling.",
    Icon: IconQr,
  },
  {
    title: "Travel more freely",
    body: "Drop your luggage and enjoy Tarragona without carrying it around.",
    Icon: IconMapPin,
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-black/5 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, body, Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-black/5 bg-surface p-6 shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/5 text-brand-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-brand">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { IconMapPin, IconTruck } from "@/components/icons";

const pickup = [
  "Tarragona Train Station",
  "Hotels",
  "Airbnb stays",
  "Other approved pickup points",
];

const delivery = [
  "Hotels",
  "Airbnb stays",
  "Tarragona station",
  "Other approved destination points",
];

export function PickupDeliverySection() {
  return (
    <section
      id="service-zones"
      className="scroll-mt-28 border-b border-black/5 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
            Pickup and delivery options
          </h2>
          <p className="mt-3 text-sm text-brand/70 sm:text-base">
            We support flexible luggage pickup and later delivery across Tarragona for
            common traveler routes.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-surface p-8 shadow-soft">
            <div className="flex items-center gap-3 text-brand">
              <IconMapPin className="h-7 w-7 text-brand-accent" />
              <h3 className="text-lg font-semibold">Pickup from</h3>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-brand/80">
              {pickup.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 bg-surface p-8 shadow-soft">
            <div className="flex items-center gap-3 text-brand">
              <IconTruck className="h-7 w-7 text-brand-accent" />
              <h3 className="text-lg font-semibold">Delivered to</h3>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-brand/80">
              {delivery.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-brand/55 sm:text-sm">
          Service windows and availability depend on route, demand, and time slot.
          Coverage may vary by operational zones — confirm in Telegram.
        </p>
      </div>
    </section>
  );
}

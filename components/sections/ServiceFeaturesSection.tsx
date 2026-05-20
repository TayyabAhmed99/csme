import Image from "next/image";
import { touristServiceFeatures } from "@/lib/tourist-media";

export function ServiceFeaturesSection() {
  return (
    <section
      id="service-features"
      className="scroll-mt-28 border-b border-thf-line bg-thf-cream py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-thf-navy sm:text-3xl">
            Why travelers choose us
          </h2>
          <p className="mt-3 text-sm text-thf-muted sm:text-base">
            Storage, transfers, and support — built around your day in Tarragona.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {touristServiceFeatures.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-thf-line bg-thf-cream shadow-thf-card"
            >
              <div className="relative aspect-[4/3] w-full bg-neutral-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight text-thf-navy sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-thf-blue sm:text-base">
                  {item.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCSMenikSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-black/5 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
          Introduced by C.S. MENIK SL
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand/75 sm:text-base">
          C.S. MENIK SL introduces and supports the launch of Hands-Free Tarragona, a
          practical travel convenience service designed to help visitors move around the
          city more freely.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-brand/75 sm:text-base">
          Our role is to present a streamlined customer-facing access point for the
          service and support a lean, secure MVP experience built around fast digital
          booking, structured pickup and delivery flow, QR-secured baggage handling, and
          simple traveler communication through Telegram.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-brand/75 sm:text-base">
          Hands-Free Tarragona is designed as a modern, lightweight service model
          focused on convenience, clarity, and operational trust.
        </p>
        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
          {[
            "Local travel convenience",
            "Secure luggage handling flow",
            "Telegram-first booking",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full border border-brand/10 bg-surface px-3 py-1 text-xs font-medium text-brand/75"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

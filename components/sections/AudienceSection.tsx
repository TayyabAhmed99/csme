const personas = [
  {
    title: "Train travelers",
    body: "Arriving before check-in or departing hours after checkout.",
  },
  {
    title: "Hotel guests",
    body: "Ideal when you’ve checked out but still want to enjoy the day.",
  },
  {
    title: "Airbnb guests",
    body: "Great for awkward gaps between checkout and travel time.",
  },
  {
    title: "Beach & day explorers",
    body: "Enjoy Tarragona without dragging bags across the city.",
  },
  {
    title: "Families & couples",
    body: "Travel lighter and move more comfortably.",
  },
  {
    title: "Short-stay visitors",
    body: "Make the most of every hour in Tarragona.",
  },
];

export function AudienceSection() {
  return (
    <section
      id="who-its-for"
      className="scroll-mt-28 border-b border-black/5 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
            Perfect for
          </h2>
          <p className="mt-3 text-sm text-brand/70 sm:text-base">
            If the schedule does not line up with your bags, this service is built for you.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-black/5 bg-surface p-6 shadow-soft"
            >
              <h3 className="text-base font-semibold text-brand">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand/70">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

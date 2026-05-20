export default function FxDiscoveryPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-fx-grid bg-fx-grid opacity-60" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fx-glow/10 blur-[120px]" />
      </div>

      <div className="relative z-10 overflow-visible text-center">
        <p className="font-fx-mono text-xs uppercase tracking-[0.35em] text-fx-glow">
          FX Discovery
        </p>
        <h1 className="mt-6 text-5xl font-bold leading-[1.2] tracking-tight sm:text-7xl md:text-8xl">
          <span className="inline-block bg-gradient-to-r from-fx-glow via-fx-pulse to-fx-signal bg-clip-text pb-3 text-transparent">
            Coming Soon
          </span>
        </h1>
      </div>
    </div>
  );
}

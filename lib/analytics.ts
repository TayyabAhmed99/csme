"use client";

export async function trackEvent(
  event: string,
  payload?: Record<string, unknown>
): Promise<void> {
  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event,
        payload: payload ?? {},
        ts: new Date().toISOString(),
      }),
      keepalive: true,
    });
  } catch {
    /* MVP: never block UX */
  }
}

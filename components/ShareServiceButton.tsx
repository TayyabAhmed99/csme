"use client";

import { useCallback, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type ShareServiceButtonProps = {
  shareUrl: string;
  className?: string;
};

export function ShareServiceButton({
  shareUrl,
  className = "",
}: ShareServiceButtonProps) {
  const [hint, setHint] = useState<string | null>(null);

  const onShare = useCallback(async () => {
    trackEvent("cta_share_service_click", { url: shareUrl });
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Tourist Hands Free",
          text: "Travel Tarragona without carrying your luggage.",
          url: shareUrl,
        });
        return;
      } catch {
        /* user cancelled or error */
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setHint("Link copied");
      setTimeout(() => setHint(null), 2500);
    } catch {
      setHint("Copy the URL from your browser bar");
      setTimeout(() => setHint(null), 3500);
    }
  }, [shareUrl]);

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        onClick={onShare}
        className={`inline-flex w-full items-center justify-center rounded-md border border-thf-navy/25 bg-thf-cream px-5 py-3 text-sm font-semibold text-thf-navy transition-colors hover:bg-thf-sky sm:w-auto ${className}`}
      >
        Share this service
      </button>
      {hint ? (
        <span className="text-xs text-thf-muted" role="status">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

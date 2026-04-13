"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

type ScrollAndPageAnalyticsProps = {
  hasMarketingRef: boolean;
  resolvedStartExample: string;
  src: string | null;
};

export function ScrollAndPageAnalytics({
  hasMarketingRef,
  resolvedStartExample,
  src,
}: ScrollAndPageAnalyticsProps) {
  const fired = useRef({ p50: false, p90: false });

  useEffect(() => {
    trackEvent("page_view", { path: "/", src: src ?? undefined });
    if (hasMarketingRef) {
      trackEvent("ref_detected", {});
    }
    trackEvent("telegram_deeplink_built", { start: resolvedStartExample });
  }, [hasMarketingRef, resolvedStartExample]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;
      const ratio = doc.scrollTop / max;
      if (!fired.current.p50 && ratio >= 0.5) {
        fired.current.p50 = true;
        trackEvent("scroll_50", {});
      }
      if (!fired.current.p90 && ratio >= 0.9) {
        fired.current.p90 = true;
        trackEvent("scroll_90", {});
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

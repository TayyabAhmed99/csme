"use client";

import { useEffect, useState } from "react";
import { IconTelegram } from "@/components/icons";
import { trackEvent } from "@/lib/analytics";

type MobileCtaBarProps = {
  href: string;
};

export function MobileCtaBar({ href }: MobileCtaBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) {
        setVisible(true);
        return;
      }
      const ratio = doc.scrollTop / max;
      setVisible(ratio >= 0.22);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-thf-line bg-thf-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-b from-thf-navy to-thf-navy-dark py-3.5 text-sm font-semibold text-white shadow-thf-cta transition-colors active:scale-[0.98]"
        onClick={() => trackEvent("cta_telegram_click_sticky", { href })}
      >
        <IconTelegram className="h-5 w-5 text-thf-telegram" />
        Book on Telegram
      </a>
    </div>
  );
}

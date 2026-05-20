"use client";

import { useEffect, useState } from "react";
import { IconTelegram } from "@/components/icons";
import { trackEvent } from "@/lib/analytics";
import {
  isTelegramCtaEnabled,
  TELEGRAM_CTA_DISABLED_TITLE,
  telegramCtaDisabledClass,
} from "@/lib/telegram-cta";

type MobileCtaBarProps = {
  href: string;
};

export function MobileCtaBar({ href }: MobileCtaBarProps) {
  const [visible, setVisible] = useState(false);
  const enabled = isTelegramCtaEnabled();

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

  const buttonClass = `flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-b from-thf-navy to-thf-navy-dark py-3.5 text-sm font-semibold text-white shadow-thf-cta transition-colors ${!enabled ? telegramCtaDisabledClass : "active:scale-[0.98]"}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-thf-line bg-thf-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      {enabled ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
          onClick={() => trackEvent("cta_telegram_click_sticky", { href })}
        >
          <IconTelegram className="h-5 w-5 text-thf-telegram" />
          Book on Telegram
        </a>
      ) : (
        <button
          type="button"
          disabled
          title={TELEGRAM_CTA_DISABLED_TITLE}
          aria-disabled="true"
          className={buttonClass}
        >
          <IconTelegram className="h-5 w-5 text-thf-telegram" />
          Book on Telegram
        </button>
      )}
    </div>
  );
}

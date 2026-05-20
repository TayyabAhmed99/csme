"use client";

import type { ReactNode } from "react";
import { IconTelegram } from "@/components/icons";
import { trackEvent } from "@/lib/analytics";
import { isTelegramCtaEnabled } from "@/lib/telegram-cta";

type CtaTone = "thf" | "default";

type TrackedTelegramCtaProps = {
  href: string;
  event: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  tone?: CtaTone;
  className?: string;
  icon?: boolean;
  iconPosition?: "start" | "end";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const toneStyles: Record<
  CtaTone,
  Record<"primary" | "secondary" | "ghost", string>
> = {
  thf: {
    primary:
      "bg-gradient-to-b from-thf-navy to-thf-navy-dark text-white shadow-thf-cta hover:from-thf-navy-dark hover:to-thf-navy-dark active:scale-[0.98] focus-visible:outline-thf-navy",
    secondary:
      "border border-thf-navy/25 bg-thf-cream text-thf-navy hover:bg-thf-sky",
    ghost:
      "text-thf-navy hover:bg-thf-sky focus-visible:outline-thf-navy",
  },
  default: {
    primary:
      "rounded-lg bg-brand text-white shadow-soft hover:bg-brand-muted focus-visible:outline-brand",
    secondary:
      "rounded-lg border border-brand/20 bg-white text-brand hover:bg-surface focus-visible:outline-brand",
    ghost:
      "rounded-lg text-brand hover:bg-brand/5 focus-visible:outline-brand",
  },
};

export function TrackedTelegramCta({
  href,
  event,
  children,
  variant = "primary",
  tone = "thf",
  className = "",
  icon = true,
  iconPosition = "start",
}: TrackedTelegramCtaProps) {
  if (!isTelegramCtaEnabled()) {
    return null;
  }

  const classNames = `${base} ${toneStyles[tone][variant]} ${iconPosition === "end" ? "flex-row-reverse" : ""} ${className}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames}
      onClick={() => void trackEvent(event, { href })}
    >
      {icon ? (
        <IconTelegram
          className={`h-5 w-5 shrink-0 ${variant === "primary" && tone === "thf" ? "text-thf-telegram" : ""}`}
        />
      ) : null}
      {children}
    </a>
  );
}

"use client";

import type { ReactNode } from "react";
import { IconTelegram } from "@/components/icons";
import { trackEvent } from "@/lib/analytics";

type TrackedTelegramCtaProps = {
  href: string;
  event: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: boolean;
  /** `end` = icon after text (reference layout). */
  iconPosition?: "start" | "end";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const styles = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-brand-muted active:bg-brand-muted",
  secondary:
    "border border-brand/20 bg-white text-brand hover:bg-surface",
  ghost: "text-brand hover:bg-brand/5",
};

export function TrackedTelegramCta({
  href,
  event,
  children,
  variant = "primary",
  className = "",
  icon = true,
  iconPosition = "start",
}: TrackedTelegramCtaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${iconPosition === "end" ? "flex-row-reverse" : ""} ${className}`}
      onClick={() => trackEvent(event, { href })}
    >
      {icon ? <IconTelegram className="h-5 w-5 shrink-0" /> : null}
      {children}
    </a>
  );
}

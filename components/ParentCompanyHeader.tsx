"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ROUTES } from "@/lib/routes";
import { parentBrand } from "@/lib/parent-brand";

export function ParentCompanyHeader() {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const brandsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!brandsOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (
        brandsRef.current &&
        !brandsRef.current.contains(event.target as Node)
      ) {
        setBrandsOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBrandsOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [brandsOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.08] bg-white/95 backdrop-blur-md">
      <div className="mx-auto grid h-[4.25rem] max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:h-[4.5rem]">
        <Link href={ROUTES.parent} className="flex shrink-0 items-center justify-self-start">
          <Image
            src={parentBrand.logo}
            alt="C.S. MENIK SL"
            width={200}
            height={60}
            className="h-11 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        <nav
          className="flex items-center justify-center gap-2 text-sm font-medium text-[#605e7b] sm:gap-6"
          aria-label="Primary"
        >
          <div ref={brandsRef} className="relative">
            <button
              type="button"
              aria-expanded={brandsOpen}
              aria-haspopup="true"
              onClick={() => setBrandsOpen((open) => !open)}
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-[#605e7b] transition-colors hover:bg-neutral-100"
            >
              Brands
              <span className="text-xs text-neutral-400" aria-hidden>
                ▾
              </span>
            </button>
            {brandsOpen ? (
              <div
                className="absolute left-1/2 top-full z-50 mt-1 min-w-[220px] -translate-x-1/2 rounded-xl border border-black/10 bg-white py-2 shadow-soft"
                role="menu"
              >
                <Link
                  href={ROUTES.touristHandsFree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-[#605e7b] hover:bg-surface"
                  role="menuitem"
                  onClick={() => setBrandsOpen(false)}
                >
                  Tourist Hands Free
                  <span className="mt-0.5 block text-xs font-normal text-neutral-500">
                    Luggage · Tarragona
                  </span>
                </Link>
                <Link
                  href={ROUTES.fxDiscovery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-[#605e7b] hover:bg-surface"
                  role="menuitem"
                  onClick={() => setBrandsOpen(false)}
                >
                  FX Discovery
                  <span className="mt-0.5 block text-xs font-normal text-neutral-500">
                    Coming soon
                  </span>
                </Link>
              </div>
            ) : null}
          </div>

          <a
            href="#about"
            className="hidden rounded-lg px-3 py-2 text-[#605e7b] transition-colors hover:bg-neutral-100 sm:inline-block"
          >
            About
          </a>

          <Link
            href={ROUTES.support}
            className="rounded-lg px-3 py-2 text-[#605e7b] transition-colors hover:bg-neutral-100"
          >
            Contact
          </Link>
        </nav>

        <Link
          href={ROUTES.touristHandsFree}
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-end rounded-lg bg-[#605e7b] px-3 py-2 text-xs font-semibold text-white shadow-soft transition-colors hover:bg-[#605e7b]-hover sm:px-4 sm:text-sm"
        >
          <span className="sm:hidden">THF</span>
          <span className="hidden sm:inline">Tourist Hands Free</span>
        </Link>
      </div>
    </header>
  );
}

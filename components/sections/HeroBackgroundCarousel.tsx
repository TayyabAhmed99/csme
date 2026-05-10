"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { touristHeroSlides } from "@/lib/tourist-media";

const SLIDES = [...touristHeroSlides];

const INTERVAL_MS = 6000;

export function HeroBackgroundCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            className="object-cover object-center brightness-[0.92] contrast-[1.04] saturate-[1.06]"
            sizes="100vw"
            priority={i === 0}
            unoptimized
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,transparent_0%,rgba(12,35,64,0.22)_100%)]" />
    </div>
  );
}

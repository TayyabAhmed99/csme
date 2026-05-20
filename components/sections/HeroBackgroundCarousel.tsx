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
            className="object-cover object-center brightness-[0.92] contrast-[1.04]"
            sizes="100vw"
            priority={i === 0}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}

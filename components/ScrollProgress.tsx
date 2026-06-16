"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/use-gsap";

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = bar.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          gsap.set(el, { scaleX: self.progress });
        },
      });
    });

    return () => mm.revert();
  });

  return (
    <div
      ref={bar}
      className="fixed top-0 left-0 z-50 h-[2px] w-full origin-left bg-primary scale-x-0"
      style={{ transformOrigin: "0% 50%" }}
    />
  );
}

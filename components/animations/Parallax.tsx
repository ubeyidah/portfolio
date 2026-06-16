"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.2, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.create({
        trigger: el.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(el, { y: self.progress * speed * 100 });
        },
      });
    });

    return () => mm.revert();
  });

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

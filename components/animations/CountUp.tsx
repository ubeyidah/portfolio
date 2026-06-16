"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  scroll?: boolean;
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className,
  prefix = "",
  suffix = "",
  scroll = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: from };

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.to(obj, {
        val: to,
        duration,
        ease: "power3.out",
        delay,
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
        },
      });

      if (scroll) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
          animation: tween,
        });
      }
    });

    return () => mm.revert();
  });

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}{to}{suffix}
    </span>
  );
}

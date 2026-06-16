"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: React.ElementType;
  stagger?: number;
  duration?: number;
  delay?: number;
  scroll?: boolean;
}

export function TextReveal({
  children,
  className,
  as: Tag = "h2",
  stagger = 0.04,
  duration = 0.5,
  delay = 0,
  scroll = true,
}: TextRevealProps) {
  const root = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const el = root.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>(".word");

    if (words.length === 0) return;

    gsap.set(words, { opacity: 0, y: 24, rotateX: -40 });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      if (scroll) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
          animation: gsap.to(words, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration,
            stagger,
            ease: "power3.out",
            delay,
          }),
        });
      } else {
        gsap.to(words, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration,
          stagger,
          ease: "power3.out",
          delay,
        });
      }
    });

    return () => mm.revert();
  });

  const words = children.split(" ").map((w, i) => (
    <span key={i} className="word inline-block" style={{ perspective: "600px" }}>
      {w}{" "}
    </span>
  ));

  const Comp = Tag as React.ElementType;

  return (
    <Comp ref={root} className={cn("inline", className)}>
      {words}
    </Comp>
  );
}

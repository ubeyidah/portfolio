"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/use-gsap";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "fade";
type ClipType = "none" | "from-left" | "from-right" | "circle";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  clip?: ClipType;
  scrub?: boolean;
  pin?: boolean;
  markers?: boolean;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

const defaultProps: Partial<RevealProps> = {
  direction: "up",
  distance: 40,
  duration: 0.7,
  delay: 0,
  stagger: 0,
  clip: "none",
  scrub: false,
  pin: false,
  as: "div",
};

export function Reveal(props: RevealProps) {
  const merged = { ...defaultProps, ...props };
  const {
    children,
    className,
    direction,
    distance,
    duration,
    delay,
    stagger,
    clip,
    scrub,
    pin,
    markers,
    as: Tag,
    style,
  } = merged;

  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const gsapFrom: gsap.TweenVars = {};
      const dist = distance!;

      if (clip === "from-left") {
        gsapFrom.clipPath = "inset(0 100% 0 0)";
      } else if (clip === "from-right") {
        gsapFrom.clipPath = "inset(0 0 0 100%)";
      } else if (clip === "circle") {
        gsapFrom.clipPath = "circle(0% at 50% 50%)";
      } else {
        gsapFrom.opacity = 0;
        if (direction === "up") gsapFrom.y = dist;
        else if (direction === "down") gsapFrom.y = -dist;
        else if (direction === "left") gsapFrom.x = dist;
        else if (direction === "right") gsapFrom.x = -dist;
      }

      const gsapTo: gsap.TweenVars = {
        opacity: 1,
        x: 0,
        y: 0,
        clipPath: clip !== "none" ? "inset(0 0 0 0)" : undefined,
        duration,
        ease: "power2.out",
        delay,
        stagger: stagger || undefined,
      };

      if (scrub) {
        gsapTo.ease = "none";
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          end: "top 35%",
          scrub: 1.5,
          animation: gsap.fromTo(el, gsapFrom, gsapTo),
        });
      } else {
        gsap.set(el, gsapFrom);
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
          animation: gsap.to(el, gsapTo),
        });
      }

      if (pin) {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom top",
          pin: true,
        });
      }
    });

    return () => mm.revert();
  });

  const Comp = Tag as React.ElementType;

  return (
    <Comp ref={root} className={cn(className)} style={style}>
      {children}
    </Comp>
  );
}

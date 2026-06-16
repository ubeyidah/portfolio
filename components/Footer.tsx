"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/use-gsap";

export default function Footer() {
  const archRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const el = archRef.current;
    if (!el) return;

    const letters = el.querySelectorAll<HTMLElement>(".arch-letter");
    if (letters.length === 0) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.set(letters, { opacity: 0, y: 40, rotateX: -60 });

      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
        animation: gsap.to(letters, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "back.out(1.7)",
        }),
      });
    });

    return () => mm.revert();
  });

  return (
    <footer className="mt-24">
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="border-t" />
        <div className="flex flex-col gap-6 px-4 py-6">
          <div className="flex items-center justify-center">
            <span className="text-base text-muted-foreground">
              © {new Date().getFullYear()} Ubeyidah. All rights reserved.
            </span>
          </div>

          <div className="h-10 border-y border-border/60 stripe-bg-12" />
        </div>

        <div className="relative flex h-full items-center justify-center py-10">
          <div className="group relative w-full max-w-4xl overflow-hidden px-6 py-10">
            <div className="flex items-center gap-6">
              <div className="h-12 flex-1 stripe-bg-12" />
              <h3
                ref={archRef}
                aria-hidden="true"
                className="font-serif text-center text-5xl font-black tracking-tight text-foreground/10 transition-all duration-300 group-hover:text-foreground dark:group-hover:text-white group-hover:drop-shadow-[0_0_18px_rgba(0,0,0,0.12)] dark:group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.35)] md:text-6xl"
                style={{ perspective: "800px" }}
              >
                {"I USE ARCH BTW".split("").map((char, i) => (
                  <span key={i} className="arch-letter inline-block" style={{ perspective: "800px" }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h3>
              <div className="h-12 flex-1 stripe-bg-12" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

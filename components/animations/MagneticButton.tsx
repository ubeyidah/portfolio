"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/hooks/use-gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  [key: string]: unknown;
}

export function MagneticButton({
  children,
  className,
  as: Tag = "button",
  href,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    xTo.current = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    yTo.current = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

      const onMouseMove = ((e: Event) => {
        const me = e as MouseEvent;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(me.clientX - centerX, me.clientY - centerY);
        const maxDist = 200;
        const strength = Math.min(1, 1 - dist / maxDist) * 12;
        xTo.current!(me.clientX - centerX > 0 ? strength : -strength);
        yTo.current!(me.clientY - centerY > 0 ? strength : -strength);
      }) as EventListener;

      const onMouseLeave = (() => {
        xTo.current!(0);
        yTo.current!(0);
      }) as EventListener;

      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);
      return () => {
        el.removeEventListener("mousemove", onMouseMove);
        el.removeEventListener("mouseleave", onMouseLeave);
      };
  });

  const Comp = Tag as any;

  return (
    <Comp ref={ref} className={className} href={href} {...rest}>
      {children}
    </Comp>
  );
}

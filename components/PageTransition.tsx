"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/hooks/use-gsap";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const el = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!el.current) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    });

    setReady(true);
    return () => mm.revert();
  }, [pathname]);

  return (
    <div ref={el} style={{ opacity: ready ? undefined : 0 }}>
      {children}
    </div>
  );
}

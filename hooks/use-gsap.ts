import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger, useGSAP };

export const EASE = {
  out: "power2.out",
  outExpo: "power3.out",
  soft: "sine.out",
  bounce: "back.out(1.7)",
  elastic: "elastic.out(1, 0.3)",
  inOut: "power2.inOut",
};

export function useReducedMotion() {
  const mq = useRef<MediaQueryList | null>(null);
  const reduced = useRef(false);

  useEffect(() => {
    mq.current = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.current.matches;
    const handler = (e: MediaQueryListEvent) => { reduced.current = e.matches; };
    mq.current.addEventListener("change", handler);
    return () => mq.current?.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export function useScrollDisable(condition: boolean) {
  useEffect(() => {
    if (condition) {
      ScrollTrigger.getAll().forEach((st) => st.disable());
    } else {
      ScrollTrigger.getAll().forEach((st) => st.enable());
    }
  }, [condition]);
}

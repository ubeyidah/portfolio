"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/hooks/use-gsap";

export default function HeroSection() {
  const photo = useRef<HTMLImageElement>(null);
  const name = useRef<HTMLHeadingElement>(null);
  const title = useRef<HTMLParagraphElement>(null);
  const cta = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!photo.current || !name.current || !title.current || !cta.current) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        photo.current,
        { scale: 0.85, opacity: 0, rotate: -6 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.7 }
      )
        .fromTo(
          name.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        )
        .fromTo(
          title.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          "-=0.2"
        )
        .fromTo(
          cta.current,
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5 },
          "-=0.15"
        );
    });

    return () => mm.revert();
  });

  return (
    <section className="border-b bg-linear-to-br from-primary/10 via-background to-background">
      <div className="flex items-center justify-between gap-4 px-4 py-8">
        <div className="flex items-center gap-4">
          <Image
            ref={photo}
            src="/profile.jpg"
            alt="Portrait of Ubeyid Oumer"
            width={60}
            height={60}
            className="rounded-full aspect-square object-top object-cover"
            priority
            sizes="60px"
          />

          <div className="flex-1">
            <h1 ref={name} className="text-lg font-bold">Ubeyid Oumer</h1>
            <p ref={title} className="text-muted-foreground text-sm">Self-Taught Developer</p>
          </div>
        </div>

        <div>
          <Link
            ref={cta}
            href="#contact"
            className="px-3 py-2 min-h-11 inline-flex items-center bg-primary/10 text-primary text-xs rounded-md hover:bg-primary/20 transition-colors"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}

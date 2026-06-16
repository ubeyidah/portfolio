"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLink } from "@hugeicons/core-free-icons";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import CertificateLightbox from "./CertificateLightbox";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/use-gsap";

export default function AchievementsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const cert = certRef.current;
    const badge = badgeRef.current;
    if (!cert || !badge) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.set(cert, { clipPath: "circle(0% at 50% 50%)" });
      gsap.set(badge, { scale: 0, opacity: 0 });

      ScrollTrigger.create({
        trigger: cert,
        start: "top 80%",
        toggleActions: "play none none reverse",
        animation: gsap.timeline({ defaults: { ease: "power3.out" } })
          .to(cert, { clipPath: "circle(100% at 50% 50%)", duration: 1 })
          .to(badge, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }, "-=0.3"),
      });
    });

    return () => mm.revert();
  });

  return (
    <>
      <section id="achievements">
        <div className="mx-auto h-full max-w-5xl border-x">
          <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-16 md:items-center">
            <h2 className="text-3xl font-bold md:text-4xl">Achievements</h2>
            <p className="mb-5 text-base text-muted-foreground">
              Recognition that keeps me going
            </p>
          </div>

          <div className="border-b" />

          <div className="flex flex-col border-b md:flex-row md:items-stretch">
            <div
              ref={certRef}
              className="relative overflow-hidden md:w-96 md:shrink-0 border-b md:border-b-0 md:border-r border-border/60 cursor-pointer group"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src="/certificate/certificate.png"
                alt="THRIVE 2018 Hackathon Certificate"
                width={520}
                height={320}
                className="h-64 w-full object-cover md:h-full transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 768px) 384px, 100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <HugeiconsIcon icon={ExternalLink} size={16} />
                  View Certificate
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-lg font-medium tracking-wider">
                    THRIVE 2018 Hackathon
                  </h3>
                  <Badge
                    ref={badgeRef}
                    variant="outline"
                    className="rounded-full border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                  >
                    1st Place
                  </Badge>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  My teammate{" "}
                  <a
                    href="https://muradbzuneh.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground no-underline transition-colors hover:text-foreground"
                  >
                    Murad Bzuneh
                  </a>{" "}
                  and I secured 1st place in the THRIVE 2018 Hackathon
                  Challenges, organized by Qelem Meda Technologies in
                  collaboration with Wollo University on May 14–15, 2026.
                </p>
              </div>
              <div className="border-t">
                <Button
                  variant="ghost"
                  onClick={() => setLightboxOpen(true)}
                  className="flex w-full items-center gap-2 rounded-none py-2"
                >
                  <HugeiconsIcon icon={ExternalLink} size={16} />
                  View Certificate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CertificateLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

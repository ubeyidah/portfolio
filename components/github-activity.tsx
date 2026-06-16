"use client";

import { useRef } from "react";
import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  ContributionGraphFooter,
  ContributionGraphTotalCount,
  ContributionGraphLegend,
} from "@/components/kibo-ui/contribution-graph";
import { gsap, ScrollTrigger, useGSAP } from "@/hooks/use-gsap";

type Activity = {
  date: string;
  count: number;
  level: number;
};

export default function GithubActivity({
  data,
}: {
  data: Activity[];
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const cells = el.querySelectorAll<SVGRectElement>("rect[data-date]");
      if (cells.length === 0) return;

      gsap.set(cells, { scaleY: 0, transformOrigin: "50% 100%", opacity: 0 });

      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
        animation: gsap.to(cells, {
          scaleY: 1,
          opacity: 1,
          duration: 0.4,
          stagger: { each: 0.008, from: "start" },
          ease: "power2.out",
        }),
      });
    });

    return () => mm.revert();
  });

  return (
    <div ref={root}>
      <ContributionGraph data={data} labels={{ totalCount: "{{count}} activities" }}>
        <ContributionGraphCalendar>
          {({ activity, dayIndex, weekIndex }) => (
            <ContributionGraphBlock
              activity={activity}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
            />
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter>
          <ContributionGraphTotalCount />
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </div>
  );
}

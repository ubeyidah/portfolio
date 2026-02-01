import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Projects",
  description: "Selected projects and experiments by Ubeyidah.",
  alternates: {
    canonical: "https://ubeyidah.tech/projects",
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Projects | Ubeyidah",
    description: "Selected projects and experiments by Ubeyidah.",
    url: "https://ubeyidah.tech/projects",
    type: "website",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Projects | Ubeyidah",
    description: "Selected projects and experiments by Ubeyidah.",
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-5xl border-x">
          <div className="px-4 py-14 bg-linear-to-br from-muted/40 via-background to-muted/20">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Projects</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              What I’m Building
            </h1>
            <p className="mt-3 text-muted-foreground text-base">
              Real-world projects, experiments, and systems I’m actively working on.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection showHeader={false} showAllLink={false} sectionClassName="pt-0" />
      <div className="section-connector" />
    </div>
  );
}

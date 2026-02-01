import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/animated-section";
import type { ReactNode } from "react";

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="space-y-5">
      <Header />
      {children}
      <AnimatedSection delay={200}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}

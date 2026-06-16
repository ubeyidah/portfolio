import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import GitHubGraph from "@/components/GitHubGraph";
import ProjectsSection from "@/components/ProjectsSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FixedInputClient from "@/components/FixedInputClient";
import { AnimatedSection } from "@/components/animated-section";
import { getBlogPosts } from "@/lib/blog-posts";
import { Suspense } from "react";

export default function Page() {
  const posts = getBlogPosts();
  return (
    <main id="main" className="space-y-0 pb-24 md:pb-0">
      <Header />
      <AnimatedSection>
        <section className="border-b">
          <div className="mx-auto max-w-5xl border-x">
            <HeroSection />
            <AboutSection />
            <Suspense fallback={<GitHubGraphFallback />}> 
              <GitHubGraph />
            </Suspense>
          </div>
        </section>
      </AnimatedSection>
      <div className="mx-auto max-w-5xl border-x">
        <div className="section-connector" />
      </div>
      <AnimatedSection delay={300}>
        <ProjectsSection />
      </AnimatedSection>
      <div className="section-connector border-x border-input" />
      <AnimatedSection delay={350}>
        <AchievementsSection />
      </AnimatedSection>
      <div className="section-connector border-x border-input" />
      <AnimatedSection delay={400}>
        <LatestArticlesSection posts={posts} />
      </AnimatedSection>
      <div className="section-connector" />
      <AnimatedSection delay={600}>
        <ContactSection />
      </AnimatedSection>
      <div className="section-connector" />
      <AnimatedSection delay={800}>
        <Footer />
      </AnimatedSection>
      <FixedInputClient />
    </main>
  );
}

function GitHubGraphFallback() {
  return (
    <section>
      <div className="px-4 pt-4 pb-8">
        <div className="h-32 w-full animate-pulse rounded-md border bg-muted/30" />
      </div>
    </section>
  );
}

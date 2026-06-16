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
import { Reveal } from "@/components/animations/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Parallax } from "@/components/animations/Parallax";
import { getBlogPosts } from "@/lib/blog-posts";
import { Suspense } from "react";

export default function Page() {
  const posts = getBlogPosts();
  return (
    <main id="main" className="space-y-0 pb-24 md:pb-0">
      <ScrollProgress />
      <Header />
      <section className="border-b">
        <div className="mx-auto max-w-5xl border-x">
          <HeroSection />
          <Reveal direction="up">
            <AboutSection />
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <Suspense fallback={<GitHubGraphFallback />}> 
              <GitHubGraph />
            </Suspense>
          </Reveal>
        </div>
      </section>
      <div className="mx-auto max-w-5xl border-x">
        <div className="section-connector" />
      </div>
      <Reveal direction="up" delay={0.1}>
        <ProjectsSection />
      </Reveal>
      <div className="section-connector border-x border-input" />
      <Reveal direction="up" delay={0.1}>
        <AchievementsSection />
      </Reveal>
      <div className="section-connector border-x border-input" />
      <Reveal direction="up" delay={0.1}>
        <LatestArticlesSection posts={posts} />
      </Reveal>
      <div className="section-connector" />
      <Reveal direction="up" delay={0.1}>
        <ContactSection />
      </Reveal>
      <div className="section-connector" />
      <Reveal direction="fade" delay={0.1}>
        <Footer />
      </Reveal>
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

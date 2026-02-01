import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GitHubGraph from "@/components/GitHubGraph";
import ProjectsSection from "@/components/ProjectsSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FixedInput from "@/components/FixedInput";
import { AnimatedSection } from "@/components/animated-section";
import { getBlogPosts } from "@/lib/blog-posts";

export default function Page() {
  const posts = getBlogPosts();
  return (
    <main className="space-y-0">
      <Header />
      <AnimatedSection>
        <section className="border-b">
          <div className="mx-auto max-w-5xl border-x">
            <HeroSection />
            <AboutSection />
            <GitHubGraph />
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
      <FixedInput />
    </main>
  );
}

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
    <main className="space-y-5">
      <Header />
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <GitHubGraph />
      </AnimatedSection>
      <AnimatedSection delay={300}>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection delay={400}>
        <LatestArticlesSection posts={posts} />
      </AnimatedSection>
      <AnimatedSection delay={600}>
        <ContactSection />
      </AnimatedSection>
      <AnimatedSection delay={800}>
        <Footer />
      </AnimatedSection>
      <FixedInput />
    </main>
  );
}

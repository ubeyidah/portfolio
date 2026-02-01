import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedInput from "@/components/FixedInput";
import { AnimatedSection } from "@/components/animated-section";
import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Blog",
  description:
    "Writing by Ubeyidah Oumer on software engineering, AI systems, Linux, self-learning, and building real-world tools.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://ubeyidah.tech/blog",
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Blog | Ubeyidah",
    description:
      "Thoughts and notes on software engineering, AI, Linux, and learning by building.",
    url: "https://ubeyidah.tech/blog",
    type: "website",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Blog | Ubeyidah",
    description:
      "Software engineering, AI, Linux, and learning by building.",
  },
};


export default function Blog() {
  return (
    <div className="space-y-5">
      <Header />
      <div className="flex items-center justify-center min-h-[80vh]">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-8xl font-black text-muted-foreground/30 rotate-2">
              Writing in Progress
            </h1>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection delay={200}>
        <Footer />
      </AnimatedSection>
      <FixedInput />
    </div>
  );
}

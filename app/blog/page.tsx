import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import BlogListSection from "@/components/BlogListSection";
import { getBlogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Blog",
  description:
    "Writing by Ubeyidah Oumer on software engineering, AI systems, Linux, self-learning, and building real-world tools.",
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
  const posts = getBlogPosts();
  return (
    <div>
      <BlogListSection posts={posts} sectionClassName="py-0" />
      <div className="section-connector" />
    </div>
  );
}

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
    <div className="space-y-10">
      <section className="pt-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">Blog</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            Notes on building, learning, and designing software
          </h1>
          <p className="text-muted-foreground mt-3">
            Practical lessons from real projects, systems thinking, and product design by Ubeyidah.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            {posts.length} articles · Updated regularly
          </div>
        </div>
      </section>

      <BlogListSection posts={posts} />
    </div>
  );
}

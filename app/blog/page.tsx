import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import BlogListSection from "@/components/BlogListSection";
import { getBlogPosts } from "@/lib/blog-posts";
import { Suspense } from "react";

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
      <Suspense fallback={<BlogListSkeleton />}>
        <BlogListSection posts={posts} sectionClassName="py-0" />
      </Suspense>
      <div className="section-connector" />
    </div>
  );
}

function BlogListSkeleton() {
  return (
    <section className="py-0">
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="border-b px-4 py-12">
          <div className="h-6 w-40 animate-pulse rounded bg-muted/30" />
          <div className="mt-4 h-10 w-72 animate-pulse rounded bg-muted/30" />
          <div className="mt-2 h-4 w-60 animate-pulse rounded bg-muted/30" />
        </div>
        <div className="border-b px-4 py-3">
          <div className="h-6 w-full animate-pulse rounded bg-muted/30" />
        </div>
        <div className="px-4 py-10">
          <div className="h-32 w-full animate-pulse rounded bg-muted/30" />
        </div>
      </div>
    </section>
  );
}

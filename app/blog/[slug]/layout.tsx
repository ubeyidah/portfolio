import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { getBlogPosts } from "@/lib/blog-posts";

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((item) => item.slug === slug);
  const formattedDate = post?.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <main>
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            <HugeiconsIcon
              icon={ArrowLeft01Icon}
              size={18}
              className="text-muted-foreground transition-transform group-hover:-translate-x-0.5"
            />
            Back to all posts
          </Link>
          <div className="h-3 flex-1 border-y border-border/60 stripe-bg-12" />
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
            Blog
          </span>
        </div>

        <div className="border-b bg-secondary/50 px-4 py-6 dark:bg-secondary/20">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {post?.title ?? "Blog Post"}
            </h1>
            {post?.excerpt && (
              <p className="text-muted-foreground text-base leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>

        {post?.image && (
          <div className="border-b">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="h-64 w-full object-cover md:h-80"
              priority
            />
          </div>
        )}

        <div className="border-b">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-foreground/90">
                {post?.author ?? "Ubeyid Oumer"}
              </span>
              <span className="opacity-60">•</span>
              {formattedDate && post?.date ? (
                <time dateTime={post.date}>{formattedDate}</time>
              ) : (
                <span>—</span>
              )}
              <span className="opacity-60">•</span>
              <span>{post?.readTime ?? "1 min read"}</span>
            </div>

            {post?.tags?.length ? (
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-muted/40 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="px-4 py-10">
          <article className="space-y-6 blog-content">
            {children}
          </article>
        </div>
      </div>
    </main>
  );
}

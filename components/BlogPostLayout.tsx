import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

type BlogPostLayoutProps = {
  title: string;
  excerpt?: string;
  image?: string;
  date?: string;
  author?: string;
  readTime?: string;
  tags?: string[];
  children: ReactNode;
};

export default function BlogPostLayout({
  title,
  excerpt,
  image,
  date,
  author,
  readTime,
  tags,
  children,
}: BlogPostLayoutProps) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <main className="py-6">
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
          <div className="h-3 flex-1 border-y border-border/60 bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(0,0,0,0.06)_12px_13px)] dark:bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(255,255,255,0.06)_12px_13px)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
            Blog
          </span>
        </div>

        <div className="border-b bg-secondary/50 px-4 py-6 dark:bg-secondary/20">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h1>
            {excerpt && (
              <p className="text-muted-foreground text-base leading-relaxed">
                {excerpt}
              </p>
            )}
          </div>
        </div>

        {image && (
          <div className="border-b">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={630}
              className="h-72 w-full object-cover md:h-[28rem]"
              priority
            />
          </div>
        )}

        <div className="h-10 border-b border-border/60 bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(0,0,0,0.06)_12px_13px)] dark:bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(255,255,255,0.06)_12px_13px)]" />

        <div className="border-b">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/ubeyidah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/90 transition-colors hover:text-foreground"
              >
                {author ?? "Ubeyidah"}
              </a>
              <span className="opacity-60">•</span>
              {formattedDate && date ? (
                <time dateTime={date}>{formattedDate}</time>
              ) : (
                <span>—</span>
              )}
              <span className="opacity-60">•</span>
              <span>{readTime ?? "1 min read"}</span>
            </div>

            {tags?.length ? (
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {tags.map((tag) => (
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

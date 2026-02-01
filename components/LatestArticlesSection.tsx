import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLink, Calendar01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import Image from "next/image";
import type { BlogPostWithReadTime } from "@/lib/blog-posts";

type LatestArticlesSectionProps = {
  showAllLink?: boolean;
  posts: BlogPostWithReadTime[];
};

export default function LatestArticlesSection({
  showAllLink = true,
  posts,
}: LatestArticlesSectionProps) {
  return (
    <section>
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-16 md:items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Insights from my development journey
          </p>
        </div>

        <BorderSeparator />

        <div className="grid">
          {posts.map((article, index) => (
            <article
              key={article.slug}
              className={`flex flex-col justify-between border-b ${
                index === posts.length - 1 ? "border-b-0" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3 border-b bg-secondary/50 p-4 dark:bg-secondary/20">
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex items-center gap-3 text-foreground hover:text-primary"
                >
                  <HugeiconsIcon
                    icon={ExternalLink}
                    size={18}
                    className="text-muted-foreground transition-transform rotate-0 group-hover:-rotate-45"
                  />
                  <h3 className="font-heading font-medium text-lg tracking-wider">
                    {article.title}
                  </h3>
                </Link>
                <span className="text-xs text-muted-foreground">
                  {article.readTime}
                </span>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
                <div className="relative overflow-hidden border-b md:border-b-0 md:border-r border-border/60 md:w-72 md:shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={440}
                    height={280}
                    className="h-40 w-full object-cover md:h-48"
                  />
                </div>

                <div className="flex flex-col gap-4 p-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-muted/40 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-base">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="border-t px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={Calendar01Icon} size={14} />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <a
                    href="https://github.com/ubeyidah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    By Ubeyidah
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showAllLink && (
          <div className="border-t px-4 py-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all articles
              <HugeiconsIcon icon={ExternalLink} size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function BorderSeparator({ className }: React.ComponentProps<"div">) {
  return (
    <div className={`relative inset-x-0 h-px w-full border-b ${className ?? ""}`} />
  );
}

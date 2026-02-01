"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, ExternalLink } from "@hugeicons/core-free-icons";
import type { BlogPostWithReadTime } from "@/lib/blog-posts";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const getAllTags = (posts: BlogPostWithReadTime[]) => {
  const set = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => set.add(tag)));
  return ["All", ...Array.from(set)];
};

export default function BlogListSection({
  posts,
}: {
  posts: BlogPostWithReadTime[];
}) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => getAllTags(posts), [posts]);

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = activeTag === "All" || post.tags.includes(activeTag);
      const matchesQuery =
        normalized.length === 0 ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.tags.some((tag) => tag.toLowerCase().includes(normalized));
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  return (
    <section className="py-6 md:py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-sans italic">All Articles</h2>
          <p className="text-muted-foreground">
            Browse by topic or search by keyword.
          </p>
        </div>

        <div className="w-full md:max-w-sm">
          <Input
            type="search"
            placeholder="Search articles..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search blog posts"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              activeTag === tag
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-muted/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6">
        {filteredPosts.map((article) => (
          <article
            key={article.slug}
            className="rounded-2xl border border-muted/30 bg-linear-to-br from-background to-muted/10 transition-all duration-300 hover:shadow-lg"
          >
            <div className="grid gap-6 md:grid-cols-[220px_1fr]">
              <div className="relative overflow-hidden rounded-xl border border-muted/30 bg-muted/20">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={440}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4 md:p-6">
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

                <h3 className="text-xl md:text-2xl font-semibold mt-3 mb-3 leading-tight">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <HugeiconsIcon icon={Calendar01Icon} size={14} />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>By {article.author}</span>
                </div>

                <div className="mt-4">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                    aria-label={`Read full article: ${article.title}`}
                  >
                    Read more
                    <HugeiconsIcon icon={ExternalLink} size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}

        {filteredPosts.length === 0 && (
          <div className="rounded-xl border border-dashed border-muted/50 p-8 text-center text-muted-foreground">
            No posts match your search. Try a different keyword or tag.
          </div>
        )}
      </div>
    </section>
  );
}

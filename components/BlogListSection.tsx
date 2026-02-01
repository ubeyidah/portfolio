"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, ExternalLink, Search01Icon } from "@hugeicons/core-free-icons";
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => getAllTags(posts), [posts]);

  useEffect(() => {
    const q = searchParams.get("q") ?? "";
    setQuery(q);
  }, [searchParams]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.replace(
      params.toString() ? `${pathname}?${params.toString()}` : pathname
    );
  };

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
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="relative overflow-hidden border-b bg-linear-to-br from-primary/10 via-background to-background px-4 py-12">
          <div className="absolute right-6 top-6 h-16 w-28 rounded-xl border border-border/60 bg-background/60" />
          <div className="absolute bottom-6 right-32 h-10 w-16 rounded-lg border border-border/60 bg-background/60" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Blog</p>
              <h2 className="text-3xl md:text-4xl font-bold">All Articles</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {filteredPosts.length} articles · Updated regularly
              </p>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <div className="h-3 w-12 border-y border-border/60 bg-[repeating-linear-gradient(135deg,transparent_0_10px,rgba(0,0,0,0.06)_10px_11px)] dark:bg-[repeating-linear-gradient(135deg,transparent_0_10px,rgba(255,255,255,0.06)_10px_11px)]" />
              <div className="h-3 w-8 border-y border-border/60 bg-[repeating-linear-gradient(135deg,transparent_0_10px,rgba(0,0,0,0.06)_10px_11px)] dark:bg-[repeating-linear-gradient(135deg,transparent_0_10px,rgba(255,255,255,0.06)_10px_11px)]" />
            </div>

            <div className="relative w-full md:max-w-sm">
              <HugeiconsIcon
                icon={Search01Icon}
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search articles..."
                value={query}
                onChange={(event) => handleQueryChange(event.target.value)}
                aria-label="Search blog posts"
                className="rounded-none pl-9"
              />
            </div>
          </div>

          <div className="mt-8 h-6 border-y border-border/60 bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(0,0,0,0.06)_12px_13px)] dark:bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(255,255,255,0.06)_12px_13px)]" />
        </div>

        <BorderSeparator />

        <div className="border-b">
          <div className="flex w-full divide-x divide-border/60 overflow-x-auto">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-3 text-xs transition-colors whitespace-nowrap ${
                  activeTag === tag
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid">
          {filteredPosts.map((article, index) => (
            <article
              key={article.slug}
              className={`flex flex-col justify-between border-b ${
                index === filteredPosts.length - 1 ? "border-b-0" : ""
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
                  <Link
                    href="https://github.com/ubeyidah"
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    By Ubeyidah
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {filteredPosts.length === 0 && (
            <div className="border-b px-4 py-10 text-center text-muted-foreground">
              No posts match your search. Try a different keyword or tag.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function BorderSeparator({ className }: React.ComponentProps<"div">) {
  return (
    <div className={`relative inset-x-0 h-px w-full border-b ${className ?? ""}`} />
  );
}

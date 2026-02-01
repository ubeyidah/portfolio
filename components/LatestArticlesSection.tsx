import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLink, Calendar01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

type LatestArticlesSectionProps = {
  showAllLink?: boolean;
};

export default function LatestArticlesSection({
  showAllLink = true,
}: LatestArticlesSectionProps) {
  return (
    <section className="py-6 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 font-sans italic">Latest Articles</h2>
      <p className="text-muted-foreground mb-8">Insights from my development journey</p>

      <div className="grid gap-6">
        {blogPosts.map((article) => (
          <article
            key={article.slug}
            className="rounded-xl border bg-linear-to-br from-background to-muted/10 border-muted/30 p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-tight">
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

            <div className="flex items-center justify-between text-sm text-muted-foreground">
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
              <span>{article.readTime}</span>
            </div>

            <p className="text-xs text-muted-foreground mt-2">By {article.author}</p>

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
          </article>
        ))}
      </div>

      {showAllLink && (
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
          >
            View all articles
            <HugeiconsIcon icon={ExternalLink} size={14} />
          </Link>
        </div>
      )}
    </section>
  );
}

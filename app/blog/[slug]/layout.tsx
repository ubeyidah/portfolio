import Link from "next/link";
import type { ReactNode } from "react";

export default function BlogPostLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="py-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to all posts
        </Link>

        <article className="mt-6 space-y-6 blog-content">{children}</article>
      </div>
    </main>
  );
}

import "server-only";
import fs from "fs";
import path from "path";
import { blogPosts, type BlogPost } from "@/lib/blog";

const WORDS_PER_MINUTE = 200;

const stripMdx = (content: string) => {
  const withoutMeta = content.replace(/export const metadata = [\s\S]*?};/m, " ");
  const withoutCode = withoutMeta.replace(/```[\s\S]*?```/g, " ");
  const withoutJsx = withoutCode.replace(/<[^>]+>/g, " ");
  const withoutLinks = withoutJsx.replace(/\[(.*?)\]\((.*?)\)/g, "$1");
  const withoutMd = withoutLinks.replace(/[>#*_`\-]/g, " ");
  return withoutMd;
};

const estimateReadTime = (content: string) => {
  const words = stripMdx(content)
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
};

export type BlogPostWithReadTime = BlogPost & { readTime: string };

export const getBlogPosts = (): BlogPostWithReadTime[] => {
  return blogPosts.map((post) => {
    const filePath = path.join(process.cwd(), "app", "blog", post.slug, "page.mdx");
    let readTime = post.readTime || "";

    try {
      const content = fs.readFileSync(filePath, "utf8");
      readTime = estimateReadTime(content);
    } catch {
      if (!readTime) readTime = "1 min read";
    }

    return { ...post, readTime };
  });
};

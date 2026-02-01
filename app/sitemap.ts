import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-02-01");
  const blogEntries = blogPosts.map((post) => ({
    url: `https://ubeyidah.tech/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://ubeyidah.tech",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ubeyidah.tech/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ubeyidah.tech/blog",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}

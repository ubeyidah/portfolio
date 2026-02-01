import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-02-01");
  return [
    {
      url: "https://ubeyidah.tech",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ubeyidah.tech/blog",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}

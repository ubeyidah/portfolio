export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  author: string;
  image: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "learning-by-building",
    title: "The Best Way to Learn Programming Is When You Actually Need It",
    excerpt:
      "Why building real projects creates the fastest feedback loop and the most durable skills.",
    date: "2025-11-22",
    author: "Ubeyidah",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*1ZDU7eEksPkMvjmp",
    tags: ["Learning", "Productivity", "Career"],
  },
  {
    slug: "sss-project-structure",
    title: "How SSS (Single Source Structure) Ended My Project Organization Nightmare",
    excerpt:
      "A simple file structure change that reduced friction and sped up my workflow.",
    date: "2026-01-03",
    author: "Ubeyidah",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*FcysIa0YKrjadv2ID3K2hg.png",
    tags: ["Productivity", "File Organization", "Developer Tools"],
  },
  {
    slug: "designing-dlog",
    title: "Designing DLog: Turning Reflections Into a Daily Habit",
    excerpt:
      "The UX decisions behind a minimalist reflection app and what I learned from early users.",
    date: "2026-01-21",
    author: "Ubeyidah",
    image: "/projects/dlog.png",
    tags: ["Design", "UX", "Product"],
  },
];

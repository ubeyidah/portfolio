export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "learning-by-building",
    title: "The Best Way to Learn Programming Is When You Actually Need It",
    excerpt:
      "Why building real projects creates the fastest feedback loop and the most durable skills.",
    date: "2025-11-22",
    readTime: "3 min read",
    author: "Ubeyid Oumer",
    image: "/profile.jpg",
  },
  {
    slug: "sss-project-structure",
    title: "How SSS (Single Source Structure) Ended My Project Organization Nightmare",
    excerpt:
      "A simple file structure change that reduced friction and sped up my workflow.",
    date: "2026-01-03",
    readTime: "5 min read",
    author: "Ubeyid Oumer",
    image: "/projects/nviron.png",
  },
  {
    slug: "designing-dlog",
    title: "Designing DLog: Turning Reflections Into a Daily Habit",
    excerpt:
      "The UX decisions behind a minimalist reflection app and what I learned from early users.",
    date: "2026-01-21",
    readTime: "4 min read",
    author: "Ubeyid Oumer",
    image: "/projects/dlog.png",
  },
];

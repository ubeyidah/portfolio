export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  author: string;
  image: string;
  tags: string[];
  mediumUrl?: string;
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
    mediumUrl:
      "https://medium.com/@ubeyidah/the-best-way-to-learn-programming-is-when-you-actually-need-it-cddb4b4af0f5",
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
    mediumUrl:
      "https://medium.com/@ubeyidah/how-sss-single-source-structure-ended-my-project-organization-nightmare-c3edbd6f2774",
  },

];

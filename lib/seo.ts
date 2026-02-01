import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: {
    default: "Ubeyidah | Self-taught Developer & AI Explorer",
    template: "%s | Ubeyidah",
  },
  description:
    "Portfolio of ubeyidah, a self-taught software engineer from Ethiopia building real-world systems across AI, Linux, developer tooling, and modern applications.",
  keywords: [
    "software engineer",
    "self-taught developer",
    "AI engineer",
    "AI agents",
    "systems programming",
    "Linux",
    "Arch Linux",
    "developer tooling",
    "open-source",
    "Ethiopia",
  ],
  authors: [{ name: "Ubeyid Oumer", url: "https://ubeyidah.tech" }],
  creator: "Ubeyidah",
  publisher: "Ubeyidah",
  category: "Self-taught Developer",
  alternates: {
    canonical: "https://ubeyidah.tech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ubeyidah | Software Engineer & AI Explorer",
    description:
      "Self-taught software engineer from Ethiopia focused on AI systems, Linux, and real-world software.",
    url: "https://ubeyidah.tech",
    siteName: "Ubeyidah",
    images: [
      {
        url: "https://ubeyidah.tech/og.png",
        width: 1200,
        height: 630,
        alt: "Ubeyidah Oumer – Software Engineer & AI Explorer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubeyidah | Software Engineer & AI Explorer",
    description:
      "Building real-world systems across AI, Linux, and developer tooling.",
    images: ["https://ubeyidah.tech/og.png"],
  },
};

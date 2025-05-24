import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Ubeyidah",
  description:
    "Hi there! I'm Ubeyidah, a software engineer based in Ethiopia. I specialize in building web applications using React, Next.js, and TypeScript. Welcome to my portfolio!",
  openGraph: {
    title: "Ubeyidah",
    description:
      "Hi there! I'm Ubeyidah, a software engineer based in Ethiopia. I specialize in building web applications using React, Next.js, and TypeScript. Welcome to my portfolio!",
    url: "https://ubeyidah.vercel.app",
    siteName: "Ubeyidah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Instrument_Serif, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/ui/wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { baseMetadata } from "@/lib/seo";
import { PersonSchema } from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next"

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerifItalic = Instrument_Serif({
  subsets: ['latin'],
  style: 'italic',
  weight: '400',
  variable: '--font-instrument-serif-italic',
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = { ...baseMetadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerifItalic.variable} ${sourceSerif.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
        >
          Skip to content
        </a>
        <PersonSchema />
        <ThemeProvider>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

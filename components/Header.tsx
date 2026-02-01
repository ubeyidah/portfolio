"use client";

import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-5xl border-x">
        <div className="flex items-center justify-between p-4">
          <Link href="/" aria-label="Ubeyidah home">
            <span className="text-l font-bold font-instrument-serif-italic">Ubeyidah</span>
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blogs</Link>
            </nav>
            <ThemeToggle />
            <button
              className="md:hidden flex flex-col justify-center items-center w-6 h-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col gap-4 p-4">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

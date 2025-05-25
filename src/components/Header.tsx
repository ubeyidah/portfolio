"use client";
import React from "react";
import Link from "next/link";
import useScrollSpy from "@/hooks/useScrollSpy";
import { usePathname } from "next/navigation";

const Header = () => {
  const ids = ["home", "about", "skills", "projects","contact"];
  const activeId = useScrollSpy(ids);
  const links = [
    {
      label: "Home",
      href: "/",
      id: "",
    },
    {
      label: "About",
      href: "/#about",
      id: "about",
    },

    {
      label: "Skills",
      href: "/#skills",
      id: "skills",
    },
    {
      label: "Projects",
      href: "/#projects",
      id: "projects",
    },
    {
      label: "Blogs",
      href: "/blog",
    },
    
  ];

  const pathname = usePathname();
  return (
    <header className="px-5 bg-background/40 border-b border-amber-400/10 backdrop-blur-2xl sticky top-0 z-40">
      <div className="max-w-[1200px] mx-auto gap-1 py-4 flex items-center justify-between font-mono">
        <Link href="/" className="text-lg text-amber-300">
          Ubeyidah
        </Link>
        <ul className="flex gap-2 items-center max-md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`hover:bg-amber-300/15 px-3 py-1 rounded-full transition-colors duration-300 ${
                  pathname == "/blog"
                    ? link.href == "/blog" && "bg-amber-300/15"
                    : activeId == link.id
                    ? "bg-amber-300/15"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact" className="bg-amber-400 ml-2 text-black/80 cursor-pointer px-4 py-1 rounded-full">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

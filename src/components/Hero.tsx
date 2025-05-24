import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="h-cut border-b border-amber-400/10 flex items-center justify-center max-w-[1200px] mx-auto">
      <div className="p-4 flex flex-col items-center justify-center gap-3">
        <div className="relative">
          <Image
            src="/short-profile.jpg"
            alt="profile"
            width={140}
            height={140}
            className="rounded-full border-2 border-amber-800/50 shadow-2xl shadow-amber-400/5"
          />
          <a
            href="https://github.com/ubeyidah"
            target="_blank"
            className="absolute -bottom-0.5 -right-1 w-12 p-0.5 h-12 rounded-full bg-background flex items-center justify-center animate-bounce"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={18}
              height={18}
              className="size-16"
            />
          </a>
        </div>
        <div className="text-center mt-4">
          <h1 className="text-4xl">
            Hi, I&apos;m{" "}
            <span className="text-amber-300 font-mono">Ubeyid Oumer</span>
          </h1>
          <h1 className="text-lg opacity-80 py-1">
            A Self-Thought Creative Web & Mobile App Developer.
          </h1>
          <div className="flex gap-3 items-center justify-center mt-3">
            <Link
              href="/#projects"
              className="bg-amber-700/80 text-white mt-2 border border-amber-800/60 cursor-pointer px-5 py-2 rounded-full"
            >
              View Projects
            </Link>{" "}
            <button className="bg-amber-700/30 text-white mt-2 border border-amber-800/60 cursor-pointer px-5 py-2 rounded-full flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

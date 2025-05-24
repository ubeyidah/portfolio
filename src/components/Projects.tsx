import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  const projects = [0, 9, 9, 83, 83, 3];
  return (
    <div
      className="max-w-[1200px] mx-auto py-16 px-5  border-b border-amber-400/10"
      id="projects"
    >
      <h1 className="my-2 text-xl font-mono text-amber-400 text-center max-md:mb-4">
        Projects
      </h1>
      <div className="bg-amber-400/5 w-fit px-1 py-1 rounded-xl flex gap-2">
        <button className="py-1 px-2 rounded-xl bg-amber-400/20 cursor-pointer">
          Web
        </button>
        <button className="py-1 px-2 rounded-xl hover:bg-amber-400/10 transition-colors duration-200 cursor-pointer">
          Mobile
        </button>
        <button className="py-1 px-2 rounded-xl hover:bg-amber-400/10 transition-colors duration-200 cursor-pointer">
          Design
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 my-5 max-md:grid-cols-1">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-amber-800/5 border border-amber-700/10 p-2 rounded-xl"
          >
            <div className="aspect-video bg-gray-400/10 rounded-xl animate-pulse"></div>
            <div className="pt-2">
              <p className="line-clamp-2 opacity-80 text-mono text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                eum! Nihil ullam ad nam incidunt suscipit quae
              </p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-1">
                  <a className="w-8 h-8 rounded-full bg-amber-600/5 border border-amber-600/10 flex items-center justify-center cursor-pointer">
                    <Image
                      src="/icons/github.svg"
                      alt="GitHub"
                      width={18}
                      height={18}
                      className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity duration-100"
                    />
                  </a>
                  <a className="w-8 h-8 rounded-full bg-amber-600/5 border border-amber-600/10 cursor-pointer flex items-center justify-center hover:rotate-45 transition-transform duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex">
                  <div className="w-6 h-6 rounded-full bg-background border border-amber-600/10 -mr-2">
                    <Image
                      src="/icons/tailwind.svg"
                      alt="React.js"
                      width={18}
                      height={18}
                      className="w-5.5 h-5.5 hover:z-20 hover:-ml-2 transition-all duration-100 rounded-full"
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-background border border-amber-600/10 -mr-2">
                    <Image
                      src="/icons/ts.svg"
                      alt="Typescript"
                      width={22}
                      height={22}
                      className="w-5.5 h-5.5 hover:z-20 hover:-ml-2 transition-all duration-100 rounded-full"
                    />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-background border border-amber-600/10">
                    <Image
                      src="/icons/next.svg"
                      alt="Next.js"
                      width={18}
                      height={18}
                      className="w-6 h-6 hover:z-20 hover:-ml-2 transition-all duration-100 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href=""></Link>
    </div>
  );
};

export default Projects;

import Image from "next/image";
import React from "react";

const Skills = () => {
  const skills = [
    {
      path: "/icons/html.svg",
      name: "HTML",
    },
    {
      path: "/icons/css.svg",
      name: "CSS",
    },
    {
      path: "/icons/js.svg",
      name: "JavaScript",
    },
    {
      path: "/icons/react.svg",
      name: "React",
    },
    {
      path: "/icons/ts.svg",
      name: "TypeScript",
    },
    {
      path: "/icons/node.svg",
      name: "Node.js",
    },
    {
      path: "/icons/next.svg",
      name: "Next.js",
    },
    {
      path: "/icons/tailwind.svg",
      name: "Tailwind CSS",
    },
    {
      path: "/icons/mongodb.svg",
      name: "Mongo Db",
      className: "w-12 h-12",
    },
  ];
  return (
    <div
      className="max-w-[1200px] mx-auto py-20 px-5 border-b border-amber-400/10"
      id="skills"
    >
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
        <button className="py-1 px-2 rounded-xl hover:bg-amber-400/10 transition-colors duration-200 cursor-pointer">
          Cloud
        </button>
      </div>

      <div className="flex items-center gap-5 flex-wrap py-4 ">
        {skills.map((skill, i) => (
          <button
            key={i}
            className="bg-amber-700/5 rounded-xl border border-amber-700/10 min-w-20 aspect-square hover:bg-amber-700/10 flex items-center justify-center"
            title={skill.name}
          >
            <Image
              src={skill.path}
              alt={skill.name}
              width={40}
              height={40}
              className={skill.className && skill.className}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;

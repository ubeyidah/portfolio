import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-2 max-md:grid-cols-1 max-w-[1200px] mx-auto py-20 px-5 border-b border-amber-400/10 gap-4"
    >
      <div className="max-md:order-2">
        <Image
          src="/profile.jpg"
          alt="profile"
          width={400}
          height={400}
          className="rounded-xl border-2 max-md:w-full border-amber-800/50 shadow-2xl shadow-amber-400/5"
        />
      </div>
      <div className="max-md:order-1">
        <h1 className="text-2xl  mb-4">
          About <span className="text-amber-400">Me</span>
        </h1>
        <p className="opacity-80 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          voluptatibus tempora eum delectus nihil hic non sint. Repudiandae
          maiores amet incidunt ratione aperiam? Ipsa reiciendis, natus harum
          voluptas rem veniam minus ratione fugiat nostrum veritatis, excepturi
          dicta accusantium? Incidunt unde voluptatem, mollitia consequatur
          quidem doloribus!
        </p>
        <p className="opacity-80 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo laborum molestiae, dicta nihil recusandae beatae esse
          commodi. Ratione iure temporibus, aliquam commodi quo nemo modi maxime
          asperiores quasi maiores.
        </p>
        <p className="opacity-80 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo laborum molestiae, dicta nihil recusandae beatae esse
          commodi. Ratione iure temporibus, aliquam commodi quo nemo modi maxime
          asperiores quasi maiores.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto py-20 px-5 border-b border-amber-400/10 gap-4"
    >
      <h1 className="my-2 text-xl font-mono text-amber-400 text-center mb-4">
        Let&apos;s Connect
      </h1>
      <p className="font-ancizar text-center text-lg">
        Feel free to reach out for collaborations, questions, or just to say hi.
        <br /> I&apos;m always{" "}
        <span className="text-amber-400/80">
          open to new ideas and opportunities.
        </span>
      </p>
      <div className="grid grid-cols-2 gap-10 mt-14 relative max-md:grid-cols-1">
        <div className=" absolute border p-8 w-1/2 left-1/2 -translate-1/2 border-b-0 rounded-t-xl border-amber-500/20 top-1 -z-10 max-md:hidden"></div>
        <div className="p-9 bg-amber-900/5 mt-3.5 border border-amber-500/10 rounded-xl relative max-md:mx-1">
          <div className=" absolute p-8 w-8 bg-background top-8 left-1/2 -translate-1/2 -z-10"></div>
          <p className="text-white mb-2 flex items-center gap-2">
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
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>

            <a
              href="mailto:ubeyidah@gmail.com"
              className="hover:underline hover:text-blue-400"
            >
              ubeyidah@gmail.com
            </a>
          </p>
          <p className="text-white mb-2 flex items-center gap-2 mt-2">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            Ethiopia
          </p>
        </div>
        <div className="p-9 max-md:p-1 pb-2 relative z-10">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border bg-amber-500/5 border-amber-800/30 py-3 px-4 rounded-xl outline-none focus:ring-2 ring-amber-300/10"
            />
            <input
              type="email"
              placeholder="Email"
              className="border bg-amber-500/5 border-amber-800/30 py-3 px-4 rounded-xl outline-none focus:ring-2 ring-amber-300/10"
            />
            <textarea
              placeholder="Message"
              className="border bg-amber-500/5 border-amber-800/30 py-3 px-4 rounded-xl outline-none focus:ring-2 ring-amber-300/10 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-amber-900/70 text-white py-2 px-4 rounded-xl border border-amber-600/20 cursor-pointer mt-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

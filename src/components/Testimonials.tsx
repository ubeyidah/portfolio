import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div
      className="max-w-[1200px] py-16 px-5  border-b border-amber-400/10 mx-auto "
      id="testimonials"
    >
      <h1 className="my-2 text-xl font-mono text-amber-400 text-center mb-7">
        Words That Keep Me Building
      </h1>
      <div className="w-fit mx-auto p-4 relative">
        <div className="border border-amber-700/25 rounded-xl w-[600px] max-md:w-[400px] max-sm:w-[350px] absolute -rotate-6 p-6 bg-background -z-20 aspect-video">
          {" "}
          <Image
            src="/icons/quotes.svg"
            alt=""
            width={100}
            height={100}
            className="absolute right-12 top-8 opacity-5"
          />
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 rounded-full bg-amber-700/10"></div>
            <div className="flex-1">
              <div className="bg-amber-700/10 h-5 rounded-full  max-w-1/2 "></div>
              <div className="bg-amber-700/10 h-3 mt-1.5  max-w-2/3 rounded-full"></div>
            </div>
          </div>
          <div className="mt-7">
            <p className="opacity-70 text-center text-xl font-ancizar leading-8">
              “Working with him on Unit Wise Ethiopia(uwe) was a great
              experience. His understanding of both frontend and backend is
              impressive. He delivered everything fast and with attention to
              detail.”
            </p>
          </div>
          <div className="mt-10 flex items-end justify-end gap-4">
            <button
              className="w-8 h-8 rounded-full bg-amber-600/5 border border-amber-600/10 cursor-pointer disabled:opacity-50 flex items-center justify-center"
              disabled={true}
            >
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
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-amber-600/5 border border-amber-600/10 cursor-pointer flex items-center justify-center">
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="border border-amber-700/25 rounded-xl w-[600px] max-md:w-[400px] z-10 bg-background max-sm:w-[350px] text-white aspect-video p-6">
          <Image
            src="/icons/quotes.svg"
            alt=""
            width={100}
            height={100}
            className="absolute right-12 top-8 opacity-5"
          />
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 rounded-full bg-amber-700/10"></div>
            <div className="flex-1">
              <div className="bg-amber-700/10 h-5 rounded-full  max-w-1/2 "></div>
              <div className="bg-amber-700/10 h-3 mt-1.5  max-w-2/3 rounded-full"></div>
            </div>
          </div>
          <div className="mt-7">
            <p className="opacity-70 text-center text-xl font-ancizar leading-8">
              “Working with him on Unit Wise Ethiopia(uwe) was a great
              experience. His understanding of both frontend and backend is
              impressive. He delivered everything fast and with attention to
              detail.”
            </p>
          </div>
          <div className="mt-10 flex items-end justify-end gap-4">
            <button
              className="w-8 h-8 rounded-full bg-amber-600/5 border border-amber-600/10 cursor-pointer disabled:opacity-50 flex items-center justify-center"
              disabled={true}
            >
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
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-amber-600/5 border border-amber-600/10 cursor-pointer flex items-center justify-center">
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

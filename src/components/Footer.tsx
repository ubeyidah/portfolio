import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="max-w-[1200px] mx-auto py-6 px-5 border-b border-amber-400/10 gap-4"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Ubeyidah. All rights reserved.
        </p>
        <div className="flex items-center">
          <a href="https://github.com/ubeyidah" target="_blank">
            <Image
              src="/icons/github2.svg"
              alt="GitHub"
              width={22}
              height={22}
              className="mr-4 hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="https://instagram.com/ubeyidahh" target="_blank">
            <Image
              src="/icons/insta.svg"
              alt="Instagram"
              width={22}
              height={22}
              className="mr-4 hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="https://x.com/ubeyidah" target="_blank">
            <Image
              src="/icons/x.svg"
              alt="x (formerly Twitter)"
              width={22}
              height={22}
              className="mr-4 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

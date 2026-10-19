import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import React from "react";

const OpenToWork = () => {
  return (
    <Link
      href={"https://www.linkedin.com/in/suhell-khan/"}
      target="_blank"
      className="primaryBtnLight group mb-2 flex items-center gap-3 rounded-full px-4 py-2 text-xs text-white"
    >
      {/* Steady dot with a soft halo; the halo stops for reduced motion. */}
      <span aria-hidden className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60 motion-reduce:animate-none"></span>
        <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
      </span>
      <span aria-hidden className="block h-4 w-px bg-basicDarkGray"></span>
      <span>Available for new projects</span>
      <FaChevronRight
        aria-hidden
        className="size-2 transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
};

export default OpenToWork;

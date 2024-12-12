import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import React from "react";

const OpenToWork = () => {
  return (
    <Link
      href={"https://www.linkedin.com/in/suhell-khan/"}
      target="_blank"
      className="primaryBtnLight group mb-2 flex items-center  gap-3  rounded-full px-4 py-2 text-xs text-white"
    >
      <span className="block size-2 animate-ping rounded-full bg-green-500"></span>
      <span className="block h-4 w-[1px] bg-basicDarkGray"></span>
      <p>Open to work</p>
      <FaChevronRight className="size-2 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};

export default OpenToWork;

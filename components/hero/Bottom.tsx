import Link from "next/link";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const HeroBottom = () => {
  return (
    <div className="mt-14 flex flex-col-reverse items-start justify-between  gap-8 md:mt-20 md:flex-row md:items-end md:gap-0 ">
      <Link href="https://www.linkedin.com/in/suhell-khan/" target="_blank">
        <PrimaryButton>Let&apos;s connect</PrimaryButton>
      </Link>
      <div className=" w-full max-w-[50rem]">
        <h1 className=" text-[1.25rem] font-medium text-lightCardBg md:text-[2.75rem]">
          Hi there! I&apos;m Suhel. I&apos;m an India-based Frontend Developer
          with a passion for creating intuitive and engaging user interfaces. I
          love finding simple solutions to complex problems.
        </h1>
      </div>
    </div>
  );
};

export default HeroBottom;

import React from "react";
import H1 from "../heading/H1";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import OpenToWork from "../opentowork/OpenToWork";
const HeroLeft = () => {
  return (
    <div className=" flex w-full flex-col  items-start md:max-w-[50%]">
      <OpenToWork />
      <H1>
        Hi, I am <br /> Suhel khan.
      </H1>
      <div className="mt-2">
        <p className="text-[1.25rem] text-basicDarkGray sm:text-[1.5rem]">
          I&apos;m an India-based Frontend Developer with a passion for creating
          intuitive and engaging user interfaces. I love finding simple
          solutions to complex problems.
        </p>
      </div>
      <div className="mt-8 flex items-center gap-6">
        <Link href={"https://www.linkedin.com/in/suhell-khan/"} target="_blank">
          <PrimaryButton>Let&apos; connect</PrimaryButton>
        </Link>
        <Link href={"https://x.com/suhel7822"} target="_blank">
          <PrimaryButton>
            <FaTwitter className="size-6" />
          </PrimaryButton>
        </Link>
        <Link href={"https://github.com/Suhelkhan12"} target="_blank">
          <PrimaryButton>
            <FaGithub className="size-6" />
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default HeroLeft;

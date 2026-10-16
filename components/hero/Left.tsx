import React from "react";
import H1 from "../heading/H1";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import OpenToWork from "../opentowork/OpenToWork";
const HeroLeft = () => {
  return (
    <div className=" flex w-full flex-col  items-start md:max-w-[50%]">
      <div data-animate="fade">
        <OpenToWork />
      </div>
      <H1>
        Hi, I am <br /> Suhel Khan.
      </H1>
      <div data-animate="fade" className="mt-2">
        <p className="text-[1.25rem] text-basicDarkGray sm:text-[1.5rem]">
          I&apos;m an India-based Frontend Developer with a passion for creating
          intuitive and engaging user interfaces. I love finding simple
          solutions to complex problems.
        </p>
      </div>
      <div
        data-animate="fade"
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <Link
          href={"https://www.linkedin.com/in/suhell-khan/"}
          target="_blank"
          className="shrink-0"
          data-magnetic
        >
          <PrimaryButton>Let&apos;s connect</PrimaryButton>
        </Link>
        <Link
          href={"https://x.com/suhel7822"}
          target="_blank"
          aria-label="Twitter"
          className="shrink-0"
          data-magnetic
        >
          <PrimaryButton>
            <FaTwitter className="size-6" aria-hidden />
          </PrimaryButton>
        </Link>
        <Link
          href={"https://github.com/Suhelkhan12"}
          target="_blank"
          aria-label="GitHub"
          className="shrink-0"
          data-magnetic
        >
          <PrimaryButton>
            <FaGithub className="size-6" aria-hidden />
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default HeroLeft;

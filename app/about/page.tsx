import Anime from "@/components/anime/Anime";
import Separator from "@/components/graySeparator/Separator";
import H1 from "@/components/heading/H1";
import H2 from "@/components/heading/H2";
import Info from "@/components/info/Info";
import Portrait from "@/components/portrait/Portrait";
import Wrapper from "@/components/wrapper/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Suhel khan",
  description:
    "Suhel is Frontend engineer at Parallelhq, banglore. He has an insatiable curiosity for exploring the possibilities of technology and understanding the diverse perspectives that shape our world. He believes taht technology should seamlessly integrate into our lives. My passion lies in simplifying complex systems, merging technical expertise with empathy and creativity.",
  keywords: [
    "portfolio",
    "Suhel Khan",
    "frontend",
    "ui engineer",
    "developer",
    "projects",
    "skills",
    "experience",
  ],
};

const page = () => {
  return (
    <section className=" relative z-50 pt-20 sm:pt-36">
      <Wrapper>
        <div className="px-4">
          <div className="flex flex-col gap-2">
            <H1>Just a little bit about me</H1>
            <p className=" text-[1.5rem] font-normal text-basicMediumGray">
              Who I am and what I do.
            </p>
          </div>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex gap-[4.5rem] px-4">
          <Info />
          <Portrait />
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <H2 classnames="md:text-5xl text-4xl font-bold text-white">
              What I&apos;m watching
            </H2>
            <p className="text-lg font-normal text-basicDarkGray">
              One Piece, Demon Slayer, Avatar: The last Airbender, Fire Force{" "}
            </p>
          </div>
          <Anime />
        </div>
      </Wrapper>
    </section>
  );
};

export default page;

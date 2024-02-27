import Anime from "@/components/anime/Anime";
import Separator from "@/components/graySeparator/Separator";
import H1 from "@/components/heading/H1";
import H2 from "@/components/heading/H2";
import Info from "@/components/info/Info";
import Portrait from "@/components/portrait/Portrait";
import Wrapper from "@/components/wrapper/Wrapper";
import React from "react";

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
          <H2 classnames="md:text-5xl text-4xl font-bold text-white">
            What I&apos;m watching
          </H2>
          <Anime />
        </div>
      </Wrapper>
    </section>
  );
};

export default page;

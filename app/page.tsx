/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ScrollDown from "@/components/scrolldown/ScrollDown";
import { getToKnowMeData, projectsData } from "@/data/data";
import ProjectCard from "@/components/projectscard/ProjectCard";
import GetToKnowmeCard from "@/components/getToKnowmeCard/GetToKnowmeCard";
import H2 from "@/components/heading/H2";
import Wrapper from "@/components/wrapper/Wrapper";
import Link from "next/link";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const page = () => {
  return (
    <>
      <section className="pt-20  sm:pt-36 md:h-screen">
        <Wrapper>
          <div className="px-4">
            <div className="relative z-10 flex flex-col gap-8 text-basicDarkGray sm:gap-10">
              <div className="flex flex-col gap-4 lg:gap-8">
                <h1 className="text-[3rem] font-bold leading-normal md:text-[3.5rem] lg:text-[5rem]">
                  Hi
                  <span className=" inline-block animate-wave">👋</span>, I'm{" "}
                  <span className=" text-white">Suhel</span>
                </h1>
                <div className=" w-full lg:w-[1000px]">
                  <p className=" text-[1.5rem] leading-normal md:text-[1.5rem] lg:text-[2rem]">
                    I'm a <span className=" text-white">UI engineer</span>. I
                    translate design concepts into functional code, bringing
                    ideas to life with precision and efficiency. I'm fueled by
                    new tech, football and anime.
                  </p>
                </div>
              </div>
              <Link
                href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
                target="blank"
              >
                <PrimaryButton>Let's connect</PrimaryButton>
              </Link>
            </div>
            <ScrollDown />
          </div>
        </Wrapper>
      </section>

      <section className=" mt-28 ">
        <Wrapper>
          <div className="px-4">
            <H2 classnames="md:text-[3.5rem] text-[2.5rem]  font-bold text-white">
              Selected work
            </H2>
            <div
              className=" mt-8 grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 md:gap-8"
              id="#work"
            >
              {projectsData.map((project) => (
                <ProjectCard {...project} key={project.name} />
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center md:mt-12 lg:mt-16 ">
              <Link href="/work">
                <SecondaryButton>View more</SecondaryButton>
              </Link>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className=" my-28 ">
        <Wrapper>
          <div className="px-4">
            <H2 classnames="md:text-[3.5rem] text-[2.5rem] font-bold text-white">
              Get to know me
            </H2>
            <div className="mt-8 flex flex-col gap-8 sm:gap-6 md:flex-row md:gap-8">
              {getToKnowMeData.map((data) => (
                <GetToKnowmeCard {...data} key={data.heading} />
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default page;

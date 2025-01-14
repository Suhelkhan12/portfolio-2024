/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { getToKnowMeData, projectsData } from "@/data/data";
import ProjectCard from "@/components/projectscard/ProjectCard";
import GetToKnowmeCard from "@/components/getToKnowmeCard/GetToKnowmeCard";
import H2 from "@/components/heading/H2";
import Wrapper from "@/components/wrapper/Wrapper";
import Link from "next/link";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import HeroLeft from "@/components/hero/Left";
import HeroRight from "@/components/hero/Right";

const page = () => {
  return (
    <>
      <section>
        <Wrapper>
          <div className=" px-4">
            {" "}
            <div className="flex flex-col items-center gap-8 pt-40  md:flex-row md:pt-10 ">
              <HeroLeft />
              <HeroRight />
            </div>
          </div>
        </Wrapper>
      </section>

      <div className=" my-20 h-[2px] w-full bg-white/10 md:my-[140px]"></div>
      <section>
        <Wrapper>
          <div className="px-4">
            <H2 classnames="md:text-[3.5rem] text-[2.5rem]  font-bold text-white">
              My Case studies & Client Works
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

      <section className="my-[260px] items-center">
        <Wrapper>
          <div className="px-4">
            <div className="mx-auto w-full max-w-[900px] text-center text-basicLightGray">
              <H2 classnames="md:text-[3rem] text-[1.5rem] font-semibold ">
                Great development should strive to create an experience so
                seamless and intuitive that it feels like the only way it could
                have been doveloped.
              </H2>
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

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Section from "@/components/section/Section";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import ScrollDown from "@/components/scrolldown/ScrollDown";

const page = () => {
  return (
    <div className=" relative h-[100vh] overflow-hidden pt-8">
      <Section>
        <div className=" flex flex-col gap-8 text-basicDarkGray sm:gap-10">
          <div className="flex flex-col gap-4 lg:gap-8">
            <h1 className="text-[3rem] font-bold leading-normal md:text-[3.5rem] lg:text-[5rem]">
              Hi👋, I'm <span className=" text-basicOnyx">Suhel</span>
            </h1>
            <div className=" w-full lg:w-[1000px]">
              <p className=" text-[1rem] leading-normal md:text-[1.5rem] lg:text-[2rem]">
                I'm a <span className=" text-basicBlack">UI engineer</span>. I
                translate design concepts into functional code, bringing ideas
                to life with precision and efficiency. I'm fueled by new tech,
                football and anime.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row ">
            <PrimaryButton>See my resume</PrimaryButton>
            <SecondaryButton>Let's connect</SecondaryButton>
          </div>
          <div className="absolute bottom-0 right-0 mb-10 hidden lg:block">
            <ScrollDown />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

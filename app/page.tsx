import React from "react";
import Section from "@/components/section/Section";
import Link from "next/link";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import ScrollDown from "@/components/scrolldown/ScrollDown";

const page = () => {
  return (
    <div className=" relative h-[100vh] overflow-hidden pt-8">
      <Section>
        <div className=" flex flex-col gap-4 text-basicDarkGray md:gap-6">
          <h1 className="text-[48px] font-bold md:text-[56px] lg:text-[96px]">
            Hi, I'm <span className="text-white">Suhel</span>
          </h1>
          <div className=" w-full lg:w-[1000px]">
            <p className=" text-[20px] font-medium leading-normal md:text-[24px] lg:text-[40px]">
              I'm a <span className="text-white/80">UI engineer</span> at{" "}
              <Link
                href="https://parallelhq.com"
                className="text-white/80"
                target="blank"
              >
                Parallel↗
              </Link>
              . I translate design concepts into functional code, bring ideas to
              life with precision and efficiency.
            </p>
          </div>
          <div className="flex gap-4">
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

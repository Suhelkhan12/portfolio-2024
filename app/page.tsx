import React from "react";
import Section from "@/components/section/Section";

const page = () => {
  return (
    <div className="h-[400vh] pt-8">
      <Section>
        <div className=" text-basicDarkGray">
          <h1 className="text-8xl font-bold">
            Hi, I'm <span className="text-white">Suhel</span>
          </h1>
          <div className="mt-10 w-[1000px]">
            <p className=" font-medium leading-relaxed sm:text-base md:text-lg lg:text-4xl">
              I'm a UI engineer at Parallel↗. I translate design concepts into
              functional code, bring ideas to life with precision and
              efficiency.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

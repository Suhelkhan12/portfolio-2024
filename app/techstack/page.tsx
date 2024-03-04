import { Metadata } from "next";
import Separator from "@/components/graySeparator/Separator";
import H1 from "@/components/heading/H1";
import H2 from "@/components/heading/H2";
import TechCard from "@/components/techCard/TechCard";
import Wrapper from "@/components/wrapper/Wrapper";
import { techCards } from "@/data/data";

export const metadata: Metadata = {
  title: "Suhel Khan's skill: Frontend Tools, Frameworks, and Technologies",
  description:
    "Suhel Khan is a skilled technologist proficient in a variety of cutting-edge technologies. With expertise in JavaScript frameworks such as React and Next.js. Suhel has demonstrated versatility across multiple programming paradigms.",
  keywords: [
    "Suhel Khan",
    "techstack",
    "frontend",
    "ui engineer",
    "developer",
    "react",
    "nextjs",
    "gsap",
    "sanity",
    "tailwindcss",
    "Gsap",
    "node",
    "mongodb",
  ],
  twitter: {
    title: "Suhel Khan's skills: Frontend Tools, Frameworks, and Technologies",
    description:
      "Suhel Khan is a skilled technologist proficient in a variety of cutting-edge technologies. With expertise in JavaScript frameworks such as React and Next.js. Suhel has demonstrated versatility across multiple programming paradigms.",
    card: "summary_large_image",
  },
};

const page = () => {
  return (
    <section className="relative z-50 mb-28 pt-20 sm:pt-36">
      <Wrapper>
        <div className="flex flex-col gap-2 px-4">
          <H1>Techstack</H1>
          <p className="text-[1.25rem] font-normal text-basicMediumGray md:text-[1.5rem]">
            The dev tools I know and am currently learning.
          </p>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex flex-col gap-4 px-4 md:gap-8">
          <H2 classnames="text-[3rem] font-bold text-basicDarkGray">
            Dev & Design
          </H2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techCards
              .filter((card) => card.category === "development")
              .map((card) => (
                <TechCard {...card} key={card.name} />
              ))}
          </div>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex flex-col gap-4 px-4 md:gap-8">
          <H2 classnames=" text-[2rem] md:text-[3rem] font-bold text-basicDarkGray">
            Low-code & Freelancing
          </H2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techCards
              .filter((card) => card.category === "low-code")
              .map((card) => (
                <TechCard {...card} key={card.name} />
              ))}
          </div>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex flex-col gap-4 px-4 md:gap-8">
          <H2 classnames=" text-[2rem] md:text-[3rem] font-bold text-basicDarkGray">
            Learning
          </H2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techCards
              .filter((card) => card.category === "learning")
              .map((card) => (
                <TechCard {...card} key={card.name} />
              ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default page;

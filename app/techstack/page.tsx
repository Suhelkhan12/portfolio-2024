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
    <section className="relative z-50 mb-28 gap-8 pt-28  md:pt-36">
      <Wrapper>
        <div className="flex flex-col gap-2 px-4">
          <H1>Techstack</H1>
          <p
            data-animate="fade"
            className="text-[1.25rem] font-normal text-basicDarkGray md:text-[1.5rem]"
          >
            The dev tools I know and am currently learning.
          </p>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex flex-col gap-4 px-4 md:gap-8">
          <H2
            data-animate="split"
            classnames="text-[2rem] md:text-[3rem] font-bold text-basicDarkGray"
          >
            Low-code
          </H2>
          <p
            data-animate="fade"
            className="max-w-xl text-base text-basicDarkGray md:text-lg"
          >
            Where I spend most of my time — building and shipping production
            sites with Webflow and Finsweet.
          </p>
          <div
            data-animate="stagger"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
          >
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
          <H2
            data-animate="split"
            classnames="text-[2rem] md:text-[3rem] font-bold text-basicDarkGray"
          >
            AI tools
          </H2>
          <p
            data-animate="fade"
            className="max-w-xl text-base text-basicDarkGray md:text-lg"
          >
            I build alongside AI day to day — from pairing with Claude and
            Copilot on logic to generating UI scaffolds with v0.
          </p>
          <div
            data-animate="stagger"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {techCards
              .filter((card) => card.category === "ai")
              .map((card) => (
                <TechCard {...card} key={card.name} />
              ))}
          </div>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex flex-col gap-4 px-4 md:gap-8">
          <H2
            data-animate="split"
            classnames="text-[2rem] md:text-[3rem] font-bold text-basicDarkGray"
          >
            Dev
          </H2>
          <div
            data-animate="stagger"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
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
          <H2
            data-animate="split"
            classnames="text-[2rem] md:text-[3rem] font-bold text-basicDarkGray"
          >
            Also know
          </H2>
          <div
            data-animate="stagger"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
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

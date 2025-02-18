import Wrapper from "@/components/wrapper/Wrapper";
import H1 from "@/components/heading/H1";
import Separator from "@/components/graySeparator/Separator";
import { workCardsData } from "@/data/data";

import { Metadata } from "next";
import ProjectCard from "@/components/projectscard/ProjectCard";

export const metadata: Metadata = {
  title: "Suhel Khan's Tech Portfolio",
  description:
    "Delve into the diverse tech expertise of Suhel Khan, a seasoned technologist proficient in an array of cutting-edge technologies.",
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
    "mongodb",
    "portfolio",
    "projects",
    "side projects",
    "tech expertise",
    "programming paradigms",
    "frontend tools",
    "backend technologies",
    "responsive design",
    "dynamic animations",
    "data management",
    "web development",
  ],
  twitter: {
    title: "Suhel Khan's Tech Portfolio",
    description:
      "Delve into the diverse tech expertise of Suhel Khan, a seasoned technologist proficient in an array of cutting-edge technologies.",
    card: "summary_large_image",
  },
};

const Page = () => {
  return (
    <section className="relative z-50 mb-28 gap-8 pt-28  md:pt-36">
      <Wrapper>
        <div className="flex flex-col gap-2 px-4">
          <H1>My Case studies & Client Works</H1>
          <p className="text-[1.25rem] font-normal text-basicMediumGray md:text-[1.5rem]">
            List of my selected works and side projects.
          </p>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className=" grid grid-cols-1 gap-8 px-4 sm:gap-6 md:grid-cols-2 md:gap-8">
          {workCardsData.map((data) => (
            <ProjectCard {...data} key={data.name} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Page;

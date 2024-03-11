import Wrapper from "@/components/wrapper/Wrapper";
import H1 from "@/components/heading/H1";
import Separator from "@/components/graySeparator/Separator";
import { workCardsData } from "@/data/data";
import ProjectCard from "@/components/projectscard/ProjectCard";
const page = () => {
  return (
    <section className="relative z-50 mb-28 pt-20 sm:pt-36">
      <Wrapper>
        <div className="flex flex-col gap-2 px-4">
          <H1>Work</H1>
          <p className="text-[1.25rem] font-normal text-basicMediumGray md:text-[1.5rem]">
            List of my selected works and side projects.
          </p>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className=" mt-8 grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 md:gap-8">
          {workCardsData.map((data) => (
            <ProjectCard {...data} key={data.name} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default page;

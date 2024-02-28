import Separator from "@/components/graySeparator/Separator";
import H1 from "@/components/heading/H1";
import H2 from "@/components/heading/H2";
import TechCard from "@/components/techCard/TechCard";
import Wrapper from "@/components/wrapper/Wrapper";

import { techCards } from "@/data/data";

const page = () => {
  return (
    <section className="relative z-50 pt-20 sm:pt-36">
      <Wrapper>
        <div className="flex flex-col gap-2">
          <H1>Techstack</H1>
          <p className=" text-[1.5rem] font-normal text-basicMediumGray">
            The dev tools I know and am currently learning.
          </p>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex flex-col gap-8">
          <H2 classnames="text-[3rem] font-bold text-basicDarkGray">
            Dev & Design
          </H2>
          <div className="grid grid-cols-3 gap-4">
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
        <div className="flex flex-col gap-8">
          <H2 classnames="text-[3rem] font-bold text-basicDarkGray">
            Low-code & Freelancing
          </H2>
          <div className="grid grid-cols-3 gap-4">
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
        <div className="flex flex-col gap-8">
          <H2 classnames="text-[3rem] font-bold text-basicDarkGray">
            Learning
          </H2>
          <div className="grid grid-cols-3 gap-4">
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

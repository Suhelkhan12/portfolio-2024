import { TechCardProps } from "@/types";
import Image from "next/image";

const TechCard = (props: TechCardProps) => {
  return (
    <div className="flex flex-row gap-4 rounded-lg border border-dardCardBorder  bg-basicOnyx p-4 sm:flex-col sm:justify-between sm:gap-10 sm:pt-[3rem] md:px-6 md:pb-6">
      <Image
        src={props.image}
        alt={props.name}
        width={114}
        height={114}
        className="mx-auto hidden sm:block"
      />
      <Image
        src={props.image}
        alt={props.name}
        width={60}
        height={60}
        className="block sm:hidden"
      />
      <div className="flex grow items-center justify-between sm:grow-0 ">
        <p className="text-base font-semibold text-white sm:text-[1.25rem]">
          {props.name}
        </p>
        <div className=" flex items-center justify-center rounded-full border border-[#272525] bg-transparent px-3 py-[6px]">
          <p className=" text-[10px] font-normal text-basicDarkGray sm:text-[.875rem]">
            {props.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;

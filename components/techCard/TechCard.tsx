import { TechCardProps } from "@/types";
import Image from "next/image";

const TechCard = (props: TechCardProps) => {
  return (
    <div className="flex flex-col justify-between gap-10  rounded-lg border border-dardCardBorder bg-basicOnyx px-6 pb-6 pt-[3rem]">
      <Image
        src={props.image}
        alt={props.name}
        width={114}
        height={114}
        className="mx-auto"
      />
      <div className="flex items-center justify-between">
        <p className="text-[1.25rem] font-semibold text-white">{props.name}</p>
        <div className=" flex items-center justify-center rounded-full border border-[#272525] bg-transparent px-3 py-[6px]">
          <p className=" text-[.875rem] font-normal text-basicDarkGray">
            {props.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;

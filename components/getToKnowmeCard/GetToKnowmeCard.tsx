import { type GetToKnowMeCardProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import H2 from "../heading/H2";

const GetToKnowmeCard = (props: GetToKnowMeCardProps) => {
  return (
    <Link
      href={props.link}
      className="flex size-[100%] flex-col items-center justify-center overflow-hidden  rounded-lg bg-[#151515;] py-8 transition hover:bg-basicOnyx md:pb-0 md:pt-16 lg:size-[31.5rem]"
    >
      <H2 classnames=" md:text-[2rem] text-[1.5rem] font-semibold text-white">
        {props.heading}{" "}
        <span className="inline-block text-xl md:hidden">
          {" "}
          <FaExternalLinkAlt />{" "}
        </span>
      </H2>
      <p className="text-base text-basicDarkGray ">{props.subheading}</p>
      <div className="hidden size-full overflow-hidden md:h-[23rem] lg:block">
        <Image src={props.image} alt={props.heading} width={504} height={368} />
      </div>
    </Link>
  );
};

export default GetToKnowmeCard;
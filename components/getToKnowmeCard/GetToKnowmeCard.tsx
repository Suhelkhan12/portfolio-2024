import { type GetToKnowMeCardProps } from "@/types";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import H2 from "../heading/H2";

const GetToKnowmeCard = (props: GetToKnowMeCardProps) => {
  return (
    <Link
      href={props.link}
      className="group  flex size-[100%] flex-col items-center justify-center  rounded-2xl bg-[#151515;] py-8 transition hover:bg-basicOnyx md:py-12 "
    >
      <H2 classnames=" md:text-[2.5rem] text-[1.5rem] font-semibold text-white">
        {props.heading}{" "}
        <span className="inline-block text-xl">
          {" "}
          <FaExternalLinkAlt />{" "}
        </span>
      </H2>
      <p className="text-base text-basicDarkGray ">{props.subheading}</p>
    </Link>
  );
};

export default GetToKnowmeCard;

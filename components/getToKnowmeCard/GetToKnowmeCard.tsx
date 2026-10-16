import { type GetToKnowMeCardProps } from "@/types";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import H2 from "../heading/H2";

const GetToKnowmeCard = (props: GetToKnowMeCardProps) => {
  return (
    <Link
      href={props.link}
      data-spotlight
      className="group flex size-full flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-basicOnyx px-6 py-10 text-center transition-colors duration-300 hover:border-white/10 hover:bg-white/5 md:py-14"
    >
      <H2 classnames="flex items-center gap-3 text-2xl font-semibold text-white md:text-[2.5rem]">
        {props.heading}
        <MdArrowForward
          aria-hidden
          className="size-6 text-basicDarkGray transition-all duration-300 group-hover:translate-x-1 group-hover:text-white md:size-8"
        />
      </H2>
      <p className="text-base text-basicDarkGray">{props.subheading}</p>
    </Link>
  );
};

export default GetToKnowmeCard;

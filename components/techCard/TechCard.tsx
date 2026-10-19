import { TechCardProps } from "@/types";
import Image from "next/image";

const TechCard = (props: TechCardProps) => {
  return (
    <div
      data-spotlight
      className={`group relative flex flex-row gap-4 rounded-lg border p-4 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 sm:flex-col sm:justify-between sm:gap-10 sm:pt-12 md:px-6 md:pb-6 ${
        props.featured
          ? "border-fg/25 bg-basicOnyx shadow-[0_0_0_1px_rgb(var(--fg)/0.04),0_12px_30px_-10px_rgb(var(--fg)/0.12)] hover:border-fg/40"
          : "border-dardCardBorder bg-basicOnyx hover:border-fg/20"
      }`}
    >
      {props.featured && (
        <span className="absolute right-3 top-3 rounded-full border border-fg/20 bg-fg/10 px-2 py-[2px] text-[9px] font-medium uppercase tracking-wide text-fg sm:text-[10px]">
          {props.badge ?? "Specialty"}
        </span>
      )}
      <Image
        src={props.image}
        alt={props.name}
        width={114}
        height={114}
        className="mx-auto hidden transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100 sm:block"
      />
      <Image
        src={props.image}
        alt={props.name}
        width={60}
        height={60}
        className="block sm:hidden"
      />
      <div className="flex grow items-center justify-between sm:grow-0 ">
        <p className="text-base font-semibold text-fg sm:text-[1.25rem]">
          {props.name}
        </p>
        <div className=" flex items-center justify-center rounded-full border border-line bg-transparent px-3 py-[6px]">
          <p className=" text-[10px] font-normal text-basicDarkGray sm:text-[.875rem]">
            {props.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;

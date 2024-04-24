import { FreetimeCardProps } from "@/types";
import Image from "next/image";

const Freetimecard = (props: FreetimeCardProps) => {
  return (
    <div className=" flex flex-col justify-between gap-1 rounded-xl border border-darkCardBorder bg-basicOnyx p-4 sm:gap-2 md:p-6">
      <h3 className="text-[1.5rem] font-semibold text-basicLightGray lg:text-[1.5rem]">
        {props.heading}
      </h3>
      <p className="text-[1rem] leading-normal  text-basicDarkGray">
        {props.subheading}
      </p>
      <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {props.images.map((image) => (
          <div
            key={image.name}
            className="relative h-[200px] w-[100%] lg:size-[8rem]"
          >
            <Image
              src={image.image}
              alt={image.name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="absolute rounded-sm object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freetimecard;

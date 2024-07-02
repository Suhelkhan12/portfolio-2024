import React from "react";
import suhel from "@/public/Suhel.png";
import Image from "next/image";

const HeroTop = () => {
  return (
    <div className=" flex items-end gap-5">
      <div className=" relative size-40 md:h-56 md:w-40">
        <Image
          src={suhel}
          alt="Suhel khan image"
          objectFit="cover"
          fill
          placeholder="blur"
        />
      </div>
      <div className=" flex flex-col gap-2 md:gap-3">
        <span className=" block text-[.75rem] text-basicLightGray md:text-[.875rem]">
          Based in India (UTC +5:30)
        </span>
        <div className=" w-full max-w-[14rem]">
          <p className=" text-[.875rem] text-ligthFaintWhite md:text-base ">
            Dynamic, results-focused Frontend Developer with over 2 years of
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroTop;

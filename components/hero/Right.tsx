import React from "react";
import suhel from "@/public/Suhel.png";
import Image from "next/image";
const HeroRight = () => {
  return (
    <Image
      src={suhel}
      alt="suhel image"
      className=" h-[25rem] rounded-lg object-cover object-top md:max-h-[40rem] md:max-w-[45%]"
      priority
    />
  );
};

export default HeroRight;

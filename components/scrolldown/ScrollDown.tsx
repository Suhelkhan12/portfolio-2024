import Image from "next/image";
import OpenToWork from "../opentowork/OpenToWork";

const ScrollDown = () => {
  return (
    <div className="mt-10 flex  w-full flex-col-reverse justify-between gap-8 md:mt-20 md:flex-row md:items-center md:gap-0">
      <div className="relative w-28 sm:w-36">
        <Image
          className="animate-spin-slow"
          src="/Scroll.svg"
          alt="Scroll-down-image"
          width={160}
          height={160}
        />
        <div className="absolute top-0 flex size-full animate-bounce-slow items-center justify-center">
          <Image src="/arrow.svg" alt="Smaller-image" width={15} height={15} />
        </div>
      </div>
      <OpenToWork />
    </div>
  );
};

export default ScrollDown;

import Image from "next/image";

const ScrollDown = () => {
  return (
    <div className="mt-20  flex w-full items-center justify-between">
      <div className="relative w-28 sm:w-40">
        <Image
          className="animate-spin-slow"
          src="/scroll-text-light.svg"
          alt="Scroll-down-image"
          width={160}
          height={160}
        />
        <div className="absolute top-0 flex size-full animate-bounce-slow items-center justify-center">
          <Image
            src="/scroll-arrow-light.svg"
            alt="Smaller-image"
            width={15}
            height={15}
          />
        </div>
      </div>
      <div className=" flex items-center gap-4 text-basicDarkGray ">
        <div className=" size-4 animate-pulse rounded-full bg-green-400"></div>
        <div>
          <h2 className=" sm:text-2xl">OPEN TO WORK</h2>
          <p>Based in India</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;

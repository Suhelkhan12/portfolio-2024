import Image from "next/image";

const ScrollDown = () => {
  return (
    <div className="w-full md:flex md:justify-end">
      <div className="relative">
        <Image
          className="animate-spin-slow"
          src="/Scroll.svg"
          alt="Scroll-down-image"
          width={150}
          height={150}
        />
        <div className="absolute top-0 flex size-full animate-bounce-slow items-center justify-center">
          <Image src="/arrow.svg" alt="Smaller-image" width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;

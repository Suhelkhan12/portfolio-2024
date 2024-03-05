import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import ClickText from "./ClickText";

const Portrait = () => {
  return (
    <div className="relative flex flex-col items-center gap-10">
      <ClickText />
      <div className="relative h-[400px] w-[80%] overflow-hidden rounded-sm sm:h-[28rem] sm:w-[22rem]">
        <Image
          src="/Suhel.png"
          alt="Suhel-khan-image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <Link
        href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
        target="blank"
        className=" hidden lg:block "
      >
        <PrimaryButton classNames=" flex items-center gap-2 group ">
          Get in touch{" "}
          <IoIosArrowDropright className="transition group-hover:translate-x-1" />
        </PrimaryButton>
      </Link>
    </div>
  );
};

export default Portrait;

import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";

const Portrait = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className=" h-[28rem] w-[22rem] shrink-0 overflow-hidden rounded-sm">
        <Image
          src="/Suhel.png"
          alt="Suhel-khan-image"
          width={572}
          height={728}
          priority
        />
      </div>
      <Link
        href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
        target="blank"
      >
        <PrimaryButton classNames=" flex items-center gap-2 group">
          Get in touch{" "}
          <IoIosArrowDropright className="transition group-hover:translate-x-1" />
        </PrimaryButton>
      </Link>
    </div>
  );
};

export default Portrait;

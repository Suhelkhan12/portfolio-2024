import Image from "next/image";
import ClickText from "./ClickText";
import suhelLaugh from "@/public/Suhel-laugh.png";

const Portrait = () => {
  return (
    <div className="relative flex flex-col items-center gap-10">
      <ClickText />
      <Image
        src={suhelLaugh}
        alt="suhel"
        className=" max-h-[40rem] rounded-lg object-cover object-top opacity-80"
        priority
      />
    </div>
  );
};

export default Portrait;

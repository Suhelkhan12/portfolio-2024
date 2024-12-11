import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import PrimaryButton from "../buttons/PrimaryButton";

const Info = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h2 className=" text-3xl font-semibold text-basicLightGray">
          Hi there, I&apos;m Suhel, a frontend engineer currently at{" "}
          <Link
            href="https://parallelhq.com"
            target="_blank"
            className=" text-white"
          >
            Parallel<span className="text-3xl font-medium">↗</span>
          </Link>{" "}
          based in India.
        </h2>
        <p className="text-base font-normal text-basicDarkGray md:text-xl">
          I have an insatiable curiosity for exploring the possibilities of
          technology and understanding the diverse perspectives that shape our
          world. Each line of code I write and each project I undertake is
          informed by the rich tapestry of cultures and experiences I&apos;ve
          encountered. I draw from the diversity of human experiences to inform
          my coding practices. My journey as a developer is not just about
          writing code; it&apos;s about connecting technology with human
          behavior and cultural insights to build bridges across communities and
          foster innovation in the digital sphere. In my spare time, you can
          find me obsessing over many hobbies that satisfy my inner tinkerer and
          techy. These include custom mechanical keyboards, hi-fidelity video
          games, football, and street photography. I&apos;m always on the
          lookout for another money trap... but these hobbies allow me to
          appreciate the little things while iterating until everything is just
          right.
        </p>
      </div>
      <div className="flex flex-col  gap-2">
        <h2 className=" text-3xl font-semibold text-basicLightGray">
          I believe that
        </h2>
        <p className="text-base font-normal text-basicDarkGray md:text-xl">
          Technology should seamlessly integrate into our lives. My passion lies
          in simplifying complex systems, merging technical expertise with
          empathy and creativity. By combining elegant code with user-centric
          design, I aim to streamline digital experiences and empower people to
          navigate the challenges of our digital world with ease.
        </p>
      </div>
      <Link
        href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
        target="blank"
        className="flex sm:hidden "
      >
        <PrimaryButton classNames="grow flex items-center justify-center gap-2 group ">
          Let&apos;s connect{" "}
          <IoIosArrowDropright className="transition group-hover:translate-x-1" />
        </PrimaryButton>
      </Link>
    </div>
  );
};

export default Info;

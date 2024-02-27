import Link from "next/link";
import SecondaryButton from "../buttons/SecondaryButton";
import FooterBg from "../footerBackground/FooterBg";
import { IoIosArrowRoundForward } from "react-icons/io";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer className="relative mt-28 overflow-hidden border-t border-t-white/10 px-4 pb-4 ">
      <div className="relative z-10 mx-auto pt-8 sm:max-w-[80rem]">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 ">
            <p className=" text-basicMediumGray">{`{Get in touch}`}</p>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between ">
              <h2 className="max-w-[45rem] text-3xl font-semibold leading-normal text-white md:text-4xl">
                HMU for work, coffee chats, advice, or LMK about your favourite
                animes ッ.
              </h2>
              <Link
                href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
                target="blank"
              >
                <SecondaryButton>Get in touch</SecondaryButton>
              </Link>
            </div>
          </div>

          <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className=" text-basicDarkGray">
              Thanks for stopping by. © 2024 Suhel Khan.{" "}
            </p>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-2 sm:gap-3">
                <p className=" text-sm text-basicDarkGray">Socials</p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="group flex items-center gap-1 text-base text-white transition hover:text-basicDarkGray"
                    target="blank"
                  >
                    <IoIosArrowRoundForward className="transition group-hover:translate-x-1" />
                    Linkedin
                  </Link>
                  <Link
                    href="mailto:suhelkhan9588321151@gmail.com"
                    target="blank"
                    className=" group flex items-center gap-1 text-base text-white transition hover:text-basicDarkGray"
                  >
                    <IoIosArrowRoundForward className="transition group-hover:translate-x-1" />
                    Gmail
                  </Link>
                  <Link
                    href="tel:+919588321151"
                    className=" group flex items-center gap-1 text-base text-white transition hover:text-basicDarkGray"
                  >
                    <IoIosArrowRoundForward className="transition group-hover:translate-x-1" />
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <p className=" text-sm  text-basicDarkGray">Info</p>
                <div className="">
                  <p className="text-base text-white">Haryana, India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBg />
    </footer>
  );
};

export default Footer;

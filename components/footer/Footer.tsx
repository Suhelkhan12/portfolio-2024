import Link from "next/link";
import SecondaryButton from "../buttons/SecondaryButton";
import FooterBg from "../footerBackground/FooterBg";
import { IoIosArrowRoundForward } from "react-icons/io";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-t-white/10 pb-6">
      <div className="relative z-10 mx-auto px-4 pt-12 sm:max-w-7xl">
        <div className="flex flex-col gap-16">
          <div data-animate="fade" className="flex flex-col gap-4">
            <p className=" text-basicMediumGray">{`{Get in touch}`}</p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between ">
              <h2 className="max-w-[45rem] text-2xl font-semibold leading-normal text-white md:text-3xl">
                Thanks for reaching the bottom of this page. If you like what
                you see, let's connect and build something togetherッ.
              </h2>
              <Link
                href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
                target="_blank"
                data-magnetic
                className="shrink-0 self-start lg:self-auto"
              >
                <SecondaryButton>Get in touch</SecondaryButton>
              </Link>
            </div>
          </div>

          <div
            data-animate="fade"
            className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className=" text-basicDarkGray">
              © {new Date().getFullYear()} Suhel Khan - created with inspo from
              the world.
            </p>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-2 sm:gap-3">
                <p className=" text-sm text-basicDarkGray">Socials</p>
                <div className="flex gap-4">
                  <Link
                    href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
                    className="group flex items-center gap-1 text-base text-white transition hover:text-basicDarkGray"
                    target="_blank"
                  >
                    Linkedin
                    <IoIosArrowRoundForward className="transition group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="https://twitter.com/suhel7822"
                    target="_blank"
                    className=" group flex items-center gap-1 text-base text-white transition hover:text-basicDarkGray"
                  >
                    Twitter
                    <IoIosArrowRoundForward className="transition group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="https://github.com/Suhelkhan12"
                    target="_blank"
                    className=" group flex items-center gap-1 text-base text-white transition hover:text-basicDarkGray"
                  >
                    Github
                    <IoIosArrowRoundForward className="transition group-hover:translate-x-1" />
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

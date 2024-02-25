import Link from "next/link";
import SecondaryButton from "../buttons/SecondaryButton";
import FooterBg from "../footerBackground/FooterBg";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer className="relative mt-28 overflow-hidden border-t border-black/10 px-4 pb-4 ">
      <div className="relative z-10 mx-auto pt-8 sm:max-w-[80rem]">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 ">
            <p>{`{Get in touch}`}</p>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between ">
              <h2 className="max-w-[45rem] text-3xl font-semibold leading-normal md:text-4xl">
                Thanks for stopping by ッ. If you like what you see then let's
                connect.
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
            <p>Made with love © 2024 Suhel Khan. </p>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-2 sm:gap-3">
                <p className=" text-sm text-basicDarkGray">Socials</p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-base transition hover:text-basicDarkGray"
                    target="blank"
                  >
                    Linkedin
                  </Link>
                  <Link
                    href="mailto:suhelkhan9588321151@gmail.com"
                    target="blank"
                    className="text-base transition hover:text-basicDarkGray"
                  >
                    Gmail
                  </Link>
                  <Link
                    href="tel:+919588321151"
                    className="text-base transition hover:text-basicDarkGray"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <p className=" text-sm text-basicDarkGray">Info</p>
                <div className="">
                  <p className="text-base">Haryana, India.</p>
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

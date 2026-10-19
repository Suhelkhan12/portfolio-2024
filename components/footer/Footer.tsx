import Link from "next/link";
import SecondaryButton from "../buttons/SecondaryButton";
import FooterBg from "../footerBackground/FooterBg";
import { IoIosArrowRoundForward } from "react-icons/io";

const socials = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/suhel-khan-925aa222a/" },
  { name: "Twitter", href: "https://twitter.com/suhel7822" },
  { name: "Github", href: "https://github.com/Suhelkhan12" },
];

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-t-fg/10 pb-6">
      <div className="relative z-10 mx-auto px-4 pt-12 sm:max-w-7xl">
        <div className="flex flex-col gap-16">
          <div data-animate="fade" className="flex flex-col gap-4">
            <p className=" text-basicMediumGray">{`{Got a project in mind?}`}</p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between ">
              <h2 className="max-w-[45rem] text-2xl font-semibold leading-normal text-fg md:text-3xl">
                Thanks for scrolling all the way down. If you're planning a new
                website or need a developer who cares about the details, let's
                build something people remember.
              </h2>
              <Link
                href="/contact"
                data-magnetic
                className="shrink-0 self-start lg:self-auto"
              >
                <SecondaryButton>Start a project</SecondaryButton>
              </Link>
            </div>
          </div>

          <div
            data-animate="fade"
            className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className=" text-basicDarkGray">
              © {new Date().getFullYear()} Suhel Khan. Designed &amp; built with
              care in India.
            </p>
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-2 sm:gap-3">
                <p className=" text-sm text-basicDarkGray">Socials</p>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="group flex items-center gap-1 text-base text-fg transition hover:text-basicDarkGray"
                    >
                      {social.name}
                      <IoIosArrowRoundForward className="transition group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <p className=" text-sm  text-basicDarkGray">Based in</p>
                <div className="">
                  <p className="text-base text-fg">
                    Haryana, India · open to remote work
                  </p>
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

import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import PrimaryButton from "../buttons/PrimaryButton";

const Info = () => {
  return (
    <div data-animate="stagger" className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h2 className=" text-3xl font-semibold text-basicLightGray">
          Hi there, I&apos;m Suhel, a frontend developer based in India.
        </h2>
        <p className="text-base font-normal text-basicDarkGray md:text-xl">
          I help startups, agencies and founders turn their designs into
          websites that look sharp and feel alive. Most of my work happens in
          Webflow, Finsweet and GSAP: CMS-driven marketing sites, scroll-driven
          animations and the small interactions that make a brand memorable.
          When a project needs custom logic, I reach for Next.js, React and
          TypeScript.
        </p>
        <p className="mt-4 text-base font-normal text-basicDarkGray md:text-xl">
          I care about the details that are easy to skip: motion that feels
          natural, layouts that hold up on every screen, pages that load fast
          and code the next developer can pick up without a headache. Away from
          the keyboard, you&apos;ll find me watching anime, playing football or
          trekking in the mountains.
        </p>
      </div>
      <div className="flex flex-col  gap-2">
        <h2 className=" text-3xl font-semibold text-basicLightGray">
          How I work
        </h2>
        <p className="text-base font-normal text-basicDarkGray md:text-xl">
          I believe the best interfaces feel obvious. I start from the people
          who will use the site, keep systems simple and treat animation as a
          way to guide attention, not decoration. Clear communication, honest
          timelines and a clean handoff matter to me just as much as how the
          site looks on launch day.
        </p>
      </div>
      <Link href="/contact" className="flex sm:hidden ">
        <PrimaryButton classNames="group grow gap-2">
          Let&apos;s work together{" "}
          <IoIosArrowDropright className="transition group-hover:translate-x-1" />
        </PrimaryButton>
      </Link>
    </div>
  );
};

export default Info;

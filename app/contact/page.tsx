import Separator from "@/components/graySeparator/Separator";
import H1 from "@/components/heading/H1";
import Wrapper from "@/components/wrapper/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with Suhel Khan",
  description:
    "Reach out to Suhel Khan, a skilled technologist ready to collaborate and innovate.",
  keywords: [
    "Suhel Khan",
    "contact",
    "connect",
    "collaborate",
    "innovate",
    "frontend development",
    "react",
    "nextjs",
    "gsap",
    "sanity",
    "tailwindcss",
    "frontend design",
  ],
  twitter: {
    title: "Connect with Suhel Khan",
    description:
      "Reach out to Suhel Khan, a skilled technologist ready to collaborate and innovate.",
    card: "summary_large_image",
  },
};
const Contact = () => {
  return (
    <section className="relative z-50 mb-28 pt-20 sm:pt-36">
      <Wrapper>
        <div className="flex flex-col gap-2 px-4">
          <H1>Get in touch</H1>
          <p className="text-[1.25rem] font-normal text-basicMediumGray md:text-[1.5rem]">
            Drop me a line for collaborations, coffee catch-ups & tips.
          </p>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="px-4">
          <div className=" w-full rounded-xl border border-darkCardBorder bg-basicOnyx text-white shadow-lg shadow-black/20">
            <div className=" flex justify-between p-3 sm:p-4">
              <div className=" flex items-center gap-2">
                <div className=" size-3 rounded-full bg-red-500"></div>
                <div className=" size-3 rounded-full bg-yellow-500"></div>
                <div className=" size-3 rounded-full bg-green-500"></div>
              </div>
              <p className=" text-sm font-medium md:text-base">New message</p>
              <div></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;

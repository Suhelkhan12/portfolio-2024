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
      <Wrapper>hello</Wrapper>
    </section>
  );
};

export default Contact;

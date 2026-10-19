import ContactForm from "@/components/contactFrom/ContactForm";
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
          <H1>Let&apos;s build something</H1>
          <p
            data-animate="fade"
            className="text-[1.25rem] font-normal text-basicDarkGray md:text-[1.5rem]"
          >
            Have a project, a role or just an idea? Send me a message and
            I&apos;ll get back to you as soon as I can.
          </p>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="px-4">
          <div
            data-animate="fade"
            className="w-full rounded-xl border border-fg/[0.06] bg-basicOnyx text-fg shadow-lg shadow-black/5 dark:shadow-black/20"
          >
            <div className=" flex justify-between border-b border-fg/10 p-3 sm:p-4">
              <div className="  hidden items-center gap-1 sm:flex sm:gap-2">
                <div className="size-3 rounded-full bg-red-500"></div>
                <div className="size-3 rounded-full bg-yellow-500"></div>
                <div className="size-3 rounded-full bg-green-500"></div>
              </div>
              <p className=" text-sm font-normal sm:font-medium md:text-base">
                New message
              </p>
              <div></div>
            </div>
            <div className=" mb-2 px-4 pb-8 pt-3 md:px-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;

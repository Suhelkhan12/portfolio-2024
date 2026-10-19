import Freetimecard from "@/components/freetimecard/Freetimecard";
import Separator from "@/components/graySeparator/Separator";
import H1 from "@/components/heading/H1";
import H2 from "@/components/heading/H2";
import Info from "@/components/info/Info";
import Portrait from "@/components/portrait/Portrait";
import Wrapper from "@/components/wrapper/Wrapper";
import { freeeTimeCardData } from "@/data/data";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const metadata: Metadata = {
  title: "About Suhel Khan | Frontend & Webflow Developer",
  description:
    "Suhel Khan is a frontend and Webflow developer from India who turns designs into fast, animated, pixel-perfect websites. Learn how he works and what he cares about.",
  keywords: [
    "portfolio",
    "Suhel Khan",
    "frontend",
    "ui engineer",
    "developer",
    "projects",
    "skills",
    "experience",
  ],
  twitter: {
    title:
      "About Suhel Khan | Frontend & Webflow Developer",
    description:
      "Suhel Khan is a frontend and Webflow developer from India who turns designs into fast, animated, pixel-perfect websites.",
    card: "summary_large_image",
  },
};

const page = () => {
  return (
    <section className=" relative z-50 mb-28 gap-8 pt-28  md:pt-36">
      <Wrapper>
        <div className="flex flex-col gap-2 px-4">
          <H1>A little about me</H1>
          <p
            data-animate="fade"
            className="text-[1.25rem] font-normal text-basicDarkGray sm:text-[1.5rem]"
          >
            The person behind the pixels, and how I like to work.
          </p>
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex flex-col gap-12 px-4 md:gap-[4.5rem]">
          <Portrait />
          <Info />
        </div>
      </Wrapper>
      <Separator />
      <Wrapper>
        <div className="flex flex-col justify-between gap-4 px-4 lg:gap-8">
          <div className="flex flex-col gap-3">
            <H2
              data-animate="split"
              classnames="md:text-5xl text-4xl font-bold text-fg"
            >
              When I&apos;m not coding
            </H2>
          </div>
          <div
            data-animate="stagger"
            className="mt-3 grid gap-5 sm:grid-cols-1 md:grid-cols-2"
          >
            {freeeTimeCardData.map((freeeTimeCardData) => (
              <Freetimecard
                key={freeeTimeCardData.heading}
                {...freeeTimeCardData}
              />
            ))}
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div
          data-animate="fade"
          className="mt-24 flex flex-col items-center justify-center gap-2 px-4 text-center text-xl font-medium text-fg md:flex-row md:text-2xl"
        >
          <span className=" font-normal">
            Prefer the one-page version? Here&apos;s my
          </span>
          <Link
            href={"/suhel-resume.pdf"}
            target="_blank"
            className="group flex items-center justify-center text-blue-500 transition-colors hover:text-blue-400"
          >
            Résumé
            <MdArrowOutward
              aria-hidden
              className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default page;

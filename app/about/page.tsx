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
  title: "Suhel Khan: Frontend Engineer | Portfolio, Projects.",
  description:
    "Suhel is Frontend engineer at Parallelhq, banglore. He has an insatiable curiosity for exploring the possibilities of technology and understanding the diverse perspectives that shape our world",
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
      "Suhel Khan: Frontend Engineer | Portfolio, Projects, and Experience",
    description:
      "Suhel is Frontend engineer at Parallelhq, banglore. He has an insatiable curiosity for exploring the possibilities of technology and understanding the diverse perspectives that shape our world.",
    card: "summary_large_image",
  },
};

const page = () => {
  return (
    <section className=" relative z-50 mb-28 gap-8 pt-28  md:pt-36">
      <Wrapper>
        <div className="flex flex-col gap-2 px-4">
          <H1>Just a little bit about me</H1>
          <p className="text-[1.25rem] font-normal text-basicMediumGray sm:text-[1.5rem]">
            Who I am and what I do.
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
            <H2 classnames="md:text-5xl text-4xl font-bold text-white">
              When I&apos;m not coding
            </H2>
          </div>
          <div className="mt-3 grid gap-5 sm:grid-cols-1 md:grid-cols-2">
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
        <div className="mt-24 flex flex-col items-center justify-center gap-2 px-4 text-center text-xl font-medium text-bgLight md:flex-row md:text-2xl">
          <span className=" font-normal">
            Alternatively, here&apos;s a fancy sheet of paper
          </span>
          <Link
            href={"/Suhel_Resume_2025.pdf"}
            target="_blank"
            className="flex items-center justify-center  text-blue-500 transition-colors hover:text-blue-400"
          >
            Résumé
            <MdArrowOutward className=" size-5" />
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default page;

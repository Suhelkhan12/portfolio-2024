import H2 from "@/components/heading/H2";
import Wrapper from "@/components/wrapper/Wrapper";
import React from "react";
import Link from "next/link";
import {
  educationDetails,
  experienceDetails,
  getToKnowMeData,
} from "@/data/data";
import GetToKnowmeCard from "@/components/getToKnowmeCard/GetToKnowmeCard";

const page = () => {
  return (
    <>
      <section className="relative z-50 pt-20 sm:pt-36 md:mb-28">
        <Wrapper>
          <div className="flex flex-col gap-4 px-4 md:gap-8">
            <div className=" rounded-lg bg-basicOnyx/70 p-4 text-ligthFaintWhite md:p-10 lg:px-28 lg:py-20 ">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <H2 classnames="md:text-[2.5] text-[2rem] lg:text-[3rem] font-bold ">
                  Suhel khan
                </H2>
                <div className="flex flex-col gap-1 text-sm">
                  <p>Suhelkhan.com</p>
                  <Link
                    href="https://www.linkedin.com/in/suhell-khan/"
                    target="_blank"
                  >
                    linkedin.com/in/suhell-khan/
                  </Link>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-12 md:mt-20 lg:gap-24">
                <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-24 ">
                  <p className="text-base">Experience</p>
                  <div className="flex flex-col gap-8 lg:gap-12">
                    {experienceDetails.map((experience) => (
                      <div key={experience.id} className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <p className=" text-[1.125rem] font-semibold sm:text-xl sm:font-semibold">
                              {experience.companyname}
                            </p>
                            <div className=" size-1 rounded-full bg-basicLightGray"></div>
                            <p className="text-sm sm:text-xl">
                              {experience.designation}
                            </p>
                          </div>
                          <p className="text-sm text-basicDarkGray sm:text-base">
                            {experience.dateLocation}{" "}
                          </p>
                        </div>
                        <p className=" text-sm sm:text-base md:max-w-[50rem]">
                          {experience.about}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-24">
                  <p className="text-base">Education</p>
                  <div className="flex flex-col gap-8 lg:gap-12">
                    {educationDetails.map((educationDetail) => (
                      <div
                        key={educationDetail.id}
                        className="flex flex-col gap-3"
                      >
                        <div className="flex flex-col gap-1">
                          <p className="text-[1.125rem] font-semibold sm:text-xl sm:font-semibold">
                            {educationDetail.university}
                          </p>
                          <p className="text-sm text-basicDarkGray sm:text-base">
                            {educationDetail.dateLocatoin}{" "}
                          </p>
                        </div>
                        <p className="text-sm sm:text-base">
                          {educationDetail.degreeName}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="my-12 md:my-24">
        <Wrapper>
          <div className="px-4">
            <div className="mt-8 flex flex-col gap-8 sm:gap-6 md:flex-row md:gap-8">
              {getToKnowMeData.map((data) => (
                <GetToKnowmeCard {...data} key={data.heading} />
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default page;

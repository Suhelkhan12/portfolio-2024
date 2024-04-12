import H2 from "@/components/heading/H2";
import Wrapper from "@/components/wrapper/Wrapper";
import React from "react";
import Link from "next/link";
import { educationDetails, experienceDetails } from "@/data/data";

const page = () => {
  return (
    <section className="relative z-50 mb-28 pt-20 sm:pt-36">
      <Wrapper>
        <div className="flex flex-col gap-4 px-4 md:gap-8">
          <div className=" rounded-lg bg-basicOnyx px-28 py-20 text-ligthFaintWhite ">
            <div className="flex items-center justify-between">
              <H2 classnames=" text-[3rem] font-bold ">Suhel khan</H2>
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
            <div className="mt-20 flex flex-col gap-24">
              <div className="  flex w-full  gap-24 ">
                <p className="text-base">Experience</p>
                <div className="flex flex-col gap-12">
                  {experienceDetails.map((experience) => (
                    <div key={experience.id} className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <p className=" text-xl font-semibold">
                            {experience.companyname}
                          </p>
                          <div className=" size-1 rounded-full bg-basicLightGray"></div>
                          <p className="text-xl">{experience.designation}</p>
                        </div>
                        <p className=" text-base text-basicDarkGray">
                          {experience.dateLocation}{" "}
                        </p>
                      </div>
                      <p className=" text-base md:max-w-[50rem]">
                        {experience.about}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="  flex w-full  gap-24 ">
                <p className="text-base">Education</p>
                <div className="flex flex-col gap-12">
                  {educationDetails.map((educationDetail) => (
                    <div
                      key={educationDetail.id}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex flex-col gap-1">
                        <p className=" text-xl font-semibold">
                          {educationDetail.university}
                        </p>
                        <p className=" text-base text-basicDarkGray">
                          {educationDetail.dateLocatoin}{" "}
                        </p>
                      </div>
                      <p className=" text-base">{educationDetail.degreeName}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default page;

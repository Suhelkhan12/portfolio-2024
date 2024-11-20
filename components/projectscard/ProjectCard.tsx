import Image from "next/image";
import ProjectTag from "../projectTag/ProjectTag";
import { ProjectCardProps } from "@/types";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCard = (props: ProjectCardProps) => {
  const linkToUse = props.githubLink || props.liveLink;
  return (
    <Link
      href={linkToUse!}
      target="_blank"
      className="group relative flex flex-col justify-between rounded-lg bg-basicOnyx p-3 transition hover:bg-white/5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6 "
    >
      <div>
        <div className="relative h-[14rem]  w-full overflow-hidden rounded-lg md:h-[16rem] lg:h-[20rem] ">
          <Image
            src={props.image}
            alt={props.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex size-full translate-y-full items-center justify-center bg-black transition-transform duration-500 ease-in-out group-hover:translate-y-0">
            {props.logo && (
              <Image
                src={props.logo}
                width={100}
                height={100}
                alt={props.name}
              />
            )}
            {}
          </div>
          <div className=" group absolute bottom-4 right-4 z-50 flex size-8 items-center justify-center rounded-full border border-basicOnyx/50 bg-ligthFaintWhite">
            <IoIosArrowForward />
          </div>
        </div>
        <div className=" mt-6 flex flex-wrap gap-2 md:gap-3 lg:gap-4">
          {props.tags.map((tag) => (
            <ProjectTag text={tag} key={props.name} />
          ))}
        </div>
        <div className=" mt-4 flex flex-col gap-2 ">
          <h2 className=" text-[2rem] font-medium text-white">{props.name}</h2>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-2 text-white transition duration-300  ease-in-out group-hover:text-blue-500">
        {props.liveLink === linkToUse && (
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm">See live website</p>{" "}
              <MdOutlineArrowOutward />
            </div>

            <div className=" transition duration-300 sm:opacity-0 sm:group-hover:opacity-100">
              <ProjectTag text="Freelance project" />
            </div>
          </div>
        )}
        {props.githubLink === linkToUse && (
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm">Github repository</p>{" "}
              <MdOutlineArrowOutward />
            </div>
            <div className=" transition duration-300 sm:opacity-0 sm:group-hover:opacity-100">
              <ProjectTag text="Learning Experiment" />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;

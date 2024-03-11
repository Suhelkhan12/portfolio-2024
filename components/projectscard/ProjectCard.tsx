import Image from "next/image";
import ProjectTag from "../projectTag/ProjectTag";
import { ProjectCardProps } from "@/types";
import Link from "next/link";
// import { IoMdLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link
      href={props.liveLink!}
      className="group rounded-lg border border-darkCardBorder bg-basicOnyx p-4"
    >
      <div className="w-full overflow-hidden rounded-lg ">
        <Image
          src={props.image}
          alt={props.name}
          width={845}
          height={845}
          className=" transition-global group-hover:scale-110"
        />
      </div>
      <div className=" mt-8 flex flex-col gap-3 ">
        <div className="flex items-center justify-between">
          <h2 className=" text-2xl font-medium text-white">{props.name}</h2>
          <div className="flex  gap-5">
            {props.githubLink && (
              <Link
                href={props.githubLink}
                className=" transition-global text-white"
              >
                <FaGithub className=" text-2xl" />
              </Link>
            )}
            {/* {props.liveLink && (
              <Link
                href={props.liveLink}
                className=" transition-global text-white"
              >
                <IoMdLink className=" text-2xl" />
              </Link>
            )} */}
          </div>
        </div>
        <p className=" text-basicDarkGray">{props.description}</p>
        <div className=" flex flex-wrap gap-4">
          {props.tags.map((tag) => (
            <ProjectTag text={tag} key={props.name} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

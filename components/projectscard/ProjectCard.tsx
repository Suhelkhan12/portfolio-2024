import Image from "next/image";
import ProjectTag from "../projectTag/ProjectTag";
import { ProjectCardProps } from "@/types";
import Link from "next/link";
import { IoMdLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="group rounded-lg border border-lightCardBorder bg-lightCardBg p-4">
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
          <h2 className=" text-2xl font-medium">{props.name}</h2>
          <div className="flex  gap-5">
            {props.githubLink && (
              <Link
                href={props.githubLink}
                className=" transition-global group-hover:text-xl"
              >
                <FaGithub />
              </Link>
            )}
            {props.liveLink && (
              <Link
                href={props.liveLink}
                className=" transition-global group-hover:text-2xl"
              >
                <IoMdLink />
              </Link>
            )}
          </div>
        </div>
        <p>{props.description}</p>
        <div className=" flex flex-wrap gap-4">
          {props.tags.map((tag) => (
            <ProjectTag text={tag} key={props.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

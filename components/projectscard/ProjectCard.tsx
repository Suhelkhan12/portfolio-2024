import Image from "next/image";
import ProjectTag from "../projectTag/ProjectTag";
import { ProjectCardProps } from "@/types";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link
      href={props.liveLink!}
      className="group rounded-lg  bg-basicOnyx p-4  transition hover:bg-white/10"
    >
      <div className="relative h-[25rem] w-full overflow-hidden rounded-lg ">
        <Image
          src={props.image}
          alt={props.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" transition-global group-hover:scale-105"
        />
      </div>
      <div className=" mt-6 flex flex-col gap-2 ">
        <div className="flex items-center justify-between">
          <h2 className=" text-[2rem] font-medium text-white">{props.name}</h2>
          <div className="flex  gap-5">
            {props.githubLink && (
              <Link
                href={props.githubLink}
                className=" transition-global text-white"
              >
                <FaGithub className=" text-2xl" />
              </Link>
            )}
          </div>
        </div>
        <p className=" text-basicDarkGray">{props.description}</p>
        <div className=" mt-2 flex flex-wrap gap-4">
          {props.tags.map((tag) => (
            <ProjectTag text={tag} key={props.name} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

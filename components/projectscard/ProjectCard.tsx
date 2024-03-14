import Image from "next/image";
import ProjectTag from "../projectTag/ProjectTag";
import { ProjectCardProps } from "@/types";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link
      href={props.liveLink!}
      className="group rounded-lg bg-basicOnyx p-4 transition hover:bg-white/5"
    >
      <div className="relative h-[20rem]  w-full overflow-hidden rounded-lg ">
        <Image
          src={props.image}
          alt={props.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex size-full translate-y-full items-center justify-center bg-black transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          <Image src={props.logo} width={100} height={100} alt={props.name} />
        </div>
      </div>
      <div className=" mt-6 flex flex-wrap gap-4">
        {props.tags.map((tag) => (
          <ProjectTag text={tag} key={props.name} />
        ))}
      </div>
      <div className=" mt-4 flex flex-col gap-2 ">
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
      </div>

      <div className="mt-12 flex items-center justify-start gap-2 text-white transition duration-300  ease-in-out group-hover:text-blue-500">
        <p>See live website</p> <MdOutlineArrowOutward />
      </div>
    </Link>
  );
};

export default ProjectCard;

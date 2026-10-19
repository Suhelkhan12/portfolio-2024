import Image from "next/image";
import ProjectTag from "../projectTag/ProjectTag";
import { ProjectCardProps } from "@/types";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectCard = (props: ProjectCardProps) => {
  const linkToUse = props.githubLink || props.liveLink;
  const isLive = props.liveLink === linkToUse;
  return (
    <Link
      href={linkToUse!}
      target="_blank"
      data-spotlight
      className="group relative flex flex-col justify-between rounded-lg border border-fg/[0.06] bg-basicOnyx p-3 transition-colors duration-300 hover:border-fg/10 hover:bg-fg/5 md:rounded-xl md:p-4 lg:rounded-2xl lg:p-6"
    >
      <div>
        <div className="relative h-56 w-full overflow-hidden rounded-lg md:h-64 lg:h-80">
          <Image
            src={props.image}
            alt={props.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
          {props.tags.map((tag) => (
            <ProjectTag text={tag} key={tag} />
          ))}
        </div>
        <h3 className="mt-4 text-2xl font-medium text-fg md:text-[1.75rem]">
          {props.name}
        </h3>
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm text-basicLightGray transition-colors duration-300 group-hover:text-fg">
        <span>{isLive ? "Visit live site" : "View source on GitHub"}</span>
        <MdOutlineArrowOutward
          aria-hidden
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  );
};

export default ProjectCard;

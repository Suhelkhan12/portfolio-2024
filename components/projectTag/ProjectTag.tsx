type ProjectTagProps = {
  text: string;
};

const ProjectTag = ({ text }: ProjectTagProps) => {
  return (
    <div className=" rounded-full border border-ligthFaintWhite/35 bg-ligthFaintWhite/10 px-2 py-1 text-ligthFaintWhite/55 transition duration-300  ease-in-out group-hover:border-ligthFaintWhite group-hover:text-ligthFaintWhite lg:px-3 lg:py-2 ">
      <p className=" text-[10px] md:text-xs">{text}</p>
    </div>
  );
};

export default ProjectTag;

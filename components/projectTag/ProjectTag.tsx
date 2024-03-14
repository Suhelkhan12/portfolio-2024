type ProjectTagProps = {
  text: string;
};

const ProjectTag = ({ text }: ProjectTagProps) => {
  return (
    <div className=" rounded-full border border-ligthFaintWhite/35 bg-ligthFaintWhite/10 px-3 py-2 text-ligthFaintWhite/55 transition duration-300  ease-in-out group-hover:border-ligthFaintWhite group-hover:text-ligthFaintWhite ">
      <p className=" text-xs">{text}</p>
    </div>
  );
};

export default ProjectTag;

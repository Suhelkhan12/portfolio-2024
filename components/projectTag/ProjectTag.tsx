type ProjectTagProps = {
  text: string;
};

const ProjectTag = ({ text }: ProjectTagProps) => {
  return (
    <div className=" rounded-sm bg-ligthFaintWhite px-2 py-1 text-basicOnyx">
      <p className=" text-xs font-medium">{text}</p>
    </div>
  );
};

export default ProjectTag;

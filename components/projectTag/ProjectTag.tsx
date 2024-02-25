type ProjectTagProps = {
  text: string;
  key: string;
};

const ProjectTag = ({ text, key }: ProjectTagProps) => {
  return (
    <div className=" rounded-sm bg-basicMediumGray px-2 py-1 text-basicOnyx">
      <p className=" text-xs font-medium">{text}</p>
    </div>
  );
};

export default ProjectTag;

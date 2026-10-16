type ProjectTagProps = {
  text: string;
};

const ProjectTag = ({ text }: ProjectTagProps) => {
  return (
    <span className="rounded-full border border-ligthFaintWhite/20 bg-ligthFaintWhite/5 px-3 py-1 text-xs text-ligthFaintWhite/70 transition-colors duration-300 group-hover:border-ligthFaintWhite/40 group-hover:text-ligthFaintWhite">
      {text}
    </span>
  );
};

export default ProjectTag;

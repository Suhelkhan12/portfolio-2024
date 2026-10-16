import { ReactChildrenProp } from "@/types";

const H1 = ({ children }: ReactChildrenProp) => {
  return (
    <h1
      data-animate="split"
      className="text-[3.5rem] font-bold leading-tight text-white lg:text-[5rem]"
    >
      {children}
    </h1>
  );
};

export default H1;

import { ReactChildrenProp } from "@/types";

const H1 = ({ children }: ReactChildrenProp) => {
  return (
    <h1 className="text-[3rem] font-bold leading-normal text-white md:text-[3.5rem] lg:text-[5rem]">
      {children}
    </h1>
  );
};

export default H1;

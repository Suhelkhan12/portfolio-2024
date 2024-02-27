import { type ReactChildrenProp } from "@/types";

const Wrapper = ({ children }: ReactChildrenProp) => {
  return <div className="mx-auto sm:max-w-[80rem]">{children}</div>;
};

export default Wrapper;

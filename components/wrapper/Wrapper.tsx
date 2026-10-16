import { type ReactChildrenProp } from "@/types";

const Wrapper = ({ children }: ReactChildrenProp) => {
  return <div className="mx-auto sm:max-w-7xl">{children}</div>;
};

export default Wrapper;

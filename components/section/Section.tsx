import { ReactChildrenProp } from "@/types";

const Section = ({ children }: ReactChildrenProp) => {
  return <section className=" mt-32">{children}</section>;
};

export default Section;

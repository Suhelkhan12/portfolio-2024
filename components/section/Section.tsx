import { ReactChildrenProp } from "@/types";

const Section = ({ children }: ReactChildrenProp) => {
  return <section className=" pt-16 sm:pt-36">{children}</section>;
};

export default Section;

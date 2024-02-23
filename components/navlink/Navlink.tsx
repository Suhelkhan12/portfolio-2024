import { type NavlinkType } from "@/types";
import Link from "next/link";

const Navlink = ({ href, name }: NavlinkType) => {
  return (
    <Link
      href={href}
      className="text-[1rem] font-medium leading-normal text-basicLight transition hover:text-white"
    >
      {name}
    </Link>
  );
};

export default Navlink;

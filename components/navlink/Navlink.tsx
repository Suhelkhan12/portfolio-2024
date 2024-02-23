"use client";
import { type NavlinkType } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navlink = ({ href, name }: NavlinkType) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`text-[1rem] font-medium leading-normal text-basicLight transition hover:text-white ${path === href && "text-white"}`}
    >
      {name}
    </Link>
  );
};

export default Navlink;

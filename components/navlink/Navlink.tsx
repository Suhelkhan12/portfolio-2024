"use client";
import { type NavlinkType } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navlink = ({ href, name }: NavlinkType) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`relative z-0 origin-top text-[1rem] font-medium leading-normal text-basicLightGray transition before:absolute before:-inset-2 before:rounded-md before:bg-white/40 before:opacity-0 hover:before:opacity-100   ${path === href && "before:opacity-100"}`}
    >
      <p className="relative z-10">{name}</p>
    </Link>
  );
};

export default Navlink;

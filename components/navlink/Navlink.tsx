"use client";
import { type NavlinkType } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navlink = ({ href, name }: NavlinkType) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`relative z-0 origin-top text-[1rem] font-medium leading-normal text-basicLightGray transition before:absolute before:-inset-2 before:scale-90 before:rounded-md before:bg-basicMediumGray/20 before:opacity-0 before:transition-[opacity,transform] before:duration-300 hover:text-fg hover:before:scale-100 hover:before:opacity-100 ${path === href ? "text-fg before:scale-100 before:opacity-100" : ""}`}
      aria-current={path === href ? "page" : undefined}
    >
      <p className="relative z-10">{name}</p>
    </Link>
  );
};

export default Navlink;

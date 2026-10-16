import { navlinks, navlinkImages, mobileNavLinks } from "@/data/data";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";
import Navlink from "../navlink/Navlink";

const Navbar = () => {
  return (
    <nav className="mx-auto flex w-full items-center justify-between p-4 sm:py-6 lg:max-w-7xl">
      <div className=" hidden w-full justify-between sm:flex">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            aria-label="Home"
            className="transition hover:rotate-6"
            data-magnetic 
          >
            <FaCode aria-hidden className="text-3xl text-white" />
          </Link>
          <ul className="flex gap-16">
            {navlinks.map((link) => (
              <li key={link.name} className="relative">
                <Navlink {...link} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6">
          {navlinkImages.map((image) => (
            <Link
              href={image.link}
              key={image.alt}
              aria-label={image.alt}
              data-magnetic
              className="text-basicLightGray opacity-60 transition hover:text-white hover:opacity-100"
              target="_blank"
            >
              <image.src aria-hidden className="text-2xl" />
            </Link>
          ))}
        </div>
      </div>

      <div className=" block w-full sm:hidden">
        <div className="flex justify-between self-stretch">
          {mobileNavLinks.map((link) => (
            <Link
              href={link.slug}
              key={link.id}
              className=" flex flex-col items-center justify-center gap-1 p-1 text-xs text-white"
            >
              <link.icon className="size-4" />
              <span className=" capitalize">{link.id}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

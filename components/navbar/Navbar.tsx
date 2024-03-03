import { navlinks, navlinkImages, mobileNavLinks } from "@/data/data";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";
import Navlink from "../navlink/Navlink";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 ">
      <div className=" hidden w-full justify-between sm:flex">
        <div className="flex items-center gap-10">
          <Link href="/" className="transition hover:rotate-6">
            <FaCode className="text-3xl text-white" />
          </Link>
          <ul className="flex gap-10">
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
              className="opacity-50 transition hover:scale-110 hover:opacity-100"
              target="blank"
            >
              <image.src className="text-2xl text-basicLightGray  hover:text-white" />
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
              className=" flex items-center justify-center p-1 text-white"
            >
              <link.icon className="text-[20px]" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

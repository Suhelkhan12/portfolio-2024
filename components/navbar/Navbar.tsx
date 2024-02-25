import { navlinks, navlinkImages } from "@/data/data";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";
import Navlink from "../navlink/Navlink";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 ">
      <div className="flex items-center gap-10">
        <Link href="/" className="transition hover:rotate-6">
          <FaCode className="text-3xl text-basicOnyx" />
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
            <image.src className="text-2xl" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

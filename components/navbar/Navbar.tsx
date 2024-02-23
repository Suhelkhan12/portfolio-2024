import { navlinks, navlinkImages } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import Navlink from "../navlink/Navlink";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  p-4">
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src="/navlogo.png" alt="Coding-logo" width={32} height={32} />
        </Link>
        <ul className="flex gap-10">
          {navlinks.map((link) => (
            <li key={link.name}>
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
            className=" opacity-50 transition hover:scale-110 hover:opacity-100"
            target="blank"
          >
            <Image src={image.src} alt={image.alt} width={24} height={24} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

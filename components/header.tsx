import Image from "next/image";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Header = ({ handleClick }: { handleClick: (target: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div
        onClick={() => handleClick("banner")}
        className="flex items-center gap-x-1 cursor-pointer"
      >
        <CommandLineIcon className="w-10 h-10 text-[--redClr]" />
        <p className="text-lg font-bold text-white">Zhetpisbekov</p>
      </div>
      <div className="flex items-center gap-x-10">
        <ul className="flex items-center gap-x-10">
          <li onClick={() => handleClick("about")} className="headerLink">
            ABOUT
          </li>
          <li onClick={() => handleClick("experience")} className="headerLink">
            EXPERIENCE
          </li>
          <li onClick={() => handleClick("projects")} className="headerLink">
            PROJECTS
          </li>
          <li className="headerLink">CONTACT</li>
        </ul>
        <a href="/Zhomart_CV_overleaf.pdf" target="_blank" rel="noopener noreferrer">
          <button
            className="bg-[--redClr] px-6 py-2 border border-[gray] customShadow text-white
        transition duration-[.3s] hover:bg-white hover:text-[--redClr]"
          >
            RESUME
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;

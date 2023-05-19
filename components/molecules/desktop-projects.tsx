import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  stack: string;
  projectLink: string;
  ghLink: string;
};

const DesktopProjects = (props: Project) => {
  return (
    <article className="w-full grid grid-cols-10">
        <div
          className={`relative min-w-[26rem] h-[22rem] customShadow
      row-span-full z-10
      ${props.id % 2 != 0 ? "col-start-1 col-span-6" : "col-end-11 col-span-6"}
      filter brightness-50 contrast-[80%] hover:filter-none
      transition duration-[.3s] cursor-pointer`}
        >
          <Image
            className=""
            src={`/images/${props.imgUrl}`}
            alt={props.title}
            fill
            objectFit="cover"
            onClick={()=> window.open(props.projectLink, "_blank")}
          />
        </div>

      <div
        className={`flex flex-col gap-y-5 py-5
      row-span-full self-center z-20
      ${
        props.id % 2 != 0
          ? "col-span-6 col-end-11 text-right"
          : "col-start-1 col-span-6 text-left"
      }`}
      >
        <a target="_blank" href={props.projectLink || props.ghLink}>
          <h1 className="font-bold text-2xl cursor-pointer hover:text-[var(--redClr)] transition duration-[.3s]">
            {props.title}
          </h1>
        </a>

        <p className="bg-[#141414]/70 px-7 py-5 customShadow text-sm">
          {props.description}
        </p>
        <p className="text-xs text-gray-400">{props.stack}</p>
        <a
          className={`flex gap-x-2 items-center hover:text-[var(--redClr)] transition duration-[.3s] ${
            props.id % 2 != 0 ? "justify-end" : "justify-start"
          }`}
          target="_blank"
          href={props.ghLink}
        >
          <FontAwesomeIcon className="w-5 h-5" icon={faGithub}/>
          GH REPO
        </a>
      </div>
    </article>
  );
};

export default DesktopProjects;

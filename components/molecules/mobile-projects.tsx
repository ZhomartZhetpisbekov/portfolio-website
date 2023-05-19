import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  stack: string;
  projectLink: string;
  ghLink: string;
};

const MobileProjects = (props: Project) => {
  return (
    <article className="relative w-screen flex flex-col bg-[#141414]/80 customShadow border border-[gray]">
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <Image
          className="slightBlur"
          src={`/images/${props.imgUrl}`}
          alt={props.title}
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-y-5 px-5 py-10">
        <a href={props.projectLink || props.ghLink}>
          <h1 className="font-bold text-xl cursor-pointer hover:text-[var(--redClr)] transition duration-[.3s]">
            {props.title}
          </h1>
        </a>

        <p className="text-sm px-5 py-5 bg-[#141414]/60 customShadow">
          {props.description}
        </p>
        <p className="text-sm text-gray-400">{props.stack}</p>
        <a
          className="flex gap-x-2 items-center text-sm hover:text-[var(--redClr)] transition duration-[.3s]"
          href={props.ghLink}
          target="_blank"
        >
          <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
          GH REPO
        </a>
      </div>
    </article>
  );
};

export default MobileProjects;

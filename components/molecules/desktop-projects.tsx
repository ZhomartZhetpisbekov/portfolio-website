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
          className={`relative min-w-[26rem] h-[23rem] customShadow
      row-span-full z-10
      ${props.id % 2 != 0 ? "col-start-1 col-span-5" : "col-end-11 col-span-5"}
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
        className={`flex flex-col gap-y-5 py-10
      row-span-full self-center z-20
      ${
        props.id % 2 != 0
          ? "col-span-6 col-end-11 text-right"
          : "col-start-1 col-span-6 text-left"
      }`}
      >
        <a href={props.projectLink || props.ghLink}>
          <h1 className="font-bold text-3xl cursor-pointer hover:text-[var(--redClr)] transition duration-[.3s]">
            {props.title}
          </h1>
        </a>

        <p className="bg-[#141414]/70 px-7 py-5 customShadow">
          {props.description}
        </p>
        <p className="text-xs text-gray-400">{props.stack}</p>
        <a
          className={`flex gap-x-2 items-center ${
            props.id % 2 != 0 ? "justify-end" : "justify-start"
          }`}
          href={props.ghLink}
        >
          <Image
            width={20}
            height={20}
            src="/images/gh-icon.png"
            alt="Github icon"
          />
          GH REPO
        </a>
      </div>
    </article>
  );
};

export default DesktopProjects;

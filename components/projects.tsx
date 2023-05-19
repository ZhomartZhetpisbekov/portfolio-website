import Image from "next/image";
import ProjectsWidget from "./molecules/projects-widget";
import { projects } from "@/db/projects";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Projects = forwardRef((props, ref) => {
  const projectsRef = useRef<HTMLElement>(null);

  // Expose the projectsRef to the parent component
  useImperativeHandle(ref, () => projectsRef.current);
  return (
    <section ref={projectsRef} className="relative flex flex-col gap-y-10 py-10 px-0 scroll-mt-12
    md:px-24">
      <div className="absolute top-0 left-0 -z-10 h-full w-screen">
        <Image 
          className="customBlur"
          src="/images/anime-city.jpeg"
          alt="Anime city at night"
          fill
          objectFit="cover"
        />
      </div>
      <h1 className="text-5xl text-[--redClr] px-5 md:px-0 text-center">Projects</h1>
      <div className="mx-auto flex flex-col gap-y-20 md:gap-y-40 lg:max-w-[64rem]">
        {projects.map((item) => <ProjectsWidget key={item.id} {...item} />)}
      </div>
    </section>
  )
});

Projects.displayName = 'Projects'

export default Projects;
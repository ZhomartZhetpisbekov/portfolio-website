import Image from "next/image";
import { useEffect, useState } from "react";
import MobileProjects from "./mobile-projects";
import React from "react";
import DesktopProjects from "./desktop-projects";

type Project = {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  stack: string;
  projectLink: string;
  ghLink: string;
};

const ProjectsWidget = (props: Project) => {
  const [width, setWidth] = useState(0);
  const breakpoint = 768;

  

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    // Check if window is available (SSR)
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
    }

    // Return a function from the effect that removes the event listener
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);


  return width < breakpoint ? <MobileProjects {...props}/> : <DesktopProjects {...props} />
};

export default ProjectsWidget;

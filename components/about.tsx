import {
  LanguageIcon,
  PaperAirplaneIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef } from "react";

const About = forwardRef((props, ref) => {
  const aboutRef = useRef<HTMLElement>(null);

  // Expose the bannerRef to the parent component
  useImperativeHandle(ref, () => aboutRef.current);
  return (
    <section
      ref={aboutRef}
      className="relative min-h-screen flex flex-col items-center gap-y-10 py-20 px-5 scroll-mt-5
      md:px-24"
    >
      <div className="absolute top-0 left-0 -z-10 h-full w-screen">
        <Image
          className="customBlur"
          src="/images/night-moon.jpeg"
          alt="Bridge in forest"
          fill
          objectFit="cover"
        />
      </div>
      <h1 className="text-5xl text-[--redClr] w-full text-center">ABOUT ME</h1>

      <div className="flex flex-col items-center gap-y-5 lg:flex-row-reverse lg:justify-center lg:max-w-[58rem] lg:gap-x-10">
        <div className="flex flex-col gap-y-5 py-5">
          <p>
            My name is Zhomart Zhetpisbekov. I&apos;m a software engineering
            student from Kazakhstan. I&apos;m passionate about building
            beautiful and interactive interfaces for the web. Writing clean,
            accessible, and human code matters to me
          </p>
          <p>
            Besides coding, I really enjoy writing music. You can check out some
            of my songs on{" "}
            <span className="underline font-bold hover:text-[var(--redClr)] transition duration-[.3s]">
              <a target="_blank" href="https://open.spotify.com/artist/3hMNx0PQLr940U2G2QQwWq?si=i-x2SOY8TAuuT7srb75lCw&nd=1">
                Spotify
              </a>
            </span>
          </p>

          {/* Tech Stack */}
          <p className="font-bold text-[--redClr]">TECH STACK:</p>
          <div className="flex flex-col gap-y-2 justify-between md:flex-row">
            <ul className="flex flex-col gap-y-2 ">
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[--redClr]" />
                NEXT.JS / REACT.JS
              </li>
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[--redClr]" />
                VUE.JS
              </li>
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[--redClr]" />
                SPRING
              </li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="skillsItem">
                <LanguageIcon className="w-4 h-4 text-[--redClr]" />
                TYPESCRIPT
              </li>
              <li className="skillsItem">
                <LanguageIcon className="w-4 h-4 text-[--redClr]" />
                PYTHON
              </li>
              <li className="skillsItem">
                <LanguageIcon className="w-4 h-4 text-[--redClr]" />
                JAVA
              </li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="skillsItem">
                <WrenchIcon className="w-4 h-4 text-[--redClr]" />
                FIGMA
              </li>
              <li className="skillsItem">
                <WrenchIcon className="w-4 h-4 text-[--redClr]" />
                TAILWIND
              </li>
              <li className="skillsItem">
                <WrenchIcon className="w-4 h-4 text-[--redClr]" />
                FIREBASE
              </li>
            </ul>
          </div>
        </div>

        <div
          className="relative min-w-[20rem] max-w-[30rem] h-[20rem]
          lg:h-[20rem] lg:w-[28rem]"
        >
          <Image
            src="/images/me-waving.png"
            alt="Zhomart waving"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const About = () => {
  return (
    <div
      // style={{ border: "1px solid green" }}
      className="relative min-h-screen flex flex-col gap-y-5 py-14 px-5
      md:px-14"
    >
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          className="customBlur"
          src="/images/night-moon.jpeg"
          alt="Bridge in forest"
          fill
          objectFit="cover"
        />
      </div>
      <h1 className="text-5xl text-[#E50914]">ABOUT ME</h1>
      <div className="flex flex-col gap-y-5 lg:flex-row lg:justify-between lg:gap-x-5">
        <div className="flex flex-col gap-y-5 md:max-w-3xl py-5">
          <p>
            My name is Zhomart Zhetpisbekov. I'm a software engineering student
            from Kazakhstan. I'm passionate mostly about two things: coding and
            making music. While the first lets me turn my ideas into reality
            and, of course, feeds me, the latter covers the need to share my
            thoughts and worries with my listeners.
          </p>
          <p>
            I got into coding about 5 years ago by solving problems on
            Codeforces, and since then I was consistenly enhancing my skills in
            various fields. As for now, I have a decent expertise in website
            development, some experience in mobile app development, and average
            knowledge in Data Science.
          </p>
          <p>My tech stack for now:</p>
          <div className="flex justify-between">
            <ul className="flex flex-col gap-y-2">
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[#E50914]" />
                Next.js / React.js
              </li>
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[#E50914]" />
                Vue.js
              </li>
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[#E50914]" />
                Spring
              </li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[#E50914]" />
                Typescript/Javascript
              </li>
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[#E50914]" />
                Python
              </li>
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[#E50914]" />
                Java
              </li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[#E50914]" />
                Figma
              </li>
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[#E50914]" />
                Tailwind
              </li>
              <li className="skillsItem">
                <PaperAirplaneIcon className="w-3 h-3 text-[#E50914]" />
                Firebase
              </li>
            </ul>
          </div>
        </div>

        <div
          // style={{ border: "1px solid blue" }}
          className="relative min-w-[28rem] h-[20rem] border border-[gray] customShadow
          lg:h-[24rem] lg:w-[28rem]"
        >
          <Image
            src="/images/about.jpg"
            alt="Zhomart Zhetpisbekov"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

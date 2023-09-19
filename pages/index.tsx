import About from "@/components/about";
import Banner from "@/components/banner";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Loading from "@/components/loading";
import Projects from "@/components/projects";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const bannerRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  // const [loading, setLoading] = useState<Boolean>(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleClick = (target: string) => {
    let ref;

    switch (target) {
      case "banner":
        ref = bannerRef;
        break;
      case "about":
        ref = aboutRef;
        break;
      case "experience":
        ref = expRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      default:
        break;
    }

    if (ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full relative h-screen gradient">
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <>
        <Head>
          <title>Zhomart Zhetpisbekov</title>
          <meta
            name="description"
            content="Zhomart Zhetpisbekov's developer portfolio website, which highlights his professional skills, expertise, and projects."
          />
          <link rel="icon" href="/logo-icon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header handleClick={handleClick} />
        <main>
          <Banner ref={bannerRef} />
          <About ref={aboutRef} />
          <Experience ref={expRef} />
          <Projects ref={projectsRef} />
        </main>
      </>
      {/* )} */}
    </div>
  );
};

export default Home;

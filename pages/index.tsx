import About from "@/components/about";
import Banner from "@/components/banner";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Head from "next/head";
import { useRef } from "react";

const Home = () => {
  const bannerRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const handleClick = (target: string) => {
    let ref;

    switch (target) {
      case 'banner':
        ref = bannerRef;
        break;
      case 'about':
        ref = aboutRef;
        break;
      case 'experience':
        ref = expRef;
        break;
      case 'projects':
        ref = projectsRef;
        break;
      default:
        break;
    }

    if (ref) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative h-screen gradient">
      <Head>
        <title>Zhomart Zhetpisbekov</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header handleClick={handleClick} />
      <main>
        <Banner ref={bannerRef}/>
        <About ref={aboutRef}/>
        <Experience ref={expRef} />
        <Projects ref={projectsRef} />
      </main>
    </div>
  )
}

export default Home;
import About from "@/components/about";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Head from "next/head";

const Home = () => {
  return (
    <div className="relative h-screen gradient">
      <Head>
        <title>Zhomart Zhetpisbekov</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header />
      <main>
        <Banner />
        <About />
        {/* <Experience /> */}
        {/* <Projects /> */}
      </main>
    </div>
  )
}

export default Home;
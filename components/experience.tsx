import Image from "next/image";
import ExpWidget from "./molecules/exp-widget";

const Experience = () => {
  return (
    <section className="relative h-screen flex flex-col gap-y-10 py-10 px-0
    md:px-14">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          className="customBlur"
          src="/images/room-bw.jpg"
          alt="Lofi dark room"
          fill
          objectFit="cover"
        />
      </div>
      <h1 className="text-5xl text-[--redClr] px-5">Experience</h1>
      <div className="mx-auto">
        <ExpWidget />
      </div>
    </section>
  )
}

export default Experience;
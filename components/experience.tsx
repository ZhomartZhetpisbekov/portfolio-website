import Image from "next/image";
import ExpWidget from "./molecules/exp-widget";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Experience = forwardRef((props, ref) => {
  const expRef = useRef<HTMLElement>(null);

  // Expose the bannerRef to the parent component
  useImperativeHandle(ref, () => expRef.current);
  return (
    <section
      ref={expRef}
      className="w-full relative h-screen flex flex-col gap-y-10 py-10 px-0 scroll-mt-12
    md:px-24"
    >
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <Image
          className="customBlur"
          src="/images/room-bw.jpg"
          alt="Lofi dark room"
          fill
          objectFit="cover"
        />
      </div>
      <h1 className="text-5xl text-[--redClr] px-5 md:px-0 text-center">
        Experience
      </h1>
      <div className="mx-auto">
        <ExpWidget />
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;

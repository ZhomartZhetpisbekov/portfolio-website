import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Banner = forwardRef((props, ref) => {
  const bannerRef = useRef<HTMLElement>(null);

  // Expose the bannerRef to the parent component
  useImperativeHandle(ref, () => bannerRef.current);
  return (
    <section ref={bannerRef} className="h-screen">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          className="customBlur"
          src="/images/bridge-bw.jpg"
          alt="Bridge in evening"
          fill
          objectFit="cover"
        />
      </div>
      <div
        className="flex flex-col-reverse h-[43rem] justify-start gap-y-16 px-5
        lg:flex-row lg:justify-between lg:items-center lg:px-24 lg:gap-x-5" 
      >
        <div
          className="relative min-w-[20rem] h-[14rem] border border-[gray] customShadow
          lg:h-[20rem] lg:w-[36rem]"
        >
          <Image
            src="/images/eden-in-car.jpeg"
            alt="Man in car"
            fill
            objectFit="cover"
          />
        </div>
        <div
          // style={{ border: "1px solid yellow" }}
          className="flex flex-col gap-y-2"
        >
          <h3 className="">HI, MY NAME IS </h3>
          <h1 className="text-5xl">ZHOMART ZHETPISBEKOV</h1>
          <h1 className="">FRONTEND DEVELOPER / SOFTWARE ENGINEER</h1>
          <button className="bg-[var(--redClr)] border border-[gray] py-3 font-light customShadow text-white lg:max-w-md
          transition duration-[.3s] hover:bg-white hover:text-[--redClr]">
            CONTACT ME
          </button>
        </div>
      </div>
    </section>
  );
});

Banner.displayName = 'Banner'

export default Banner;

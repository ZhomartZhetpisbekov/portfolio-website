import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Banner = forwardRef((props, ref) => {
  const bannerRef = useRef<HTMLElement>(null);

  // Expose the bannerRef to the parent component
  useImperativeHandle(ref, () => bannerRef.current);
  return (
    <section ref={bannerRef} className="h-screen w-full">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          className="customBlur"
          src="/images/bridge-bw.jpg"
          alt="Bridge in evening"
          fill
          objectFit="cover"
        />
      </div>
      <div
        className="flex flex-col h-screen justify-start items-center gap-y-10 px-5 py-20
        lg:flex-row-reverse lg:justify-center lg:items-center lg:px-24 lg:gap-x-5"
      >
        <div className="lg:hidden flex flex-col gap-y-2 text-center">
          <h3 className="">HI, MY NAME IS </h3>
          <h1 className="text-5xl">ZHOMART ZHETPISBEKOV</h1>
        </div>
        <div
          className="relative w-[20rem] h-[20rem]
          "
        >
          <Image
            src="/images/me-moji.png"
            alt="Zhomart with laptop"
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-y-2 text-center">
          <h3 className="hidden lg:inline">HI, MY NAME IS </h3>
          <h1 className="hidden lg:inline text-5xl">ZHOMART ZHETPISBEKOV</h1>
          <h1 className="text-3xl text-[var(--redClr)] max-lg:bg-[#141414]/60 max-lg:customShadow">
            SOFTWARE ENGINEER
          </h1>
          <div className="flex gap-x-3 justify-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/zhomart-zhetpisbekov-a15b90235/"
            >
              <FontAwesomeIcon className="socialsLink" icon={faLinkedin} />
            </a>
            <a target="_blank" href="https://github.com/ZhomartZhetpisbekov">
              <FontAwesomeIcon className="socialsLink" icon={faGithub} />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/zhoma.doma?igshid=OGQ5ZDc2ODk2ZA=="
            >
              <FontAwesomeIcon className="socialsLink" icon={faInstagram} />
            </a>
            <a target="_blank" href="https://t.me/+77051291444">
              <FontAwesomeIcon className="socialsLink" icon={faTelegram} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Banner.displayName = "Banner";

export default Banner;

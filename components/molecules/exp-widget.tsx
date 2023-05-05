import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { experience } from "@/db/experience";
import { useEffect, useState } from "react";

interface Job {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string[];
}

const ExpWidget = () => {
  const [activeJob, setActiveJob] = useState<Job>(experience[0]);

  const toggleJob = (job: Job) => {
    setActiveJob(job);
  };

  return (
    <article
      className="flex flex-col gap-y-5 md:flex-row md:justify-center md:gap-x-4 md:py-20 md:px-0
    bg-[#141414]/80 px-5"
    >
      <ul className="w-full flex md:flex-col md:max-w-[10rem]">
        {experience.map((item) => (
          <li
            key={item.id}
            className={activeJob == item ? "activeLink expLink" : "expLink"}
            onClick={() => toggleJob(item)}
          >
            {item.company}
          </li>
        ))}
      </ul>
      <div className="flex flex-col py-5 gap-y-3 md:max-w-[30rem] md:py-0">
        <h1 className="font-bold text-xl">
          {`${activeJob.position} `}
          <span className="text-[--redClr]">{`@ ${activeJob.company}`}</span>
        </h1>
        <p className="text-[--grayClr] text-sm">{activeJob.period}</p>
        <ul className="flex flex-col gap-y-3">
          {activeJob.description.map((item) => (
            <li
              key={item}
              className="relative flex items-start gap-x-2 "
            >
              <PaperAirplaneIcon className="absolute top-0 left 0 w-4 h-4 mt-1" />
              <p className="mx-8 left-5">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExpWidget;

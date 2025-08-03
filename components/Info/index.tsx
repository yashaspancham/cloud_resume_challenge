"use client";
import Contacts from "@/components/Contacts";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { countVisitors } from "@/API";

const Info = () => {
  gsap.registerPlugin(ScrollTrigger);
  let timeline = gsap.timeline();
  const infoRef = useRef(null);
  useEffect(() => {
    const xValue = window.innerWidth < 820 ? 0 : -100;
    if (timeline.current) timeline.current.kill();
    timeline.current = gsap.timeline();
    timeline.current.to(infoRef.current, {
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top top",
        toggleActions: "play pause reverse reset",
        scrub: 1,
      },
      x: xValue,
      opacity: 0,
    });
    // countVisitors();
  }, []);
  return (
    <div className="flex flex-col" ref={infoRef}>
      <div className="xl:text-4xl text-xl">
        <p className="">Hi!!!, I am </p>
        <p className="xl:text-[150px] text-5xl">Yashas</p>
        <p className="xl:w-1/2 text-wrap">
          A Software Engineer focused on building scalable web, mobile,cloud
          systems. Skilled in full-stack development and exploring cloud
          technologies through projects and AWS certifications.
        </p>
      </div>
      <Contacts />
      <button className="self-start ml-5 mt-5 bg-[#191919] p-2 xl:p-4 rounded-xl hover:bg-[#262626]">
        <a
          className=""
          href="http://www.projectyreflections.com/Yashas's%20Resume.pdf"
          target="_blank"
        >
          My Resume
        </a>
      </button>
    </div>
  );
};

export default Info;

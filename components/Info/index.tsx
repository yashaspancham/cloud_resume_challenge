"use client";
import Contacts from "@/components/Contacts";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { countVisitors } from "@/API";
import ContactMeButton from "../ContactMeButton";
import ResumeButton from "../ResumeButton";

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
    countVisitors();
  }, []);
  return (
    <div className="flex flex-col" ref={infoRef}>
      <div className="xl:text-4xl text-xl">
        <p className="">Hi! I am </p>
        <p className="xl:text-[150px] text-5xl">Yashas</p>
        <p className="xl:w-1/2 text-wrap">
          I have a year of <a href="#work-experience" className="text-[#9700ff] underline">experience</a> as a web dev, have built multiple{" "} 
          <a href="#personal-projects" className="text-[#f4fe6c] underline">personal projects</a>{" "}
          and hold 2 AWS {" "}<a href="#certifications-and-achievements" className="text-[#f3ff4d] underline">certifications</a>(AWS SAA and AWS CCP).
        </p>
      </div>
      <Contacts />
      <div className="flex gap-2 items-center mt-4">
        <ResumeButton/>
        <ContactMeButton />
      </div>
    </div>
  );
};

export default Info;

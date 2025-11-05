"use client";
import Contacts from "@/components/Contacts";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { countVisitors } from "@/API";
import ContactMeButton from "../ContactMeButton";

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
          A Software Engineer focused on building web and cloud systems. Skilled
          in full-stack development and cloud systems.
        </p>
      </div>
      <Contacts />
      <div className="flex gap-2 items-center mt-4">
        <button className="self-start  bg-[#191919] hover:bg-[#262626] p-2 xl:p-3 rounded-xl">
          <a
            className=""
            href="https://drive.google.com/file/d/1-qrKkM7L-ExmNCxVoHsFMe0OTEzGPJcx/view"
            target="_blank"
          >
            My Resume
          </a>
        </button>
        <ContactMeButton />
      </div>
    </div>
  );
};

export default Info;

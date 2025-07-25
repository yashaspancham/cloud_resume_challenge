"use client";
import Contacts from "@/components/Contacts";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Info = () => {
  gsap.registerPlugin(ScrollTrigger);
  let timeline = gsap.timeline();
  const infoRef = useRef(null);
  useEffect(() => {
    timeline.to(infoRef.current, {
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top top",
        toggleActions: "play pause reverse reset",
        scrub: 1,
      },
      x: -100,
      opacity: 0,
    });
  }, []);
  return (
    <div className="flex flex-col" ref={infoRef}>
      <div className="text-4xl">
        <p className="">Hi!!!, I am </p>
        <p className="text-[150px]">Yashas</p>
        <p>A Software Engineer focused on building</p>
        <p>scalable web, mobile,cloud systems.</p>
        <p>Skilled in full-stack development and</p>
        <p>exploring cloud technologies</p>
        <p>through projects and AWS certifications.</p>
      </div>
      <Contacts />
    </div>
  );
};

export default Info;

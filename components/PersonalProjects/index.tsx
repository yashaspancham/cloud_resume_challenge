"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import ContactMeButton from "../ContactMeButton";
import { projects } from "../../projectsData/personalProjects";
import PersonalProjectCard from "../PersonalProjectCard";
import { PersonalProjectCardPropsT } from "../../utils/types";


const PersonalProjects = () => {
  const router=useRouter();
  const PersonalProjectsRef = useRef(null);
  let timeline = gsap.timeline();
  useEffect(() => {
    const context = gsap.context(() => {
      const xValue = window.innerWidth < 820 ? 0 : -100;
      timeline.from(PersonalProjectsRef.current, {
        scrollTrigger: {
          trigger: PersonalProjectsRef.current,
          start: "top center",
          end: "+=100",
          toggleActions: "play pause reverse reset",
          scrub: true,
        },
        x: xValue,
        opacity: 0,
      });
    });
    return () => context.revert();
  }, []);

  return (
    <div className="w-full 2xl:w-[70%] xl:w-[60%]">
      <div className="flex gap-7 flex-col" ref={PersonalProjectsRef}>
        <p className="text-4xl">Personal Projects</p>
        <div className="flex flex-wrap  max-lg:justify-center gap-5">
          {projects.map(
            (item: PersonalProjectCardPropsT) =>
              item.id > 4 && <PersonalProjectCard {...item} key={item.id} />
          )}
        </div>
        <div className="flex gap-2 items-center mt-5 max-lg:justify-center justify-start">
          <ContactMeButton extraCSS="w-fit h-fit" />
          <button 
          onClick={()=>router.push('/projects')}
          className="text-white p-2.5 bg-[#0d0d0d] h-fit w-fit rounded hover:cursor-pointer">
            More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;

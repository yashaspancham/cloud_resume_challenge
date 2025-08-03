"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const PersonalProjects = () => {
  let timeline = gsap.timeline();
  const PersonalProjectsRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
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
  }, []);

  const projects = [
    {
      title: "Reflections",
      name: "reflections",
      description:
        "A digital diary application for capturing daily thoughts and memories.",
    },
    {
      title: "Cloud Resume Challenge",
      name: "cloud-resume-challenge",
      description:
        "A project to build a resume website hosted on AWS, showcasing cloud and Animation skills.",
    },
  ];

  return (
    <div
      className="flex gap-7 flex-col w-full xl:w-[50%]"
      ref={PersonalProjectsRef}
    >
      <p className="text-4xl">Personal Projects</p>

      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {projects.map((item, index) => (
          <div
            className="w-46 h-[250px] flex flex-col gap-3"
            key={index}
            onClick={() =>
              router.push(`/project-details?project-name=${item.name}`)
            }
          >
            <p className="text-2xl">{item.title}</p>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;

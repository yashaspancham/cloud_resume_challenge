"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PersonalProjects = () => {
  let timeline = gsap.timeline();
  const PersonalProjectsRef = useRef(null);
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
  return (
    <div className="flex gap-7 flex-col" ref={PersonalProjectsRef}>
      <p className="text-4xl underline cursor-pointer italic">
        <a href="http://www.projectyreflections.com" target="_blank">
          Personal Projects
        </a>
      </p>

      <div className="lg:w-[50%]">
        <p className="text-2xl">Reflections</p>
        <ul className="list-disc marker:text-white ml-5">
          <li>
            A simple and secure digital diary app to capture your thoughts,
            memories, and daily reflections.
          </li>
          <li>
            Implemented CI/CD with GitHub Actions, front-end with React-Native,
            back-end with Express js, database with Postgresql and hosted it on
            AWS EC2 instances.
          </li>
          <li>
            Github-{" "}
            <a
              href="https://github.com/yashaspancham/project_y_app"
              target="_blank"
              className="underline"
            >
              Front-end
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/yashaspancham/project_y_backend"
              target="_blank"
              className="underline"
            >
              Back-end
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalProjects;

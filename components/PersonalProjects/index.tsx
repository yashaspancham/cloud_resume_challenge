"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PersonalProjects = () => {
  let timeline = gsap.timeline();
  const PersonalProjectsRef = useRef(null);
  useEffect(() => {
    timeline.from(PersonalProjectsRef.current, {
      scrollTrigger: {
        trigger: PersonalProjectsRef.current,
        start: "center top",
        end: "bottom bottom",
        // markers: true,
        toggleActions: "play pause reverse reset",
        scrub: true,
      },
      x: -200,
      opacity: 0,
    });
  }, []);
  return (
    <div className="flex gap-7 flex-col" ref={PersonalProjectsRef}>
      <p className="text-4xl">Personal Projects</p>

      <div className="lg:w-[50%]">
        <p className="text-2xl">Reflections</p>
        <ul className="list-disc marker:text-white ml-5">
          <li>
            A simple and secure digital diary app to capture your thoughts,
            memories, and daily reflections. Implemented CI/CD with GitHub
            Actions, front-end with React-Native, back-end with Express js,
            database with Postgresql and hosted it on AWS EC2 instances. Github-
            https://github.com/yashaspancham/project_y_app and
            https://github.com/yashaspancham/project_y_backend
          </li>
          <li>
            Implemented CI/CD with GitHub Actions, front-end with React-Native,
            back-end with Express js, database with Postgresql and hosted it on
            AWS EC2 instances.
          </li>
          <li>
            Github- https://github.com/yashaspancham/project_y_app and
            https://github.com/yashaspancham/project_y_backend
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalProjects;

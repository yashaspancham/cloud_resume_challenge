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
      <p className="text-4xl">
        Personal Projects
      </p>

      <div className="lg:w-[50%]">
        <p className="text-2xl  underline cursor-pointer italic">
          <a href="http://www.projectyreflections.com" target="_blank">
            Reflections
          </a>
        </p>
        <ul className="list-disc marker:text-white ml-5">
          <li>
            Reflections is a thoughtfully crafted digital diary application
            built to offer users a seamless and secure space to capture their
            daily thoughts, memories, and reflections. Whether it’s journaling a
            personal insight or tracking everyday progress, Reflections provides
            a calming, minimalist interface that prioritizes both user
            experience and data privacy.
          </li>
          <li>
            On the technical side, the app is built with a modern and scalable
            architecture. The frontend is developed using React Native with
            TypeScript and styled using React Native Paper and Expo for a
            consistent cross-platform experience. The backend is powered by
            Express.js, managing business logic and secure API interactions.
            PostgreSQL serves as the relational database, ensuring structured
            and reliable data storage.
          </li>
          <li>
            To streamline development and deployment, I implemented CI/CD
            pipelines using GitHub Actions, enabling automated builds and
            deployments on each code push. The app is hosted on AWS EC2, with
            static content managed via Amazon S3, domain routing handled through
            Amazon Route 53, and NGINX used as a reverse proxy
          </li>
          <li>
            This project demonstrates my ability to take a product from concept
            to deployment — covering design, development, DevOps, and cloud
            hosting. It reflects my growing expertise in building cloud-ready
            applications and integrating modern engineering practices.
          </li>
          <li>
            Check it out on Github-{" "}
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

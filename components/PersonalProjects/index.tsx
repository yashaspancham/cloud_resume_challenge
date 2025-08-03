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
    <div
      className="flex gap-7 flex-col w-full xl:w-[50%]"
      ref={PersonalProjectsRef}
    >
      <p className="text-4xl">Personal Projects</p>

      <div>
        <p className="text-2xl  underline cursor-pointer italic">
          <a href="http://www.projectyreflections.com" target="_blank">
            Reflections
          </a>
        </p>
        <ul className="list-disc marker:text-white ml-5">
          <li>
            Reflections is a thoughtfully crafted{" "}
            <span className="text-[#9700ff]">digital diary application</span>
            built to offer users a seamless and secure space to capture their
            daily thoughts, memories, and reflections. Whether it’s journaling a
            personal insight or tracking everyday progress, Reflections provides
            a calming, minimalist interface that prioritizes both user
            experience and data privacy.
          </li>
          <li>
            On the technical side, the app is built with a modern and scalable
            architecture. The frontend is developed using{" "}
            <span className="text-[#9700ff]">React Native</span> with
            <span className="text-[#9700ff]">TypeScript</span> and styled using{" "}
            <span className="text-[#9700ff]">React Native Paper</span> and{" "}
            <span className="text-[#9700ff]">Expo</span> for a consistent
            cross-platform experience. The backend is powered by
            <span className="text-[#9700ff]">Express.js</span>, managing
            business logic and secure API interactions.
            <span className="text-[#9700ff]">PostgreSQL</span> serves as the
            relational database, ensuring structured and reliable data storage.
          </li>
          <li>
            To streamline development and deployment, I implemented{" "}
            <span className="text-[#9700ff]">CI/CD</span>
            pipelines using{" "}
            <span className="text-[#9700ff]">GitHub Actions</span>, enabling
            automated builds and deployments on each code push. The app is
            hosted on <span className="text-[#9700ff]">AWS EC2</span>, with
            static content managed via{" "}
            <span className="text-[#9700ff]">Amazon S3</span>, domain routing
            handled through
            <span className="text-[#9700ff]">Amazon Route 53</span>, and{" "}
            <span className="text-[#9700ff]">NGINX</span> used as a reverse
            proxy
          </li>
          <li>
            This project demonstrates my ability to take a product from concept
            to deployment — covering{" "}
            <span className="text-[#9700ff]">design</span>,{" "}
            <span className="text-[#9700ff]">development</span>,{" "}
            <span className="text-[#9700ff]">DevOps</span>, and{" "}
            <span className="text-[#9700ff]">cloud hosting</span>. It reflects
            my growing expertise in building cloud-ready applications and
            integrating modern engineering practices.
          </li>
          <li>
            Check it out on Github-{" "}
            <a
              href="https://github.com/yashaspancham/project_y_app"
              target="_blank"
              className="underline text-[#9700ff]"
            >
              Front-end
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/yashaspancham/project_y_backend"
              target="_blank"
              className="underline text-[#9700ff]"
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

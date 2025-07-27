"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const WorkExperience = () => {
  let timeline = gsap.timeline();
  const WorkExperienceRef = useRef(null);
  useEffect(() => {
    const xValue = window.innerWidth < 820 ? 0 : -100;
    timeline.from(WorkExperienceRef.current, {
      scrollTrigger: {
        trigger: WorkExperienceRef.current,
        start: "top center",
        end: "+=200",
        toggleActions: "play pause reverse reset",
        scrub: true,
      },
      x: xValue,
      opacity: 0,
    });
  }, []);
  return (
    <div className="flex gap-7 flex-col" ref={WorkExperienceRef}>
      <p className="text-3xl md:text-4xl">Work Experience</p>
      <div className="flex gap-5 items-start max-md:flex-col">
        <img src={"/assets/logo/CodeZyngLogo.svg"} alt="codezyng Logo" />
        <div>
          <p className="text-xl md:text-2xl">Software Engineer</p>
          <p className="text-sm">June 2024-March 2025 @Codezyng </p>
          <ul className="list-disc marker:text-white ml-5 xl:w-[50%] text-md md:text-lg">
            <li className=" wrap">
              Implemented responsive, scalable, and optimized web apps for
              business websites across various domains like healthcare, IT, and
              e-commerce using Next.js, Angular, and Firebase, reducing page
              load time by 30% for improved user experience.
            </li>
            <li className=" wrap">
              Built e-commerce websites and dashboards with scalable, reusable
              components, enhancing maintainability, performance, and
              development speed by 20%.
            </li>
            <li className=" wrap">
              Collaborated with designers, backend teams, and customers to
              ensure seamless integration of RESTful APIs, aligning with
              business needs and delivering user-friendly interfaces.
            </li>
            <li className=" wrap">
              Enhanced website SEO strategies with business analysts, improving
              visibility and search engine rankings, leading to a 15% increase
              in organic traffic.
            </li>
            <li className=" wrap">
              Leveraged technologies like Redux, Material UI, Tailwind CSS,
              Azure Blob Storage, and Strapi for efficient frontend development.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-5 items-start max-md:flex-col">
        <img src={"/assets/logo/CodeZyngLogo.svg"} alt="codezyng Logo" />
        <div>
          <p className="text-xl md:text-2xl">Intern Software Engineer</p>
          <p className="text-sm">Jan 2024-May 2025 @Codezyng</p>
          <ul className="list-disc marker:text-white ml-5 xl:w-[50%] text-md md:text-lg">
            <li className=" wrap">
              Contributed to the development of a comprehensive CRM solution for
              a gym management system, collaborating closely with designers and
              backend engineers to deliver an intuitive and user-centric
              experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

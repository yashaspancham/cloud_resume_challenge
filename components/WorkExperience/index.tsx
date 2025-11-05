"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ContactMeButton from "../ContactMeButton";


const WorkExperience = () => {
  let timeline = gsap.timeline();
  const WorkExperienceRef = useRef(null);
  useEffect(() => {
    const gaspCtontext = gsap.context(() => {
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
    });
    return () => gaspCtontext.revert();
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
              Achieved a 15% increase in organic traffic by enhancing website
              <b> SEO</b> strategies in
              collaboration with business analysts, improving visibility and
              search engine rankings.
            </li>
            <li className=" wrap">
              Achieved a 20% improvement in maintainability, performance, and
              development speed by writing{" "}
              <b>clean, reusable code</b> and
              leveraging AI tools like{" "}
              <b>Cursor and GitHub Copilot</b>.
            </li>
            <li className=" wrap">
              Implemented scalable, responsive and optimized business websites,
              landing pages, e-commerce websites and dashboards.{" "}
            </li>
            <li>
              Collaborated with designers and users to deliver exactly what the
              client wanted, ensuring user-friendly interfaces and meeting
              business requirements.
            </li>
            <li className="wrap">
              Demonstrated accelerated project approvals and feasibility by
              developing multiple Proof of Concepts (POCs) and Minimum Viable
              Products (MVPs) for potential clients, leveraging AI tools like{" "}
              <b>Cursor</b> and{" "}
              <b>Lovable</b>.
            </li>
            <li className=" wrap">
              Used technologies like{" "}
              <b>Axios</b>,{" "}
              <b>Redux</b>,{" "}
              <b>Material UI</b>,{" "}
              <b>Tailwind CSS</b>,{" "}
              <b>Azure Blob Storage</b>,{" "}
              <b>Ghost CMS</b>, and{" "}
              <b>Strapi</b> for development.
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
              Contributed to the development of a comprehensive{" "}
              <b>CRM</b> solution for a gym
              management system, collaborating closely with designers and
              backend engineers to deliver an intuitive and user-centric
              experience.
            </li>
          </ul>
        </div>
      </div>
      <ContactMeButton extraCSS="w-fit"/>
    </div>
  );
};

export default WorkExperience;

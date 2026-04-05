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
    <div className="flex gap-7 flex-col xl:w-[50%]" ref={WorkExperienceRef}>
      <p className="text-3xl md:text-4xl">Work Experience</p>
      <div className="flex gap-5 items-start max-md:flex-col bg-[#0d0d0d] rounded-lg hover:shadow-[0_2px_2.5px_0_rgba(255,255,255,0.3)] p-5">
        <img src={"/assets/logo/marelli-logo.jpeg"} alt="Marelli Logo" />
        <div>
          <p className="text-xl md:text-2xl">
            Software Automation & Testing Apprentice
          </p>
          <p className="text-sm">March 2026-Present @Marelli</p>
          <ul className="list-disc marker:text-white ml-5 text-md md:text-lg">
            <li className=" wrap">
              Working on software testing for automotive <b>TCU</b> (Telematics Control
              Unit) systems. Responsibilities include <b>firmware flashing</b> and
              monitoring device power consumption during sleep states.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-5 items-start max-md:flex-col bg-[#0d0d0d] rounded-lg hover:shadow-[0_2px_2.5px_0_rgba(255,255,255,0.3)] p-5">
        <img src={"/assets/logo/CodeZyngLogo.svg"} alt="codezyng Logo" />
        <div>
          <p className="text-xl md:text-2xl">Software Engineer</p>
          <p className="text-sm">June 2024-March 2025 @Codezyng </p>
          <ul className="list-disc marker:text-white ml-5  text-md md:text-lg">
            <li className=" wrap">
              <b>Dockerized</b> multiple applications for deployment and hosting
              on <b>AWS</b>
            </li>
            <li>
              Built and showcased <b>MVPs</b> and <b>POCs</b> to validate
              product feasibility and gather client feedback
            </li>
            <li className="wrap">
              Integrated <b>RESTful APIs</b> across multiple client projects in
              healthcare, IT, and e-commerce domains
            </li>
            <li className=" wrap">
              Achieved 15% increase in organic traffic through <b>SEO</b>{" "}
              optimization in collaboration with business analysts
            </li>
            <li className=" wrap">
              Built e-commerce platform from scratch with <b>Next.js</b>,{" "}
              <b>TypeScript</b>,<b>TailwindCSS</b>, and <b>Strapi CMS</b>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-5 items-start max-md:flex-col bg-[#0d0d0d] rounded-lg hover:shadow-[0_2px_2.5px_0_rgba(255,255,255,0.3)] p-5">
        <img src={"/assets/logo/CodeZyngLogo.svg"} alt="codezyng Logo" />
        <div>
          <p className="text-xl md:text-2xl">Intern Software Engineer</p>
          <p className="text-sm">Jan 2024-May 2024 @Codezyng</p>
          <ul className="list-disc marker:text-white ml-5 text-md md:text-lg">
            <li className=" wrap">
              Contributed to the development of a comprehensive <b>CRM</b>{" "}
              solution for a gym management system, collaborating closely with
              designers and backend engineers to deliver an intuitive and
              user-centric experience.
            </li>
          </ul>
        </div>
      </div>
      <ContactMeButton extraCSS="w-fit" />
    </div>
  );
};

export default WorkExperience;

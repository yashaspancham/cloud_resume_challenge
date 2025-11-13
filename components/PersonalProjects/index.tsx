"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import ContactMeButton from "../ContactMeButton";

const PersonalProjects = () => {
  let timeline = gsap.timeline();
  const PersonalProjectsRef = useRef(null);
  const router = useRouter();

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

  const projects = [
    //limit techStack to 4 items to maintain design consistency
    {
      imageSrc: "/assets/thumbnail/genericSAASlanding page.png",
      title: "Generic Landing Page",
      name: "",
      docUrl:
        "https://medium.com/@yashaspancham/generic-saas-landing-page-3dbb3906340a",
      description: "A Generic Landing Page For a SaaS company. Converting design to code",
      techStack: ["next.js", "TailwindCSS", "Figma"],
      github:
        "https://github.com/yashaspancham/generic-landing-page-for-saas-company",
    },
    {
      imageSrc: "/preview.png",
      title: "Cloud Resume Challenge",
      name: "cloud-resume-challenge",
      description:
        "A project to build a resume website hosted on AWS, showcasing cloud and Animation skills.",
      techStack: ["Next.js", "3.js", "GSAP", "AWS S3"],
      github: "https://github.com/yashaspancham/cloud_resume_challenge",
    },
    {
      imageSrc: "/assets/thumbnail/ETL.png",
      title: "Simple ETL",
      name: "simple-ETL",
      description:
        "Data from .csv in S3 to a Database in RDS, using AWS Lambda and Python.",
      techStack: ["Python", "AWS S3", "AWS Lambda", "AWS RDS"],
      github: "https://github.com/yashaspancham/simple-ETL",
    },
    {
      imageSrc: "/assets/thumbnail/Reflection.jpeg",
      title: "Reflections",
      name: "reflections",
      description:
        "A digital diary application for capturing daily thoughts and memories.",
      techStack: ["React Native", "Expo", "Node.js", "Express.js"],
      github: "https://github.com/yashaspancham/reflections_fe",
    },
  ];

  return (
    <div className="w-full xl:w-[60%]">
      <div className="flex gap-7 flex-col" ref={PersonalProjectsRef}>
        <p className="text-4xl">Personal Projects</p>

        <div className="flex flex-wrap  max-lg:justify-center gap-5">
          {projects.map((item, index) => (
            <div
              className="bg-[#0d0d0d] w-[300px] h-[400px] flex flex-col gap-3 rounded-xl hover:shadow-[-1px_1px_5px_0px_rgba(255,255,255,0.75)] border-[0.5px] border-[#1a1a1a]"
              key={index}
            >
              <img
                src={
                  item.imageSrc && item.imageSrc !== ""
                    ? item.imageSrc
                    : "/assets/thumbnail/defaultThumbnail.png"
                }
                className="object-cover w-[300px] h-[170px] rounded-tr-xl rounded-tl-xl"
              />
              <div className="flex flex-col gap-3 p-2.5">
                <p className="text-2xl line-clamp-1">{item.title}</p>
                <p className="text-sm line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap">
                  {item.techStack.map((tech, techIndex) => (
                    <span
                      className="text-xs p-1 border-[0.5px] border-white rounded-md mr-2 mb-2"
                      key={techIndex}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-[270px] flex gap-2 justify-center">
                  <a href={item.github} target="_blank">
                    <button className="bg-neutral-900 py-2 px-5 rounded-md flex gap-2 items-center hover:cursor-pointer">
                      <img
                        src={"/assets/logo/githubWhite.png"}
                        alt="github white logo"
                        className="h-5"
                      />
                      <p>Code</p>
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      if (item.name !== "") {
                        router.push(
                          `/project-details?project-name=${item.name}`
                        );
                      } else {
                        window.open(
                          "https://medium.com/@yashaspancham/generic-saas-landing-page-3dbb3906340a",
                          "_blank"
                        );
                      }
                    }}
                    className="bg-[#b5c13c] py-2 px-5 rounded-md flex gap-2 items-center hover:cursor-pointer"
                  >
                    <FaExternalLinkAlt />
                    <p>Docs</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ContactMeButton extraCSS="w-fit h-fit mt-5" />
      </div>
    </div>
  );
};

export default PersonalProjects;

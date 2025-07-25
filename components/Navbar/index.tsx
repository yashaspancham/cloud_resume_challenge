"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navOption1Ref1 = useRef(null);
  const navOption1Ref2 = useRef(null);
  const navOption1Ref3 = useRef(null);
  const navOption1Ref4 = useRef(null);
  const navOption1Ref5 = useRef(null);
  let timeline = gsap.timeline();
  useEffect(() => {
    timeline.from(navOption1Ref1.current, {
      y: -100,
      duration: 0.5,
      ease: "elastic.out",
    });
    timeline.from(navOption1Ref2.current, {
      y: -100,
      duration: 0.75,
      ease: "elastic.out",
    });
    timeline.from(navOption1Ref3.current, {
      y: -100,
      duration: 1,
      ease: "elastic.out",
    });
    timeline.from(navOption1Ref4.current, {
      y: -100,
      duration: 1.25,
      ease: "elastic.out",
    });
    timeline.from(navOption1Ref5.current, {
      y: -100,
      duration: 1.5,
      ease: "elastic.out",
    });
  }, []);

  return (
    <div className="flex h-20 items-center w-full px-20 justify-between">
      <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent w-fit text-2xl">
        Yashas
      </div>
      <div className="flex gap-10 text-white w-fit text-2xl">
        <div ref={navOption1Ref1}>
          <a href="#tech-stack">Tech Stack</a>
        </div>
        <div ref={navOption1Ref2}>
          <a href="#work-experience">Work Experience</a>
        </div>
        <div ref={navOption1Ref3}>
          <a href="#certifications-and-achievements">
            Certifications And Achievements
          </a>
        </div>
        <div ref={navOption1Ref4}>
          <a href="#personal-projects">Personal Projects</a>
        </div>
        <div ref={navOption1Ref5}>
          <a href="#contact-me">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

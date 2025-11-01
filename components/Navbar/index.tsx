"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [loaded, setLoaded] = useState(false);
  const [navPageBool, setNavPageBool] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const navOption1Ref1 = useRef(null);
  const navOption1Ref2 = useRef(null);
  const navOption1Ref3 = useRef(null);
  const navOption1Ref4 = useRef(null);
  const navOption1Ref5 = useRef(null);
  const pathname = usePathname();
  let timeline = gsap.timeline();

  const handleBurgerClick = () => {
    setNavPageBool((prev) => !prev);
    if (!navPageBool) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    setLoaded(true);
    timeline.from(navOption1Ref1.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "elastic.out",
    });
    timeline.from(navOption1Ref2.current, {
      y: -100,
      opacity: 0,
      duration: 0.75,
      ease: "elastic.out",
    });
    timeline.from(navOption1Ref3.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "elastic.out",
    });
    timeline.from(navOption1Ref4.current, {
      y: -100,
      opacity: 0,
      duration: 1.25,
      ease: "elastic.out",
    });
    timeline.from(navOption1Ref5.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out",
    });
    if (pathname === "/") {
      setVisibility(true);
    }
  }, [loaded]);

  return (
    visibility && (
      <div
        className={`flex bg-black text-white  w-full p-1 sm:px-3 md:px-5 md:px-20 justify-between pt-10 ${
          navPageBool
            ? "bg-[black] top-0 absolute z-3 h-full"
            : "h-20 items-start"
        }`}
      >
        <div className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent w-fit text-2xl mt-1">
          Yashas
        </div>
        {loaded && (
          <div
            onClick={() => {
              document.body.style.overflow = "";
              setNavPageBool(false);
            }}
            className={`flex gap-10 text-white w-fit text-xl  ${
              navPageBool ? "flex-col justify-center" : "max-xl:hidden"
            }`}
          >
            <div ref={navOption1Ref1}>
              <a href="#hi" className="xl:hover:text-[#fe0100]">
                Hi
              </a>
            </div>
            <div ref={navOption1Ref1}>
              <a href="#tech-stack" className="xl:hover:text-[#ff6900]">
                Tech Stack
              </a>
            </div>
            <div ref={navOption1Ref2}>
              <a href="#personal-projects" className="xl:hover:text-[#f4fe6c]">
                Personal Projects
              </a>
            </div>            
            <div ref={navOption1Ref3}>
              <a
                href="#certifications-and-achievements"
                className="xl:hover:text-[#f3ff4d]"
              >
                Certifications And Achievements
              </a>
            </div>
            <div ref={navOption1Ref4}>
              <a href="#work-experience" className="xl:hover:text-[#9700ff]">
                Work Experience
              </a>
            </div>

            <div ref={navOption1Ref5}>
              <a href="#contact-me" className="xl:hover:text-[#5f00ff]">
                Contact Me
              </a>
            </div>
          </div>
        )}
        <button
          className="flex flex-col gap-2 cursor-pointer xl:hidden"
          onClick={() => {
            handleBurgerClick();
          }}
        >
          {navPageBool ? (
            <div className="">
              <p className="rotate-45 border-b-1 border-white w-10" />
              <p className="rotate-135 border-b-1 border-white w-10" />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="border-b-1 border-white w-10" />
              <p className="border-b-1 border-white w-10" />
              <p className="border-b-1 border-white w-10" />
              {/* <p className="border-b-1 border-white w-10" /> */}
            </div>
          )}
        </button>
      </div>
    )
  );
};

export default Navbar;

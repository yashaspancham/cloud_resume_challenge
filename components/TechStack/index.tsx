"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ContactMeButton from "../ContactMeButton";
import { techLogos, techStackCategories } from "@/projectsData/techStackData";

const TechStack = () => {
  const TechStackRef = useRef(null);
  const [catagory, setCatagory] = React.useState<string>("All");

  useEffect(() => {
    const xValue = window.innerWidth < 820 ? 0 : 100;

    const ctx = gsap.context(() => {
      gsap.from(TechStackRef.current, {
        scrollTrigger: {
          trigger: TechStackRef.current,
          start: "top center",
          end: "+=200",
          toggleActions: "play pause reverse reset",
          scrub: 1,
        },
        x: xValue,
        opacity: 0,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex flex-col justify-end xl:max-w-[50%]"
      ref={TechStackRef}
    >
      <p className="text-3xl md:text-4xl">Tech Stack</p>
      <div className="flex flex-wrap gap-2 py-5 max-sm:justify-center">
        {techStackCategories.map((item, index) => (
          <button
            onClick={() => setCatagory(item)}
            className="hover:cursor-pointer"
            key={index}
          >
            <p
              className={`${
                item === catagory ? "bg-[#ff6900]" : "bg-[#0d0d0d]"
              } p-3 rounded text-xl`}
            >
              {item}
            </p>
          </button>
        ))}
      </div>
      <div className="flex gap-5 mt-7 flex-wrap max-lg:justify-center">
        {techLogos.map(
          (logo, idx) =>
            (catagory === "All" ? true : logo.catagory.includes(catagory)) && (
              <div
                key={idx}
                className="relative group flex flex-col items-center gap-1"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="md:w-[80px] w-[60px]"
                />
                <p className="absolute hidden group-hover:block bg-black text-center text-white text-sm mt-6 px-2 py-1 rounded">
                  {logo.techName}
                </p>
                <p className="lg:hidden text-xs text-white">{logo.techName}</p>
              </div>
            )
        )}
      </div>
      <ContactMeButton extraCSS="w-fit mt-5" />
    </div>
  );
};

export default TechStack;

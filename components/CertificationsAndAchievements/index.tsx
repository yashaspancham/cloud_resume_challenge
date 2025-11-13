"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ContactMeButton from "../ContactMeButton";

const CertificationsAndAchievements = () => {
  let timeline = gsap.timeline();
  const CertificationsAndAchievementsRef = useRef(null);
  useEffect(() => {
    const gastContext = gsap.context(() => {
      const xValue = window.innerWidth < 820 ? 0 : 100;
      timeline.from(CertificationsAndAchievementsRef.current, {
        scrollTrigger: {
          trigger: CertificationsAndAchievementsRef.current,
          start: "top center",
          end: "+=200",
          toggleActions: "play pause reverse reset",
          scrub: true,
        },
        x: xValue,
        opacity: 0,
      });
    });
    return () => gastContext.revert();
  }, []);
  return (
    <div
      ref={CertificationsAndAchievementsRef}
      className="w-full xl:w-[50%] flex flex-col"
    >
      <div className="text-3xl md:text-4xl">
        Certifications and Achievements
      </div>

      {/* <div className="bg-[#111111] p-5 rounded-lg w-fit flex">
        <img
          src="/assets/logo/saa-badge.png"
          alt="AWS Solutions Architect logo"
          className="h-30"
        />
        <p className="text-sm">Certifications</p> 
        <div>
          <div className="w-[300px]">
            <p className="text-lg md:text-2xl break-words">
              AWS Certified Solutions Architect - Associate
            </p>
            <p className="text-sm">Amazon Web Servies</p>
          </div>

          <div>
            <p className="text-sm text-sm">ID:e50500b14f934279bf01c73e5e6ab1a7</p>
            <p>Issued on: Jan 2025</p>
            <p>Expires on: Jan 2028</p>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row gap-5 mt-7 lg:items-center bg-[#0d0d0d] rounded-lg hover:shadow-[0_2px_2.5px_0_rgba(255,255,255,0.3)] py-5 max-lg:px-5">
        <img
          src="/assets/logo/saa-badge.png"
          alt="AWS Solutions Architect logo"
          className="w-20 mx-5"
        />
        <div className="max-sm:px-3">
          <div className="text-xl md:text-2xl break-words">
            AWS Certified Solutions Architect - Associate
          </div>
          <p className="break-words">ID- e50500b14f934279bf01c73e5e6ab1a7</p>
          <p>Issued on: Jan 2025</p>
          <p>Expires on: Jan 2028</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-7 lg:items-center bg-[#0d0d0d] rounded-lg hover:shadow-[0_2px_2.5px_0_rgba(255,255,255,0.3)] py-5 max-lg:px-5">
        <img
          src="/assets/logo/clf-badge.png"
          alt="AWS Solutions Architect logo"
          className="w-20 mx-5"
        />
        <div className="max-sm:px-3">
          <p className="text-xl md:text-2xl break-words w-fit">
            AWS Certified Cloud Practitioner
          </p>
          <p className="break-words">ID- 7c943f8205004c48a30a69ef022d5011</p>
          <p>Issued on: Aug 2024</p>
          <p>Expires on: Jan 2028</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-7 lg:items-center bg-[#0d0d0d] rounded-lg hover:shadow-[0_2px_2.5px_0_rgba(255,255,255,0.3)] py-5 max-lg:px-5">
        <img
          src="/assets/logo/nmam_institute_of_technology_logo.jpeg"
          alt="NMAMIT logo"
          className="w-20 mx-5"
        />
        <div className="max-sm:px-3">
          <div className="text-xl md:text-2xl wrap">
            Bachelor of Engineering in Information Science And Technology
          </div>
          <p>from N.M.A.M. Institute Of Technology</p>
          <p>Issued on: July 2024</p>
        </div>
      </div>
      <ContactMeButton extraCSS="w-fit h-fit lg:ml-1 mt-5 block" />
    </div>
  );
};

export default CertificationsAndAchievements;

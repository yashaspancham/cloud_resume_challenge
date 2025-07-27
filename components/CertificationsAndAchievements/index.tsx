"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CertificationsAndAchievements = () => {
  let timeline = gsap.timeline();
  const CertificationsAndAchievementsRef = useRef(null);
  useEffect(() => {
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
  }, []);
  return (
    <div ref={CertificationsAndAchievementsRef}>
      <div className="text-3xl md:text-4xl">
        Certifications And Achievements
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-7 lg:items-center">
        <img
          src="/assets/logo/saa-badge.png"
          alt="AWS Solutions Architect logo"
          className="w-40"
        />
        <div>
          <div className="text-xl md:text-2xl break-words">
            AWS Certified Solutions Architect - Associate
          </div>
          <p>ID- e50500b14f934279bf01c73e5e6ab1a7</p>
          <p>Jan 2025 - Jan 2028</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-7 lg:items-center">
        <img
          src="/assets/logo/saa-badge.png"
          alt="AWS Solutions Architect logo"
          className="w-40"
        />
        <div>
          <p className="text-xl md:text-2xl break-words">
            AWS Certified Cloud Practitioner
          </p>
          <p>ID- 7c943f8205004c48a30a69ef022d5011</p>
          <p>Aug 2024 - Jan 2028</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-7 lg:items-center">
        <div className="w-40 flex justify-center items-center">
          <img
            src="/assets/logo/nmam_institute_of_technology_logo.jpeg"
            alt="NMAMIT logo"
            className="w-20"
          />
        </div>
        <div>
          <div className="text-xl md:text-2xl wrap">
            Bachelor of Engineering in Information Science And Technology
          </div>
          <p>from N.M.A.M. Institute Of Technology</p>
          <p>Oct 2020 - July 2024</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsAndAchievements;

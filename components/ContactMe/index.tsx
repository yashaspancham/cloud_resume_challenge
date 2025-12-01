"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Constants from "@/components/Contacts";
import ResumeButton from "../ResumeButton";

const ContactMe = () => {
  let timeline = gsap.timeline();
  const ContactMeRef = useRef(null);
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const xValue = window.innerWidth < 820 ? 0 : 100;
      timeline.from(ContactMeRef.current, {
        scrollTrigger: {
          trigger: ContactMeRef.current,
          start: "top center",
          end: "+=100",
          toggleActions: "play pause reverse reset",
          scrub: true,
        },
        x: xValue,
        opacity: 0,
      });
    });
    return () => gsapContext.revert();
  }, []);
  return (
    <div ref={ContactMeRef} className="w-fit">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <p className="text-lg md:mt-7 wrap">
        Have a project or opportunity in mind? Let’s connect, I’m open to work!
      </p>
      <div className="text-lg mt-2">
        <p>📞 +91 8073980836</p>
        <p>📧 yashaspancham@gmail.com</p>
      </div>
      <Constants />
      <ResumeButton extraCSS="mt-5"/>
    </div>
  );
};
export default ContactMe;

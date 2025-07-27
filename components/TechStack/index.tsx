"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TechStack = () => {
  let timeline = gsap.timeline();
  const TechStackRef = useRef(null);
  useEffect(() => {
    const xValue = window.innerWidth < 820 ? 0 : 100;
    timeline.from(TechStackRef.current, {
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
  }, []);
  return (
    <div className="flex flex-col justify-end xl:max-w-[50%]" ref={TechStackRef}>
      <p className="text-3xl md:text-4xl">Tech Stack</p>
      <div className="flex gap-5 mt-7 flex-wrap">
        <img src="/assets/logo/nextjs.png" alt="nextjs logo" width={40} />
        <img src="/assets/logo/react.png" alt="react logo" width={40} />
        <img
          src="/assets/logo/java-script-logo.png"
          alt="java-script logo"
          width={40}
        />
        <img
          src="/assets/logo/typescript.png"
          alt="typescript logo"
          width={40}
        />
        <img src="/assets/logo/html.png" alt="html logo" width={40} />
        <img src="/assets/logo/css.png" alt="css logo" width={40} />
        <img src="/assets/logo/gsap-logo.png" alt="GSAP logo" width={40} />
        <img src="/assets/logo/threejs-logo.png" alt="3.js logo" width={40} />
        <img
          src="/assets/logo/Simple Storage Service.png"
          alt="S3 logo"
          width={40}
        />
        <img src="/assets/logo/Route 53.png" alt="Route 53 logo" width={40} />
        <img src="/assets/logo/nodejs.png" alt="node logo" width={40} />
        <img src="/assets/logo/python-logo.png" alt="python logo" width={40} />
        <img src="/assets/logo/sql-server.png" alt="sql logo" width={40} />
        <img src="/assets/logo/EC2.png" alt="EC2 logo" width={40} />
        <img src="/assets/logo/tux.png" alt="linux logo" width={40} />
        <img src="/assets/logo/nginx.png" alt="nginx logo" width={40} />
        <img src="/assets/logo/github.png" alt="github logo" width={40} />
      </div>
    </div>
  );
};
export default TechStack;

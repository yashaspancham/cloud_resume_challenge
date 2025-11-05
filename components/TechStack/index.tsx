"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ContactMeButton from "../ContactMeButton";

const techLogos = [
  { techName: "Next.js", src: "/assets/logo/nextjs.png", alt: "nextjs logo" },
  { techName: "React", src: "/assets/logo/react.png", alt: "react logo" },
  {
    techName: "Javascript",
    src: "/assets/logo/java-script-logo.png",
    alt: "java-script logo",
  },
  {
    techName: "Typescript",
    src: "/assets/logo/typescript.png",
    alt: "typescript logo",
  },
  { techName: "HTML", src: "/assets/logo/html.png", alt: "html logo" },
  { techName: "CSS", src: "/assets/logo/css.png", alt: "css logo" },
  {
    techName: "Tailwind CSS",
    src: "/assets/logo/tailwind-css.png",
    alt: "tailwindcss logo",
  },
  { techName: "GSAP", src: "/assets/logo/gsap-logo.png", alt: "GSAP logo" },
  { techName: "3.js", src: "/assets/logo/threejs-logo.png", alt: "3.js logo" },
  {
    techName: "S3",
    src: "/assets/logo/Simple Storage Service.png",
    alt: "S3 logo",
  },
  {
    techName: "Route 53",
    src: "/assets/logo/Route 53.png",
    alt: "Route 53 logo",
  },
  { techName: "Node.js", src: "/assets/logo/nodejs.png", alt: "node logo" },
  {
    techName: "Python",
    src: "/assets/logo/python-logo.png",
    alt: "python logo",
  },
  { techName: "SQL", src: "/assets/logo/sql-server.png", alt: "sql logo" },
  { techName: "EC2", src: "/assets/logo/EC2.png", alt: "EC2 logo" },
  { techName: "Linux", src: "/assets/logo/tux.png", alt: "linux logo" },
  { techName: "NGINX", src: "/assets/logo/nginx.png", alt: "nginx logo" },
  { techName: "Github", src: "/assets/logo/github.png", alt: "github logo" },
  {
    techName: "Lambda",
    src: "/assets/logo/lambdaIcon.png",
    alt: "Lambda logo",
  },
  {
    techName: "DynamoDB",
    src: "/assets/logo/dynamoDBIcon.jpeg",
    alt: "DynamoDB logo",
  },
  {
    techName: "CloudFront",
    src: "/assets/logo/cloudfrontIcon.png",
    alt: "CloudFront logo",
  },
  { techName: "IAM", src: "/assets/logo/IAMIcon.jpeg", alt: "IAM logo" },
  {
    techName: "API Gateway",
    src: "/assets/logo/APIGatewayIcon.jpeg",
    alt: "API Gateway logo",
  },
  {
    techName: "Strapi",
    src: "/assets/logo/strapiLogo.png",
    alt: "strapi logo",
  },
  {
    techName: "Cursor",
    src: "/assets/logo/cursorLogo.jpeg",
    alt: "Cursor logo",
  },
  {
    techName: "Github Copilot",
    src: "/assets/logo/githubCopilotLogo.jpeg",
    alt: "Github Copilot logo",
  },
];

const TechStack = () => {
  const TechStackRef = useRef(null);

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
      <div className="flex gap-5 mt-7 flex-wrap max-lg:justify-center">
        {techLogos.map((logo, idx) => (
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
        ))}
      </div>
      <ContactMeButton extraCSS="w-fit mt-5" />
    </div>
  );
};

export default TechStack;

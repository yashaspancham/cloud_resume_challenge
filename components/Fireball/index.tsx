"use client";
import { useEffect, useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import ContactMeButton from "../ContactMeButton";

const FireballGroup = dynamic(() => import("@/components/FireballGroup"), {
  ssr: false,
});

const FireBall = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
  const [cameraPosition, setCameraPosition] = useState<
    [number, number, number]
  >([0, 0, 7]);

  const liveProjects = [
    { name: "Project_z", link: "https://reflections-fe-new.vercel.app/" },
    {
      name: "Generic SaaS Landing Page",
      link: "https://generic-saas-landing-page.yashas-dev.com",
    },
    {
      name: "eCom Elibass Landing Page",
      link: "https://ecom-elibass-landing-page.yashas-dev.com/",
    },
    {
      name: "(This website)Cloud Resume Challange",
      link: "#",
    },
    { name: "More", link: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY < 300);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      if (window.innerWidth < 640) {
        // below "sm"
        setCameraPosition([0, 0, 11.5]);
      } else if (window.innerWidth < 768) {
        //below "md"
        setCameraPosition([0, 0, 10.5]);
      } else if (window.innerWidth < 1024) {
        //below "lg"
        setCameraPosition([0, 0, 10]);
      } else {
        setCameraPosition([0, 0, 7]);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const popUpRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!popUpVisible) {
      return;
    }

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (popUpRef.current && !popUpRef.current.contains(target)) {
        setPopUpVisible(false);
        document.body.style.overflow = "";
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [popUpVisible]);

  const showPopUp = () => {
    document.body.style.overflow = "hidden";
    setPopUpVisible(true);
  };

  return (
    <section
      className="2xl:h-[40vw] xl:h-[65vw] lg:h-[100vw] md:h-[110vw] sm:h-[120vw] h-[150vw] 
                 m-0 sm:m-10 xl:sticky xl:top-0 xl:z-0 flex flex-col justify-center items-center"
    >
      <Canvas camera={{ position: cameraPosition, fov: 75 }}>
        <Suspense fallback={<div />}>
          <FireballGroup />
        </Suspense>
      </Canvas>

      {isVisible && (
        <div className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl -skew-x-10 text-gray-200 italic fixed z-2 mb-5">
          Let's build it
          <div className="flex flex-wrap gap-4 text-lg text-white mt-3 justify-center">
            <ContactMeButton extraCSS="flex items-center justify-center" />
            <button
              onClick={() => showPopUp()}
              className="not-italic skew-x-0 text-white bg-[#919a30] hover:bg-[#9aa433] p-3 rounded-lg hover:cursor-pointer"
            >
              Live Projects
            </button>
          </div>
        </div>
      )}
      {popUpVisible && (
        <div
          ref={popUpRef}
          className="absolute z-3 bg-black p-5  rounded-lg text-xl h-[300px]"
        >
          <p className="bg-[#111111] p-3 text-3xl bold mb-5">Live Projects</p>
          <div className="flex flex-col gap-2">
            {liveProjects.map((item, index) => (
              <a
                key={index}
                className="text-xl hover:text-[#f4fe6c]"
                href={item.link}
                target="_blank"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FireBall;

"use client";
import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import ContactMeButton from "../ContactMeButton";

const FireballGroup = dynamic(() => import("@/components/FireballGroup"), {
  ssr: false,
});

const FireBall = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<
    [number, number, number]
  >([0, 0, 7]);

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
            <a
              href="#personal-projects"
              className="not-italic skew-x-0 text-white bg-[#919a30] hover:bg-[#9aa433] p-3 rounded-lg hover:cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#certifications-and-achievements"
              className="max-md:hidden not-italic skew-x-0 text-white bg-[#767d27] hover:bg-[#919a30] p-3 rounded-lg hover:cursor-pointer"
            >
              Certifications
            </a>
            {/* <a
              href="#work-experience"
              className="max-md:hidden not-italic skew-x-0 text-white bg-[#8f00f2] hover:bg-[#9700ff] p-3 rounded-lg hover:cursor-pointer"
            >
              Experience
            </a> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default FireBall;

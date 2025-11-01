"use client";
import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const FireballGroup = dynamic(() => import("@/components/FireballGroup"), {
  ssr: false,
});

const FireBall = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [cameraPosition, setCameraPosition] = useState<
    [number, number, number]
  >([0, 0, 7]);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY < 300);
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
          Lets build it
        </div>
      )}
    </section>
  );
};

export default FireBall;

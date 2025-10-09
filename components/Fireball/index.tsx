"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
const FireballGroup = dynamic(() => import("@/components/FireballGroup"), {
  ssr: false,
});
const FireBall = () => {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
      <Suspense fallback={<div></div>}>
        <FireballGroup />
      </Suspense>
    </Canvas>
  );
};

export default FireBall;

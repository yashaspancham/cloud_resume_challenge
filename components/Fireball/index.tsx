"use client";

import { Canvas } from "@react-three/fiber";
import FireballGroup from "@/components/FireballGroup";

const FireBall = () => {

  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
      <FireballGroup  />
    </Canvas>
  );
};

export default FireBall;


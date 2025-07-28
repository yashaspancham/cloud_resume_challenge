"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";


type DonutRingPropsTypes = {
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  color: string;
  slowedAnimation: boolean;
};

function DonutRing({ rotateX, rotateY, rotateZ,color,slowedAnimation }: DonutRingPropsTypes) {
  const ringRef = useRef<Mesh>(null);

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += rotateX/(slowedAnimation ? 6:1);
      ringRef.current.rotation.y += rotateY/(slowedAnimation ? 6:1);
      ringRef.current.rotation.z += rotateZ/(slowedAnimation ? 6:1);
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.2, 0.2, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={5}
        metalness={2}
        roughness={0.0}
      />
    </mesh>
  );
}

export default DonutRing;
"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

type SpinningSpherePropsTypes = {
    color?: string;
    slowedAnimation: boolean;
}

function SpinningSphere({color,slowedAnimation}: SpinningSpherePropsTypes) {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += slowedAnimation ? 0.05:0.5;
      meshRef.current.rotation.x += slowedAnimation ? 0.01:0.1;
      meshRef.current.rotation.x += slowedAnimation ? 0.03:0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <ambientLight intensity={11} />
      <directionalLight color={color} position={[0, 50, 50]} />
      <directionalLight color={color} position={[50, 50, 50]} />
      <directionalLight color={color} position={[50, 0, 50]} />
      <directionalLight color={color} position={[0, -20, 10]} />
      <directionalLight color={color} position={[-2, 8, -10]} />
      <directionalLight color={color} position={[-10, -10, -10]} />
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        metalness={1}
        roughness={0.0}
      />
    </mesh>
  );
}

export default SpinningSphere;

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function SpinningSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 5;
      meshRef.current.rotation.x += 1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <ambientLight intensity={11} />
      <directionalLight color="red" position={[0, 50, 50]} />
      <directionalLight color="red" position={[50, 50, 50]} />
      <directionalLight color="red" position={[50, 0, 50]} />
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="red"
        emissive="red"
        emissiveIntensity={5}
        metalness={1.8}
        roughness={0.0}
      />
    </mesh>
  );
}
type DonutRingPropsTypes = {
  rotateX: number;
  rotateY: number;
  rotateZ: number;
};

function DonutRing({ rotateX, rotateY, rotateZ }: DonutRingPropsTypes) {
  const ringRef = useRef<Mesh>(null);

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += rotateX;
      ringRef.current.rotation.y += rotateY;
      ringRef.current.rotation.z += rotateZ;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.2, 0.2, 16, 100]} />
      <meshStandardMaterial
        color="red"
        emissive="red"
        emissiveIntensity={5}
        metalness={1.8}
        roughness={0.0}
      />
    </mesh>
  );
}

const FireBall = () => {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
      <SpinningSphere />
      <DonutRing rotateX={0.01} rotateY={0.02} rotateZ={0.05} />
      <DonutRing rotateX={0.05} rotateY={0.02} rotateZ={0.05}/>
      <DonutRing rotateX={0.03} rotateY={0.06} rotateZ={0.00}/>
    </Canvas>
  );
};

export default FireBall;

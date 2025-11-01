"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group, MathUtils } from "three";
import SpinningSphere from "../SpinningSphere";
import DonutRing from "../DonutRing";

const idList = [
  { color: "darkred", iddName: "hi", x: 5 },
  { color: "red", iddName: "tech-stack", x: -5 },
  { color: "orange", iddName: "personal-projects", x: 5 },
  { color: "darkorange", iddName: "certifications-and-achievements", x: -5 },
  { color: "blue", iddName: "work-experience", x: 5 },
  { color: "darkblue", iddName: "contact-me", x: -5 },
];

const FireballGroup = () => {
  const groupRef = useRef<Group>(null);
  const [targetX, setTargetX] = useState(0);
  const [color, setColor] = useState("darkred");
  const [slowedAnimation, setSlowedAnimation] = useState(false);
  const visibleSections = useRef(new Set<string>());

  useEffect(() => {
    let currentSection: string | null = null;

    const observers: IntersectionObserver[] = [];

    idList.forEach(({ color, iddName, x }) => {
      const element = document.getElementById(iddName);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            currentSection = iddName;
            setTargetX(x);
            setColor(color);
            setSlowedAnimation(true);
          } else if (currentSection === iddName) {
            currentSection = null;
            setTargetX(0);
            setSlowedAnimation(false);
          }
        },
        {
          threshold: 0.5,
          rootMargin: "0px 0px -25% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.x = MathUtils.lerp(
        groupRef.current.position.x,
        targetX,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <SpinningSphere color={color} slowedAnimation={slowedAnimation} />
      <DonutRing
        slowedAnimation={slowedAnimation}
        color={color}
        rotateX={0.01}
        rotateY={0.02}
        rotateZ={0.05}
      />
      <DonutRing
        slowedAnimation={slowedAnimation}
        color={color}
        rotateX={0.05}
        rotateY={0.02}
        rotateZ={0.05}
      />
      <DonutRing
        slowedAnimation={slowedAnimation}
        color={color}
        rotateX={0.03}
        rotateY={0.06}
        rotateZ={0.0}
      />
    </group>
  );
};

export default FireballGroup;

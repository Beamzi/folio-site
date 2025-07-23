"use client";
import React, { useRef, useState } from "react";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import CubeFace from "@/components/CubeFace";

const uniqueVales = [
  "translate-z-12 rotate-x-0",
  "-translate-z-12",
  "translate-x-12 rotate-y-90",
  "-translate-x-12 -rotate-y-90",
  "-translate-y-12 rotate-x-90",
  "translate-y-12 -rotate-x-90",
];

export default function page() {
  const wheelScale = useMotionValue(0.5);

  const mouseX = useMotionValue(45);
  const mouseY = useMotionValue(45);

  return (
    <main>
      <section className="h-screen  flex justify-center items-center">
        <motion.div
          onMouseMove={(e) => {
            mouseY.set(e.clientX);
            mouseX.set(e.clientY);
          }}
          onWheel={(e) => {
            const current = wheelScale.get();
            const delta = e.deltaY / 2000;
            wheelScale.set(Math.max(0.2, Math.min(2, current + delta)));
          }}
          style={{ rotateX: mouseX, rotateY: mouseY, scale: wheelScale }}
          className="relative  scale-400  size-24 transform-3d rotate-x-45 rotate-y-45 ..."
        >
          {uniqueVales.map((item) => (
            <CubeFace
              mouseY={mouseY}
              mouseX={mouseX}
              key={item}
              translateRotate={item}
              className="absolute inset-0 border-1"
            ></CubeFace>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

{
  /* <div className="absolute inset-0 translate-z-12 rotate-x-0 border-1 ..."></div>
          <div className="absolute inset-0 -translate-z-12 border-1 ..."></div>
          <div className="absolute inset-0 translate-x-12 rotate-y-90 border-1 ..."></div>
          <div className="absolute inset-0 -translate-x-12 -rotate-y-90 border-1 ..."></div>
          <div className="absolute inset-0 -translate-y-12 rotate-x-90 border-1 ..."></div>
          <div className="absolute inset-0 translate-y-12 -rotate-x-90 border-1 ..."></div> */
}

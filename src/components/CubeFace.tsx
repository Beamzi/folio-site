"use client";

import { MotionValue } from "motion";
import { useMotionValue } from "motion/react";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";

interface Props {
  translateRotate: string;
  className: string;
  mouseY: MotionValue<number>;
  mouseX: MotionValue<number>;
  style?: {
    width: number;
    height: number;
  } | null;
}

export default function CubeFace({
  translateRotate,
  className,
  mouseY,
  mouseX,
}: Props) {
  return (
    <motion.div
      onClick={() => {
        mouseX.set(45);
        mouseY.set(45);
      }}
      className={`${className} hover:bg-amber-800 transition-all duration-800 hover:perspective-distant boxing-shadow hover:-m-5 ${translateRotate}`}
    ></motion.div>
  );
}

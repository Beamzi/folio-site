"use client";

import { MotionValue } from "motion";
import {
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "motion/react";
import { transferableAbortSignal } from "util";

interface Props {
  translateRotate: string;
  className: string;
  mouseY: MotionValue<number>;
  mouseX: MotionValue<number>;
  setSwitchFace: (value: boolean) => void;
  switchFace: boolean;
  faceIndex: number;
  index: number;
  style?: {
    width: number;
    height: number;
  } | null;
}

export default function CubeFace({
  faceIndex,
  translateRotate,
  className,
  mouseY,
  mouseX,
  switchFace,
  index,
}: Props) {
  const roundedX = useTransform(mouseX, [300, 400], [0, 100]);
  const roundedY = useTransform(mouseY, [120, 500], [0, 100]);

  return (
    <>
      {
        <motion.div
          whileHover={{
            margin: 2,
            // backgroundColor: "red",
            transition: { duration: 0.2 },
          }}
          style={{ borderRadius: roundedY }}
          className={`${className} hover:perspective-distant outer-face-shadow content-center align-middle bg-neutral-500/30  z-10 ${
            index > 1 && ""
          } ${translateRotate} ${
            faceIndex === index &&
            "bg-emerald-300 transition-all duration-100 scale-120 face-hover "
          }`}
        >
          {faceIndex === index && `face-${index}`}
        </motion.div>
      }
    </>
  );
}

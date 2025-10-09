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
  isCubeFaceClicked: boolean;
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
  isCubeFaceClicked,
}: Props) {
  const roundedX = useTransform(mouseX, [300, 400], [0, 100]);
  const roundedY = useTransform(mouseY, [120, 500], [0, 100]);

  return (
    <>
      <motion.div
        whileHover={{
          margin: 2,
          // backgroundColor: "red",
          transition: { duration: 0.2 },
        }}
        style={{
          borderRadius: !isCubeFaceClicked ? roundedY : 1,
          transitionDuration: isCubeFaceClicked ? "0.5s" : "0s",
        }}
        className={`${className} hover:perspective-distant border-neutral-400 outer-face-shadow content-center text-black align-middle z-10 ${
          index > 1 && ""
        } ${translateRotate} ${
          faceIndex === index
            ? "bg-fuchsia-900 transition-all   face-hover "
            : "bg-neutral-500/30"
        }`}
      >
        <h3 className="text-black scale-70">
          {faceIndex === index && `Manaboard`}
        </h3>
        <p className="text-black text-xs scale-70">
          {faceIndex === index && `Feature-${index}`}
        </p>
      </motion.div>
    </>
  );
}

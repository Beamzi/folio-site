"use client";

import { MotionValue } from "motion";
import { useTransform } from "motion/react";
import React from "react";
import { motion } from "motion/react";
import { manaboardProjectData } from "@/data/manaboard-project-data";

interface Props {
  translateRotate: string;
  currentFeatureTitle?: string;
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
  index,
  isCubeFaceClicked,
}: Props) {
  const roundedY = useTransform(mouseY, [120, 500], [0, 100]);
  const currentFeature = manaboardProjectData[index];

  return (
    <>
      <motion.div
        whileHover={{
          margin: 2,
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
            ? "global-button-gradient-active transition-all   face-hover "
            : "bg-neutral-500/30"
        }`}
      >
        <p className="text-white text-sm scale-70 text-wrap">
          {faceIndex === index && `${currentFeature.title}`}
        </p>
      </motion.div>
    </>
  );
}

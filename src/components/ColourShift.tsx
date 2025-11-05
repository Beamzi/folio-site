"use Client";

import React from "react";
import { motion, MotionValue } from "motion/react";
import { useTransform, useMotionTemplate } from "motion/react";

interface Props {
  mouseX: MotionValue;
  mouseY: MotionValue;
  isAnimating: boolean;
}

export default function ColourShift({ mouseX, mouseY, isAnimating }: Props) {
  const mouseXMultiColor = useTransform(mouseX, (value) =>
    Math.max(100, Math.min(250, value / 4))
  );
  const marqueeColor = useMotionTemplate`rgb(${mouseXMultiColor}, 2, 100)`;

  const mouseXMulti = useTransform(mouseX, (value) => Math.ceil(value / 4));

  const marquee = useMotionTemplate`-${mouseXMulti}%`;

  const setletterSpacer = () => {
    const transform = useTransform(mouseX, (value) => Math.max(10, value / 20));
    const finalTransform = !isAnimating ? transform : mouseX.get();
    return useMotionTemplate`${finalTransform}px`;
  };
  const letterSpacer = setletterSpacer();

  const setWebkitStroke = () => {
    const transform = useTransform(mouseX, (value) =>
      Math.min(20, Math.max(10, value / 20))
    );
    const finalTransform = !isAnimating ? transform : mouseX.get();
    return useMotionTemplate`${finalTransform}px`;
  };
  const webkitStroke = setWebkitStroke();

  const getLettersForMovement = (letter: string) => {
    const letters = Array(1000).fill(letter);
    const spans = [];
    for (let i = 0; i < 2; i++) {
      spans[i] = (
        <motion.span
          key={i + 10}
          className=""
          style={{
            letterSpacing: letterSpacer,
            WebkitTextStroke: webkitStroke,
          }}
        >
          {letters}
        </motion.span>
      );
    }
    return <>{spans}</>;
  };
  return <>{getLettersForMovement("I")}</>;
}

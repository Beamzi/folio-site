"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import CubeFace from "@/components/CubeFace";
import { LiaTabletSolid } from "react-icons/lia";
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";

const faces = [
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
  const wheelUncap = useMotionValue(0.5);

  useMotionValueEvent(wheelUncap, "change", (latest) => {
    console.log("wheelscale changed to", latest);
  });

  const [switchFace, setSwitchFace] = useState(true);
  const [faceIndex, setFaceIndex] = useState(10);
  const [isAnimating, setIsAnimating] = useState(true);
  const staticValues = [
    [349, 393],
    [350, 350],
    [340, 240],
    [380, 460],
    [241, 340],
    [480, 380],
  ];

  const template = useMotionTemplate`${wheelUncap}% 20%`;
  const mouseXMulti = useTransform(mouseX, (value) => Math.ceil(value / 4));

  const mouseXMultiColor = useTransform(mouseX, (value) =>
    Math.max(50, Math.min(250, value / 4))
  );

  const marqueeColor = useMotionTemplate`rgb(${mouseXMultiColor}, 2, 255)`;

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

  useMotionValueEvent(webkitStroke, "change", (latest) => {
    console.log("x changed to", latest);
  });

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
  return (
    <main>
      <section className="h-screen relative flex justify-center items-center">
        <div className="absolute left-0 flex   flex-col ">
          {staticValues.map((item, index) => (
            <button
              onClick={() => {
                // setSwitchFace(false);
                setFaceIndex(index);
                mouseX.set(item[0]);
                mouseY.set(item[1]);
                setIsAnimating(false);
              }}
              onMouseEnter={() => {
                setFaceIndex(index);
              }}
              onMouseLeave={() => setFaceIndex(10)}
              key={index}
              className="face-1 hover:-mr-4 px-2 hover:bg-red-600 transition-all duration-100 py-1 border-1"
            >{`face-${index}`}</button>
          ))}
        </div>
        {/* sand-box-gradient */}

        <section className="overflow-hidden  whitespace-nowrap w-200">
          <section className="h-full w-full flex border-1 bg-black relative !z-100 justify-center flex-col items-center">
            <h3 className="tracking-widest border-1 w-200 text-center">
              A Portfolio By James Day
            </h3>
            <motion.p
              animate={{ x: [-200, 0] }}
              className="tracking-normal relative !z-100 text-neutral-600"
            >
              move your mouse around the space below to change the state of
              things
            </motion.p>
          </section>

          <motion.div
            style={{ x: marquee, color: marqueeColor }}
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full inline-flex relative -z-10  "
          >
            {getLettersForMovement("I")}
          </motion.div>

          <motion.div
            style={{
              backgroundPosition: template,
            }}
            className="radial-background w-full h-110 border-1 -mt-3.5  flex justify-center items-center"
            onMouseMove={(e) => {
              mouseY.set(e.clientY);
              mouseX.set(e.clientX);
            }}
            onMouseEnter={() => {
              setIsAnimating(false);
            }}
            onMouseLeave={() => {
              setIsAnimating(true);
            }}
          >
            <motion.div
              onWheel={(e) => {
                const current = wheelScale.get();
                const delta = e.deltaY / 2000;
                wheelScale.set(Math.max(0.2, Math.min(2, current + delta)));

                wheelUncap.set(e.deltaY);
              }}
              style={{ rotateX: mouseX, rotateY: mouseY, scale: wheelScale }}
              className={`relative scale-200 ${
                isAnimating ? "init-animation" : "scale-400"
              }   size-20 transform-3d rotate-x-45 rotate-y-45 `}
            >
              {faces.map((item, index) => (
                <CubeFace
                  setSwitchFace={setSwitchFace}
                  switchFace={switchFace}
                  faceIndex={faceIndex}
                  index={index}
                  mouseY={mouseY}
                  mouseX={mouseX}
                  key={item}
                  translateRotate={item}
                  className="absolute inset-0 border-2 "
                ></CubeFace>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </section>
    </main>
  );
}

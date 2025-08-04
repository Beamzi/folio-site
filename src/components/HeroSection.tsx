"use client";
import React, { useEffect, useRef, useState } from "react";

import { DiJsBadge } from "react-icons/di";

import {
  easeInOut,
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import CubeFace from "@/components/CubeFace";
import { LiaTabletSolid } from "react-icons/lia";
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";
import { BiBrightness } from "react-icons/bi";
import StackListMarquee from "@/components/StackListMarquee";

const faces = [
  "translate-z-12 rotate-x-0",
  "-translate-z-12",
  "translate-x-12 rotate-y-90",
  "-translate-x-12 -rotate-y-90",
  "-translate-y-12 rotate-x-90",
  "translate-y-12 -rotate-x-90",
];

export default function HeroSection() {
  const topWidth = 80;
  const [revealKey, setRevealKey] = useState(215);
  const [textKey, setTextKey] = useState(230);
  const [isCubeFaceClicked, setIsCubeFaceClicked] = useState(false);
  const [staticMousePosition, setStaticMousePosition] = useState([0, 0]);
  const [isFaceMenuSticky, setIsFaceMenuSticky] = useState(false);
  const [menuSpacerHidden, setMenuSpacerHidden] = useState("");

  const wheelScale = useMotionValue(0.5);
  const mouseX = useMotionValue(45);
  const mouseY = useMotionValue(45);
  const wheelUncap = useMotionValue(0.5);

  useEffect(() => {
    if (revealKey < 250 || textKey < 265) {
      const resetReveal = setTimeout(() => {
        setRevealKey((a) => a + 1);
        setTextKey((a) => a + 1);
        return clearTimeout(resetReveal);
      }, 4000);
    }
  }, [revealKey, setRevealKey]);

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
    Math.max(100, Math.min(250, value / 4))
  );

  const marqueeColor = useMotionTemplate`rgb(${mouseXMultiColor}, 2, 100 )`;

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

  // useMotionValueEvent(webkitStroke, "change", (latest) => {
  //   console.log("x changed to", latest);
  // });

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
    <>
      <section className="h-screen relative flex justify-center items-center">
        <section
          style={{ width: `${topWidth}%` }}
          className={`overflow-hidden  whitespace-nowrap   `}
        >
          <div
            className="h-full py-3 border-1
           outline-standard w-full flex gradient-for-thin-containers relative  !z-100 justify-center flex-col items-center"
          >
            <div className=" border-b-1 !border-dotted border-neutral-800  w-full ">
              <motion.h3
                animate={{
                  opacity: [0.5, 1],
                  filter: ["blur(4px)", "blur(0)"],
                  transition: {
                    duration: 1,
                  },
                }}
                className="text-lg  w-full text-center"
              >
                I'm James Day, Full Stack Developer specializing in Frontend
              </motion.h3>
            </div>

            <div className=" relative overflow-hidden">
              <motion.div
                key={textKey}
                animate={{
                  x: 520,
                  boxShadow: [
                    // "0px 0px 30px 5px red",
                    "0px 0px 400px 5px red",
                    "0px 0px 0px 0px red",
                  ],
                  // filter: ["brightness(10)", "brightness(1)"],
                  transition: { duration: 3 },
                }}
                className=" border-l-3  border-red-400  opacity-90 text-reveal-extra z-100 h-full -top-1 -right-0 absolute w-full "
              ></motion.div>

              <motion.p className="tracking-normal   text-neutral-500 z-11 relative">
                Move your mouse around within the space below
              </motion.p>
            </div>
          </div>

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
            className="radial-background w-full h-110 border-1 -mt-3.5 outline-standard flex justify-center items-center"
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
              animate={
                isCubeFaceClicked
                  ? {
                      rotateX: [mouseX.get(), staticMousePosition[0]],
                      rotateY: [mouseY.get(), staticMousePosition[1]],
                    }
                  : undefined
              }
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
                  className="absolute inset-0 border-2"
                ></CubeFace>
              ))}
            </motion.div>
          </motion.div>

          {isFaceMenuSticky && (
            <motion.div
              className={`min-h-8 border-1 ${menuSpacerHidden}`}
            ></motion.div>
          )}

          <motion.div
            animate={
              isFaceMenuSticky
                ? {
                    filter: ["blur(100px)", "blur(0px)"],
                    translateX: [1000, 0],
                    transition: {
                      filter: { duration: 0.2 },
                      translateX: { duration: 0.4 },
                    },
                  }
                : undefined
            }
            className={` ${
              isFaceMenuSticky &&
              "fixed w-full top-0 z-1000 nav-back-light-shadow flex justify-between  items-center px-10"
            } left-0 flex flex-row w-full gradient-for-thin-containers justify-center`}
          >
            {staticValues.map((item, index) => (
              <button
                onClick={() => {
                  setIsFaceMenuSticky(true);
                  setTimeout(() => {
                    setMenuSpacerHidden("hidden");
                  }, 1000);
                  const featureId = document.getElementById(`feature-${index}`);
                  console.log(featureId);
                  featureId?.scrollIntoView({ behavior: "smooth" });
                  setFaceIndex(index);
                  setIsCubeFaceClicked(true);
                  setIsAnimating(false);
                  setStaticMousePosition([item[0], item[1]]);
                }}
                onMouseEnter={() => {
                  setFaceIndex(index);
                }}
                onMouseLeave={() => {
                  setIsCubeFaceClicked(false);
                  setFaceIndex(10);
                }}
                key={index}
                className={`face-1 cursor-pointer hover:pr-10 px-2 hover:bg-red-600 transition-all w-1/6 duration-100 py-1 border-b-1 outline-standard  border-l-1 ${
                  index === 5 && "border-r-1"
                }`}
              >{`face-${index}`}</button>
            ))}
          </motion.div>
          <div>
            <StackListMarquee topWidth={topWidth} />
          </div>
        </section>
        z
      </section>
    </>
  );
}

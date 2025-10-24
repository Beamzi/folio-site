"use client";

import React, { SetStateAction, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { FaCheck, FaCheckCircle, FaCheckSquare } from "react-icons/fa";
import { LuAppWindow, LuCircleCheck, LuPhoneCall } from "react-icons/lu";
export default function SingleFeature({
  title,
  content,
  src,
  video,
  src2,
  alt,
  btnIndex,
  url,
  github,
  isScrollInEffect,
  className,
  id,
  details,
  expandSection,
  setExpandSection,
  setActiveSection,
  activeSection,
}: {
  title: string;
  content: string;
  src?: string;
  video?: string;
  src2?: string;
  alt: string;
  url: string;
  github?: string;
  btnIndex: number;
  isScrollInEffect?: boolean;
  className?: string;
  id?: string;
  details?: string[] | undefined;
  expandSection: boolean;
  setExpandSection: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
  activeSection: number;
}) {
  const [localExpandSection, setLocalExpandSection] = useState(false);

  const [refreshRef, setRefreshRef] = useState(0);

  const [localBtnIndex, setLocalBtnIndex] = useState(10);

  const ref = useRef<HTMLDivElement>(null);
  const refNew = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // useEffect(() => {}, [expandSection]);

  return (
    <motion.div
      animate={
        !isScrollInEffect
          ? {
              opacity: [1, 0],
              filter: ["blur(5px)", "blur(0px)"],
              transition: { duration: 1 },
            }
          : undefined
      }
      ref={ref}
      style={isScrollInEffect ? { scale: scrollYProgress } : undefined}
      className={`${className} 

       flex flex-col relative items-center w-full h-full`}
    >
      <div id={id} className="spacer min-h-15 w-full "></div>
      <section className="flex flex-row w-[80%] border-1 p-2 bg-black ">
        <div className="w-1/2 h-full gradient-cube-overflow mr-2  ">
          <h2 className="border-x-1 p-2 border-t-1 border-neutral-700 text-lg">
            {title}
          </h2>
          <p className="border-1 p-2 border-neutral-700">{content}</p>
          <div className="overflow-y-auto h-40 z-5 relative  border-x-1 border-b-1 p-2 ">
            <ul className="h-full px-2">
              {details?.map((item, index) => (
                <li key={43434 + index} className="flex text-neutral-500 w-3/4">
                  <LuCircleCheck className="min-w-4 min-h-4 mr-2 mt-1  stroke-neutral-200 " />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className=" w-full bg-black py-1"></div>
          <div
            className="h-10 bg-black border-y-1 flex
          items-center  z-10000 relative"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group global-button-gradient h-10 w-1/2 border-x-1 z-1000 cursor-pointer flex items-center 1 border-neutral-700"
            >
              <LuAppWindow className="w-5 h-5 mx-2  group-hover:scale-120 group-hover:mr-5 transition-all group-hover:text-amber-500 duration-300" />
              <span className="group-hover:scale-110 transition-all duration-300">
                Visit Site
              </span>
            </a>
            <button className="group transition-all duration-300 global-button-gradient h-10 w-1/2 border-r-1 z-1000 cursor-pointer flex items-center ">
              <LuPhoneCall className="w-5 h-5 mx-2 group-hover:scale-120 group-hover:mr-5 transition-all group-hover:text-amber-500 duration-300" />
              <span className="group-hover:scale-110 transition-all duration-300">
                Contact Me
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/2 ">
          {video ? (
            <video
              className="will-change-transform w-full h-full border-1 border-neutral-700 "
              style={{
                objectFit: "cover",
                objectPosition: "top center",
                transform: "translateZ(0)",
              }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <motion.div
              animate={{ filter: [`brightness(5)`, `brightness(1)`] }}
              transition={{ duration: 0.2 }}
              className="w-full h-full bg-neutral-700"
            ></motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
}

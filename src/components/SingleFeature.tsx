"use client";

import React, { SetStateAction, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
export default function SingleFeature({
  title,
  content,
  src,
  video,
  src2,
  alt,
  btnIndex,
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

       flex flex-col relative  items-center w-full h-full`}
    >
      <div id={id} className="spacer min-h-15 w-full "></div>
      <section className="flex flex-row  w-[80%] border-1 ">
        <div className="w-1/2 p-5 h-full   ">
          <h3>{title}</h3>
          <p>{content}</p>

          <button
            onClick={() => {
              console.log("asdsd");
              // setLocalBtnIndex(btnIndex);
              setActiveSection(btnIndex);
              setExpandSection(true);
              setTimeout(() => {
                if (activeSection === btnIndex) {
                  setExpandSection(expandSection ? false : true);
                }
              });
            }}
            className="border-1 relative z-10000000000000 cursor-pointer"
          >
            See Details
          </button>

          {activeSection === btnIndex && expandSection === true && (
            <ul>
              {details?.map((item, index) => (
                <li key={43434 + index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-1/2 ">
          {video && (
            <video
              className="w-full h-full "
              style={{ objectFit: "cover", objectPosition: "top left" }}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={video} type="video/mp4" />
            </video>
          )}

          {/* {video ? (
            <div className="w-full h-full">
            </div>
          ) : (
            <img
              style={{ objectFit: "cover" }}
              className="w-full h-full"
              src={src}
              alt={alt}
            ></img>
          )} */}
        </div>
      </section>
    </motion.div>
  );
}

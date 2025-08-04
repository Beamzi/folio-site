"use client";
import React, { useRef, useState } from "react";
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
  alt,
  index,
  isScrollInEffect,
  className,
  id,
  details,
}: {
  title: string;
  content: string;
  src: string;
  alt: string;
  index: number;
  isScrollInEffect?: boolean;
  className?: string;
  id?: string;
  details?: string[] | undefined;
}) {
  const [expandSection, setExpandSection] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("x changed to:", latest);
  });

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
      className={`${className}  flex flex-col relative items-center w-full h-full`}
    >
      <div id={id} className="spacer min-h-15 w-full "></div>
      <section
        // initial={{ opacity: 1 }}
        // animate={expandSection && isScrollInEffect ? { opacity: 0 } : undefined}
        // id={`feature-${index}`}
        className="flex flex-row  w-[80%] border-1 "
      >
        <div className="w-1/2 p-5 h-full   ">
          <h3>{title}</h3>
          <p>{content}</p>
          <button onClick={() => setExpandSection(true)} className="border-1">
            See Details
          </button>
          {expandSection &&
            details?.map((item, index) => <li key={43434 + index}>{item}</li>)}
        </div>
        <div className="w-1/2 h-full">
          <img
            style={{ objectFit: "cover" }}
            className="w-full h-full"
            src={src}
            alt={alt}
          ></img>
        </div>
      </section>
    </motion.div>
  );
}

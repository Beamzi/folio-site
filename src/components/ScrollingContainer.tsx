import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

interface Props {
  title: string;
  content: string;
  src: string;
  alt: string;
}

export default function ScrollingContainer({
  title,
  content,
  src,
  alt,
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollYProgress }}
      className="w-200 h-50 bg-blue-900 relative z-1000 mb-10 flex"
    >
      <div className="w-1/2 px-5 py-5">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>

      <img
        style={{ contain: "cover" }}
        className="w-1/2"
        src={src}
        alt={alt}
      ></img>
    </motion.div>
  );
}

{
  /* <motion.div
  initial={{ scale: 0.5 }}
  whileInView={{ scale: 1 }}
  exit={{ scale: 0 }}
  transition={{ duration: 0.3 }}
  viewport={{ amount: 0.8, margin: "-20%" }} // Triggers later, exits sooner
></motion.div> */
}

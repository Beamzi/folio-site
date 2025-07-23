"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

export default function page() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const opacity = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);

  return (
    <main>
      <section className="h-screen"></section>
      <section className="flex justify-center">
        <motion.div
          ref={ref}
          style={{ translateY: translateY1, opacity: opacity }}
          className="w-50 h-50 bg-blue-900 border-1"
        ></motion.div>
        <motion.div
          ref={ref}
          style={{ translateY: translateY2 }}
          className="w-50 h-50 bg-blue-900 border-1"
        ></motion.div>
      </section>
      <section className="h-screen"></section>
    </main>
  );
}

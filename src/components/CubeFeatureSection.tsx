"use client";

import React from "react";
import { motion } from "motion/react";

interface Props {
  title: string;
  content: string;
  src?: string;
  alt?: string;
  details: string[];
  className: string;
}
export default function CubeFeatureSection({
  title,
  content,
  src,
  alt,
  details,
  className,
}: Props) {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        transition: { opacity: { duration: 1, delay: 2 } },
      }}
      className={className}
    >
      <div className=" border-1 flex h-full">
        <div className="border-1 px-3 py-3 w-1/2">
          <h3 className="w-50 break-all">{title}</h3>
          <p className="h-full w-full break-all  overflow-hidden text-ellipsis whitespace-normal">
            {content}
          </p>
        </div>
        <div className="w-1/2 border-1  max-h-full">
          <img
            src={src}
            alt={alt}
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          ></img>
        </div>
      </div>
    </motion.div>
  );
}

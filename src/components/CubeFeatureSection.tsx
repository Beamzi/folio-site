"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaDotCircle } from "react-icons/fa";

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
  const [showImg, setShowImg] = useState(false);

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        transition: { opacity: { duration: 1, delay: 2 } },
      }}
      className={className}
    >
      <div className=" border-1 flex h-full w-full relative min-h-0 ">
        {!showImg && (
          <div className="border-1 min-h-0 relative h-full flex flex-col justify-between b px-3 py-3 w-full  ">
            <div className="h-[95%] flex flex-col border-1 relative min-h-0 ">
              <h3 className="w-full break-word overflow-hidden h- text-ellipsis whitespace-normal">
                {title}
              </h3>
              <p className=" w-full break-word text-ellipsis whitespace-normal border-1">
                {content}
              </p>
              {/* <div className="gradient-cube-overflow absolute h-[70%] w-full "></div> */}
              <div className="overflow-y-auto  flex-1 min-h-0 relative">
                <ul className=" break-word text-ellipsis whitespace-normal max-w-[50%] min-[500px]:min-w-[95%] py-1 border-1 ">
                  {details.map((item, index) => (
                    <li key={index + 374} className="flex ml-2  text-sm ">
                      <FaDotCircle className="min-w-4 min-h-4 mr-2 my-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <button className="flex border-1 bg-black absolute bottom-0 left-0 z-1000 cursor-pointer">
                <SiGithub className="w-5 h-5" />
                Visit Repository
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowImg(showImg ? false : true)}
          className="  bg-blue-900 flex align-middle items-center justify-center w-10 "
        >
          {!showImg ? (
            <BiChevronLeft className="w-5 h-5 border-1" />
          ) : (
            <BiChevronRight className="w-5 h-5 border-1" />
          )}
        </button>

        {showImg && (
          <div className="w-full border-1 max-h-full  ">
            <img
              src={src}
              alt={alt}
              style={{ objectFit: "cover" }}
              className="w-full h-full"
            ></img>
          </div>
        )}
      </div>
    </motion.div>
  );
}

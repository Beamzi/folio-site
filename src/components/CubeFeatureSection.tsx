"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaDotCircle, FaEnvelope } from "react-icons/fa";

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
      <div className=" flex h-full w-full relative min-h-0">
        {!showImg && (
          <div className="min-h-0 relative h-full flex flex-col justify-between w-full  ">
            <div className="h-[100%] border-1 z-100 flex flex-col relative min-h-0 ">
              <h3 className="w-full px-2 py-1 text-lg break-word overflow-hidden h- text-ellipsis whitespace-normal border-b-1 pb-1 border-neutral-700">
                {title}
              </h3>
              <p className=" px-2 py-1 w-full break-word text-ellipsis whitespace-normal border-b-1  mb-1 border-neutral-700">
                {content}
              </p>

              <div className="gradient-cube-overflow overflow-y-auto  absolute h-full min-h-0 w-full z-22000 pointer-events-none "></div>

              <div className="overflow-y-auto flex flex-1 min-h-0 flex-col relative">
                <ul className="break-word opacity-100  text-ellipsis whitespace-normal max-w-[50%] min-[500px]:min-w-[95%] py-1 ">
                  {details.map((item, index) => (
                    <li
                      key={index + 374}
                      className="flex ml-2 text-neutral-400  text-sm "
                    >
                      <FaDotCircle className="min-w-4 min-h-4 mr-2 my-1" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="py-20"></div>
              </div>
            </div>

            <div className="flex h-5 w-full  bg-black absolute bottom-2.5 border-t-1 left-0 z-200 py-4 justify-start pointer-events-none"></div>
            <div className="flex items-center h-5 w-full border-1 bg-black absolute bottom-0 left-0 z-1000 py-4 justify-start ">
              <button className="flex px-2 w-1/2 cursor-pointer border-l-1 h-8 hover:bg-fuchsia-900 transition duration-300  items-center align-middle ">
                <SiGithub className="w-5 h-5 mr-1 " />
                Visit Repository
              </button>
              <button className="flex px-2 w-1/2 hover:bg-fuchsia-900 transition duration-300 items-center h-8 border-l-1 cursor-pointer align-middle">
                <FaEnvelope className="w-5 h-5 mr-2" />
                Get In Touch
              </button>
            </div>
          </div>
        )}

        <motion.button
          onClick={() => setShowImg(showImg ? false : true)}
          className={`flex inset-shadow-sm bg-fuchsia-900 inset-shadow-fuchsia-500 cursor-pointer relative hover:[&>*]:scale-120 hover:bg-fuchsia-700 transition duration-300 w-10 align-middle items-center justify-center border-1  ${
            showImg ? "mr-2 " : "ml-2 "
          }`}
        >
          {!showImg ? (
            <BiChevronLeft className="w-5 h-5 border-1 z-10 transition duration-300 border-white" />
          ) : (
            <BiChevronRight className="w-5 h-5 border-1 z-10 transition duration-300 border-white" />
          )}
        </motion.button>

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

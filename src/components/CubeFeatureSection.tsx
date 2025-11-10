"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import ContactModal from "./ContactModal";
import { LuCircleCheck } from "react-icons/lu";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

interface Props {
  title: string;
  content: string;
  src?: string;
  src2?: string;
  alt?: string;
  details: string[];
  className: string;
  innerWidth: number;
}

export default function CubeFeatureSection({
  title,
  content,
  src,
  src2,
  alt,
  details,
  className,
}: Props) {
  const [showImg, setShowImg] = useState(false);
  const [translateRight, setTranslateRight] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const containerWidth = window.innerWidth * 0.8 * 0.715;

  useEffect(() => {
    if (src) {
      const img1 = new Image();
      img1.src = src;
    }
  }, [src]);

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        transition: { opacity: { duration: 1, delay: 1.4 } },
      }}
      className={className}
    >
      <div className="flex h-full w-full relative min-h-0">
        {!showImg && (
          <div className="min-h-0 relative h-full flex flex-col justify-between w-full">
            <div className="h-[100%] border-1 z-100 flex flex-col relative min-h-0">
              <h3 className="w-full px-2 py-1 text-lg break-word overflow-hidden h- text-ellipsis whitespace-normal border-b-1 pb-1 border-neutral-700">
                {title}
              </h3>
              <p className="px-2 py-1 w-full break-word text-ellipsis whitespace-normal border-b-1 mb-1 border-neutral-700">
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
                      <LuCircleCheck className="min-w-4 min-h-4 mr-2 my-1" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="py-20"></div>
              </div>
            </div>

            <div className="flex h-5 w-full  bg-black absolute bottom-2.5 border-t-1 left-0 z-100 py-4 justify-start pointer-events-none"></div>
            <div className="flex items-center h-5 w-full border-1 bg-black absolute bottom-0 left-0 z-200 py-4 justify-start ">
              <a
                href="https://github.com/Beamzi/project-task-manager"
                rel="noopener noreferrer"
                target="_blank"
                className="flex justify-center sm:justify-start group transition-all duration-300 global-button-gradient; px-2 w-1/2 cursor-pointer  h-8 global-button-gradient items-center align-middle "
              >
                <SiGithub className="group-hover:scale-120  group-hover:mr-5 transition-all group-hover:text-amber-500 duration-300 w-5 h-5 mr-1 " />
                <span className="invisible absolute sm:visible sm:relative group-hover:scale-110 transition-all duration-300">
                  Visit Repository
                </span>
              </a>
              <button
                onClick={() => setShowContactModal(true)}
                className="flex justify-center sm:justify-start px-2 w-1/2 global-button-gradient items-center h-8 border-l-1 cursor-pointer align-middle group transition-all duration-300"
              >
                <FaEnvelope className="group-hover:scale-120 group-hover:mr-5 transition-all group-hover:text-amber-500 duration-300 w-5 h-5 mr-2" />
                <span className="invisible absolute sm:visible sm:relative group-hover:scale-110 transition-all duration-300">
                  Get In Touch
                </span>
              </button>
            </div>
          </div>
        )}

        <motion.button
          animate={translateRight ? { opacity: [0, 0.1, 1] } : { opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => {
            setShowImg(showImg ? false : true);
            setTranslateRight(translateRight ? false : true);
            setTimeout(() => {
              setTranslateRight(!translateRight ? true : false);
            }, 300);
          }}
          className={`flex  global-button-gradient-active-vertical cursor-pointer z-50 relative hover:[&>*]:scale-120 transition duration-300 w-10 align-middle items-center justify-center border-1   ${
            showImg ? "mr-2 " : "ml-2 "
          }`}
        >
          {!showImg ? (
            <AiOutlineDoubleLeft className="w-5 h-5  z-10 transition duration-300 border-white expand-image-chevron" />
          ) : (
            <AiOutlineDoubleRight className="w-5 h-5  z-10 transition duration-300 border-white expand-image-chevron " />
          )}
        </motion.button>

        {translateRight && (
          <motion.button
            animate={{
              x: translateRight ? -(containerWidth - 69.5) : 0,
            }}
            transition={{ duration: 0.1, ease: "easeIn" }}
            className={`invisible sm:visible  absolute top-0 right-0 h-full flex inset-shadow-sm global-button-gradient-active-vertical global-button-gradient z-40  cursor-pointer  hover:[&>*]:scale-120  transition duration-300 w-10 align-middle items-center justify-center border-1 ${
              showImg ? "mr-2 " : "ml-2 "
            }`}
          >
            {!showImg ? (
              <AiOutlineDoubleLeft className="w-5 h-5  z-10 transition duration-300 border-white" />
            ) : (
              <AiOutlineDoubleRight className="w-5 h-5  z-10 transition duration-300 border-white" />
            )}
          </motion.button>
        )}

        {showImg && (
          <>
            {src2 ? (
              <div className="w-full h-full flex relative">
                <div className="w-full  h-full absolute z-10 inset-shadow-sm radial-overlay"></div>

                <motion.div
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 1 }}
                  className="w-3/4 border-1 max-h-full  "
                >
                  <img
                    src={src}
                    alt={alt}
                    style={{ objectFit: "cover", objectPosition: "left top" }}
                    className="w-full h-full z-1 relative "
                  ></img>
                </motion.div>
                <motion.div
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 1 }}
                  className="w-1/4 border-1 max-h-full ml-2 bg-black z-1"
                >
                  <img
                    src={src2}
                    alt={alt}
                    style={{ objectFit: "cover", objectPosition: "left top" }}
                    className="w-full h-full z-1 relative "
                  ></img>
                </motion.div>
              </div>
            ) : (
              <>
                <motion.div
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 1 }}
                  className="w-full border-1 max-h-full z-1 relative "
                >
                  <div className="w-full h-full absolute z-10 inset-shadow-sm radial-overlay"></div>

                  <img
                    src={src}
                    alt={alt}
                    style={{ objectFit: "cover", objectPosition: "left top" }}
                    className="w-full h-full z-1 relative"
                  ></img>
                </motion.div>
              </>
            )}
          </>
        )}
      </div>

      <ContactModal
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
      />
    </motion.div>
  );
}

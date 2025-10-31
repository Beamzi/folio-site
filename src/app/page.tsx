"use client";

import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { BiChevronsDown, BiChevronsUp, BiChevronUp } from "react-icons/bi";
import { RefObject, useRef, useState } from "react";
import { motion } from "motion/react";
import HeaderTopBar from "@/components/HeaderTopBar";

export default function Page() {
  const [showFeatureSection, setShowFeatureSection] = useState(false);
  const [initialScroll, setInitialScroll] = useState(false);
  const [mainAnim, setMainAnim] = useState(false);
  const [mainKey, setMainKey] = useState(123);

  const mainRef = useRef<HTMLInputElement>(null);

  return (
    <motion.main key={mainKey}>
      <HeaderTopBar />
      <motion.div
        className={`h-screen scale-98 absolute top-0 z-10000 pointer-events-none overflow-y-hidden ${
          mainAnim ? "bg-neutral-400" : "bg-transparent block"
        } `}
        animate={mainAnim && { opacity: [1, 0], transition: { duration: 0.5 } }}
      ></motion.div>
      {!showFeatureSection && <HeroSection></HeroSection>}

      <button
        onClick={(e) => {
          setShowFeatureSection(showFeatureSection ? false : true);
          setInitialScroll(true);
          setMainAnim(true);
          setTimeout(() => {
            const feature3 = document.getElementById("feature-0");
            setMainKey(mainKey + 10);
            if (feature3) {
              feature3.scrollIntoView({ behavior: "smooth" });
            }
          }, 10);

          setTimeout(() => {
            setMainAnim(false);
          }, 500);
        }}
        className="border-1 flex flex-col p-3 bg-black items-center z-5000 fixed bottom-5 right-3 cursor-pointer"
      >
        {showFeatureSection && <BiChevronsUp className="w-6 h-6 border 1" />}
        <span>{showFeatureSection ? "Back to cube" : "What Else?"}</span>
        {!showFeatureSection && <BiChevronsDown className="w-6 h-6 border-1" />}
      </button>

      {showFeatureSection && <FeatureSection initialScroll={initialScroll} />}
    </motion.main>
  );
}

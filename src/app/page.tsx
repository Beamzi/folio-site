"use client";

import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { useState } from "react";
import { motion } from "motion/react";
import HeaderTopBar from "@/components/HeaderTopBar";

export default function Page() {
  const [showFeatureSection, setShowFeatureSection] = useState(false);
  const [initialScroll, setInitialScroll] = useState(false);
  const [mainAnim, setMainAnim] = useState(false);
  const [mainKey, setMainKey] = useState(123);

  return (
    <motion.main className="overflow-hidden" key={mainKey}>
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
        className={`group transition-all duration-300 global-button-gradient show-feature-section border-1 flex flex-col p-3 bg-black items-center z-5000 fixed  ${
          !showFeatureSection ? "bottom-28" : "bottom-5"
        } sm:bottom-5 right-3 cursor-pointer`}
      >
        {showFeatureSection && (
          <>
            <BiChevronsUp className="group-hover:scale-110 group-hover:text-amber-500 transition-all duration-300 w-6 h-6 border 1 mb-1.5" />
            <span className="group-hover:pt-3 group-hover:scale-105 transition-all duration-300">
              Back To Cube
            </span>
          </>
        )}

        {!showFeatureSection && (
          <>
            <BiChevronsDown className="group-hover:scale-110 group-hover:text-amber-500 transition-all duration-300 w-6 h-6 border-1 mb-1" />
            <span className="group-hover:pt-3 group-hover:scale-105 transition-all duration-300 0">
              What Else?
            </span>
          </>
        )}
      </button>

      {showFeatureSection && <FeatureSection />}
    </motion.main>
  );
}

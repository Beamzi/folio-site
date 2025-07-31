"use client";

import React from "react";
import { motion } from "motion/react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiFramer,
  SiCss3,
} from "react-icons/si";

export default function StackListMarquee({ topWidth }: { topWidth: number }) {
  const stackList = getStackData("placeholder");
  const itemWidth = 160;
  const totalWidth = itemWidth * (stackList.length * 2);
  return (
    <motion.div
      style={{ width: totalWidth }}
      animate={{
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        },
      }}
      className={`flex flex-row py-1 bg-black border-b-1  `}
    >
      {getStackList(itemWidth)}
    </motion.div>
  );
}

const getStackList = (itemWidth: number) => {
  const stackList = getStackData("w-5 h-5 mr-2 ");
  let spanArray = [];
  for (let i = 0; i < 2; i++) {
    const spanList = (
      <div key={i + 64} className="flex w-full">
        {stackList.map((item, index) => (
          <div
            style={{ width: itemWidth }}
            className={`flex text-neutral-500  text-sm justify-center items-center`}
            key={index + 29}
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
    );
    spanArray.push(spanList);
  }
  return spanArray;
};

const getStackData = (iconClassName: string) => {
  return [
    {
      title: "JavaScript",
      icon: <SiJavascript className={`${iconClassName} text-[#F7DF1E]`} />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className={`${iconClassName} text-[#3178C6]`} />,
    },
    {
      title: "React",
      icon: <SiReact className={`${iconClassName} text-[#61DAFB]`} />,
    },
    {
      title: "Next.js",
      icon: (
        <SiNextdotjs
          className={`${iconClassName}  text-black fill-white stroke-white`}
        />
      ),
    },
    {
      title: "CSS",
      icon: <SiCss3 className={`${iconClassName} text-[#1572B6]`} />,
    },
    {
      title: "Tailwind",
      icon: <SiTailwindcss className={`${iconClassName} text-[#38B2AC]`} />,
    },
    {
      title: "Framer Motion",
      icon: <SiFramer className={`${iconClassName} text-[#0055FF]`} />,
    },
    {
      title: "Prisma",
      icon: <SiPrisma className={`${iconClassName} text-[#0C344B] `} />,
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql className={`${iconClassName} text-[#336791]`} />,
    },
  ];
};

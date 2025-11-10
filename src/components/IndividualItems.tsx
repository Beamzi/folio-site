"use client";

import { useState } from "react";
import { BiChevronRightCircle } from "react-icons/bi";
import { motion } from "motion/react";

interface Props {
  item: { name: string; url: string };
}

export default function IndividualItems({ item }: Props) {
  const [activeItem, setActiveItem] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <li
      onMouseEnter={() => setActiveItem(true)}
      onMouseLeave={() => setActiveItem(false)}
      className={`border-b-1 flex w-full h-full border-neutral-900 align-middle justify-start items-center px-4`}
    >
      <motion.div
        animate={activeItem ? { x: [0, 5, 0], scale: [1.2, 1] } : { x: 0 }}
        transition={activeItem ? { repeat: 10, duration: 0.4 } : { repeat: 0 }}
        className="w-6 h-6 mr-3 "
      >
        <BiChevronRightCircle
          className={`w-full h-full ${activeItem && "text-amber-500"}`}
        />
      </motion.div>
      <a
        className={`hover:text-fuchsia-300 py-3 h-full w-[85%] hover:scale-102 ${
          activeItem && "ml-2 transition-all duration-300"
        } `}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.name}
      </a>
    </li>
  );
}

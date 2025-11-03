"use client";

import React from "react";
import { LuMail, LuPhone } from "react-icons/lu";

interface Props {
  showContactModal: boolean;

  setShowContactModal: (value: boolean) => void;
}

import { motion } from "motion/react";
export default function ContactModal({
  showContactModal,
  setShowContactModal,
}: Props) {
  return (
    <>
      {showContactModal && (
        <>
          <motion.div
            animate={{ backdropFilter: "blur(4px)" }}
            initial={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 1 }}
            onClick={() => setShowContactModal(false)}
            className="fixed top-0 left-0 z-400 h-[100vh] w-[100vw] bg-neutral-900/80 "
          ></motion.div>
          <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-500 w-100">
            <div className="bg-black border-1  w-full h-full py-3 px-3">
              <h3 className="text-lg pb-1">Contact me</h3>
              <ul className="w-full h-full">
                <li className="flex border-b-1 py-2 border-neutral-800 text-neutral-400">
                  <LuPhone className="w-5 h-5 mr-2 stroke-white" />
                  <a className="hover:text-amber-500" href="tel:0491625139">
                    0491 625 139
                  </a>
                </li>
                <li className="flex py-2 text-neutral-400">
                  <LuMail className="w-5 h-5 mr-2 stroke-white " />
                  <a
                    className="hover:text-amber-500"
                    href="mailto:james@daymedia.com.au"
                  >
                    james@daymedia.com.au
                  </a>
                </li>
              </ul>
            </div>
            {/* <ContactModal /> */}
          </div>
        </>
      )}
    </>
  );
}

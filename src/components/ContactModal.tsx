import React from "react";
import { LuMail, LuPhone } from "react-icons/lu";

export default function ContactModal() {
  return (
    <div className="bg-black border-1  w-full h-full py-3 px-3">
      <h3 className="text-lg pb-1">Contact me</h3>
      <ul className="w-full h-full">
        <li className="flex border-b-1 py-2 border-neutral-800 text-neutral-400">
          <LuPhone className="w-5 h-5 mr-2 stroke-white" />
          0491 625 139
        </li>
        <li className="flex py-2 text-neutral-400">
          <LuMail className="w-5 h-5 mr-2 stroke-white " />
          james@daymedia.com.au
        </li>
      </ul>
    </div>
  );
}

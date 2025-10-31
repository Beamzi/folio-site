import React from "react";
import { LiaEnvelope, LiaGithub } from "react-icons/lia";
import { LuMail, LuPhone } from "react-icons/lu";

export default function HeaderTopBar() {
  return (
    <header className="h-8 w-full fixed items-center align-middle top-0 left-0 bg-neutral-900 text-neutral-200 border-b-1 border-neutral-600 z-300  flex justify-between ">
      <p className="h-5 w-100  px-5">James Day</p>
      <div className="w-50 h-7 flex items-end content-end  px-5">
        <button className="w-full h-full flex align-middle text-center content-center items-center">
          <LuMail className="w-5 h-5" />
        </button>
        <button className="w-full h-full flex align-middle text-center content-center items-center">
          <LuPhone className="w-5 h-5" />
        </button>

        <a className="flex content-center items-center align-middle  w-full h-full">
          <LiaGithub className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
}

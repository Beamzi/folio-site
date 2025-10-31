import Link from "next/link";
import React from "react";
import { LuGithub, LuMail } from "react-icons/lu";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-300 w-100 h-100  flex justify-between  items-center px-10 ">
      <div>logo</div>
      <nav className="[&>*]:mx-2">
        <Link href="/about">about me</Link>
        <Link href="/about">projects</Link>
        <Link href="/about">contact</Link>
      </nav>
      <div className="flex [&>*]:mx-1">
        <LuGithub className="w-5 h-5" />
        <LuMail className="w-5 h-5" />
      </div>
    </header>
  );
}

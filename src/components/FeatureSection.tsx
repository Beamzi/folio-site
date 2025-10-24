"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import SingleFeature from "./SingleFeature";
import { websitesData } from "@/data/websites-data";
import AdditionalProjectList from "./AdditionalProjectList";

interface Props {
  initialScroll: boolean;
}

const getLists = (lists: number, items = 4) => {
  const arr = [];
  let start = 0;
  let end = items - 1;
  for (let i = 0; i < lists; i++) {
    arr.push(<AdditionalProjectList key={i + 12} start={start} end={end} />);
    start += items;
    end += items;
  }
  return arr;
};

const footerCopy = `Built with Next.js, React, powered by manic perfectionism ☕ © ${new Date().getFullYear()} James Day`;

export default function FeatureSection({ initialScroll }: Props) {
  const [expandSection, setExpandSection] = useState(true);
  const [activeSection, setActiveSection] = useState(10);

  const [refreshKey, setRefreshKey] = useState(23242);

  console.log(websitesData, "asdasd");

  return (
    <>
      <article className=" flex border-1 flex-col items-center relative">
        {websitesData.map((item, index) => {
          return (
            <SingleFeature
              expandSection={expandSection}
              setExpandSection={setExpandSection}
              setActiveSection={setActiveSection}
              activeSection={activeSection}
              key={refreshKey + index}
              title={item.title}
              content={item.content}
              url={item.url}
              github={item.github}
              // src={item.src}
              video={item.video}
              alt={item.alt}
              btnIndex={index}
              isScrollInEffect={true}
              // id={`feature-${index}`}
              details={item.details}
            ></SingleFeature>
          );
        })}

        <div className="absolute flex flex-col items-center justify-center w-full">
          {websitesData.map((item, index) => {
            return (
              <SingleFeature
                expandSection={expandSection}
                setExpandSection={setExpandSection}
                setActiveSection={setActiveSection}
                activeSection={activeSection}
                key={refreshKey + index}
                title={item.title}
                content={item.content}
                // src={item.src}
                alt={item.alt}
                url={item.url}
                github={item.github}
                btnIndex={index}
                isScrollInEffect={false}
                id={`feature-${index}`}
                details={item.details}
              ></SingleFeature>
            );
          })}
        </div>

        <footer className="pt-10 w-full ">
          <h2 className="text-xl h-full flex align-middle items-center py-1 text-start text text-neutral-300 border-b-1 pb-1 px-[5%] border-neutral-800 bg-neutral-950 border-t-1">
            Additional websites i've worked on
          </h2>
          <div className="w-full md:bg-neutral-950 md:px-[5%]">
            <div className="h-50">
              <div className=" md:flex h-20 ">
                {getLists(2)}
                <p className="md:hidden flex justify-center py-4 px-4 text-center text-neutral-400 bg-neutral-800 ">
                  {footerCopy}
                </p>
              </div>
            </div>
          </div>
          <div className="invisible md:visible  flex justify-center py-4  text-center items-center text-neutral-400 bg-neutral-900">
            <p>{footerCopy}</p>
          </div>
        </footer>
      </article>
    </>
  );
}

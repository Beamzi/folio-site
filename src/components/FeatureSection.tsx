"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import SingleFeature from "./SingleFeature";
import { websitesData } from "@/data/websites-data";

interface Props {
  initialScroll: boolean;
}

export default function FeatureSection({ initialScroll }: Props) {
  const [expandSection, setExpandSection] = useState(true);

  const [activeSection, setActiveSection] = useState(10);

  const [refreshKey, setRefreshKey] = useState(23242);

  console.log(websitesData, "asdasd");

  return (
    <>
      <article className="min-h-30000 flex border-1 flex-col items-center relative">
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
              src={item.src}
              video={item.video}
              alt={item.alt}
              btnIndex={index}
              isScrollInEffect={true}
              // id={`feature-${index}`}
              details={item.details}
            ></SingleFeature>
          );
        })}

        <div className="absolute flex flex-col items-center justify-center w-full ">
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
                src={item.src}
                alt={item.alt}
                btnIndex={index}
                isScrollInEffect={false}
                id={`feature-${index}`}
                details={item.details}
              ></SingleFeature>
            );
          })}
        </div>
        {/* {getFeatureList({ expandSection, setExpandSection })} */}
      </article>
    </>
  );
}

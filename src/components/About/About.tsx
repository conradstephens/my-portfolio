"use client";

import Link from "next/link";
import { m } from "framer-motion";
import type { About as AboutTypes } from "@/types";
import { CommonTech } from "src/types/sanity";
import { useEffect } from "react";

interface Props {
  aboutData: AboutTypes;
  commonTech: CommonTech[];
}

export default function About(props: Props) {
  const { aboutData, commonTech } = props;

  useEffect(() => {
    // @ts-ignore
    const cardsContainer = document.getElementById("common-tech-cards");
    if (cardsContainer) {
      // @ts-ignore
      cardsContainer.onmousemove = (e) => {
        for (const card of document.getElementsByClassName(
          "common-tech-card"
        )) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          // @ts-ignore
          card.style.setProperty("--mouse-x", `${x}px`);
          // @ts-ignore
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      };
    }
  }, []);

  const handleCardClick = (url: string) => () => {
    window.open(url, "_blank");
  };

  return (
    <div className="hero">
      <div className="hero-content max-w-screen-md">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start"
        >
          <h3 className="text-5xl font-medium">About me</h3>
          <p className="py-2 text-lg leading-8 text-base-content/75">
            {aboutData?.backgroundInfo}
          </p>
          <p className="py-4 text-lg leading-8 text-base-content/75">
            {aboutData?.techTitle}
          </p>
          <div
            id="common-tech-cards"
            className="grid grid-cols-2 grid-rows-4 gap-2 text-base-content sm:grid-cols-4 sm:grid-rows-2 sm:space-x-0"
          >
            {commonTech.map(({ title, url, html }, index) => (
              <div
                key={index}
                onClick={handleCardClick(url)}
                className="common-tech-card"
              >
                <div className="card-border" />
                <div className="card-content" />
                <div className="card-body items-center justify-center bg-gray-200 dark:bg-gray-800">
                  <svg
                    className="skill-icon"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <h2 className="card-title whitespace-pre text-lg">{title}</h2>
                </div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </div>
  );
}

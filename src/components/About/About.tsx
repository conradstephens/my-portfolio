"use client";

import Link from "next/link";
import { m } from "framer-motion";
import type { About as AboutTypes } from "@/types";
import { CommonTech } from "src/types/sanity";

interface Props {
  aboutData: AboutTypes;
  commonTech: CommonTech[];
}

export default function About(props: Props) {
  const { aboutData, commonTech } = props;

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
          <div className="grid grid-cols-2 grid-rows-4 text-base-content sm:grid-cols-8 sm:grid-rows-1 sm:space-x-0">
            {commonTech.map(({ className, title, url, html }, index) => (
              <div key={index} className={className}>
                <div className="tooltip hidden sm:block" data-tip={title}>
                  <Link
                    aria-label={title}
                    href={url}
                    target="_blank"
                    className="skill-icon-link"
                  >
                    <svg
                      className="skill-icon"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </Link>
                </div>
                <Link
                  aria-label={title}
                  href={url}
                  target="_blank"
                  className="skill-icon-link sm:hidden"
                >
                  <svg
                    className="skill-icon"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </Link>

                <div className="sm:hidden">{title}</div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </div>
  );
}

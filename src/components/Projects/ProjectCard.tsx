"use client";

import * as React from "react";
import type { Project, Tech } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "sanity";
import { m, useAnimate } from "framer-motion";

interface Props {
  project: Project;
  tech: Tech[];
  index: number;
  setDemoSrc: React.Dispatch<React.SetStateAction<string>>;
}

export default React.memo(function ProjectCard(props: Props) {
  const { project, tech, setDemoSrc, index } = props;
  const {
    title,
    image,
    description,
    url,
    tech: projectTech,
    demo_url: demoUrl,
  } = project;
  const [scope, animate] = useAnimate();

  const techMemo = tech.filter((tech) =>
    projectTech.find((projectTech) => projectTech._ref === tech._id)
  );

  // Handle modal open/close
  const handleOpen = () => {
    if (title.toLowerCase() === "senior dev") {
      window.open(demoUrl, "_blank");
      return;
    }
    setDemoSrc(demoUrl || "");
  };

  const cardIsFlipped = index % 2;

  const onViewportEnter = () => {
    const cardImage = document.getElementById(`${title}-card-image`);
    const cardBody = document.getElementById(`${title}-card-body`);
    if (!cardImage || !cardBody) return;
    animate([
      [cardImage, { opacity: 1, x: 0 }, { at: 0 }],
      [cardBody, { opacity: 1, x: 0 }, { at: 0 }],
    ]);
  };

  const onViewportLeave = () => {
    const cardImage = document.getElementById(`${title}-card-image`);
    const cardBody = document.getElementById(`${title}-card-body`);
    if (!cardImage || !cardBody) return;
    animate([
      [cardImage, { opacity: 0, x: cardIsFlipped ? 999 : -999 }, { at: 0 }],
      [cardBody, { opacity: 0, x: cardIsFlipped ? -999 : 999 }, { at: 0 }],
    ]);
  };

  return (
    <m.div
      ref={scope}
      className={clsx(
        "card flex h-[550px] w-full overflow-hidden border-2 border-gray-300 md:card-side dark:border-gray-700 md:h-[300px]",
        cardIsFlipped && "md:flex-row-reverse"
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={onViewportEnter}
    >
      <m.div
        id={`${title}-card-image`}
        initial={{ opacity: 0, x: -999 }}
        onViewportLeave={onViewportLeave}
        className="h-2/4 w-full overflow-hidden md:h-full md:w-2/4"
      >
        <Image
          className="transition duration-500 ease-in-out hover:scale-105 active:scale-105"
          height={500}
          width={500}
          loading="lazy"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src={urlFor(image).url()}
          alt={title}
        />
      </m.div>
      <m.div
        id={`${title}-card-body`}
        initial={{ opacity: 0, x: 999 }}
        className="card-body h-2/4 w-full bg-gray-200 dark:bg-gray-800 md:h-full md:w-2/4"
      >
        <h2 className="card-title uppercase tracking-[2px]">{title}</h2>
        <div className="flex">
          {techMemo.map(({ html, _id }) => (
            <div
              key={_id}
              dangerouslySetInnerHTML={{ __html: html }}
              className="mr-2 h-6 w-6 fill-base-content"
            />
          ))}
        </div>
        <p className="text-base-content/75">{description}</p>
        {demoUrl && demoUrl.length > 0 && (
          <div className="card-actions justify-center">
            <Link
              href={url}
              target="_blank"
              className="btn-white btn btn-outline btn-sm"
            >
              View Project
            </Link>
            <label
              htmlFor="my-modal"
              className={clsx(
                "btn-white btn btn-outline btn-sm",
                !demoUrl.length && "btn-disabled"
              )}
              onClick={handleOpen}
            >
              View Demo
            </label>
          </div>
        )}
      </m.div>
    </m.div>
  );
});

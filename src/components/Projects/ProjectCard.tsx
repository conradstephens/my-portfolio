import * as React from "react";
import type { Project, Tech } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "sanity";

interface Props {
  project: Project;
  tech: Tech[];
  index: number;
}

export default function ProjectCard(props: Props) {
  const { project, tech, index } = props;
  const { title, image, description, url, tech: projectTech } = project;

  const techMemo = React.useMemo(() => {
    return tech.filter((tech) =>
      projectTech.find((projectTech) => projectTech._ref === tech._id)
    );
  }, []);

  return (
    <div
      className={clsx(
        "card flex h-[550px] w-full overflow-hidden border-2 border-gray-300 dark:border-gray-700 md:h-[300px] md:card-side",
        index % 2 && "md:flex-row-reverse"
      )}
    >
      <div className="h-2/4 w-full overflow-hidden md:h-full md:w-2/4">
        <Image
          className="transition duration-500 ease-in-out hover:scale-105 active:scale-105"
          height={500}
          width={500}
          loading="lazy"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src={urlFor(image).url()}
          alt={title}
        />
      </div>
      <div className="card-body h-2/4 w-full bg-gray-200 dark:bg-gray-800 md:h-full md:w-2/4">
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
        <div className="card-actions justify-center">
          <Link
            href={url}
            target="_blank"
            className="btn-white btn-outline btn-sm btn"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

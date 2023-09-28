"use client";

import { m } from "framer-motion";
import { ProjectCard } from "src/components";
import type { Project, Tech } from "@/types";
import { useDemoModal } from "@/context";

interface Props {
  projects: Project[];
  tech: Tech[];
}

export default function Projects(props: Props) {
  const { projects, tech } = props;
  const { setDemoSrc } = useDemoModal();

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex max-w-screen-md flex-col items-start">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-5xl font-medium">Projects</h3>
          <p className="py-2 text-lg leading-8 text-base-content/75">
            Below are some of my past and present projects I have developed.
          </p>
        </m.div>

        <div className="space-y-5">
          {projects?.map((project, index) => (
            <div className="z-0" key={index}>
              <ProjectCard
                project={project}
                tech={tech}
                index={index}
                setDemoSrc={setDemoSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

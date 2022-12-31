import { m } from "framer-motion";
import { ProjectCard } from "@/components";
import type { Project, Tech } from "@/types";

interface Props {
  projects: Project[];
  tech: Tech[];
}

export default function Projects(props: Props) {
  const { projects, tech } = props;

  return (
    <div className="hero">
      <div className="hero-content flex max-w-screen-md flex-col items-start">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-5xl font-medium">Projects</h3>
          <p className="py-2 text-lg leading-8 text-base-content/75">
            Below are some of my past and present projects I have developed.
          </p>
        </m.div>

        <div className="space-y-5">
          {projects?.map((project, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectCard project={project} tech={tech} index={index} />
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

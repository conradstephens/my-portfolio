import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  projectLink: string;
  skills: ((props: { className?: string | undefined }) => JSX.Element)[];
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, imageSrc, projectLink, skills } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="card h-[550px] w-full overflow-hidden border-2 border-gray-300 dark:border-gray-700 md:h-[300px] md:card-side"
    >
      <div className="h-2/4 w-full overflow-hidden md:h-full md:w-2/4">
        <Image
          className="transition duration-500 ease-in-out hover:scale-105 active:scale-105"
          height={500}
          width={500}
          loading="lazy"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="card-body h-2/4 w-full bg-gray-200 dark:bg-gray-800 md:h-full md:w-2/4">
        <h2 className="card-title uppercase tracking-[2px]">{title}</h2>
        <div className="flex">
          {skills.map((Skill, index) => (
            <Skill key={index} className="mr-2 h-6 w-6 fill-base-content" />
          ))}
        </div>
        <p className="text-base-content/75">{description}</p>
        <div className="card-actions justify-center">
          <Link
            href={projectLink}
            target="_blank"
            className="btn-white btn-outline btn-sm btn"
          >
            View Project
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

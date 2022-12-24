import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="hero">
      <div className="hero-content flex max-w-screen-md flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-5xl font-medium">Projects</h3>
          <p className="text-md py-2 leading-8 text-base-content/75">
            Below are some of my past and present{" "}
            <span className="text-primary">projects</span> I have developed
          </p>
        </motion.div>

        <ProjectCard
          title="Killerpapers"
          description="cdEnv is a safe, self-hosting system for storing keys and
              variables for various environments and projects. It has an HTTP
              API and a command-line interface that makes it simple to use."
          imageSrc="https://gateway.pinata.cloud/ipfs/QmWdFXfFeccuaP2VYrgGqdv8Cikf3GNPa1CSUQxkEwdAtk"
          projectLink=""
        />
      </div>
    </div>
  );
}

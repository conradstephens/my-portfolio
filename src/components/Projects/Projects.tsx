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
          description="Killerpapers is a service where students can receive academic writing help from professional writers. I was responsible for both frontend and backend development on this project."
          imageSrc="https://gateway.pinata.cloud/ipfs/QmWdFXfFeccuaP2VYrgGqdv8Cikf3GNPa1CSUQxkEwdAtk"
          projectLink=""
        />
      </div>
    </div>
  );
}

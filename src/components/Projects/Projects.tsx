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
            <span className="text-primary">projects</span> I have developed.
          </p>
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ProjectCard
              title="Killerpapers"
              description="Killerpapers is a service where students can receive academic writing help from professional writers. I was responsible for both frontend and backend development on this project."
              imageSrc="https://gateway.pinata.cloud/ipfs/QmNqTpPUq8JuSqdTL4BUm7ShLo5mnacAqzKLEB1FvjmJfe"
              projectLink="https://app.killerpapers.org"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ProjectCard
              title="NFT Canvas"
              description="NFT Canvas was an idea where people can paint a drawing on a digital canvas and then mint their drawing as an NFT. I wrote the entire frontend and smart contracts in Solidity"
              imageSrc="https://gateway.pinata.cloud/ipfs/QmfGMe1Jf7CnHzsNTbbgsMfu2L1E81mnsVahxJqLW1Umbv"
              projectLink="https://daoproject-frontend-one.vercel.app"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

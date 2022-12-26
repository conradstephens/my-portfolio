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
            Below are some of my past and present projects I have developed.
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
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ProjectCard
              title="NFT Canvas"
              description="NFT Canvas is an idea where people can paint a drawing on a digital canvas and then mint their drawing as an NFT. I wrote the entire frontend and smart contracts in Solidity"
              imageSrc="https://gateway.pinata.cloud/ipfs/QmfGMe1Jf7CnHzsNTbbgsMfu2L1E81mnsVahxJqLW1Umbv"
              projectLink="https://daoproject-frontend-one.vercel.app"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ProjectCard
              title="Moments"
              description="Moments is a platform where gamers can get upload hightlights of their gameplay and get highlight tapes auto generated in return."
              imageSrc="https://gateway.pinata.cloud/ipfs/QmUm7DbuNnoXd3uZdNjrtexNfjyT7jcRumxDYyXJetqtbw"
              projectLink="https://ggreelmoments.com/"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ProjectCard
              title="PickupPal"
              description="PickupPal is a platform where people can find or create local pickup basketball games at our public recreation centers. We scraped the data from our local rec centers to retrieve the open time slots and allow users to create games for those time slots."
              imageSrc="https://gateway.pinata.cloud/ipfs/QmTzFQchJgExXr13rne8BgyYSXtsihDDk4yvgCNJpYJSK1"
              projectLink="https://app.pickuppal.io/"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { m } from "framer-motion";
import { ProjectCard } from "@/components";

export default function Projects() {
  const projects = [
    {
      title: "Killerpapers",
      description:
        "Killerpapers is a service where students can receive academic writing help from professional writers.",
      imageSrc:
        "https://gateway.pinata.cloud/ipfs/QmNqTpPUq8JuSqdTL4BUm7ShLo5mnacAqzKLEB1FvjmJfe",
      projectLink: "https://app.killerpapers.org",
      skills: [],
    },
    {
      title: "NFT Canvas",
      description:
        "NFT Canvas is an idea where people can paint a drawing on a digital canvas and then mint their drawing as an NFT.",
      imageSrc:
        "https://gateway.pinata.cloud/ipfs/QmfGMe1Jf7CnHzsNTbbgsMfu2L1E81mnsVahxJqLW1Umbv",
      projectLink: "https://daoproject-frontend-one.vercel.app",
      skills: [],
    },
    {
      title: "Moments",
      description:
        "Moments is a platform where gamers upload hightlights of their gameplay and recieve an auto generated highlight tape.",
      imageSrc:
        "https://gateway.pinata.cloud/ipfs/QmUm7DbuNnoXd3uZdNjrtexNfjyT7jcRumxDYyXJetqtbw",
      projectLink: "https://ggreelmoments.com/",
      skills: [],
    },
    {
      title: "PickupPal",
      description:
        "PickupPal is a platform where people can find or create local pickup basketball games at public recreation centers.",
      imageSrc:
        "https://gateway.pinata.cloud/ipfs/QmTzFQchJgExXr13rne8BgyYSXtsihDDk4yvgCNJpYJSK1",
      projectLink: "https://app.pickuppal.io/",
      skills: [],
    },
  ];
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
          {projects.map((project, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectCard {...project} index={index} />
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

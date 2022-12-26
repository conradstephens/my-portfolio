import Image from "next/image";
import { SocialLink } from "@/components";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero mt-12 sm:h-screen">
      <div className="hero-content flex max-w-screen-md flex-col md:flex-row">
        <div className="max-w-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 50 }}
            transition={{ duration: 0.3 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
          >
            <h1 className="py-2 text-5xl font-medium">
              Conrad{" "}
              <span className="inline-block transition-all duration-200 hover:scale-110">
                Stephens
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 50 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
          >
            <h2 className="py-2 text-2xl text-primary">Frontend Developer</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 50 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
          >
            <p className="text-md py-5 leading-8 text-base-content/75">
              Hey! Thank you for taking the time to visit my personal website.
              As a front-end developer, I create{" "}
              <span className="text-accent">beautiful</span> websites and{" "}
              <span className="text-accent">scalable</span> web applications 💻
            </p>
          </motion.div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Link
                href="/#contact"
                className="btn-primary btn normal-case hover:animate-pulse"
              >
                {"Let's get in touch!🚀"}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              className="gap-0.1 flex justify-center"
            >
              <SocialLink
                href="https://twitter.com/conradastephens"
                iconClassName="fa-brands fa-twitter text-base-content/75"
              />
              <SocialLink
                href="https://github.com/conradstephens"
                iconClassName="fa-brands fa-github text-base-content/75"
              />
              <SocialLink
                href="https://www.linkedin.com/in/conrad-stephens-97033b79"
                iconClassName="fa-brands fa-linkedin text-base-content/75"
              />
              <SocialLink
                href={`https://apollo5cbus.slack.com/team/${process.env.NEXT_PUBLIC_SLACK_USER_ID}`}
                iconClassName="fa-brands fa-slack text-base-content/75"
              />
              <SocialLink
                href="https://discordapp.com/users/conrad#7221"
                iconClassName="fa-brands fa-discord text-base-content/75"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-primary md:mt-0"
        >
          <Image
            alt="portrait"
            fill
            priority
            style={{ objectFit: "cover", marginLeft: 10 }}
            src="https://gateway.pinata.cloud/ipfs/QmTNXiXFaRfzBJbZZ5nTJJY2cxiypnbeo77W1JbmqvYmkv"
          />
        </motion.div>
      </div>
    </div>
  );
}

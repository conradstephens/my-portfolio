import Image from "next/image";
import { SocialLink } from "@/components";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero mt-12 sm:h-screen md:flex md:flex-col md:justify-center">
      <div className="hero-content">
        <div className="max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 50 }}
            transition={{ duration: 0.3 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
          >
            <h1 className="py-2 text-5xl font-medium">
              Conrad{" "}
              <h1 className="inline-block text-primary transition-all duration-200 hover:scale-110">
                Stephens.
              </h1>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 50 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
          >
            <h2 className="py-2 text-2xl text-primary">Fontend developer</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 50 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
          >
            <p className="text-md py-5 leading-8 text-gray-700 dark:text-gray-500">
              Hey! <span className="text-primary">Thank you!</span> for taking
              the time to visit my personal website. I`m a front-end developer
              that creates websites and{" "}
              <span className="text-primary">web applications</span> 💻
            </p>
          </motion.div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <label className="btn-primary btn normal-case hover:animate-pulse">
                {"Let's get in touch!🚀"}
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              className="gap-0.1 flex justify-center"
            >
              <SocialLink
                href="https://twitter.com/conradastephens"
                iconClassName="fa-brands fa-twitter"
              />
              <SocialLink
                href="https://github.com/conradstephens"
                iconClassName="fa-brands fa-github"
              />
              <SocialLink
                href="https://www.linkedin.com/in/conrad-stephens-97033b79"
                iconClassName="fa-brands fa-linkedin"
              />
              <SocialLink
                href="https://apollo5cbus.slack.com/team/UQXM0MWJY"
                iconClassName="fa-brands fa-slack"
              />
              <SocialLink
                href="https://discordapp.com/users/conrad#7221"
                iconClassName="fa-brands fa-discord"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-primary"
          >
            <Image
              alt="portrait"
              fill
              style={{ objectFit: "cover", marginLeft: 10 }}
              src="https://gateway.pinata.cloud/ipfs/QmTNXiXFaRfzBJbZZ5nTJJY2cxiypnbeo77W1JbmqvYmkv"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import { SocialLink } from "@/components";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function Hero() {
  const [copied, setCopied] = React.useState(false);

  let copyTimeout: NodeJS.Timeout;
  const onCopy = () => {
    clearTimeout(copyTimeout);
    setCopied(true);
    copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="hero h-screen">
      <div className="hero-content text-center">
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
              <span className="text-primary">web applications</span>💻
            </p>
          </motion.div>
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
            className="flex justify-center gap-6 py-3"
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
            <div className="dropdown-hover dropdown-bottom dropdown-end dropdown sm:dropdown-right">
              <label
                tabIndex={0}
                className="btn-ghost no-animation btn-circle btn text-3xl text-gray-600 hover:animate-bounce dark:text-gray-400"
              >
                <i className="fa-brands fa-discord" />
              </label>
              <ul
                tabIndex={0}
                className={clsx(
                  "dropdown-content menu rounded-box bg-base-100 p-2 shadow"
                )}
              >
                <li>
                  <label>
                    conrad#7221{" "}
                    <div
                      className="tooltip"
                      data-tip={copied ? "Copied" : "Copy"}
                    >
                      <label tabIndex={0} className="swap swap-rotate">
                        <input
                          className="invisible"
                          type="checkbox"
                          checked={copied}
                          onChange={onCopy}
                        />
                        <ClipboardIcon className="swap-off m-4 w-4" />
                        <CheckIcon className="swap-on m-4 w-4" />
                      </label>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </motion.div>
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

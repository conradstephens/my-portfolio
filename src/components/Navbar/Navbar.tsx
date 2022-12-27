import * as React from "react";
import { NavToggle, NavButtons, ThemeToggle } from "@/components";
import clsx from "clsx";
import { EyeIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const [showButtons, setShowButtons] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  let scrollTimeout: NodeJS.Timeout;
  const onScroll = (_e: Event) => {
    window.clearTimeout(scrollTimeout);
    setIsScrolling(true);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={clsx(
          "navbar fixed top-0 left-0 z-10 bg-base-100 opacity-0 transition duration-500 ease-out",
          !isScrolling && "opacity-100"
        )}
      >
        <div className="flex-1">
          <a
            className="btn-primary btn-sm btn normal-case"
            href="https://gateway.pinata.cloud/ipfs/QmUdtp417fYcD2u2yqnVntoZHkGom8aQV5z72MtuvuDR82"
            download="conradsresume.pdf"
            title="Download Resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <EyeIcon className="ml-1 h-5 w-5" />
          </a>
        </div>
        <div className="hidden md:block">
          <NavButtons
            showButtons={showButtons}
            setShowButtons={setShowButtons}
          />
        </div>
        <div className="flex-none">
          <ThemeToggle />
        </div>
        <div className="flex-none xl:hidden">
          <NavToggle
            showButtons={showButtons}
            setShowButtons={setShowButtons}
          />
        </div>
      </div>
    </>
  );
}

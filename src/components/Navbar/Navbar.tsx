import * as React from "react";
import { NavToggle, NavButtons, ThemeToggle } from "@/components";
import { m } from "framer-motion";

export default function Navbar() {
  const [{ showButtons, showNav }, setNavState] = React.useState({
    showButtons: false,
    showNav: true,
  });

  React.useEffect(() => {
    window.addEventListener("wheel", (e: WheelEvent) => {
      setNavState((prevState) => {
        return { ...prevState, showNav: e.deltaY <= 0 };
      });
    });
    return window.removeEventListener("wheel", (e: WheelEvent) => {
      setNavState((prevState) => {
        return { ...prevState, showNav: e.deltaY <= 0 };
      });
    });
  }, []);

  return (
    <>
      <m.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        animate={showNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        className="navbar fixed top-0 left-0 z-10 bg-base-100"
      >
        <div className="flex-1">
          <a
            className="btn-link btn-sm btn normal-case no-underline"
            href="https://storage.googleapis.com/conrad_portfolio_bucket/portfolio_images/resume.pdf"
            download="conradsresume.pdf"
            title="Download Resume"
            target="_blank"
            rel="noreferrer"
          >
            <span className="border-b-transparent transition duration-300 ease-in-out hover:border-b-[1px] hover:border-b-primary">
              {"Here's my resume!"}
            </span>
          </a>
        </div>
        <div className="hidden md:block">
          <NavButtons showButtons={showButtons} setNavState={setNavState} />
        </div>
        <div className="flex-none">
          <ThemeToggle />
        </div>
        <div className="flex-none xl:hidden">
          <NavToggle showButtons={showButtons} setNavState={setNavState} />
        </div>
      </m.div>
    </>
  );
}

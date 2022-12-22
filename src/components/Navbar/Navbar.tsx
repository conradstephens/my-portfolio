import * as React from "react";
import { NavToggle, NavButtons, ThemeToggle, NavModal } from "@/components";
import clsx from "clsx";

export default function Navbar() {
  const [showButtons, setShowButtons] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [isDocked, setIsDocked] = React.useState(true);

  let scrollTimeout: NodeJS.Timeout;
  const onScroll = (_e: Event) => {
    window.clearTimeout(scrollTimeout);
    setIsScrolling(true);
    setIsDocked(window.scrollY === 0);
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
          "navbar fixed top-0 left-0 z-50 bg-base-100 opacity-0 transition duration-500 ease-out",
          !isScrolling && "opacity-100",
          !isDocked && "shadow-xl"
        )}
      >
        <div className="flex-1" />
        {/* <div className="hidden sm:block">
          <NavButtons showButtons={showButtons} />
        </div> */}
        <div className="flex-none">
          <ThemeToggle />
        </div>
        {/* <div className="flex-none xl:hidden">
          <NavToggle
            showButtons={showButtons}
            setShowButtons={setShowButtons}
          />
        </div> */}
      </div>
      <NavModal open={showButtons} setOpen={setShowButtons} />
    </>
  );
}

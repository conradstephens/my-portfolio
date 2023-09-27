"use client";
import * as React from "react";
import { NavToggle, NavButtons, ThemeToggle } from "src/components";
import { m } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

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
        className="navbar fixed left-0 top-0 z-10 bg-base-100"
      >
        <div className="flex-1">
          <a
            className="btn btn-link btn-sm normal-case no-underline"
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
        <div>
          <Sheet>
            <SheetTrigger className="btn-ghost">Chat with AI</SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle className="font-bold">Chat with AI</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
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

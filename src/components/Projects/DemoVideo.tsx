"use client";

import * as React from "react";
import clsx from "clsx";
import { useDemoModal } from "@/context";

export default function DemoVideoModal() {
  const { demoSrc, setDemoSrc } = useDemoModal();

  // Get reference to video
  const videoRef = React.useRef<HTMLVideoElement>(null);
  // State for video load
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Handle video load
  const handleLoadedData = () => {
    // Exit if video ref is not set
    if (!videoRef.current) {
      return;
    }
    setIsLoaded(true);
    videoRef.current.play();
  };

  // Handle modal close
  const handleClose = () => {
    setDemoSrc("");
    setIsLoaded(false);
  };

  return (
    <label
      className={clsx("modal cursor-pointer", demoSrc && "modal-open")}
      onClick={handleClose}
    >
      <div className="modal-box max-w-5xl">
        <div
          className={clsx(
            "rounded bg-slate-400 dark:bg-slate-700",
            isLoaded && "animate-none",
            !isLoaded && "animate-pulse"
          )}
        >
          <video
            ref={videoRef}
            src={demoSrc}
            muted
            loop
            width={1000}
            height={1000}
            onLoadedData={handleLoadedData}
            className="rounded"
          />
        </div>
      </div>
    </label>
  );
}

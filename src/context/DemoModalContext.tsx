"use client";

import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface Props {
  demoSrc: string;
  setDemoSrc: Dispatch<SetStateAction<string>>;
}

export const DemoModalContext = createContext<Props>({
  demoSrc: "",
  setDemoSrc: () => {},
});

export function DemoModalProvider({ children }: { children: ReactNode }) {
  // State for demo video src
  const [demoSrc, setDemoSrc] = useState("");

  // Return provider
  return (
    <DemoModalContext.Provider value={{ demoSrc, setDemoSrc }}>
      {children}
    </DemoModalContext.Provider>
  );
}
// Context hook
export const useDemoModal = () => useContext(DemoModalContext);

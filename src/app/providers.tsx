"use client";

import * as React from "react";
import { useTheme, ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { DemoModalProvider } from "@/context";

interface Props {
  children: React.ReactNode;
}

function ThemeSelector({ children }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary to avoid hydration error between ssr and client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div data-theme={resolvedTheme === "light" ? "winter" : "night"}>
      {children}
    </div>
  );
}

export default function Provider({ children }: Props) {
  return (
    <ThemeProvider attribute="class" enableColorScheme>
      <ThemeSelector>
        <LazyMotion features={domAnimation}>
          <DemoModalProvider>
            {children}
            <Analytics />
          </DemoModalProvider>
        </LazyMotion>
      </ThemeSelector>
    </ThemeProvider>
  );
}

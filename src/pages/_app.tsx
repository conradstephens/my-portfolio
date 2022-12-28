import "../styles/globals.css";
import { AppProps } from "next/app";
import { SEO, ThemeProvider } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import { LazyMotion, domAnimation } from "framer-motion";
import Script from "next/script";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <SEO />
      <Script
        src="https://kit.fontawesome.com/9f3dc8ac1d.js"
        crossOrigin="anonymous"
        defer
      />
      <ThemeProvider>
        <LazyMotion features={domAnimation}>
          <Component {...pageProps} />
          <Analytics />
        </LazyMotion>
      </ThemeProvider>
    </>
  );
}

import "../styles/globals.css";
import { AppProps } from "next/app";
import { SEO, ThemeProvider } from "@/components";
import { Analytics } from "@vercel/analytics/react";

declare global {
  interface Window {
    grecaptcha?: any;
  }
}

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <SEO />
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}

import "../styles/globals.css";
import { AppProps } from "next/app";
import { SEO, ThemeProvider } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
      <Script
        src="https://kit.fontawesome.com/9f3dc8ac1d.js"
        crossOrigin="anonymous"
        defer
      />
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}

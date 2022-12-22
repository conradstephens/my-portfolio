import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { SEO, ThemeProvider } from "@/components";
import store from "src/redux/app/store";

declare global {
  interface Window {
    KUTE: any;
  }
}

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <SEO />
      <ReduxProvider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}

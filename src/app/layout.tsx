import "./globals.css";
import Providers from "./providers";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <Script
        src="https://kit.fontawesome.com/9f3dc8ac1d.js"
        crossOrigin="anonymous"
        defer
      />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

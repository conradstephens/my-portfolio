import { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";

const title = "Conrad Stephens | FullStack Engineer";
const description =
  "A professional full-stack engineeer creating eye-catching websites and scalable web applications";
const url = "https://conradstephens.dev";

export const metadata: Metadata = {
  title,
  description,
  viewport: {
    initialScale: 1,
    width: "device-width",
  },
  icons: [
    "https://gateway.pinata.cloud/ipfs/QmW6A5q5PBBoRW6YTZT2XwePbTquW2y6MaJmA1ohd5YWCK",
  ],
  twitter: {
    card: "summary_large_image",
    creator: "Conrad Stephens",
    creatorId: "@conradastephens",
    description,
    images: [
      "https://gateway.pinata.cloud/ipfs/QmPYTi3ygBBSPeFWNocp8euKCp8LEmjpeB7L1AtGJt9p7a",
    ],
  },
  openGraph: {
    url,
    images: [
      "https://gateway.pinata.cloud/ipfs/QmPYTi3ygBBSPeFWNocp8euKCp8LEmjpeB7L1AtGJt9p7a",
    ],
    siteName: "",
    title,
    description,
  },
  creator: "Conrad Stephens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

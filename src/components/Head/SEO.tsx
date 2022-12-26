import Head from "next/head";

export default function DefaultSEO() {
  const title = "Conrad Stephens | Frontend Developer";
  const description =
    "A professional frontend developer creating eye-catching websites and scalable web applications";
  const url = "https://conradstephens.dev";
  const twitterHandle = "@conradastephens";
  return (
    <>
      <Head>
        <link
          href="https://gateway.pinata.cloud/ipfs/QmW6A5q5PBBoRW6YTZT2XwePbTquW2y6MaJmA1ohd5YWCK"
          rel="shortcut icon"
          type="image/x-icon"
        ></link>
        <link
          href="https://gateway.pinata.cloud/ipfs/QmW6A5q5PBBoRW6YTZT2XwePbTquW2y6MaJmA1ohd5YWCK"
          rel="apple-touch-icon"
        ></link>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
        <meta name="twitter:site" content={twitterHandle} key="twurl" />
        <meta name="twitter:title" content={title} key="twtitle" />
        <meta name="twitter:description" content={description} key="twdesc" />
        <meta // large twitter image should be at least 280px by 150px
          name="twitter:image"
          content="https://gateway.pinata.cloud/ipfs/Qma53FRDXJyiP9f9HNr6PptzVZuCFX34QekGCMHQdSDi34"
          key="twimage"
        />

        {/* open graph */}
        <meta property="og:url" content={url} key="ogurl" />
        <meta // best size is 1200px by 627px
          property="og:image"
          content="https://gateway.pinata.cloud/ipfs/QmeFQAtqkFN8j7Z9mJ5y7LgC6JtGPg2NxyPPgVqC8WPDa8"
          key="ogimage"
        />
        <meta property="og:site_name" content="" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{title}</title>
      </Head>
    </>
  );
}

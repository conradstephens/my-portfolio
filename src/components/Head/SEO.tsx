import Head from "next/head";

export default function DefaultSEO() {
  const title = "Conrad Stephens | FullStack Engineer";
  const description =
    "A professional full-stack engineeer creating eye-catching websites and scalable web applications";
  const url = "https://conradstephens.dev";
  const twitterHandle = "@conradastephens";
  return (
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
        content="https://gateway.pinata.cloud/ipfs/QmPYTi3ygBBSPeFWNocp8euKCp8LEmjpeB7L1AtGJt9p7a"
        key="twimage"
      />

      {/* open graph */}
      <meta property="og:url" content={url} key="ogurl" />
      <meta // best size is 1200px by 627px
        property="og:image"
        content="https://gateway.pinata.cloud/ipfs/QmPYTi3ygBBSPeFWNocp8euKCp8LEmjpeB7L1AtGJt9p7a"
        key="ogimage"
      />
      <meta property="og:site_name" content="" key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <title>{title}</title>
    </Head>
  );
}

import Head from "next/head";

export default function DefaultSEO() {
  const title = "Website Starter";
  const description =
    "A starter template using NextJS, Tailwind CSS and Redux Toolkit";
  return (
    <Head>
      {/* <link
    href="https://firebasestorage.googleapis.com/v0/b/apollo5-marketing.appspot.com/o/apollo5logo.png?alt=media&token=f8021b57-5dd1-406f-9aff-0a4c7c3e363c"
    rel="shortcut icon"
    type="image/x-icon"
  ></link>
  <link
    href="https://firebasestorage.googleapis.com/v0/b/apollo5-marketing.appspot.com/o/apollo5logo.png?alt=media&token=f8021b57-5dd1-406f-9aff-0a4c7c3e363c"
    rel="apple-touch-icon"
  ></link> */}
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />

      {/* twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      {/* <meta
      name="twitter:creator"
      content="@conradastephens"
      key="twhandle"
    /> */}

      {/* open graph */}
      {/* <meta property="og:url" content="https://apollo5.dev" key="ogurl" /> */}
      {/* <meta
    property="og:image"
    content="https://firebasestorage.googleapis.com/v0/b/apollo5-marketing.appspot.com/o/apollo5seo.png?alt=media&token=8b57a908-332b-44e7-80da-da8ccb1173a7"
    key="ogimage"
  /> */}
      <meta
        property="og:site_name"
        content="Website Starter"
        key="ogsitename"
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <title>{title}</title>
    </Head>
  );
}

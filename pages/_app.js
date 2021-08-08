import '../src/index.css';
import React from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Ravindra</title>
    </Head>
    <Component {...pageProps} />
  </>)
}

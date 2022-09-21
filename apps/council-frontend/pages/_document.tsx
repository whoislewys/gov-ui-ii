import { ReactElement } from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): ReactElement {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

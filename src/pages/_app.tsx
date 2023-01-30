import { AppProps } from "next/app";
import Head from "next/head";

import { GlobalStyles } from "styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avancado - BoilerPlate</title>
        <link rel="shortcut icon" href="/" />
        <meta
          name="description"
          content="A simple project starter to work with typescript, react, next js and styled components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

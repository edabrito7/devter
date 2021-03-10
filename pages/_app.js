import Head from "next/head";

import AppLayout from 'components/AppLayout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;

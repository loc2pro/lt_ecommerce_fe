// New UI 2022
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import '../style/global.scss';
import { StateProvider } from '@/store';
import { StateProductProvider } from '@/productStore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const MyApp = ({ Component, pageProps }: AppProps) => {
  const shouldIndexing = false;
  //use State store
  return (
    <SSRProvider>
      <StateProvider>
        <StateProductProvider>
          <Head>
            <title>Loc Nguyen Ecommerce</title>
            <meta charSet="UTF-8" key="custom-charset" />
            {shouldIndexing && <meta name="robots" content="index,follow" key="meta-indexing" />}
          </Head>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </StateProductProvider>
      </StateProvider>
    </SSRProvider>
  );
};

export default MyApp;

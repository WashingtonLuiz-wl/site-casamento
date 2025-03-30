import React from 'react';

import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Padrinhos from '@/components/Padrinhos';
import Banner from '@/components/Padrinhos/Banner';

// import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <>
      <Head>
        <title>Eduarda & Washington</title>

        <meta
          name="description"
          content="Site casamento Eduarda & Washington"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* <Banner /> */}

        <Padrinhos />
      </main>

      <Footer />
    </>
  );
};

export default pages;

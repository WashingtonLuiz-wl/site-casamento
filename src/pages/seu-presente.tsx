import React from 'react';

import Head from 'next/head';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PresentearContainer from '@/components/Presente';

const Presente: React.FC = () => {
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

      <PresentearContainer />

      <Footer />
    </>
  );
};

export default Presente;

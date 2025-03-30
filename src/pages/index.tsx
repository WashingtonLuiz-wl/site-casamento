import Head from 'next/head';

import About from '@/components/About';
import Banner from '@/components/Banner';
import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Container } from '@/styles/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eduarda & Washington</title>

        <meta
          name="description"
          content="Site casamento Eduarda e Washington"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Banner />
        <About />

        <Countdown />
      </Container>
      <Footer />
    </>
  );
}

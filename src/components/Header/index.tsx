import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';

const Header: React.FC = () => {
  const [compraVisible, setCompraVisible] = useState(false);

  useEffect(() => {
    const { 'E&W.GiftGiven': giftGiven } = parseCookies();

    const parsedGiftGiven = giftGiven ? JSON.parse(giftGiven) : undefined;

    setCompraVisible(parsedGiftGiven?.list.length > 0);
  }, []);

  return (
    <Container>
      <Image
        src="/assets/1.png"
        alt="EeW"
        width={200}
        height={200}
        className="mask"
      />

      <Image
        src="/assets/2.png"
        alt="EeW"
        width={200}
        height={200}
        className="mask rigth"
      />

      <section>
        <Link href="/">
          <h1>Eduarda & Washington</h1>
          {/* <Image src="/assets/logo.png" alt="EeW" width={150} height={150} /> */}
        </Link>

        <nav>
          <Link href="/">Nossa Historia</Link>

          <Link href="/padrinhos">Padrinhos</Link>

          <Link href="/lista-de-presentes">Lista de Presentes</Link>

          {compraVisible && <Link href="/seu-presente">Seu presente</Link>}
        </nav>
      </section>
    </Container>
  );
};

export default Header;

import React from 'react';
import { FaChevronDown, FaHeart } from 'react-icons/fa';

import Image from 'next/image';

import { Container } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      {/* <Image alt="banner-casamento" fill quality={100} src="/assets/bg.png" /> */}

      <div className="content-banner">
        {/* <span className="welcome">Seja bem vindo ao nosso site</span> */}

        <h2>Padrinhos</h2>
      </div>
    </Container>
  );
};

export default Banner;

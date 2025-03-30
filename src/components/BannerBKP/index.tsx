import React from 'react';
import { FaChevronDown, FaHeart } from 'react-icons/fa';

import Image from 'next/image';

import { Container } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <Image
        alt="banner-casamento"
        fill
        quality={100}
        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />

      <div className="content-banner">
        {/* <span className="welcome">Seja bem vindo ao nosso site</span> */}
        <Image
          alt="banner-casamento"
          width={500}
          height={120}
          quality={100}
          src="/assets/welcome.png"
        />
        <FaHeart size={70} />

        <h2>Washington & Eduarda</h2>
        <p className="countdown">Faltam 360 dias</p>
        <p className="day">04/11/2023</p>
        <FaChevronDown size={40} />
      </div>
    </Container>
  );
};

export default Banner;

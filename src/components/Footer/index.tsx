import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/logo.webp';

import { Container, Copyright } from './styles';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Image src={Logo} alt="EeW" />
      </Container>

      <Copyright>
        <Link
          href="https://www.instagram.com/_washington.luiz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Washington Luiz
        </Link>
      </Copyright>
    </footer>
  );
};

export default Footer;

import React from 'react';

import Image from 'next/image';

import Img from '@/assets/banner/1.webp';
import Img2 from '@/assets/banner/2.webp';
import Img3 from '@/assets/banner/3.webp';

import { Container } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <section>
        <div className="images">
          <div className="img">
            <Image alt="banner-casamento" placeholder="blur" src={Img} />
            <span>04</span>
          </div>
          <div className="img">
            <Image alt="banner-casamento" placeholder="blur" src={Img2} />
            <span>11</span>
          </div>
          <div className="img">
            <Image alt="banner-casamento" placeholder="blur" src={Img3} />
            <span>23</span>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;

import React from 'react';

import Image from 'next/image';

import testeImg from '@/assets/flor.png';
import acoracaoLinha from '@/assets/itens/coracao-linha.webp';
import acoracoes from '@/assets/itens/coracoes.png';
import aflor from '@/assets/itens/flores.png';
import alinha from '@/assets/itens/linha.png';
import Estefany from '@/assets/padrinhos/1.jpeg';
import Img10 from '@/assets/padrinhos/10.webp';
import Img11 from '@/assets/padrinhos/11.webp';
import Img12 from '@/assets/padrinhos/12.webp';
import Img13 from '@/assets/padrinhos/13.webp';
import Img14 from '@/assets/padrinhos/14.webp';
import Img15 from '@/assets/padrinhos/15.jpeg';
import Img5 from '@/assets/padrinhos/5-1.webp';
import Img6 from '@/assets/padrinhos/6.webp';
import Img7 from '@/assets/padrinhos/7.webp';
import Img8 from '@/assets/padrinhos/8.webp';
import Img9 from '@/assets/padrinhos/9.webp';
import PolianaEJoãoEvio from '@/assets/padrinhos/PolianaEJoãoEvio.webp';
import SilvanaESergio from '@/assets/padrinhos/SilvanaESergio.webp';
import TaisJoao from '@/assets/padrinhos/Tais&Joao.webp';

import Card from './Card';
import { Container } from './styles';

const Padrinhos: React.FC = () => {
  const padrinhos = [
    {
      id: 1,
      name: 'Estefany',
      img: Estefany,
    },

    {
      id: 2,
      name: 'Poliana & João Evio',
      img: PolianaEJoãoEvio,
    },

    {
      id: 3,
      name: 'Silvana & Sérgio',
      img: SilvanaESergio,
    },

    {
      id: 4,
      name: 'Taís & João',
      img: TaisJoao,
    },

    {
      id: 6,
      name: 'Cristiane & Denilson',
      img: Img6,
    },

    {
      id: 5,
      name: 'Michele & Claudio',
      img: Img5,
    },

    {
      id: 7,
      name: 'Ana Paula & Kennety',
      img: Img7,
    },

    {
      id: 8,
      name: 'Maria do Carmo & Claudinei',
      img: Img8,
    },
    {
      id: 9,
      name: 'Irene & Fernando',
      img: Img9,
    },
    {
      id: 10,
      name: 'Mirian & Osvaldo',
      img: Img10,
    },
    {
      id: 11,
      name: 'Wesley',
      img: Img11,
    },
    {
      id: 12,
      name: 'Raissa & Hudson',
      img: Img12,
    },

    {
      id: 13,
      name: 'Solange & Jair',
      img: Img13,
    },

    {
      id: 14,
      name: 'Stephanie & Cristiano',
      img: Img14,
    },

    {
      id: 15,
      name: 'Dayane & Robson',
      img: Img15,
    },
  ];
  return (
    <Container>
      <section>
        <div className="title">
          <h2>Padrinhos</h2>

          <p>
            Aqui estão as pessoas que vão fazer o nosso dia ainda mais especial.
          </p>
        </div>

        <Image src={acoracaoLinha} alt="corações" />
        <div className="cards">
          {padrinhos.map(padrinho => (
            <Card data={padrinho} key={padrinho.id} />
          ))}
        </div>

        {/* <Image src={acoracaoLinha} alt="corações" /> */}

        {/* <div className="text">
          Queridos padrinhos,
          <br />
          No meio de tanta gente querida, algumas acabam exercendo um papel mais
          significativo e mais duradouro em nossas vidas. Seja pelas
          semelhanças, seja pelas diferenças, seja pelo carinho ou pelo amor que
          tem por nós, se tornam especiais. <br /> Pensamos com muito carinho em
          cada um de vocês que escolhemos para estar ao nosso lado no altar, são
          pessoas que admiramos, confiamos e temos um carinho muito grande.{' '}
          <br />
          Que bom que Deus nos abençoou com pessoas como vocês! É com imensa
          alegria que dividimos nosso sonho com vocês. <br /> Obrigado por
          aceitarem essa missão!
        </div> */}
      </section>
    </Container>
  );
};

export default Padrinhos;

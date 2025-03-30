import React from 'react';

import Image from 'next/image';

import { Container } from './styles';

interface ICardProps {
  data: { img: any; name: string };
}

const Card: React.FC<ICardProps> = ({ data, ...rest }) => {
  return (
    <Container id={data.name} {...rest}>
      <Image
        src={data.img}
        alt={`Foto de ${data.name}`}
        width={450}
        height={350}
      />

      <p>{data.name}</p>
    </Container>
  );
};

export default Card;

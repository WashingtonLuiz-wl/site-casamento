import { setCookie } from 'nookies';
import React, { useCallback } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/Button';

import Faixa from '@/assets/itens/Recebido.png';

import { Container } from './styles';

export interface IProduct {
  id: string;
  title: string;
  desc: string;
  brand: string;
  variations?: string;
  available: boolean;
  imagem: string;
  priority: number;
  type: string;
  value: string;
  index: number;

  link?: string;

  gift_voucher?: boolean;

  formatedTotalValue?: string;
}

interface ICardProps {
  data: IProduct;
}

const Card: React.FC<ICardProps> = ({ data }) => {
  const formatedTotalValue = parseFloat(data.value)?.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const { push } = useRouter();

  const handlePresentear = useCallback(() => {
    setCookie(
      undefined,
      'E&W.Presente',
      JSON.stringify({ ...data, formatedTotalValue }),
    );

    push('/presentear');
  }, [data, push, formatedTotalValue]);

  return (
    <Container>
      <div className="img">
        {data.available === false && (
          <Image src={Faixa} alt="Recebido" className="recebido" />
        )}
        <Image
          src={data.imagem}
          alt={`Foto de ${data.title}`}
          placeholder="blur"
          blurDataURL={data.imagem}
          width={200}
          height={200}
          className="img-product"
        />
      </div>

      {/* <p>
        {data.title} {data.desc} {data.brand && ` - ${data.brand}`}
        {data.variations && ` - ${data.variations}`}
      </p> */}

      <p>
        {data.title} {data.desc} {data.brand && ` - ${data.brand}`}
        {data.variations && ` - ${data.variations}`}{' '}
      </p>

      <p className="priority">{data.priority}</p>

      <span>
        {formatedTotalValue}
        {!data?.gift_voucher && (
          <>
            <br /> <small>*Valores Aproximados</small>
          </>
        )}
      </span>

      <div className="buttons">
        {data.available && (
          <Button type="button" onClick={handlePresentear}>
            Presentear
          </Button>
        )}

        {/* y{data.link && <Link href={data.link}>Link</Link>} */}
      </div>
    </Container>
  );
};

export default Card;

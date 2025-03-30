import { parseCookies, setCookie } from 'nookies';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Image from 'next/image';
import Link from 'next/link';

import { useToast } from '@/hooks/toast';
import api from '@/services/api';
import getValidationErrors from '@/utils/getValidationErrors';

import Duda from '@/assets/presentear/Duda.webp';
import PixImg from '@/assets/presentear/pixDuda.jpeg';
import Washington from '@/assets/presentear/Washington.webp';

import Button from '../Button';
import Input from '../Form/Input';
import InputMask from '../Form/InputMask';
import TextArea from '../Form/TextArea';
import { IProduct } from '../Products/Card';
import { Container } from './styles';

const PresentearContainer: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [data, setData] = useState<{ list?: IProduct[] }>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { 'E&W.GiftGiven': giftGiven } = parseCookies();

    if (giftGiven) {
      const parsedPresente = JSON.parse(giftGiven);

      setData(parsedPresente);
    }
  }, []);

  return (
    <Container>
      <section>
        <div className="presentes">
          <h5>Seu presente</h5>

          <p>
            * A seguir, disponibilizamos o presente que gentilmente nos
            presenteou, juntamente com o link para a loja, além dos detalhes
            para a entrega. Caso já tenha efetuado a compra ou a transação via
            PIX, nosso muito obrigado.
          </p>
          {data?.list?.map(x => (
            <div className="produto">
              {x?.imagem && (
                <Image
                  src={x?.imagem}
                  alt={`Foto de ${x?.title}`}
                  placeholder="blur"
                  blurDataURL={x?.imagem}
                  width={200}
                  height={200}
                />
              )}

              <div className="text">
                <h3>
                  {x?.title} {x?.desc} {x?.brand && ` - ${x?.brand}`}
                  {x?.variations && ` - ${x?.variations}`}
                </h3>

                <span>
                  {x?.formatedTotalValue}
                  <br />
                  {!x?.gift_voucher && (
                    <small>*Valor Aproximado com frete</small>
                  )}
                </span>

                {x.link && (
                  <Link href={x.link} target="_blank">
                    <Button>Link para a loja</Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <>
          <div className="contact">
            <h4>Contato dos Noivos:</h4>

            <div className="content-contact">
              <div className="noiva">
                <div className="img">
                  <Image src={Duda} alt="Duda" placeholder="blur" />
                </div>
                <h5>Eduarda</h5>
                <Link href="https://wa.link/j6rajc" target="_blank">
                  <FaWhatsapp /> (35) 92002-9093
                </Link>

                <p>
                  <FaMapMarkerAlt />
                  Rua José Cesar Neto - N°29 <br /> Bairro São Benedito <br />
                  Cambuí-MG
                  <br />
                  CEP 37600-000
                </p>
              </div>

              <div className="noivo">
                <div className="img">
                  <Image src={Washington} alt="Washington" placeholder="blur" />
                </div>
                <h5>Washington</h5>
                <Link href="https://wa.link/wc565s" target="_blank">
                  <FaWhatsapp /> (35) 92000-0225
                </Link>

                <p>
                  <FaMapMarkerAlt />
                  Rua Guilherme Stringueta - N°80 <br /> Bairro Nossa Sra
                  Aparecida <br /> Cambuí-MG <br />
                  CEP 37600-000
                </p>
              </div>
            </div>
          </div>

          <div className="pagamento">
            <h4>Pix do casal:</h4>
            <div className="pix-or-link">
              <div className="img-pix">
                <Image src={PixImg} alt="pix" />
              </div>
            </div>
          </div>

          <div className="msg">
            <p>
              Este momento é muito importante para nós e recebemos o seu
              presente com muito carinho!
              <br />
              <br />
              Obrigado.
            </p>
          </div>
        </>
      </section>
    </Container>
  );
};

export default PresentearContainer;

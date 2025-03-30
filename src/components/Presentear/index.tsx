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

  const [data, setData] = useState<IProduct>();

  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');

  const [sucessForm, setSucessForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { 'E&W.Presente': presente } = parseCookies();

    if (presente) {
      const parsedPresente = JSON.parse(presente);

      setData(parsedPresente);
    }
  }, []);

  const handleSubmitContact = useCallback(
    async formData => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schemaContact = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório!'),
          phone: Yup.string().required('Telefone é obrigatório!'),
        });

        await schemaContact.validate(formData, {
          abortEarly: false,
        });

        await api.put(`/produtos/${data.id}.json`, {
          ...data,
          available: !!data?.gift_voucher,
        });

        await api.post('/compra.json', {
          ...formData,
          presente: {
            title: data.title,
            imagem: data.imagem,
            valor: data.value,
            dataDaCompra: new Date(),
          },
        });

        const { 'E&W.GiftGiven': giftGiven } = parseCookies();

        const parsedGiftGiven = giftGiven ? JSON.parse(giftGiven) : undefined;

        const newList = parsedGiftGiven
          ? [...(parsedGiftGiven.list || []), data]
          : [data];

        setCookie(
          undefined,
          'E&W.GiftGiven',
          JSON.stringify({ list: newList }),
        );

        addToast({
          title: 'Sucesso',
          description: 'Mensagem enviada com sucesso!',
          type: 'success',
        });

        setSucessForm(true);
      } catch (err: any) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          title: 'Falha',
          description: 'Verifique seus dados',
          type: 'error',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, data],
  );

  return (
    <Container>
      <section>
        <div className="produto">
          {data?.imagem && (
            <Image
              src={data?.imagem}
              alt={`Foto de ${data?.title}`}
              placeholder="blur"
              blurDataURL={data?.imagem}
              width={200}
              height={200}
            />
          )}

          <div className="text">
            <h3>
              {data?.title} {data?.desc} {data?.brand && ` - ${data?.brand}`}
              {data?.variations && ` - ${data?.variations}`}
            </h3>

            <span>
              {data?.formatedTotalValue}
              <br />
              {!data?.gift_voucher && (
                <small>*Valor Aproximado com frete</small>
              )}
            </span>
          </div>
        </div>

        {!sucessForm ? (
          <Form ref={formRef} onSubmit={handleSubmitContact}>
            <div className="data">
              <h5>Dados pessoais:</h5>

              <Input
                id="name"
                name="name"
                placeholder="Seu nome..."
                // label="Nome"
              />

              <InputMask
                id="phone"
                name="phone"
                placeholder="Seu Telefone..."
                // label="Telefone"
                // type="tel"
                mask={maskPhone}
                onBlur={e => {
                  if (e.target.value.replace('_', '').length === 14) {
                    setMaskPhone('(99) 9999-9999');
                  }
                }}
                onFocus={e => {
                  if (e.target.value.replace('_', '').length === 14) {
                    setMaskPhone('(99) 99999-9999');
                  }
                }}
              />
            </div>

            <div className="div-msg">
              <h5>Deixe sua mensegem para os noivos:</h5>
              <TextArea
                id="message"
                name="message"
                placeholder="Mensagem..."
                // label="Mensagem"
              />
            </div>

            <Button type="submit" loading={loading}>
              Continuar
            </Button>
          </Form>
        ) : (
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
                    <Image
                      src={Washington}
                      alt="Washington"
                      placeholder="blur"
                    />
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
              <h4>Pagamento:</h4>
              <div className="pix-or-link">
                <div className="img-pix">
                  <Image src={PixImg} alt="pix" />
                </div>

                {data?.link && (
                  <div className="link-da-loja">
                    <p>
                      Caso prefira comprar o produto na loja clique no link
                      abaixo para ser redirecionando para a loja
                      <br />
                    </p>

                    <Link href={data.link} target="_blank">
                      <Button>Link para a loja</Button>
                    </Link>
                  </div>
                )}
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
        )}
      </section>
    </Container>
  );
};

export default PresentearContainer;

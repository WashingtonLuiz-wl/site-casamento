import { ref, query, onValue } from 'firebase/database';
import { parseCookies } from 'nookies';
import React, { useCallback, useEffect, useState } from 'react';

import Head from 'next/head';

import 'firebase/storage';
import { Form } from '@unform/web';

import { useModal } from '@/hooks/modal';
import { database } from '@/utils/firebase';

import Footer from '@/components/Footer';
import Select, { IOptions } from '@/components/Form/Select';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Card, { IProduct } from '@/components/Products/Card';
import Content from '@/components/Products/Content';

import theme from '@/styles/theme';

interface ProdutosResponse {
  [key: string]: IProduct;
}

const Products: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const { addModal } = useModal();

  const limit = 9;

  const [optionsCategory] = useState<IOptions[]>([
    // {
    //   id: '1',
    //   value: 'Vale Presente',
    //   label: 'Vale Presente',
    // },
    {
      id: '1',
      value: 'all',
      label: 'Todos',
    },
    {
      id: '2',
      value: 'Sala',
      label: 'Sala',
    },
    {
      id: '3',
      value: 'Cozinha',
      label: 'Cozinha',
    },
    {
      id: '4',
      value: 'Lavanderia',
      label: 'Lavanderia',
    },
    {
      id: '5',
      value: 'Banheiro',
      label: 'Banheiro',
    },
    {
      id: '6',
      value: 'Quarto',
      label: 'Quarto',
    },
  ]);
  const [optionOrder] = useState<IOptions[]>([
    {
      id: '1',
      value: 'value',
      label: 'Valor',
    },
    {
      id: '2',
      value: 'priority',
      label: 'Relevancia',
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [selectedOrder, setSelectedOrder] = useState<string | undefined>();

  useEffect(() => {
    const { 'E&W.firstAccess': firstAccess } = parseCookies(undefined);

    if (firstAccess !== 'false') {
      addModal();
    }
  }, [addModal]);

  useEffect(() => {
    setLoading(true);

    const recentProductsRef = query(
      ref(database, 'produtos'),
      // orderByChild(filter),
      // limitToFirst(limit * page),
    );

    // Execute a consulta e escute as alterações nos dados
    onValue(recentProductsRef, snapshot => {
      const ProductsFirebase: ProdutosResponse = snapshot.val();

      // Verifique se existem produtos retornados pela consulta
      if (ProductsFirebase) {
        const produtosDataBase = Object.entries(ProductsFirebase).map(
          ([id, objeto]) => {
            return { ...objeto, id };
          },
        );

        let products = [];

        if (selectedCategory !== 'all') {
          products = produtosDataBase.filter(
            product => product.type === selectedCategory,
          );
        } else {
          products = produtosDataBase;
        }

        const orderedProducts = products.sort((a, b) => {
          if (selectedOrder === 'priority') {
            if (a.priority === b.priority) {
              return Number(b.value) - Number(a.value); // Classifica por valor se as prioridades forem iguais
            }
            return b.priority - a.priority;
          }

          if (Number(a.value) === Number(b.value)) {
            return b.priority - a.priority; // Classifica por valor se as prioridades forem iguais
          }
          return Number(a[selectedOrder]) - Number(b[selectedOrder]);
        });

        setData(orderedProducts);
      }
    });

    setLoading(false);
  }, [limit, selectedCategory, selectedOrder]);

  const onChangeCategory = useCallback((value: IOptions) => {
    setSelectedCategory(value.value);
  }, []);

  const onChangeOrder = useCallback((value: IOptions) => {
    setSelectedOrder(value.value);
  }, []);

  return (
    <>
      <Head>
        <title>Eduarda & Washington</title>

        <meta
          name="description"
          content="Site casamento Eduarda & Washington"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Content>
          <div className="titles">
            <h1>Lista de presentes</h1>

            <p>Bem vindo a nossa lista de presentes!</p>

            <p>
              Queridos familiares e amigos, para nós, a presença de vocês neste
              dia tão especial é o maior presente que poderíamos receber. Mas,
              se vocês também quiserem nos presentear, ficaremos muito
              agradecidos.
            </p>
          </div>

          {/* <Image src={acoracaoLinha} alt="corações" /> */}

          <div className="filter">
            <Form
              onSubmit={onChangeCategory}
              initialData={{
                order: 'priority',
                category: 'all',
              }}
            >
              <Select
                label="Ordenar por:"
                name="order"
                placeholder="Ordenar por"
                options={optionOrder}
                onChange={onChangeOrder}
              />

              <Select
                label="Categoria:"
                name="category"
                placeholder="Categoria"
                options={optionsCategory}
                onChange={onChangeCategory}
              />
            </Form>
          </div>

          <div className="cards">
            {data.map((x, index) => (
              <Card key={x.id} data={{ ...x, index }} />
            ))}

            {loading && data.length < 0 && (
              <Loading color={theme.colors.primary} />
            )}
          </div>
        </Content>
      </main>

      <Footer />
    </>
  );
};

export default Products;

import React, { useEffect } from 'react';

import Head from 'next/head';

const PresencaChaPanela = () => {
  useEffect(() => {
    const link = `https://forms.gle/ktvLsBPsetSH3Yvc7`;

    window.location.href = link;
  }, []);

  return (
    <div className="confirma-cha">
      <Head>
        <title>Eduarda & Washington</title>

        <meta
          name="description"
          content="Site casamento Eduarda & Washington"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Redirecionando para a Confirmação de presença...</p>
    </div>
  );
};

export default PresencaChaPanela;

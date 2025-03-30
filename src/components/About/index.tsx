import React from 'react';

import Image from 'next/image';

import acoracaoLinha from '@/assets/itens/coracao-linha.webp';

import { Container } from './styles';

const About: React.FC = () => {
  return (
    <Container id="about" className="about">
      <h3>Seja bem vindo ao nosso site!</h3>

      <Image src={acoracaoLinha} alt="corações" />

      <i>Conheça um pouco de nossa historia:</i>

      <p>
        Eles já se conheciam há alguns anos, mas essa historia de amor só
        começou no dia 28/02/2016. <br /> Quando a Duda mandou a primeira
        mensagem pro Washington. Desde então papo vem e papo vai, a Duda ensinou
        o Washington tomar açaí e o Washington ensinou a Duda a gostar de
        queijo. <br /> <br /> Então Washington levou a Duda pra uma festa de
        aniversario que já estava toda a família da mãe dele, mas não sabia como
        apresentar ela. Namorada? Amiga? Com isso depois de já conhecer uma boa
        parte da família no dia 21/05/2016 ele pediu ela em namoro.
        <br />
        <br />
        Foram 7 anos de namoro e até o casamento será 1 anos e 6 meses de
        noivado e nesse tempo puderam se conhecer bastante e perceberam que
        juntos são perfeitos que as diferenças os completam, ele todo calmo e
        ela toda agitada.
        <br /> A Duda viu o Washington formar na escola no ensino médio, o viu
        tirar carteira de habilitação, passar os perrengues na faculdade, viu a
        formatura da faculdade e muitas outras fases importantes da vida dele.
        Assim também o Washington viu a Duda a passar pelas mesmas situações.
        Nenhuma delas foi fácil e além delas tiveram muitas outras, mas com
        muito amor estavam sempre juntos, um dando apoio ao outro e sempre
        recebendo muitas benção de Deus.
        <br /> A Duda ensinou o Washington a andar de bicicleta, levou ele a
        primeira vez para praia e deu um empurrão pra ele entrar na faculdade. O
        Washington estava com a Duda quando ela aprendeu a nadar, incentivou na
        faculdade e nunca abandou nas fases mais difíceis. Ate aqui Deus nos
        abençoou e nos deu força pra sempre seguir em frente e nunca desistir,
        sabemos que casamento não é perfeito, mas aprendemos que com Deus nada é
        impossível e ele está em nosso meio nos guiando sempre. E no dia 04 de
        novembro receberemos então o sacramento do matrimônio para em uma só
        carne seguir o caminho de Deus e construir nossa família.
      </p>
    </Container>
  );
};

export default About;

import { differenceInDays, differenceInMonths } from 'date-fns';
import React, { useEffect, useState } from 'react';

// import Countdown from 'react-countdown';
import Image from 'next/image';

// import img from '@/assets/bannerCountDow.jpg';
import img from '@/assets/bgCountDown.jpg';

import { Container } from './styles';

const CountdownComponent: React.FC = () => {
  const targetDate = new Date('2023-11-04T16:30:00');

  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate.getTime() - currentTime;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(difference);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  // Função auxiliar para formatar o tempo restante
  // const formatTime = (time: number): string => {
  const dataAtual = new Date();
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  // const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const months = differenceInMonths(targetDate, dataAtual);
  // const months = Math.floor(days / 30);

  const novaDataDestino = new Date(dataAtual);
  novaDataDestino.setMonth(novaDataDestino.getMonth() + months);

  // Calcule a diferença em dias (excluindo os meses já calculados)
  const remainingDays = differenceInDays(targetDate, novaDataDestino);

  // const remainingDays = days % 30;

  return (
    <Container>
      <Image src={img} alt="imagem de fundo" fill />

      <div className="mask" />
      <section>
        <h2>Contagem Regressiva</h2>

        <div className="time">
          {/* <div>
            <span>{months} </span>
            <span>Meses</span>
          </div> */}

          <div>
            <span>{remainingDays} </span>
            <span>Dias</span>
          </div>

          <div>
            <span>{hours} </span>
            <span>Horas</span>
          </div>

          <div>
            <span>{minutes} </span>
            <span>Minutos</span>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CountdownComponent;

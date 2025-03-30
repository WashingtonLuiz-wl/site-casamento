import styled from 'styled-components';

import { roboto } from '@/styles/fonts';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: inset 0px 0px 20px 10px rgba(161, 220, 234, 0.25);

  width: 100%;

  > section {
    max-width: 1200px;
    width: 100%;
    margin: auto;

    padding: 100px 40px;

    gap: 50px;

    > img {
      height: auto;
      width: 100%;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 50px;
      width: 100%;

      h2 {
        //font-family: 'Pacifico', cursive;

        font-family: ${roboto.style.fontFamily};

        font-size: 60px;
        font-weight: 200;
        line-height: 50px;

        color: #0a325b;

        text-align: center;
      }

      p {
        font-size: 20px;
        font-family: ${roboto.style.fontFamily};
        text-align: center;
      }
    }

    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      align-items: center;
      justify-content: center;

      gap: 50px;
    }

    .text {
      text-align: center;

      background-color: #fff;
      box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.16);

      padding: 40px 20px;

      > p {
        text-align: justify;

        font-family: ${roboto.style.fontFamily};

        font-size: 20px;
        font-weight: 200;
        line-height: 25px;
      }
    }
  }

  @media (max-width: 800px) {
    > section .title {
      h2 {
        font-size: 48px;
      }

      gap: 40px;
    }
  }

  @media (max-width: 500px) {
    > section {
      padding: 90px 20px;
    }
  }

  @media (max-width: 450px) {
    > section {
      padding: 80px 20px;
    }
  }

  @media (max-width: 375px) {
    > section {
      padding: 70px 15px;
    }

    h2 {
      font-size: 45px;

      margin-bottom: 80px;
    }
  }
`;

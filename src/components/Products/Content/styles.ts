import styled from 'styled-components';

import { roboto } from '@/styles/fonts';

export const Container = styled.section`
  min-height: calc(100vh - 393px);

  > section {
    max-width: 1200px;
    width: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    gap: 50px;

    padding: 50px 40px;

    > img {
      height: auto;
      width: 100%;
    }

    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 10px;

      h1 {
        text-align: center;
        font-family: ${roboto.style.fontFamily};

        font-size: 60px;
        font-weight: 200;
        line-height: 65px;

        color: #0a325b;
      }

      p {
        font-size: 16px;
        text-align: center;
      }
    }

    .cards {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      gap: 40px 20px;
    }

    .filter {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      gap: 20px;

      border: solid 3px rgba(179, 206, 229, 0.3);

      // box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.24);

      width: 100%;
      padding: 40px;

      > form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;

        gap: 50px;
        width: 100%;

        > div {
          flex: 1;
        }
      }
    }
  }

  @media (max-width: 600px) {
    > section .filter > form {
      flex-direction: column;

      > div {
        width: 100%;
      }
    }
  }

  @media (max-width: 450px) {
    > section {
      padding: 80px 20px;
    }
  }
`;

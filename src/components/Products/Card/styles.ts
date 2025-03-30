import styled from 'styled-components';

import { roboto } from '@/styles/fonts';

export const Container = styled.div`
  width: 280px;
  height: 420px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  gap: 15px;

  .img {
    position: relative;
    width: 200px;
    height: 200px;

    .recebido {
      position: absolute;
      left: 0;
      top: 0;

      width: 80%;
      height: 80%;
    }

    .img-product {
      object-position: center;
      object-fit: cover;
    }
  }

  p {
    font-family: ${roboto.style.fontFamily}, sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;

    text-align: center;

    color: #333333;
  }

  span {
    font-family: ${roboto.style.fontFamily}, sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #000;
    text-align: center;

    small {
      font-size: 14px;
    }
  }

  .priority {
    display: none;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 20px;

    width: 100%;

    > button {
      width: 180px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;

    > img {
      width: 100%;

      height: auto;
    }
  }

  @media (max-width: 425px) {
    padding: 10px;

    p {
      padding: 10px 0;
    }
  }
`;

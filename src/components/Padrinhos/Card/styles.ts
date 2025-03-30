import styled from 'styled-components';

import { GreatVibes } from '@/styles/fonts';

export const Container = styled.div`
  height: auto;

  background-color: #fff;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.16);

  border: solid 1px #000;

  padding: 20px;

  img {
    object-position: center;
    object-fit: cover;

    margin-bottom: 10px;
  }

  p {
    font-family: ${GreatVibes.style.fontFamily}, cursive;

    font-size: 40px;
    line-height: 40px;

    padding: 20px 0;
    text-align: center;

    color: #333333;
  }

  @media (max-width: 600px) {
    width: 100%;

    > img {
      width: 100%;

      height: auto;
    }
  }

  @media (max-width: 450px) {
    padding: 10px;

    p {
      padding: 10px 0;

      font-size: 36px;
      line-height: 30px;
    }
  }

  @media (max-width: 425px) {
    padding: 10px;

    p {
      padding: 10px 0;

      font-size: 26px;
      line-height: 20px;
    }
  }
`;

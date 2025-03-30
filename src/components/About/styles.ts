import styled from 'styled-components';

import { roboto } from '@/styles/fonts';

export const Container = styled.section`
  width: 100%;

  align-items: center;

  padding: 60px 40px;

  > h3 {
    margin-bottom: 25px;

    font-family: ${roboto.style.fontFamily};

    font-size: 60px;
    font-weight: 200;
    line-height: 50px;
    text-align: center;

    color: #0a325b;
  }

  > img {
    max-height: 50px;
    height: auto;
    width: auto;
    max-width: 100%;

    margin: 30px 0;

    text-align: center;
  }

  i {
    margin-bottom: 20px;

    font-family: ${roboto.style.fontFamily};

    font-size: 32px;
    font-weight: 200;
    line-height: 30px;
    text-align: center;
  }

  hr {
    width: 200px;

    margin-bottom: 20px;
  }

  > p {
    text-align: center;

    font-family: 'Pacifico', cursive;
    font-family: ${roboto.style.fontFamily};

    //font-size: 32px;
    font-size: 20px;
    font-weight: 200;
    line-height: 25px;
    //line-height: 40px;
  }

  @media (max-width: 800px) {
    > h3 {
      font-size: 50px;
      line-height: 45px;
    }
  }

  @media (max-width: 500px) {
    padding: 40px 20px;

    > h3 {
      font-size: 32px;
      line-height: 35px;
    }

    > img {
      margin: 20px 0;
    }

    i {
      font-size: 24px;
    }

    p {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

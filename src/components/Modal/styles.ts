import styled, { css } from 'styled-components';

import { roboto } from '@/styles/fonts';
import theme from '@/styles/theme';

interface IProps {
  visible: boolean;
}

export const Background = styled.div<IProps>`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;
  z-index: 998;

  background: transparent;
  backdrop-filter: blur(3px);

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${props => (props.visible ? `100vw` : `0px`)};
  height: ${props => (props.visible ? `100vh` : `0px`)};

  opacity: ${props => (props.visible ? 1 : 0)};

  ${props =>
    props.visible
      ? css`
          transition-timing-function: ease-out;
          transition: opacity 1s;
        `
      : css`
          max-height: 0px;
          transition-timing-function: ease-in;
          transition: opacity 0.2s;
        `};

  .bg {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div<IProps>`
  position: fixed;

  z-index: 999;

  margin: auto;
  inset: 0;

  transform: ${props => (props.visible ? `scale(1);` : `scale(0);`)};

  ${props =>
    props.visible
      ? css`
          transition-timing-function: ease-out;
          transition: transform 1s;
        `
      : css`
          max-height: 0px;
          transition-timing-function: ease-in;
          transition: transform 0.2s;
        `}

  width: 100%;
  height: 100%;

  max-width: 900px;
  max-height: 475px;

  background: ${theme.colors.white};
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

  border-radius: 8px;

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 15px;
    height: 15px;

    text-align: center;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;
  }

  @media (max-width: 950px) {
    max-width: calc(100vw - 50px);
  }

  @media (max-width: 550px) {
    .close {
      top: 15px;
      right: 15px;
    }

    max-width: calc(100vw - 20px);
  }

  @media (max-width: 425px) {
    .close {
      top: 10px;
      right: 10px;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;

  position: relative;

  > div {
    display: flex;

    width: 50%;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      object-position: top center;
    }
  }

  .div-img {
    width: 40%;
  }

  .text {
    width: 60%;
    padding: 60px 40px;

    display: flex;
    flex-direction: column;

    gap: 20px;

    > p {
      font-family: ${roboto.style.fontFamily}, cursive;
      font-size: 20px;
      line-height: 30px;

      :first-child {
        font-size: 25px;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 850px) {
    .text {
      gap: 15px;

      > p {
        font-size: 19px;
        line-height: 28px;

        :first-child {
          font-size: 22px;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: 790px) {
    .text {
      padding: 50px 30px;
    }
  }

  @media (max-width: 550px) {
    .text {
      padding: 25px 20px;

      > p {
        font-size: 18px;
        line-height: 25px;

        :first-child {
          font-size: 22px;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .text {
      padding: 25px 20px;

      > p {
        font-size: 16px;
        line-height: 22px;

        :first-child {
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .text {
      gap: 10px;
      padding: 20px;

      > p {
        font-size: 16px;
        line-height: 22px;

        :first-child {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .text {
      > p {
        font-size: 14px;
        line-height: 20px;

        :first-child {
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: 350px) {
    .div-img {
      width: 0;
    }

    .text {
      width: 100%;

      padding: 25px 20px;
    }
  }
`;

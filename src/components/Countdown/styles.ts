import styled from 'styled-components';

import { GreatVibes, roboto } from '@/styles/fonts';

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 70px 40px;

  width: 100%;

  .mask {
    inset: 0px;
    background: rgb(0, 0, 0);
    mix-blend-mode: multiply;
    opacity: 0.3;

    position: absolute;
    z-index: 8;
  }

  section {
    position: relative;

    z-index: 9;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    > h2 {
      font-family: ${GreatVibes.style.fontFamily}, cursive;
      font-size: 70px;
      font-weight: 400;
      text-align: center;

      margin-bottom: 50px;

      color: #fff;
    }

    .time {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      gap: 50px;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 20px;

        > span {
          font-family: ${roboto.style.fontFamily};
          font-size: 60px;
          line-height: 45px;
          font-weight: 500;

          color: #fff;

          :last-child {
            font-size: 30px;
            line-height: 25px;
          }
        }
      }
    }
  }

  img {
    object-fit: cover;
    object-position: center;

    width: 100vw;

    height: auto;

    z-index: 1;
  }

  @media (max-width: 650px) {
    padding: 40px 20px;

    section {
      > h2 {
        font-size: 45px;
        margin-bottom: 40px;
      }

      .time {
        gap: 30px;

        > div {
          > span {
            font-size: 40px;
            line-height: 30px;

            :last-child {
              font-size: 26px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 420px) {
    section .time {
      gap: 15px;

      > div > span {
        :last-child {
          font-size: 20px;
          line-height: 20px;
        }
      }
    }
  }
`;

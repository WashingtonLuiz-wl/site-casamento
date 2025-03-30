import styled from 'styled-components';

import { GreatVibes } from '@/styles/fonts';
import theme from '@/styles/theme';

export const Container = styled.header`
  //background-color: rgba(179, 206, 229, 0.1);

  z-index: 8;

  position: relative;

  .mask {
    position: absolute;

    height: 100%;
    width: auto;

    //border: solid red;
  }

  .rigth {
    right: 0;
    top: 0;

    //transform: rotate(90deg);
  }

  > section {
    width: 100%;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    padding: 40px 0 60px;

    gap: 30px;

    a {
      text-decoration: none;
    }

    a h1 {
      color: ${theme.colors.primary};
      font-family: ${GreatVibes.style.fontFamily}, cursive;
      font-size: 120px;
      line-height: 140px;
      text-align: center;

      text-decoration: none;
    }

    > nav {
      // flex: 1;
      width: 100%;

      padding: 15px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;

      background-color: white;

      gap: 10px 0;

      // border: solid red;

      box-shadow: 0px 0px 32px rgba(179, 206, 229, 0.5);

      > a {
        position: relative;

        color: ${theme.colors.secondary};
        text-decoration: none;

        font-family: 'Pacifico', cursive;

        & + a {
          margin-left: 100px;

          :after,
          :before {
            content: '';

            position: absolute;
            left: -50px;
            top: 5px;
            width: 5px;
            height: 8px;
            background: ${theme.colors.primary};
            border-radius: 5px 5px 0 0;
            transform: rotate(-45deg);
            transform-origin: 0 100%;
          }

          :after {
            left: -55px;
            background-color: ${theme.colors.primary};
            transform: rotate(45deg);
            transform-origin: 100% 100%;
          }
        }
      }
    }
  }

  @media (max-width: 1050px) {
    > section {
      padding: 30px 0 40px;

      a h1 {
        font-size: 80px;
        line-height: 90px;
      }

      > nav {
        > a + a {
          margin-left: 60px;

          :after,
          :before {
            content: '';

            position: absolute;
            left: -30px;
          }

          :after {
            left: -35px;
          }
        }
      }
    }
  }

  @media (max-width: 850px) {
    > section {
      padding: 30px 0 40px;

      a h1 {
        font-size: 70px;
        line-height: 80px;
      }

      > nav {
        padding: 10px;
        > a + a {
          margin-left: 40px;

          :after,
          :before {
            content: '';

            position: absolute;
            left: -20px;
          }

          :after {
            left: -25px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    > section {
      padding: 20px 0 30px;

      a h1 {
        font-size: 60px;
        line-height: 70px;
      }

      > nav {
        padding: 10px;
        > a + a {
          margin-left: 40px;

          :after,
          :before {
            content: '';

            position: absolute;
            left: -20px;
          }

          :after {
            left: -25px;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .mask {
      //object-fit: c;

      //width: 25%;

      //height: auto;
    }

    > section {
      padding: 15px 0 20px;

      gap: 10px;

      a h1 {
        font-size: 30px;
        line-height: 34px;
      }

      > nav {
        padding: 5px 10px;

        > a {
          font-size: 12px;

          & + a {
            margin-left: 40px;

            :after,
            :before {
              content: '';

              position: absolute;
              left: -20px;
            }

            :after {
              left: -25px;
            }
          }
        }
      }
    }
  }
`;

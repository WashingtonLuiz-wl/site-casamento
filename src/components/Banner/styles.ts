import styled from 'styled-components';

import { Alfa_Slab_One } from 'next/font/google';

export const fontNumber = Alfa_Slab_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const Container = styled.div`
  background-color: #fff;

  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  > section {
    max-width: 1400px;
    width: 100%;
    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    .images {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 100%;

      gap: 40px;

      .img {
        position: relative;
        flex: 1;

        > img {
          object-fit: cover;
          object-position: center;

          width: auto;
          max-width: 100%;
          height: 500px;
        }

        > span {
          position: absolute;
          bottom: 4px;

          left: 50%;
          transform: translateX(-50%) translateZ(0);

          font-size: 184px;

          line-height: 138px;
          font-weight: 900;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    > section .images .img {
      > img {
        height: 400px;
      }

      > span {
        font-size: 154px;
        line-height: 116px;
      }
    }
  }

  @media (max-width: 900px) {
    > section .images .img {
      > img {
        height: 350px;
      }
    }
  }

  @media (max-width: 800px) {
    > section .images {
      gap: 20px;

      .img {
        > img {
          height: 350px;
        }

        > span {
          font-size: 120px;
          line-height: 89px;
        }
      }
    }
  }

  @media (max-width: 700px) {
    > section {
      padding: 0 15px;

      .images {
        gap: 15px;

        .img {
          > img {
            height: 300px;
          }

          > span {
            font-size: 110px;
            line-height: 79px;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    > section {
      padding: 0 15px;

      .images {
        gap: 15px;

        .img {
          > img {
            height: 250px;
          }

          > span {
            font-size: 90px;
            line-height: 65px;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    > section {
      .images {
        .img {
          > img {
            height: 200px;
          }

          > span {
            font-size: 75px;
            line-height: 56px;
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    > section {
      .images {
        .img {
          > img {
            height: 150px;
          }

          > span {
            font-size: 55px;
            line-height: 40px;
          }
        }
      }
    }
  }

  @media (max-width: 350px) {
    > section {
      padding: 0 10px;
      .images {
        .img {
          > img {
            height: 120px;
          }

          > span {
            font-size: 50px;
            line-height: 35px;
          }
        }
      }
    }
  }
`;

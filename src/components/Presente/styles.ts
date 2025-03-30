import styled from 'styled-components';

import { GreatVibes, roboto } from '@/styles/fonts';

export const Container = styled.div`
  background-color: #fff;

  width: 100%;

  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  gap: 80px;

  > section {
    max-width: 600px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 50px;

    .presentes {
      display: flex;
      flex-direction: column;
      gap: 20px;

      a {
        text-decoration: none;
      }
    }

    .produto {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 30px;
      border: solid 3px rgba(179, 206, 229, 0.3);

      .text {
        display: flex;
        flex-direction: column;

        height: 100%;

        padding: 20px 15px;
        gap: 20px;

        max-width: 430px;

        h3 {
          font-size: ${roboto.style.fontFamily};
          font-weight: 400;
          color: #0a325b;
        }

        span {
          font-size: 20px;

          color: ${p => p.theme.colors.secondary};

          small {
            font-size: 12px;
            margin-left: 5px;
          }
        }
      }
    }

    > form {
      width: 100%;
      max-width: 650px;
      padding: 20px;
      gap: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      > h5 {
        width: 100%;
      }

      > div {
        width: 100%;
      }

      h5 {
        font-size: ${roboto.style.fontFamily};
        font-weight: 400;
        color: #0a325b;

        margin-bottom: 10px;
      }
    }

    h4 {
      font-size: ${roboto.style.fontFamily};
      font-weight: 400;
      color: #0a325b;
      margin-bottom: 20px;
    }

    .pagamento {
      width: 100%;
      a {
        text-decoration: none;
      }

      .pix-or-link {
        display: flex;
        flex-direction: row;

        gap: 20px;

        .img-pix {
          display: flex;
          width: 100%;
          max-width: 290px;
        }

        img {
          width: 100%;
          height: auto;
        }

        .link-da-loja {
          width: 100%;
          max-width: 290px;
          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          text-align: center;
          gap: 50px;

          background: rgb(231 247 253);

          padding: 20px;
        }
      }
    }

    .contact {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 20px;

      .content-contact {
        display: flex;
        flex-direction: row;
        gap: 20px;

        border: solid rgba(179, 206, 229, 0.3) 1px;
        padding: 10px 0;

        > div {
          //border: solid rgba(179, 206, 229, 0.3);
          flex: 1;
          padding: 10px;

          display: flex;
          flex-direction: column;
          gap: 10px;

          .img {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            > img {
              height: 150px;
              width: 150px;
              object-position: center;
              object-fit: cover;

              border-radius: 50%;
              box-shadow: 0px 0px 32px rgba(179, 206, 229, 0.5);
            }
          }

          h5 {
            color: #0a325b;
            text-align: center;
            font-family: ${GreatVibes.style.fontFamily}, cursive;

            font-size: 44px;

            line-height: 40px;

            margin-bottom: 20px;
          }

          p,
          a {
            color: #0a325b;
            text-decoration: none;

            text-align: center;

            > svg {
              margin-right: 5px;
            }
          }

          a {
            transition: transform 0.5s;
            :hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }

    .msg {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 20px;

      border: solid rgba(179, 206, 229, 0.5) 1px;
      box-shadow: 0px 0px 32px rgba(179, 206, 229, 0.5);
      padding: 30px;

      > p {
        font-size: 32px;
        line-height: 30px;
        font-family: ${GreatVibes.style.fontFamily}, cursive;
        text-align: center;

        color: #0a325b;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 30px 20px;

    > section {
      > form {
        padding: 20px 0;
      }

      .pagamento {
        .pix-or-link {
          flex-direction: column;

          > div {
            max-width: 100%;
          }
        }
      }

      .contact .content-contact {
        flex-direction: column;
      }
    }
  }
`;

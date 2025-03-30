import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000;

  height: 600px;
  width: 100%;
  position: relative;

  > img {
    opacity: 0.9;
  }

  .content-banner {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;

    color: #fff;

    padding: 50px 40px 30px;

    img {
      object-position: center;
      object-fit: cover;
    }

    h2 {
      font-family: 'Pacifico', cursive;

      font-size: 48px;
    }

    .countdown,
    .day {
      font-family: 'Amatic SC', cursive;

      font-size: 32px;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  max-width: 100%;

  gap: 20px;
  padding: 40px 20px 40px;

  background-color: rgba(179, 206, 229, 0.5);
  //background-color: rgba(172, 222, 235, 0.8);

  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.24);

  h3 {
    color: #1e433d;
  }

  > img {
    // height: 450px;
    //width: auto;

    max-width: 250px;
    height: auto;
  }
`;

export const Copyright = styled.section`
  width: 100%;
  max-width: 100%;

  background-color: #98a4af;

  padding: 15px;

  a {
    color: #fafafa;
    text-decoration: none;
    transition: transform 0.5s color 0.5s;

    :hover {
      transform: scale(1.1);
      color: #fff;
    }
  }
`;

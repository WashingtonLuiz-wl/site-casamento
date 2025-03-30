import styled from 'styled-components';

import { GreatVibes } from '@/styles/fonts';

export const Container = styled.div`
  height: 250px;
  width: 100%;
  position: relative;

  z-index: 2;

  //background-color: rgba(179, 206, 229, 0.25);
  background-color: #fff;
  box-shadow: inset 0px 0px 30px 20px rgba(161, 220, 234, 0.25);

  overflow: hidden;

  > img {
    opacity: 0.9;
  }

  .content-banner {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 50px 40px;

    h2 {
      font-family: 'Pacifico', cursive;

      font-size: 60px;
      font-weight: 500;

      color: ${p => p.theme.colors.primary};
    }
  }
`;

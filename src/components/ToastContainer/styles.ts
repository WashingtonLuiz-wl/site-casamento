import styled from 'styled-components';

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  right: 0;
  top: 0;
  margin: 30px;
  overflow: hidden;

  @media (max-width: 400px) {
    margin: 20px;
  }
`;

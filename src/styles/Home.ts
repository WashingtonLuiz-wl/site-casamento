import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-height: 100vh;

  > section {
    width: 100%;
  }

  .gift {
    background-color: yellow;
  }
  .date {
    background-color: blue;
  }
  .locale {
    background-color: green;
  }

  > footer {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    font-size: 0.85rem;
    max-width: var(--max-width);
    width: 100%;
    z-index: 2;
    font-family: var(--font-mono);

    padding: 50px 0;
  }
`;

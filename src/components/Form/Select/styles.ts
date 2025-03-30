import styled, { css } from 'styled-components';

interface ContainerProps {
  width?: number;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${props => `${props.width}%` || '100%'};
  max-width: 250px;

  display: flex;

  margin-bottom: 15px;

  * {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
  }

  .Content {
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    label {
      font-size: 20px;

      padding: 0 5px 5px;

      z-index: 1;
    }

    > div {
      height: 100%;
    }

    .react-select__control {
      height: 100%;
      background: ${props => props.theme.colors.white};
      border: solid 2px ${props => props.theme.colors.primary};
      border-radius: 10px;
      padding: 5px 0;

      box-shadow: none;

      ${props =>
        props.isErrored &&
        css`
          border-color: #c53030;
        `}
    }

    .react-select__value-container {
      display: flex;
      padding-left: 20px;

      .react-select__placeholder {
        display: none;
        color: transparent;
      }
    }

    .react-select__menu {
      border-radius: 10px;

      z-index: 99;

      > div > div {
        display: flex;
      }
    }
  }
`;

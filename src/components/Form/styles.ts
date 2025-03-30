import styled, { css } from 'styled-components';

import Tooltip from '@/components/Tooltip';

export interface IContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
  width?: number;
}

export const Container = styled.div<IContainerProps>`
  width: ${props => (props.width ? `${props.width}%` : '100%')};

  display: flex;

  margin-bottom: 16px;

  position: relative;
  // flex: 1;

  .Content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 100%;

    position: relative;

    label {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: ${p => p.theme.colors.ternary};
    }

    input,
    textarea {
      width: 100%;
      height: 48px;
      padding: 0 16px 0;
      border: none;
      display: flex;
      align-items: center;

      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #707070;
      border-radius: ${p => p.theme.borderRadius};

      background: ${p => p.theme.colors.white};
      //box-shadow: 0px 0px 20px 3px #b3cee5;
      border: solid #b3cee5 1px;

      :focus {
        outline: none;
      }

      ::placeholder {
        color: ${p => p.theme.colors.ternary};
        transition: color 0.8s;
      }

      /* Remove arrows input number */
      &[type='number'] {
        -moz-appearance: textfield; /* Firefox */

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          /* -webkit-appearance: none; */
          margin: 0;
        }
      }

      /* Remove eye nativo */
      &[type='password']::-ms-reveal,
      &[type='password']::-ms-clear {
        display: none;
      }
    }

    button {
      margin-top: 0;

      height: 48px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    ${p =>
      p.isFocused &&
      css`
        label {
          color: ${p.theme.colors.secondary};
        }

        input,
        textarea {
          color: ${p.theme.colors.secondary};
        }
      `}
  }

  button {
    background-color: transparent;
    border: none;
    width: 35px;
    margin-top: 18px;
    height: 48px;

    position: absolute;
    right: 0;
  }

  position: relative;

  > div:last-child {
    opacity: 0;

    height: 0;
    display: none;

    position: absolute;
    right: 50px;

    transition: opacity 0.5s;
    transition: height 0.01s;

    ${props =>
      props.isErrored &&
      css`
        opacity: 1;
        display: flex;
        height: 48px;

        svg {
          opacity: 1;
        }
      `}
  }
`;

export const Error = styled(Tooltip)`
  height: 100%;

  display: flex;
  align-items: center;
  position: absolute;
  margin-right: -8px;

  svg {
    margin: 0;
  }

  span {
    bottom: 50px;
    min-width: 95px;

    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

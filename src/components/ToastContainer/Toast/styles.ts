import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  $hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    color: #3172b7;
  `,
  success: css`
    color: #2e656a;
  `,
  error: css`
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;
  max-width: calc(100vw - 40px);

  position: relative;
  padding: 30px 40px;

  background-color: #f0f0f0;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 1px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  div {
    flex: 1;

    > strong {
      color: ${p => p.theme.colors.primary};
    }

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    border: 0;
    background: transparent;
    color: inherit;
    color: ${p => p.theme.colors.primary};
  }

  ${props =>
    !props.$hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}

  @media (max-width: 400px) {
    padding: 20px 30px;
    gap: 20px;
  }
`;

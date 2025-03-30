import styled from 'styled-components';

interface ILoadingContainer {
  color?: string;
  size?: number;
}

export const Container = styled.div<ILoadingContainer>`
  height: ${props => (props.size ? `${props.size}px` : '70px')};
  width: ${props => (props.size ? `${props.size}px` : '70px')};

  position: relative;

  .dot {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    ::after {
      content: '';

      height: ${props => (props.size ? `${props.size / 10}px` : '7px')};
      width: ${props => (props.size ? `${props.size / 10}px` : '7px')};

      border-radius: 4px;
      background-color: ${props => props.color || props.theme.colors.secondary};
    }

    animation: spin 1.8s infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .dot:nth-child(2) {
    animation-delay: 100ms;
  }
  .dot:nth-child(3) {
    animation-delay: 200ms;
  }
  .dot:nth-child(4) {
    animation-delay: 300ms;
  }
  .dot:nth-child(5) {
    animation-delay: 400ms;
  }
`;

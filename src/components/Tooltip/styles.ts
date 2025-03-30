import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-right: -25px !important;
  background-color: transparent !important;
  > span {
    background: #c53030;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #f5f5f5;

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      background: transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover > span {
    opacity: 1;
    visibility: visible;
  }
`;

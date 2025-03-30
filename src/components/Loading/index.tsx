import React from 'react';

import { Container } from './styles';

interface ILoading {
  color?: string;
  size?: number;
  children?: React.ReactNode;
}

const Loading: React.FC<ILoading> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </Container>
  );
};

export default Loading;

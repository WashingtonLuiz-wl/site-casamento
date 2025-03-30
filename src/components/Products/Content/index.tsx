import React from 'react';

import { Container } from './styles';

interface IProps {
  children: any;
}

const Content: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <section>{children}</section>
    </Container>
  );
};

export default Content;

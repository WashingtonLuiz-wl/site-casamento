import React from 'react';

import { Container } from './styles';

export interface ITooltip {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

const Tooltip: React.FC<ITooltip> = ({ title, className, children }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;

import React, { ButtonHTMLAttributes } from 'react';

import theme from '@/styles/theme';

import Loading from '../Loading';
import { Container } from './styles';

export type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  width?: number;
  // variation?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  variation?: 'primary' | 'secondary';
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  href?: string;
  target?: 'blank';
};

type ThemeColorKeys = keyof typeof theme.colors;

const Button: React.FC<IButton> = ({
  children,
  loading,
  disabled,
  variation,
  ...rest
}) => {
  const loadingColor: string =
    variation !== 'primary' ? theme.colors.white : theme.colors.primary;

  return (
    <Container
      variation={variation || 'primary'}
      className="button"
      disabled={disabled}
      {...rest}
    >
      <>
        {loading && <Loading color={loadingColor} size={16} />}

        {!loading && children}
      </>
    </Container>
  );
};

export default Button;

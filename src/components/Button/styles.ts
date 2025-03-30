import styled, { css } from 'styled-components';

const primaryButtonMixin = css`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white} !important;

  :hover {
    box-shadow: 0px 2px 25px ${props => props.theme.colors.primary};
    transform: translateY(-1px);
  }
`;

const secondaryButtonMixin = css`
  background: transparent;
  border: solid 1px ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary} !important;

  :hover {
    box-shadow: 0px 2px 25px ${props => props.theme.colors.primary};
    transform: translateY(-1px);
  }
`;

// const tertiaryButtonMixin = css`
//   background: ${props => props.theme.colors.background};
//   color: ${props => props.theme.colors.primary};

//   :hover {
//     box-shadow: 0px 2px 25px ${props => props.theme.colors.background};
//     transform: translateY(-1px);
//   }
// `;

// const quaternaryButtonMixin = css`
//   background: linear-gradient(180deg, #006ffd 0%, #02b6ff 147.33%);
//   color: ${props => props.theme.colors.background};

//   :hover {
//     box-shadow: 0px 2px 25px ${props => props.theme.colors.blue};
//     transform: translateY(-1px);
//   }
// `;

interface IButtonContainerProps {
  width?: number;
  variation?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export const Container = styled.button<IButtonContainerProps>`
  padding: 10px 40px;
  height: 48px;
  width: ${p => (p.width ? `${p.width}px` : 'min-content')};
  border-radius: ${p => p.theme.borderRadius};

  border: none;

  ${props => props.variation === 'primary' && primaryButtonMixin};
  ${props => props.variation === 'secondary' && secondaryButtonMixin};

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 19px !important;
  text-align: center;
  white-space: nowrap;

  transition: all 0.5s;

  text-decoration: none !important;

  &:hover,
  &:focus {
    outline: none;
  }

  @media (max-width: 800px) {
    height: 48px;
  }

  @media (max-width: 500px) {
    height: 40px;
  }
`;

import { css } from 'styled-components';

import { Great_Vibes, Roboto } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
export const GreatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export const fontStyles = css`
  font-family: ${GreatVibes.style.fontFamily};
  font-family: ${roboto.style.fontFamily};

  // Adicione aqui suas outras fontes
`;

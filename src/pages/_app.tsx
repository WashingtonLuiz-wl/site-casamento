import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import AppProvider from '@/hooks';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NextNprogress
        color={theme.colors.primary[0]}
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
      />
      <AppProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
}

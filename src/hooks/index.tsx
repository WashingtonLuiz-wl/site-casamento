import React from 'react';

import { ModalProvider } from './modal';
import { ToastProvider } from './toast';

export interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => (
  <ModalProvider>
    <ToastProvider>{children}</ToastProvider>
  </ModalProvider>
);

export default AppProvider;

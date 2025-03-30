import React, { createContext, useCallback, useContext, useState } from 'react';

import Modal from '@/components/Modal';

interface ModalContextData {
  addModal(): void;
  removeModal(): void;
}

interface IModalProvider {
  children: React.ReactNode;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC<IModalProvider> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const addModal = useCallback(() => {
    setVisible(true);
  }, []);

  const removeModal = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <ModalContext.Provider value={{ addModal, removeModal }}>
      {children}

      <Modal onClose={removeModal} visible={visible} />
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}

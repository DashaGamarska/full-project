'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ModalContextProps = {
  children: React.ReactNode;
};

interface ModalContextValue {
  isModal: boolean;
  toggleModal: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(prevIsModal => !prevIsModal);
  };

  return (
    <ModalContext.Provider value={{ isModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

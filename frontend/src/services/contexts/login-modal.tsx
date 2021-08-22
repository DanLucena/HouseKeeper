import { ReactNode, useContext, useState } from 'react';
import { createContext } from 'react';
import { AnimationContext } from './animation';

interface EstadoContextProps {
  modalIsOpen: boolean;
  setIsOpen: (nome: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<EstadoContextProps>({} as EstadoContextProps);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { animationNormalState } = useContext(AnimationContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    animationNormalState();
  }

  return (
    <ModalContext.Provider value={{ modalIsOpen, setIsOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider >
  );
}
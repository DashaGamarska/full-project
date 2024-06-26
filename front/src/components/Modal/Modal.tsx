import React, { FC, SetStateAction, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useClient } from 'next/client'; // Імпортуйте useClient з Next.js
  useClient();
import styles from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  onBackdropClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  active: boolean;
  setActive: (value: SetStateAction<boolean>) => void;
}

const Modal: FC<ModalProps> = ({ children, className, active, setActive }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [originalOverflow, setOriginalOverflow] = useState<string>('');

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 350);
  }, [setActive]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const currentTarget = e.currentTarget as HTMLElement;
    if (target === currentTarget) {
      closeModal();
    }
  };

  const onEscKeydown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  useEffect(() => {
    const handleBodyScroll = (): void => {
      if (active) {
        setOriginalOverflow(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onEscKeydown);
      } else {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', onEscKeydown);
      }
    };

    handleBodyScroll();

    return () => {
      window.removeEventListener('keydown', onEscKeydown);
    };
  }, [active, originalOverflow, onEscKeydown]);

  


  if (!active) return null;

  const textClassNames = `${styles.backdrop} ${className || ''} ${
    isVisible ? styles.active : ''
  }`;

  return createPortal(
    <div
      className={textClassNames}
      onClick={e => {
        onBackdropClick(e);
      }}
    >
      <div className={styles.modalBox} id="modal">
        {React.cloneElement(children as React.ReactElement, { closeModal })}
      </div>
    </div>,
    document.body
  );
};

Modal.displayName = 'Modal';

export default Modal;

import clsx from 'clsx';
import { XIcon } from 'lucide-react';
import { useRef } from 'react';

import { useClickOutside } from '@/shared/hooks/useClickOutside';

import styles from './modal.module.css';

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  onClose: () => void;
}

export const Modal = ({
  className,
  onClose,
  children,
  ...props
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);

  return (
    <div data-testid='modal-overlay' className={styles.overlay}>
      <div ref={modalRef} className={clsx(styles.modal, className)} {...props}>
        {children}
        <button
          data-testid='close-modal-button'
          className={styles.closeButton}
          onClick={onClose}
        >
          <div className={styles.closeButtonContent}>
            <XIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

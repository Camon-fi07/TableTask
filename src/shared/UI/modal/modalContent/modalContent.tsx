import clsx from 'clsx';

import styles from './modalContent.module.css';

export type ModalContentProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalContent = ({ className, ...props }: ModalContentProps) => (
  <div className={clsx(styles.modalContent, className)} {...props} />
);

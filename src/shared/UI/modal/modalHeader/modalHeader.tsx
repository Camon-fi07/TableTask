import clsx from 'clsx';

import styles from './modalHeader.module.css';

export type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalHeader = ({ className, ...props }: ModalHeaderProps) => (
  <div className={clsx(styles.modalHeader, className)} {...props} />
);

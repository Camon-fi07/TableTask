import clsx from 'clsx';

import styles from './modalHeaderTitle.module.css';

export type ModalHeaderTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const ModalHeaderTitle = ({
  className,
  ...props
}: ModalHeaderTitleProps) => (
  <h3 className={clsx(styles.modalHeaderTitle, className)} {...props} />
);

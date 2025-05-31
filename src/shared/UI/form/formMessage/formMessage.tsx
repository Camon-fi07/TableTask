import clsx from 'clsx';

import styles from './formMessage.module.css';

export type FormMessageProps = React.HTMLAttributes<HTMLSpanElement>;
export const FormMessage = ({ className, ...props }: FormMessageProps) => (
  <span className={clsx(styles.message, className)} {...props} />
);

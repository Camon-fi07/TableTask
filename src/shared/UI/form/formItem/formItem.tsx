import clsx from 'clsx';

import styles from './formItem.module.css';

export type FormItemProps = React.HTMLAttributes<HTMLSpanElement>;
export const FormItem = ({ className, ...props }: FormItemProps) => (
  <div
    data-testid='form-item'
    className={clsx(styles.formItem, className)}
    {...props}
  />
);

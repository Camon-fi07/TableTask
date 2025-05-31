import clsx from 'clsx';

import styles from './label.module.css';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ className, ...props }: LabelProps) => (
  <label
    data-testid='label-component'
    className={clsx(styles.label, className)}
    {...props}
  />
);

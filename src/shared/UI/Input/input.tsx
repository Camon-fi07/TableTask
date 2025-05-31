import clsx from 'clsx';

import styles from './input.module.css';
import { InputProps } from './input.types';

export const Input = ({
  leftIcon,
  rightIcon,
  isError,
  ...props
}: InputProps) => (
  <div
    data-testid='input-wrapper'
    className={`${styles.wrapper} ${isError ? styles.error : ''}`}
  >
    {!!leftIcon && <div className={styles.icon}>{leftIcon}</div>}
    <input
      {...props}
      className={clsx(
        styles.input,
        { [styles.inputWithoutIcons]: !leftIcon && !rightIcon },
        props.className
      )}
    />
    {!!rightIcon && <div className={styles.icon}>{rightIcon}</div>}
  </div>
);

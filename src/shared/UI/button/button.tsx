import styles from './button.module.css';
import { ButtonProps } from './button.types';
import { getModeClassName, getSizeClassName } from './button.utils';

export const Button = ({
  className,
  size = 'small',
  mode = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${className || ''} ${getSizeClassName(size)} ${getModeClassName(mode)} ${styles.wrapper}`}
      {...props}
    />
  );
};

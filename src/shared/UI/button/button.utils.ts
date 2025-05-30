import styles from './button.module.css';
import { Mode, Size } from './button.types';

export const getSizeClassName = (size: Size) => {
  switch (size) {
    case 'small':
      return styles.small;
    case 'large':
      return styles.large;
    default:
      return styles.small;
  }
};

export const getModeClassName = (mode: Mode) => {
  switch (mode) {
    case 'primary':
      return styles.primary;
    case 'outline':
      return styles.outline;
    case 'negative':
      return styles.negative;
    default:
      return styles.primary;
  }
};

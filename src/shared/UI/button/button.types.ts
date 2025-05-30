import { ButtonHTMLAttributes } from 'react';

export type Mode = 'primary' | 'negative' | 'outline';
export type Size = 'small' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  mode?: Mode;
}

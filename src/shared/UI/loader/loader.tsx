import clsx from 'clsx';
import { Loader2Icon } from 'lucide-react';

import styles from './loader.module.css';

interface LoaderProps {
  isCenter?: boolean;
}

export const Loader = ({ isCenter }: LoaderProps) => (
  <Loader2Icon
    data-testid='loader'
    className={clsx(styles.loader, { [styles.loaderCenter]: isCenter })}
  />
);

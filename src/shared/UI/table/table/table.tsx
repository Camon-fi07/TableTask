import clsx from 'clsx';

import styles from './table.module.css';

export type TableProps = React.HTMLAttributes<HTMLTableElement>;

export const Table = ({ className, ...props }: TableProps) => (
  <div className={styles.wrapper}>
    <table
      data-testid='table-component'
      className={clsx(styles.table, className)}
      {...props}
    />
  </div>
);

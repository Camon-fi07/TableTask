import clsx from 'clsx';

import styles from './tableBody.module.css';

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = ({ className, ...props }: TableBodyProps) => (
  <thead className={clsx(styles.tableBody, className)} {...props} />
);

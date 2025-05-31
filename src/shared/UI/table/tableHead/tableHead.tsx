import clsx from 'clsx';

import styles from './tableHead.module.css';

export type TableHeadProps = React.HTMLAttributes<HTMLTableCellElement>;

export const TableHead = ({ className, ...props }: TableHeadProps) => (
  <th className={clsx(styles.tableHead, className)} {...props} />
);

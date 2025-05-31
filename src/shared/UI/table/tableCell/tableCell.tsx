import clsx from 'clsx';

import styles from './tableCell.module.css';

export type TableCellProps = React.HTMLAttributes<HTMLTableCellElement>;

export const TableCell = ({ className, ...props }: TableCellProps) => (
  <td className={clsx(styles.tableCell, className)} {...props} />
);

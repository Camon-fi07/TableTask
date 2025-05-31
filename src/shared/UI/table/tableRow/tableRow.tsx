import clsx from 'clsx';

import styles from './tableRow.module.css';

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  isSelected?: boolean;
}

export const TableRow = ({ className, ...props }: TableRowProps) => (
  <tr
    className={clsx(styles.tableRow, className, {
      [styles.tableSelectedRow]: props.isSelected
    })}
    {...props}
  />
);

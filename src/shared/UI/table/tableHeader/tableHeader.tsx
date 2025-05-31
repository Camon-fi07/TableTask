import clsx from 'clsx';

import styles from './tableHeader.module.css';

export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableHeader = ({ className, ...props }: TableHeaderProps) => (
  <thead className={clsx(styles.tableHeader, className)} {...props} />
);

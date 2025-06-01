import { Skeleton, TableCell, TableRow } from '@/shared/UI';

import { COLUMNS } from './users.const';
import styles from './users.module.css';

export const TableUsersSkeleton = () =>
  [...new Array(5)].map((_, index) => (
    <TableRow data-testid='skeleton-row' key={index}>
      {[...new Array(COLUMNS.length)].map((_, index) => (
        <TableCell key={index}>
          <Skeleton height={10} width='100%' />
        </TableCell>
      ))}
    </TableRow>
  ));

export const TableUsersMobileSkeleton = () =>
  [...new Array(5)].map((_, index) => (
    <TableRow data-testid='skeleton-row' key={index}>
      <TableCell className={styles.tableCellMobile}>
        {[...new Array(COLUMNS.length)].map((_, index) => (
          <Skeleton key={index} height={20} width='100%' />
        ))}
      </TableCell>
    </TableRow>
  ));

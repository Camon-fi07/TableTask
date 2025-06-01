import { Skeleton, TableCell, TableRow } from '@/shared/UI';

import { COLUMNS } from './users.const';

export const TableUsersSkeleton = () =>
  [...new Array(5)].map((_, index) => (
    <TableRow key={index}>
      {[...new Array(COLUMNS.length)].map((_, index) => (
        <TableCell key={index}>
          <Skeleton height={10} width='100%' />
        </TableCell>
      ))}
    </TableRow>
  ));

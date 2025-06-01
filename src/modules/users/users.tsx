import { flexRender } from '@tanstack/react-table';
import { Loader2Icon } from 'lucide-react';

import { I18nText } from '@/components/I18nText';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/shared/UI';

import { CreateUserModal } from './components/createUserModal/createUserModal';
import { COLUMNS } from './users.const';
import { useUsers } from './users.hooks';
import styles from './users.module.css';
import { TableUsersSkeleton } from './users.skeleton';

export const Users = () => {
  const { getUsersQuery, table } = useUsers();

  return (
    <div className={styles.wrapper}>
      <CreateUserModal />
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {getUsersQuery.isLoading ? (
            <TableUsersSkeleton />
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={COLUMNS.length} className={styles.noDataCell}>
                <I18nText id='table.noData' />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {!getUsersQuery.isLoading && getUsersQuery.isFetching && (
        <Loader2Icon className={styles.loader} />
      )}
    </div>
  );
};
